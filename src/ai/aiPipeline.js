import { cleanupGraph } from '../utils/recognizer.js';
import { mapRasterObjects } from '../utils/imageRaster.js';
import { getRecognitionProfile } from '../config/performanceProfiles.js';
import { detectWithYoloWorker } from './workerYoloDetector.js';
import { detectionsToSchematicObjects, mergeAiSymbolsWithFallback } from './detectionToSchematic.js';
import { detectWiresWithOpenCvWorker } from './workerOpenCvDetector.js';
import { attachOcrToObjects, recognizeSchematicText } from './ocrService.js';

function dedupeWires(wires, tolerance = 10) {
  const output = [];
  for (const wire of wires) {
    const horizontal = Math.abs(wire.x2 - wire.x1) >= Math.abs(wire.y2 - wire.y1);
    const duplicate = output.some((candidate) => {
      const candidateHorizontal = Math.abs(candidate.x2 - candidate.x1) >= Math.abs(candidate.y2 - candidate.y1);
      if (horizontal !== candidateHorizontal) return false;
      if (horizontal) {
        const overlap = Math.min(Math.max(candidate.x1, candidate.x2), Math.max(wire.x1, wire.x2))
          - Math.max(Math.min(candidate.x1, candidate.x2), Math.min(wire.x1, wire.x2));
        return Math.abs(candidate.y1 - wire.y1) <= tolerance && overlap >= -tolerance;
      }
      const overlap = Math.min(Math.max(candidate.y1, candidate.y2), Math.max(wire.y1, wire.y2))
        - Math.max(Math.min(candidate.y1, candidate.y2), Math.min(wire.y1, wire.y2));
      return Math.abs(candidate.x1 - wire.x1) <= tolerance && overlap >= -tolerance;
    });
    if (!duplicate) output.push(wire);
  }
  return output;
}

async function settled(promise) {
  try {
    return { ok: true, value: await promise };
  } catch (error) {
    return { ok: false, error };
  }
}

export async function runAiRecognitionPipeline({
  image,
  fallbackObjects,
  targetWidth,
  targetHeight,
  settings,
  aiSettings,
  model,
  onState,
}) {
  const totalStarted = performance.now();
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const profile = getRecognitionProfile(aiSettings.performanceMode);
  const outputMode = aiSettings.outputMode || 'hybrid';
  const yoloOnly = outputMode === 'yolo-only';
  const ocrOnly = outputMode === 'ocr-only';
  const hybrid = outputMode === 'hybrid';
  const diagnostics = {
    profile: profile.id,
    outputMode,
    yolo: null,
    opencv: null,
    ocr: null,
    totalMs: 0,
  };
  let objects = yoloOnly
    ? fallbackObjects.filter((object) => ['wire', 'junction'].includes(object.type))
    : fallbackObjects.slice();
  const fallbackWireCount = objects.filter((object) => object.type === 'wire').length;
  const yoloRequested = yoloOnly || (hybrid && aiSettings.useYolo);
  const ocrRequested = ocrOnly || (hybrid && aiSettings.useOcr);
  const openCvRequested = hybrid && aiSettings.useOpenCv;
  const canUseYolo = Boolean(yoloRequested && (model?.buffer || model?.url));
  const shouldUseOpenCv = Boolean(
    openCvRequested
    && fallbackWireCount < profile.skipOpenCvWhenFallbackWiresAtLeast,
  );

  if (yoloOnly && !canUseYolo) {
    const error = new Error('YOLO-only mode requires a trained .onnx model. Load circuit-yolo.onnx and labels.json first.');
    onState?.({ status: 'error', message: error.message });
    throw error;
  }

  if (openCvRequested && !shouldUseOpenCv) {
    diagnostics.opencv = {
      skipped: true,
      reason: `${fallbackWireCount} fallback wires already detected in ${profile.label} mode`,
      durationMs: 0,
      wires: 0,
    };
  }
  if (yoloRequested && !canUseYolo) {
    diagnostics.yolo = {
      skipped: true,
      reason: 'No trained ONNX model loaded',
      durationMs: 0,
      detections: 0,
      symbols: 0,
    };
  }

  const runYoloTask = () => canUseYolo
    ? settled(detectWithYoloWorker(
      image,
      model,
      {
        inputSize: profile.yoloInputSize,
        confidenceThreshold: aiSettings.yoloConfidence,
        iouThreshold: aiSettings.nmsIou,
      },
      onState,
    ))
    : Promise.resolve(null);

  const runOpenCvTask = () => shouldUseOpenCv
    ? settled(detectWiresWithOpenCvWorker(
      image,
      {
        tolerance: settings.tolerance,
        minimumLineLength: Math.min(sourceWidth, sourceHeight) * 0.04,
        maxLineGap: settings.tolerance * 1.25,
        maxDimension: profile.openCvMaxDimension,
        timeoutMs: profile.openCvTimeoutMs,
        algorithm: profile.openCvAlgorithm,
      },
      onState,
    ))
    : Promise.resolve(null);

  let yoloSettled = null;
  let openCvSettled = null;
  if (profile.runAiStagesInParallel) {
    [yoloSettled, openCvSettled] = await Promise.all([runYoloTask(), runOpenCvTask()]);
  } else {
    // On low-end laptops, running OpenCV and ONNX at the same time can be slower
    // than running one stage after another because both compete for CPU and memory.
    yoloSettled = await runYoloTask();
    openCvSettled = await runOpenCvTask();
  }

  if (openCvSettled) {
    if (openCvSettled.ok) {
      const openCvResult = openCvSettled.value;
      const mappedOpenCvWires = mapRasterObjects(
        openCvResult.objects,
        sourceWidth,
        sourceHeight,
        targetWidth,
        targetHeight,
        settings.gridSize,
      );
      const fallbackSymbols = objects.filter((object) => object.type !== 'wire');
      const fallbackWires = objects.filter((object) => object.type === 'wire');
      const combinedWires = dedupeWires(
        [...mappedOpenCvWires, ...fallbackWires],
        Math.max(5, settings.tolerance),
      );
      objects = [...combinedWires, ...fallbackSymbols];
      diagnostics.opencv = {
        durationMs: openCvResult.durationMs,
        wires: mappedOpenCvWires.length,
        cached: Boolean(openCvResult.cached),
        worker: Boolean(openCvResult.worker),
        processedSize: openCvResult.processedSize,
        algorithm: openCvResult.algorithm,
        timeoutMs: profile.openCvTimeoutMs,
      };
    } else {
      const error = openCvSettled.error;
      console.warn('OpenCV.js wire detection failed; keeping fallback wires.', error);
      diagnostics.opencv = { error: error.message || String(error) };
    }
  }

  if (yoloSettled) {
    if (yoloSettled.ok) {
      const yoloResult = yoloSettled.value;
      const converted = detectionsToSchematicObjects(
        yoloResult.detections,
        sourceWidth,
        sourceHeight,
        targetWidth,
        targetHeight,
        settings.gridSize,
      );
      objects = yoloOnly
        ? [
          ...objects.filter((object) => ['wire', 'junction'].includes(object.type)),
          ...converted.objects,
        ]
        : mergeAiSymbolsWithFallback(
          converted.objects,
          objects,
          Math.max(36, settings.tolerance * 4.5),
        );
      diagnostics.yolo = {
        provider: yoloResult.provider,
        durationMs: yoloResult.durationMs,
        preprocessMs: yoloResult.preprocessMs,
        detections: yoloResult.detections.length,
        symbols: converted.objects.length,
        inputSize: yoloResult.inputSize,
        cached: Boolean(yoloResult.cached),
        worker: Boolean(yoloResult.worker),
      };
    } else {
      const error = yoloSettled.error;
      console.warn('YOLO ONNX detection failed; keeping fallback symbols.', error);
      diagnostics.yolo = { error: error.message || String(error) };
    }
  }

  objects = cleanupGraph(objects, settings);

  if (ocrRequested) {
    try {
      const ocrResult = await recognizeSchematicText(
        image,
        {
          minimumConfidence: aiSettings.ocrConfidence,
          maxDimension: profile.ocrMaxDimension,
        },
        onState,
      );
      objects = attachOcrToObjects(
        objects,
        ocrResult.words,
        sourceWidth,
        sourceHeight,
        targetWidth,
        targetHeight,
      );
      const attachedObjects = objects.filter((object) => object.ocrAttached).length;
      diagnostics.ocr = {
        durationMs: ocrResult.durationMs,
        words: ocrResult.words.length,
        attachedObjects,
        text: ocrResult.text,
        cached: Boolean(ocrResult.cached),
      };
    } catch (error) {
      console.warn('Tesseract OCR failed; labels can still be entered manually.', error);
      diagnostics.ocr = { error: error.message || String(error) };
    }
  } else {
    diagnostics.ocr = {
      skipped: true,
      reason: outputMode === 'yolo-only' ? 'OCR excluded by YOLO-only mode' : 'OCR disabled for faster recognition',
      durationMs: 0,
      words: 0,
    };
  }

  diagnostics.totalMs = performance.now() - totalStarted;
  const yoloProvider = diagnostics.yolo?.provider;
  const modeParts = [
    yoloProvider ? `YOLO/${yoloProvider}` : null,
    diagnostics.opencv?.wires ? `OpenCV/${diagnostics.opencv.algorithm || 'wasm'}` : null,
    diagnostics.ocr?.words ? 'Tesseract' : null,
  ].filter(Boolean);

  let message;
  if (yoloOnly) {
    message = `YOLO-only: ${diagnostics.yolo?.detections || 0} detections, ${diagnostics.yolo?.symbols || 0} schematic symbols via ${yoloProvider || 'no provider'} in ${diagnostics.totalMs.toFixed(0)} ms.`;
  } else if (ocrOnly) {
    message = `OCR-only: ${diagnostics.ocr?.words || 0} words found, ${diagnostics.ocr?.attachedObjects || 0} labels/values attached in ${diagnostics.totalMs.toFixed(0)} ms. OCR does not classify symbols.`;
  } else {
    message = modeParts.length
      ? `${profile.label} hybrid pipeline ready in ${diagnostics.totalMs.toFixed(0)} ms: ${modeParts.join(' + ')}.`
      : `${profile.label} hybrid pipeline used the heuristic fallback in ${diagnostics.totalMs.toFixed(0)} ms.`;
  }

  onState?.({ status: 'ready', message });

  return {
    objects,
    diagnostics,
    mode: outputMode === 'hybrid'
      ? (modeParts.length ? `ai:${profile.id}:${modeParts.join('+')}` : `heuristic-fallback:${profile.id}`)
      : outputMode,
  };
}
