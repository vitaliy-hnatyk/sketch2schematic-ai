import { createProcessingCanvas, imageDimensions } from './processingCanvas.js';
import { DEFAULT_CIRCUIT_LABELS } from './modelManifest.js';

let sessionCache = null;
let sessionCacheKey = '';
const detectionCache = new WeakMap();


function cacheForImage(image) {
  let cache = detectionCache.get(image);
  if (!cache) {
    cache = new Map();
    detectionCache.set(image, cache);
  }
  return cache;
}

function cloneDetections(detections) {
  return detections.map((detection) => ({
    ...detection,
    box: { ...detection.box },
  }));
}

function fixedSessionInputSize(session, inputName) {
  const metadata = session.inputMetadata?.[inputName];
  const dimensions = metadata?.dimensions || metadata?.dims || [];
  const height = Number(dimensions[dimensions.length - 2]);
  const width = Number(dimensions[dimensions.length - 1]);
  if (Number.isInteger(width) && width > 0 && width === height) return width;
  return null;
}

function sigmoid(value) {
  return 1 / (1 + Math.exp(-value));
}

function scoreValue(value) {
  if (!Number.isFinite(value)) return 0;
  return value < 0 || value > 1 ? sigmoid(value) : value;
}

function intersectionOverUnion(a, b) {
  const x1 = Math.max(a.x1, b.x1);
  const y1 = Math.max(a.y1, b.y1);
  const x2 = Math.min(a.x2, b.x2);
  const y2 = Math.min(a.y2, b.y2);
  const width = Math.max(0, x2 - x1);
  const height = Math.max(0, y2 - y1);
  const intersection = width * height;
  const areaA = Math.max(0, a.x2 - a.x1) * Math.max(0, a.y2 - a.y1);
  const areaB = Math.max(0, b.x2 - b.x1) * Math.max(0, b.y2 - b.y1);
  return intersection / Math.max(1e-6, areaA + areaB - intersection);
}

function nonMaximumSuppression(detections, iouThreshold) {
  const byClass = new Map();
  for (const detection of detections) {
    if (!byClass.has(detection.classId)) byClass.set(detection.classId, []);
    byClass.get(detection.classId).push(detection);
  }

  const kept = [];
  for (const group of byClass.values()) {
    const sorted = group.slice().sort((a, b) => b.score - a.score);
    while (sorted.length) {
      const best = sorted.shift();
      kept.push(best);
      for (let index = sorted.length - 1; index >= 0; index -= 1) {
        if (intersectionOverUnion(best, sorted[index]) > iouThreshold) sorted.splice(index, 1);
      }
    }
  }
  return kept.sort((a, b) => b.score - a.score);
}

function createLetterbox(image, inputSize) {
  const { width: sourceWidth, height: sourceHeight } = imageDimensions(image);
  if (!sourceWidth || !sourceHeight) throw new Error('The image has no valid dimensions.');

  const scale = Math.min(inputSize / sourceWidth, inputSize / sourceHeight);
  const drawWidth = Math.max(1, Math.round(sourceWidth * scale));
  const drawHeight = Math.max(1, Math.round(sourceHeight * scale));
  const padX = Math.floor((inputSize - drawWidth) / 2);
  const padY = Math.floor((inputSize - drawHeight) / 2);
  const canvas = createProcessingCanvas(inputSize, inputSize);
  const context = canvas.getContext('2d', { willReadFrequently: true });
  context.fillStyle = 'rgb(114,114,114)';
  context.fillRect(0, 0, inputSize, inputSize);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = 'high';
  context.drawImage(image, padX, padY, drawWidth, drawHeight);
  const imageData = context.getImageData(0, 0, inputSize, inputSize);
  const planeSize = inputSize * inputSize;
  const tensorData = new Float32Array(planeSize * 3);
  for (let pixel = 0; pixel < planeSize; pixel += 1) {
    const source = pixel * 4;
    tensorData[pixel] = imageData.data[source] / 255;
    tensorData[planeSize + pixel] = imageData.data[source + 1] / 255;
    tensorData[planeSize * 2 + pixel] = imageData.data[source + 2] / 255;
  }
  return {
    tensorData,
    sourceWidth,
    sourceHeight,
    scale,
    padX,
    padY,
    inputSize,
  };
}

function resolveOutputLayout(tensor, classCount) {
  const dims = tensor.dims || [];
  if (dims.length === 3) {
    const a = dims[1];
    const b = dims[2];
    const expected = [6, 4 + classCount, 5 + classCount];
    const aLooksLikeAttrs = expected.includes(a) || a < b;
    return aLooksLikeAttrs
      ? { count: b, attrs: a, transposed: true }
      : { count: a, attrs: b, transposed: false };
  }
  if (dims.length === 2) return { count: dims[0], attrs: dims[1], transposed: false };
  throw new Error(`Unsupported YOLO output shape: ${JSON.stringify(dims)}`);
}

function readOutputValue(data, layout, row, attribute) {
  if (layout.transposed) return data[attribute * layout.count + row];
  return data[row * layout.attrs + attribute];
}

function decodeOutput(tensor, labels, letterbox, confidenceThreshold) {
  const classCount = labels.length;
  const layout = resolveOutputLayout(tensor, classCount);
  const data = tensor.data;
  const results = [];

  for (let row = 0; row < layout.count; row += 1) {
    if (layout.attrs === 6) {
      const raw = Array.from({ length: 6 }, (_, index) => readOutputValue(data, layout, row, index));
      let [x1, y1, x2, y2, score, classId] = raw;
      score = scoreValue(score);
      classId = Math.max(0, Math.round(classId));
      if (score < confidenceThreshold || classId >= classCount) continue;
      const normalized = Math.max(Math.abs(x1), Math.abs(y1), Math.abs(x2), Math.abs(y2)) <= 2;
      if (normalized) {
        x1 *= letterbox.inputSize;
        y1 *= letterbox.inputSize;
        x2 *= letterbox.inputSize;
        y2 *= letterbox.inputSize;
      }
      results.push({ x1, y1, x2, y2, score, classId });
      continue;
    }

    let cx = readOutputValue(data, layout, row, 0);
    let cy = readOutputValue(data, layout, row, 1);
    let width = readOutputValue(data, layout, row, 2);
    let height = readOutputValue(data, layout, row, 3);
    const normalized = Math.max(Math.abs(cx), Math.abs(cy), Math.abs(width), Math.abs(height)) <= 2;
    if (normalized) {
      cx *= letterbox.inputSize;
      cy *= letterbox.inputSize;
      width *= letterbox.inputSize;
      height *= letterbox.inputSize;
    }

    const hasObjectness = layout.attrs >= classCount + 5;
    const objectness = hasObjectness ? scoreValue(readOutputValue(data, layout, row, 4)) : 1;
    const classOffset = hasObjectness ? 5 : 4;
    let bestClass = -1;
    let bestScore = 0;
    const availableClasses = Math.min(classCount, layout.attrs - classOffset);
    for (let classId = 0; classId < availableClasses; classId += 1) {
      const classScore = scoreValue(readOutputValue(data, layout, row, classOffset + classId));
      const combined = classScore * objectness;
      if (combined > bestScore) {
        bestScore = combined;
        bestClass = classId;
      }
    }
    if (bestClass < 0 || bestScore < confidenceThreshold) continue;
    results.push({
      x1: cx - width / 2,
      y1: cy - height / 2,
      x2: cx + width / 2,
      y2: cy + height / 2,
      score: bestScore,
      classId: bestClass,
    });
  }

  return results.map((detection) => {
    const x1 = (detection.x1 - letterbox.padX) / letterbox.scale;
    const y1 = (detection.y1 - letterbox.padY) / letterbox.scale;
    const x2 = (detection.x2 - letterbox.padX) / letterbox.scale;
    const y2 = (detection.y2 - letterbox.padY) / letterbox.scale;
    return {
      ...detection,
      label: labels[detection.classId] || `class_${detection.classId}`,
      box: {
        x0: Math.max(0, Math.min(letterbox.sourceWidth, x1)),
        y0: Math.max(0, Math.min(letterbox.sourceHeight, y1)),
        x1: Math.max(0, Math.min(letterbox.sourceWidth, x2)),
        y1: Math.max(0, Math.min(letterbox.sourceHeight, y2)),
        width: Math.max(1, Math.abs(x2 - x1)),
        height: Math.max(1, Math.abs(y2 - y1)),
      },
    };
  });
}

async function createSession(model, cacheKey, onState) {
  if (sessionCache && sessionCacheKey === cacheKey) return sessionCache;
  onState?.({ status: 'loading', message: 'Loading YOLO ONNX model…' });

  const modelSource = model.buffer || model.url;
  if (!modelSource) throw new Error('No ONNX model is configured.');

  let session;
  let provider = 'wasm';
  if (typeof navigator !== 'undefined' && navigator.gpu) {
    try {
      const ort = await import('onnxruntime-web/webgpu');
      session = await ort.InferenceSession.create(modelSource, {
        executionProviders: ['webgpu'],
        graphOptimizationLevel: 'all',
      });
      provider = 'webgpu';
      sessionCache = { session, ort, provider };
      sessionCacheKey = cacheKey;
      return sessionCache;
    } catch (error) {
      console.warn('WebGPU ONNX session failed; falling back to WASM.', error);
    }
  }

  const ort = await import('onnxruntime-web');
  ort.env.wasm.numThreads = (typeof crossOriginIsolated !== 'undefined' && crossOriginIsolated)
    ? Math.max(1, Math.min(4, typeof navigator !== 'undefined' ? (navigator.hardwareConcurrency || 2) : 2))
    : 1;
  session = await ort.InferenceSession.create(modelSource, {
    executionProviders: ['wasm'],
    graphOptimizationLevel: 'all',
  });
  sessionCache = { session, ort, provider };
  sessionCacheKey = cacheKey;
  return sessionCache;
}

export function resetYoloSession() {
  sessionCache = null;
  sessionCacheKey = '';
}

export async function detectWithYolo(image, model, options = {}, onState) {
  const labels = model.labels?.length ? model.labels : DEFAULT_CIRCUIT_LABELS;
  const requestedInputSize = Math.max(320, Math.min(1280, Number(options.inputSize || model.inputSize || 640)));
  const confidenceThreshold = Number(options.confidenceThreshold || 0.35);
  const iouThreshold = Number(options.iouThreshold || 0.45);
  const modelCacheKey = model.cacheKey || `${model.name || model.url || 'model'}:${model.buffer?.byteLength || 0}`;
  const { session, ort, provider } = await createSession(model, modelCacheKey, onState);
  const inputName = session.inputNames[0];
  const inputSize = fixedSessionInputSize(session, inputName) || requestedInputSize;
  const resultCacheKey = JSON.stringify({
    modelCacheKey,
    inputSize,
    confidenceThreshold,
    iouThreshold,
    labels,
  });
  const imageCache = cacheForImage(image);
  const cached = imageCache.get(resultCacheKey);
  if (cached) {
    onState?.({ status: 'working', message: 'Using cached YOLO detections…' });
    return { ...cached, detections: cloneDetections(cached.detections), durationMs: 0, cached: true };
  }

  const preprocessStarted = performance.now();
  const letterbox = createLetterbox(image, inputSize);
  const tensor = new ort.Tensor('float32', letterbox.tensorData, [1, 3, inputSize, inputSize]);
  const preprocessMs = performance.now() - preprocessStarted;
  onState?.({ status: 'working', message: `Running YOLO with ONNX Runtime ${provider.toUpperCase()}…` });
  const started = performance.now();
  const outputs = await session.run({ [inputName]: tensor });
  const outputName = session.outputNames[0];
  const rawDetections = decodeOutput(outputs[outputName], labels, letterbox, confidenceThreshold);
  const detections = nonMaximumSuppression(rawDetections, iouThreshold);
  const result = {
    detections,
    provider,
    durationMs: performance.now() - started,
    preprocessMs,
    inputSize,
    cached: false,
  };
  imageCache.set(resultCacheKey, result);
  return { ...result, detections: cloneDetections(result.detections) };
}
