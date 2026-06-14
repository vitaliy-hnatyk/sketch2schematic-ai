import { detectWithYolo, resetYoloSession } from '../ai/yoloOnnxDetector.js';

let configuredModel = null;
let configuredKey = '';

self.onmessage = async (event) => {
  const { id, type } = event.data || {};
  try {
    if (type === 'configure') {
      configuredModel = event.data.model;
      configuredKey = configuredModel?.cacheKey || '';
      resetYoloSession();
      self.postMessage({ id, ok: true, result: { configuredKey } });
      return;
    }
    if (type === 'reset') {
      configuredModel = null;
      configuredKey = '';
      resetYoloSession();
      self.postMessage({ id, ok: true, result: { reset: true } });
      return;
    }
    if (type !== 'detect') return;
    if (!configuredModel) throw new Error('YOLO worker has no configured model.');
    const bitmap = event.data.bitmap;
    const result = await detectWithYolo(bitmap, configuredModel, event.data.options, (state) => {
      self.postMessage({ id, type: 'progress', state });
    });
    bitmap?.close?.();
    self.postMessage({ id, ok: true, result });
  } catch (error) {
    event.data?.bitmap?.close?.();
    self.postMessage({
      id,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
