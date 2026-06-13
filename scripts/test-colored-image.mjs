import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { recognizeColoredSchematic } from '../src/utils/imageSymbolRecognizer.js';
import { mapRasterObjects } from '../src/utils/imageRaster.js';
import { cleanupGraph } from '../src/utils/recognizer.js';
import { schematicToSvg } from '../src/utils/exporters.js';

const input = process.argv[2] || fileURLToPath(new URL('../public/samples/led-resistor-battery.png', import.meta.url));
await mkdir(new URL('../tmp/test-output/', import.meta.url), { recursive: true });
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const result = recognizeColoredSchematic(new Uint8Array(data), info.width, info.height);
const mapped = mapRasterObjects(result.objects, info.width, info.height, 900, 650, 20);
const objects = cleanupGraph(mapped, { gridSize: 20, tolerance: 12 });

console.log(JSON.stringify(result.diagnostics, null, 2));
console.log(objects.map((object) => ({
  type: object.type,
  x: object.x,
  y: object.y,
  rot: object.rot,
  length: object.length,
  x1: object.x1,
  y1: object.y1,
  x2: object.x2,
  y2: object.y2,
  confidence: object.confidence,
})));

const types = new Set(objects.map((object) => object.type));
for (const required of ['wire', 'resistor', 'battery', 'led']) {
  if (!types.has(required)) throw new Error(`Colored-image recognition did not produce: ${required}`);
}

const svg = schematicToSvg(objects);
const outputSvg = new URL('../tmp/test-output/color-recognition-result.svg', import.meta.url);
const outputPng = new URL('../tmp/test-output/color-recognition-result.png', import.meta.url);
await writeFile(outputSvg, svg);
await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(outputPng));
console.log(`Wrote ${outputSvg.pathname} and ${outputPng.pathname}`);
