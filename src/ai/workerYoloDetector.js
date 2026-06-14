import { WorkerRpcClient, canUseProcessingWorkers } from './workerRpc.js';

const client = new WorkerRpcClient(
  () => new Worker(new URL('../workers/yolo.worker.js', import.meta.url), {
    type: 'module',
    name: 'sketch2schematic-yolo',
  }),
  'sketch2schematic-yolo',
);
const detectionCache = new WeakMap();
let configuredKey = '';

function cloneDetections(detections) {
  return detections.map((detection) => ({ ...detection, box: { ...detection.box } }));
}

function cacheForImage(image) {
  let cache = detectionCache.get(image);
  if (!cache) {
    cache = new Map();
    detectionCache.set(image, cache);
  }
  return cache;
}

async function configureModel(model, onState) {
  const key = model.cacheKey || `${model.name || model.url || 'model'}:${model.buffer?.byteLength || 0}`;
  if (key === configuredKey) return;
  onState?.({ status: 'loading', message: 'Transferring the ONNX model to the YOLO worker…' });
  const transferableModel = {
    ...model,
    url: model.url ? new URL(model.url, globalThis.location?.href || import.meta.url).href : null,
    buffer: model.buffer ? model.buffer.slice(0) : null,
  };
  const transfer = transferableModel.buffer ? [transferableModel.buffer] : [];
  await client.request('configure', { model: transferableModel }, transfer, onState);
  configuredKey = key;
}

export async function detectWithYoloWorker(image, model, options = {}, onState) {
  const modelKey = model.cacheKey || `${model.name || model.url || 'model'}:${model.buffer?.byteLength || 0}`;
  const cacheKey = JSON.stringify({ modelKey, options, labels: model.labels });
  const cache = cacheForImage(image);
  const cached = cache.get(cacheKey);
  if (cached) {
    onState?.({ status: 'working', message: 'Using cached YOLO worker detections…' });
    return { ...cached, detections: cloneDetections(cached.detections), durationMs: 0, cached: true, worker: true };
  }

  if (!canUseProcessingWorkers()) {
    throw new Error('YOLO processing workers are unavailable in this browser.');
  }

  try {
    await configureModel(model, onState);
    const bitmap = await createImageBitmap(image);
    const result = await client.request('detect', { bitmap, options }, [bitmap], onState);
    const stored = { ...result, worker: true };
    cache.set(cacheKey, stored);
    return { ...stored, detections: cloneDetections(stored.detections) };
  } catch (error) {
    console.warn('YOLO worker failed; keeping heuristic symbols.', error);
    throw error;
  }
}

export function resetYoloWorkerSession() {
  configuredKey = '';
  client.terminate();
}
