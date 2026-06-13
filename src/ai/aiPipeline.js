import { cleanupGraph } from '../utils/recognizer.js';
import { mapRasterObjects } from '../utils/imageRaster.js';
import { detectWithYolo } from './yoloOnnxDetector.js';
import { detectionsToSchematicObjects, mergeAiSymbolsWithFallback } from './detectionToSchematic.js';
import { detectWiresWithOpenCv } from './openCvWireDetector.js';
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
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const diagnostics = {
    yolo: null,
    opencv: null,
    ocr: null,
  };
  let objects = fallbackObjects.slice();

  if (aiSettings.useOpenCv) {
    try {
      const openCvResult = await detectWiresWithOpenCv(
        image,
        {
          tolerance: settings.tolerance,
          minimumLineLength: Math.min(sourceWidth, sourceHeight) * 0.04,
          maxLineGap: settings.tolerance * 1.5,
        },
        onState,
      );
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
      };
    } catch (error) {
      console.warn('OpenCV.js wire detection failed; keeping WASM wires.', error);
      diagnostics.opencv = { error: error.message || String(error) };
    }
  }

  if (aiSettings.useYolo && (model?.buffer || model?.url)) {
    try {
      const yoloResult = await detectWithYolo(
        image,
        model,
        {
          inputSize: model.inputSize || aiSettings.inputSize,
          confidenceThreshold: aiSettings.yoloConfidence,
          iouThreshold: aiSettings.nmsIou,
        },
        onState,
      );
      const converted = detectionsToSchematicObjects(
        yoloResult.detections,
        sourceWidth,
        sourceHeight,
        targetWidth,
        targetHeight,
        settings.gridSize,
      );
      objects = mergeAiSymbolsWithFallback(
        converted.objects,
        objects,
        Math.max(36, settings.tolerance * 4.5),
      );
      diagnostics.yolo = {
        provider: yoloResult.provider,
        durationMs: yoloResult.durationMs,
        detections: yoloResult.detections.length,
        symbols: converted.objects.length,
      };
    } catch (error) {
      console.warn('YOLO ONNX detection failed; keeping fallback symbols.', error);
      diagnostics.yolo = { error: error.message || String(error) };
    }
  }

  objects = cleanupGraph(objects, settings);

  if (aiSettings.useOcr) {
    try {
      const ocrResult = await recognizeSchematicText(
        image,
        { minimumConfidence: aiSettings.ocrConfidence },
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
      diagnostics.ocr = {
        durationMs: ocrResult.durationMs,
        words: ocrResult.words.length,
        text: ocrResult.text,
      };
    } catch (error) {
      console.warn('Tesseract OCR failed; labels can still be entered manually.', error);
      diagnostics.ocr = { error: error.message || String(error) };
    }
  }

  const yoloProvider = diagnostics.yolo?.provider;
  const modeParts = [
    yoloProvider ? `YOLO/${yoloProvider}` : null,
    diagnostics.opencv?.wires ? 'OpenCV/WASM' : null,
    diagnostics.ocr?.words ? 'Tesseract' : null,
  ].filter(Boolean);

  onState?.({
    status: 'ready',
    message: modeParts.length
      ? `AI pipeline ready: ${modeParts.join(' + ')}.`
      : 'AI pipeline used the existing heuristic fallback.',
  });

  return {
    objects,
    diagnostics,
    mode: modeParts.length ? `ai:${modeParts.join('+')}` : 'heuristic-fallback',
  };
}
