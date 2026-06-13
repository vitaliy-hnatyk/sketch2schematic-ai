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
    const request = pending.get(event.data.id);
    if (!request) return;
    pending.delete(event.data.id);
    if (event.data.ok) request.resolve(event.data);
    else request.reject(new Error(event.data.error || 'WASM recognition failed'));
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

function requestWorker(message, transfer = []) {
  const id = ++requestSequence;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
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
    await requestWorker({ type: 'warm' });
    onState({ status: 'ready', message: 'WASM worker is ready for monochrome and color schematics.' });
    return true;
  } catch (error) {
    onState({ status: 'error', message: 'WebAssembly unavailable; JavaScript fallback will be used.' });
    throw error;
  }
}

export async function extractImageWasm(image, width, height, options, onState = () => {}) {
  const prepared = imageToImageData(image);
  const fit = fitImageRect(prepared.width, prepared.height, width, height);

  onState({
    status: 'working',
    message: 'Worker is converting the image to monochrome and recognizing wires plus schematic symbols…',
  });
  const result = await requestWorker(
    {
      type: 'recognize',
      rgbaBuffer: prepared.imageData.data.buffer,
      width: prepared.width,
      height: prepared.height,
      options: {
        gridSize: Math.max(1, Math.round(options.gridSize / Math.max(0.001, fit.scale))),
        tolerance: Math.max(2, Number(options.tolerance || 10) / Math.max(0.001, fit.scale)),
        confidenceThreshold: Number(options.confidenceThreshold || 0.6),
        scanStep: 3,
        minimumRun: Math.max(18, Math.round(42 / Math.max(0.001, fit.scale))),
      },
    },
    [prepared.imageData.data.buffer],
  );

  const mapped = mapRasterObjects(
    result.objects,
    prepared.width,
    prepared.height,
    width,
    height,
    options.gridSize,
  );
  const objects = cleanupGraph(mapped, options);
  const typeSummary = result.diagnostics?.types
    ? Object.entries(result.diagnostics.types).map(([type, count]) => `${count} ${type}`).join(', ')
    : '';
  onState({
    status: 'ready',
    message: ['hybrid-color-monochrome', 'color-symbols', 'color-foreground-monochrome', 'structured-iec'].includes(result.mode)
      ? `Schematic analyzed in ${result.durationMs.toFixed(1)} ms${typeSummary ? `: ${typeSummary}` : ''}.`
      : `Monochrome schematic analysis completed in ${result.durationMs.toFixed(1)} ms${typeSummary ? `: ${typeSummary}` : ''}.`,
  });
  return {
    objects,
    durationMs: result.durationMs,
    diagnostics: result.diagnostics,
    mode: result.mode,
  };
}
