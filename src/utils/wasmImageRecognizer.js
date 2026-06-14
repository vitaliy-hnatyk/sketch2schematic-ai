import { cleanupGraph } from './recognizer.js';
import { imageToImageData, mapRasterObjects, fitImageRect } from './imageRaster.js';

let worker;
let requestSequence = 0;
const pending = new Map();

function getWorker() {
  if (worker) return worker;
  worker = new Worker(new URL('../workers/imageRecognizer.worker.js', import.meta.url), {
    type: 'module',
  });
  worker.onmessage = (event) => {
    const message = event.data || {};
    const request = pending.get(message.id);
    if (!request) return;
    if (message.type === 'progress') {
      request.onState?.(message.state);
      return;
    }
    pending.delete(message.id);
    if (message.ok) request.resolve(message.result ?? message);
    else request.reject(new Error(message.error || 'WASM recognition failed'));
  };
  worker.onerror = (event) => {
    const error = new Error(event.message || 'WASM worker failed');
    for (const request of pending.values()) request.reject(error);
    pending.clear();
    worker?.terminate();
    worker = undefined;
  };
  return worker;
}

function requestWorker(message, transfer = [], onState) {
  const id = ++requestSequence;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject, onState });
    getWorker().postMessage({ id, ...message }, transfer);
  });
}

export async function warmWasmRecognizer(onState = () => {}) {
  if (!('WebAssembly' in window) || !('Worker' in window)) {
    onState({ status: 'error', message: 'WebAssembly workers are unavailable; JavaScript fallback will be used.' });
    return false;
  }
  onState({ status: 'loading', message: 'Loading the bundled WASM + hybrid schematic worker…' });
  try {
    await requestWorker({ type: 'warm' }, [], onState);
    onState({ status: 'ready', message: 'WASM worker is ready for monochrome and color schematics.' });
    return true;
  } catch (error) {
    onState({ status: 'error', message: 'WebAssembly unavailable; JavaScript fallback will be used.' });
    throw error;
  }
}

export async function extractImageWasm(image, width, height, options, onState = () => {}) {
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const maxDimension = Math.max(320, Number(options.imageMaxDimension || 1400));
  const resizeScale = Math.min(1, maxDimension / Math.max(sourceWidth, sourceHeight));
  const preparedWidth = Math.max(1, Math.round(sourceWidth * resizeScale));
  const preparedHeight = Math.max(1, Math.round(sourceHeight * resizeScale));
  const fit = fitImageRect(preparedWidth, preparedHeight, width, height);

  onState({
    status: 'working',
    message: 'Transferring the image to the WASM recognition worker…',
  });

  const payload = {
    type: 'recognize',
    width: preparedWidth,
    height: preparedHeight,
    options: {
      gridSize: Math.max(1, Math.round(options.gridSize / Math.max(0.001, fit.scale))),
      tolerance: Math.max(2, Number(options.tolerance || 10) / Math.max(0.001, fit.scale)),
      confidenceThreshold: Number(options.confidenceThreshold || 0.6),
      scanStep: 3,
      minimumRun: Math.max(18, Math.round(42 / Math.max(0.001, fit.scale))),
    },
  };

  let transfer;
  if (typeof createImageBitmap === 'function' && typeof OffscreenCanvas !== 'undefined') {
    const bitmap = await createImageBitmap(image, {
      resizeWidth: preparedWidth,
      resizeHeight: preparedHeight,
      resizeQuality: 'high',
    });
    payload.bitmap = bitmap;
    transfer = [bitmap];
  } else {
    const prepared = imageToImageData(image, maxDimension);
    payload.rgbaBuffer = prepared.imageData.data.buffer;
    payload.width = prepared.width;
    payload.height = prepared.height;
    transfer = [prepared.imageData.data.buffer];
  }

  const result = await requestWorker(payload, transfer, onState);

  const mapped = mapRasterObjects(
    result.objects,
    payload.width,
    payload.height,
    width,
    height,
    options.gridSize,
  );
  const objects = cleanupGraph(mapped, options);
  const typeSummary = result.diagnostics?.types
    ? Object.entries(result.diagnostics.types).map(([type, count]) => `${count} ${type}`).join(', ')
    : '';
  const recognizedMode = ['hybrid-color-monochrome', 'color-symbols', 'color-foreground-monochrome', 'structured-iec']
    .some((mode) => result.mode.startsWith(mode));
  onState({
    status: 'ready',
    message: recognizedMode
      ? `Worker/WASM schematic analysis completed in ${result.durationMs.toFixed(1)} ms${typeSummary ? `: ${typeSummary}` : ''}.`
      : `Worker/WASM monochrome analysis completed in ${result.durationMs.toFixed(1)} ms${typeSummary ? `: ${typeSummary}` : ''}.`,
  });
  return {
    objects,
    durationMs: result.durationMs,
    diagnostics: result.diagnostics,
    mode: result.mode,
  };
}
