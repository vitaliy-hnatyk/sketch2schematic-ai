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
      // Some development servers do not send application/wasm. Fall back to bytes.
    }
  }
  const bytes = await response.arrayBuffer();
  return (await WebAssembly.instantiate(bytes, {})).instance;
}

function getWasm() {
  if (!wasmPromise) wasmPromise = instantiateWasm();
  return wasmPromise;
}

async function warmOnly() {
  await getWasm();
}

async function recognize({ rgbaBuffer, width, height, options = {} }) {
  const started = performance.now();
  const input = new Uint8Array(rgbaBuffer);
  const result = recognizeHybridSchematic(input, width, height, options);

  return {
    objects: result.objects,
    mode: result.mode,
    diagnostics: result.diagnostics,
    durationMs: performance.now() - started,
  };
}

self.onmessage = async (event) => {
  const { id, type } = event.data;
  try {
    if (type === 'warm') {
      await warmOnly();
      self.postMessage({ id, ok: true, type: 'warm' });
      return;
    }
    if (type !== 'recognize') return;
    const result = await recognize(event.data);
    self.postMessage({ id, ok: true, ...result });
  } catch (error) {
    wasmPromise = undefined;
    self.postMessage({
      id,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
