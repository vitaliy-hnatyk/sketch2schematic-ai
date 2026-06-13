import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { recognizeHybridSchematic } from '../src/utils/hybridImageRecognizer.js';

const input = fileURLToPath(new URL('../public/samples/led-resistor-battery.png', import.meta.url));
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

for (const settings of [
  { tolerance: 4, confidenceThreshold: 0.45 },
  { tolerance: 22, confidenceThreshold: 0.75 },
]) {
  const result = recognizeHybridSchematic(new Uint8Array(data), info.width, info.height, settings);
  const applied = result.diagnostics?.appliedSettings;
  if (!applied || Number(applied.tolerance) !== settings.tolerance) {
    throw new Error(`Tolerance was not applied: expected ${settings.tolerance}, got ${applied?.tolerance}`);
  }
  if (Number(applied.confidenceThreshold) !== settings.confidenceThreshold) {
    throw new Error('Confidence threshold was not passed to the image recognizer.');
  }
  console.log({ settings, mode: result.mode, objects: result.objects.length, types: result.diagnostics.types });
}

console.log('Active settings test passed.');
