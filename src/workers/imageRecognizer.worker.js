import wasmUrl from '../wasm/schematic_wasm_bg.wasm?url';
import { recognizeHybridSchematic } from '../utils/hybridImageRecognizer.js';

let wasmPromise;

async function instantiateWasm() {
  const response = await fetch(wasmUrl);
  if (!response.ok) throw new Error(`WASM download failed (${response.status})`);

  if (WebAssembly.instantiateStreaming) {
    try {
      return (await WebAssembly.instantiateStreaming(response.clone(), {})).instance;
    } catch {
      // Development servers sometimes send the wrong MIME type.
    }
  }
  const bytes = await response.arrayBuffer();
  return (await WebAssembly.instantiate(bytes, {})).instance;
}

function getWasm() {
  if (!wasmPromise) wasmPromise = instantiateWasm();
  return wasmPromise;
}

function sameWire(a, b, tolerance) {
  const aHorizontal = Math.abs(a.x2 - a.x1) >= Math.abs(a.y2 - a.y1);
  const bHorizontal = Math.abs(b.x2 - b.x1) >= Math.abs(b.y2 - b.y1);
  if (aHorizontal !== bHorizontal) return false;
  if (aHorizontal) {
    const overlap = Math.min(Math.max(a.x1, a.x2), Math.max(b.x1, b.x2))
      - Math.max(Math.min(a.x1, a.x2), Math.min(b.x1, b.x2));
    return Math.abs(a.y1 - b.y1) <= tolerance && overlap >= -tolerance;
  }
  const overlap = Math.min(Math.max(a.y1, a.y2), Math.max(b.y1, b.y2))
    - Math.max(Math.min(a.y1, a.y2), Math.min(b.y1, b.y2));
  return Math.abs(a.x1 - b.x1) <= tolerance && overlap >= -tolerance;
}

function mergeWasmWires(objects, wasmWires, tolerance) {
  const output = objects.slice();
  for (const wire of wasmWires) {
    const duplicate = output.some((candidate) => candidate.type === 'wire' && sameWire(candidate, wire, tolerance));
    if (!duplicate) output.push(wire);
  }
  return output;
}

async function detectWasmWires(input, width, height, options) {
  const instance = await getWasm();
  const {
    memory,
    reset_alloc: resetAlloc,
    alloc,
    detect_lines: detectLines,
  } = instance.exports;
  if (!memory || !resetAlloc || !alloc || !detectLines) {
    throw new Error('Bundled WASM does not expose the expected line detector.');
  }

  const maxLines = Math.max(256, Math.min(2048, Math.round((width + height) * 1.5)));
  resetAlloc();
  const inputPointer = alloc(input.byteLength);
  const outputPointer = alloc(maxLines * 16);
  new Uint8Array(memory.buffer, inputPointer, input.byteLength).set(input);

  const started = performance.now();
  const count = detectLines(
    inputPointer,
    width,
    height,
    Math.max(1, Math.round(options.gridSize || 1)),
    Math.max(1, Math.round(options.scanStep || 3)),
    Math.max(12, Math.round(options.minimumRun || 36)),
    outputPointer,
    maxLines,
  );
  const values = new Int32Array(memory.buffer, outputPointer, count * 4);
  const objects = [];
  for (let index = 0; index < count; index += 1) {
    const offset = index * 4;
    objects.push({
      type: 'wire',
      x1: values[offset],
      y1: values[offset + 1],
      x2: values[offset + 2],
      y2: values[offset + 3],
      confidence: 0.86,
      detector: 'bundled-wasm',
      strokeIds: [],
    });
  }
  return { objects, durationMs: performance.now() - started };
}

async function warmOnly() {
  await getWasm();
}

function bitmapToRgba(bitmap, width, height) {
  if (typeof OffscreenCanvas === 'undefined') {
    throw new Error('OffscreenCanvas is required for bitmap worker preprocessing.');
  }
  const canvas = new OffscreenCanvas(width, height);
  const context = canvas.getContext('2d', { willReadFrequently: true, alpha: false });
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, width, height);
  context.drawImage(bitmap, 0, 0, width, height);
  const imageData = context.getImageData(0, 0, width, height);
  bitmap.close?.();
  return imageData.data;
}

async function recognize({ id, rgbaBuffer, bitmap, width, height, options = {} }) {
  const totalStarted = performance.now();
  const input = bitmap ? bitmapToRgba(bitmap, width, height) : new Uint8Array(rgbaBuffer);

  self.postMessage({
    id,
    type: 'progress',
    state: { status: 'working', message: 'WASM worker: detecting long wires…' },
  });
  let wasmResult = { objects: [], durationMs: 0, error: '' };
  try {
    wasmResult = await detectWasmWires(input, width, height, options);
  } catch (error) {
    wasmResult.error = error instanceof Error ? error.message : String(error);
  }

  self.postMessage({
    id,
    type: 'progress',
    state: { status: 'working', message: 'Worker: classifying IEC and hand-drawn symbols…' },
  });
  const heuristicStarted = performance.now();
  const result = recognizeHybridSchematic(input, width, height, options);
  const heuristicMs = performance.now() - heuristicStarted;
  const tolerance = Math.max(4, Number(options.tolerance || 8));
  const objects = mergeWasmWires(result.objects, wasmResult.objects, tolerance);

  return {
    objects,
    mode: `${result.mode}+worker-wasm`,
    diagnostics: {
      ...result.diagnostics,
      worker: true,
      wasmWirePrepass: {
        wires: wasmResult.objects.length,
        durationMs: wasmResult.durationMs,
        error: wasmResult.error || undefined,
      },
      workerTimings: {
        wasmMs: wasmResult.durationMs,
        heuristicMs,
        totalMs: performance.now() - totalStarted,
      },
    },
    durationMs: performance.now() - totalStarted,
  };
}

self.onmessage = async (event) => {
  const { id, type } = event.data;
  try {
    if (type === 'warm') {
      await warmOnly();
      self.postMessage({ id, ok: true, result: { warmed: true } });
      return;
    }
    if (type !== 'recognize') return;
    const result = await recognize(event.data);
    self.postMessage({ id, ok: true, result });
  } catch (error) {
    wasmPromise = undefined;
    self.postMessage({
      id,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
