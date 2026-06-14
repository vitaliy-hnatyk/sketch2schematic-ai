import { detectWiresWithOpenCv } from '../ai/openCvWireDetector.js';

self.onmessage = async (event) => {
  const { id, type, bitmap, options } = event.data || {};
  if (type !== 'detect') return;
  try {
    const result = await detectWiresWithOpenCv(bitmap, options, (state) => {
      self.postMessage({ id, type: 'progress', state });
    });
    bitmap?.close?.();
    self.postMessage({ id, ok: true, result });
  } catch (error) {
    bitmap?.close?.();
    self.postMessage({
      id,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
