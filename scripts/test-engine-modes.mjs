import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const app = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8');
const controls = await readFile(new URL('../src/components/RecognitionControls.jsx', import.meta.url), 'utf8');
const pipeline = await readFile(new URL('../src/ai/aiPipeline.js', import.meta.url), 'utf8');

for (const mode of ['hybrid', 'heuristic-only', 'yolo-only', 'ocr-only']) {
  assert.match(controls, new RegExp(`value=[\"']${mode}[\"']`));
}
assert.match(app, /outputMode:\s*'hybrid'/);
assert.match(app, /YOLO-only cannot run because no ONNX model is loaded/);
assert.match(pipeline, /YOLO-only mode requires a trained \.onnx model/);
assert.match(pipeline, /OCR does not classify symbols/);
assert.match(pipeline, /fallbackObjects\.filter\(\(object\) => \['wire', 'junction'\]\.includes\(object\.type\)\)/);

console.log('Engine isolation modes test passed.');
