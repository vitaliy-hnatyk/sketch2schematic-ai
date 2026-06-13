import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { recognizeHybridSchematic } from '../src/utils/hybridImageRecognizer.js';
import { mapRasterObjects } from '../src/utils/imageRaster.js';
import { cleanupGraph } from '../src/utils/recognizer.js';
import { schematicToSvg } from '../src/utils/exporters.js';

const input = process.argv[2] || fileURLToPath(new URL('../public/samples/led-resistor-battery.png', import.meta.url));
await mkdir(new URL('../tmp/test-output/', import.meta.url), { recursive: true });
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const result = recognizeHybridSchematic(new Uint8Array(data), info.width, info.height);
const mapped = mapRasterObjects(result.objects, info.width, info.height, 900, 650, 20);
const objects = cleanupGraph(mapped, { gridSize: 20, tolerance: 12 });

const types = objects.map((object) => object.type);
for (const required of ['wire', 'resistor', 'battery', 'led']) {
  if (!types.includes(required)) throw new Error(`Hybrid recognition did not produce ${required}`);
}
if (objects.filter((object) => object.type === 'wire').length > 12) {
  throw new Error('Too many wires: gray text was probably converted into geometry.');
}

const svg = schematicToSvg(objects);
const outputSvg = new URL('../tmp/test-output/hybrid-recognition-result.svg', import.meta.url);
const outputPng = new URL('../tmp/test-output/hybrid-recognition-result.png', import.meta.url);
await writeFile(outputSvg, svg);
await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(outputPng));
console.log(JSON.stringify({ mode: result.mode, diagnostics: result.diagnostics, types }, null, 2));
