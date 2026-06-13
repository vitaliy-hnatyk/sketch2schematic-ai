import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { recognizeHybridSchematic } from '../src/utils/hybridImageRecognizer.js';
import { mapRasterObjects } from '../src/utils/imageRaster.js';
import { cleanupGraph } from '../src/utils/recognizer.js';
import { schematicToSvg } from '../src/utils/exporters.js';
import { mkdir, writeFile } from 'node:fs/promises';

const input = fileURLToPath(new URL('../public/samples/iec-current.png', import.meta.url));
await mkdir(new URL('../tmp/test-output/', import.meta.url), { recursive: true });
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const result = recognizeHybridSchematic(new Uint8Array(data), info.width, info.height);
const mapped = mapRasterObjects(result.objects, info.width, info.height, 900, 650, 20);
const objects = cleanupGraph(mapped, { gridSize: 20, tolerance: 12 });
const counts = objects.filter((object) => !['wire', 'junction'].includes(object.type)).reduce((map, object) => {
  map[object.type] = (map[object.type] || 0) + 1;
  return map;
}, {});
const expected = { capacitor: 2, scr: 1, zener: 1, fuse: 1, diode: 1, resistor: 1 };
for (const [type, count] of Object.entries(expected)) {
  if ((counts[type] || 0) !== count) {
    throw new Error(`Expected ${count} ${type}, received ${counts[type] || 0}. Full result: ${JSON.stringify(counts)}`);
  }
}
const svg = schematicToSvg(objects);
await writeFile(new URL('../tmp/test-output/verified-current-result.svg', import.meta.url), svg);
await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL('../tmp/test-output/verified-current-result.png', import.meta.url)));
console.log('Current uploaded IEC image passed:', result.mode, counts);
