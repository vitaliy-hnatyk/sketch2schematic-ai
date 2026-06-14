import { WorkerRpcClient, canUseProcessingWorkers } from './workerRpc.js';

const client = new WorkerRpcClient(
  () => new Worker(new URL('../workers/opencv.worker.js', import.meta.url), {
    type: 'module',
    name: 'sketch2schematic-opencv',
  }),
  'sketch2schematic-opencv',
);
const resultCache = new WeakMap();

function cloneObjects(objects) {
  return objects.map((object) => ({ ...object }));
}

function cacheForImage(image) {
  let cache = resultCache.get(image);
  if (!cache) {
    cache = new Map();
    resultCache.set(image, cache);
  }
  return cache;
}

export async function detectWiresWithOpenCvWorker(image, options = {}, onState) {
  const cacheKey = JSON.stringify(options);
  const cache = cacheForImage(image);
  const cached = cache.get(cacheKey);
  if (cached) {
    onState?.({ status: 'working', message: 'Using cached OpenCV worker result…' });
    return { ...cached, objects: cloneObjects(cached.objects), durationMs: 0, cached: true, worker: true };
  }

  if (!canUseProcessingWorkers()) {
    throw new Error('OpenCV processing workers are unavailable in this browser.');
  }

  const timeoutMs = Math.max(0, Number(options.timeoutMs || 0));
  onState?.({
    status: 'loading',
    message: options.algorithm === 'hough'
      ? 'Starting OpenCV Hough worker…'
      : 'Starting OpenCV Lite worker…',
  });
  const bitmap = await createImageBitmap(image);
  let timer;
  try {
    const request = client.request('detect', { bitmap, options }, [bitmap], onState);
    const result = timeoutMs > 0
      ? await Promise.race([
        request,
        new Promise((_, reject) => {
          timer = globalThis.setTimeout(() => reject(new Error(`OpenCV exceeded ${timeoutMs} ms and was skipped.`)), timeoutMs);
        }),
      ])
      : await request;
    const stored = { ...result, worker: true };
    cache.set(cacheKey, stored);
    return { ...stored, objects: cloneObjects(stored.objects) };
  } catch (error) {
    if (/exceeded/.test(error.message || '')) client.terminate();
    console.warn('OpenCV worker failed or timed out; keeping heuristic wires.', error);
    throw error;
  } finally {
    if (timer) globalThis.clearTimeout(timer);
  }
}

export function resetOpenCvWorker() {
  client.terminate();
}
