import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { recognizeHybridSchematic } from '../src/utils/hybridImageRecognizer.js';
import { mapRasterObjects } from '../src/utils/imageRaster.js';
import { cleanupGraph } from '../src/utils/recognizer.js';
import { buildFlowModel } from '../src/utils/pixiGraphAdapter.js';
import { schematicToSvg } from '../src/utils/exporters.js';

const input = process.argv[2] || fileURLToPath(new URL('../public/samples/iec-structured.png', import.meta.url));
await mkdir(new URL('../tmp/test-output/', import.meta.url), { recursive: true });
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const result = recognizeHybridSchematic(new Uint8Array(data), info.width, info.height);
if (result.mode !== 'structured-iec') throw new Error(`Expected structured-iec mode, got ${result.mode}`);

const mapped = mapRasterObjects(result.objects, info.width, info.height, 900, 650, 20);
const objects = cleanupGraph(mapped, { gridSize: 20, tolerance: 12 });
const types = new Set(objects.map((object) => object.type));
for (const required of ['wire', 'fuse', 'capacitor', 'resistor', 'diode', 'zener', 'scr']) {
  if (!types.has(required)) throw new Error(`Structured IEC recognition did not produce: ${required}`);
}
const graph = buildFlowModel(objects, -1, 20);
const visibleTerminals = graph.nodes.filter(
  (node) => node.data?.kind === 'terminal' && (node.data?.members?.length || 0) <= 1,
);
if (visibleTerminals.length !== 4) {
  throw new Error(`Expected 4 open terminals, got ${visibleTerminals.length}`);
}

const svg = schematicToSvg(objects);
const outputSvg = new URL('../tmp/test-output/structured-iec-result.svg', import.meta.url);
const outputPng = new URL('../tmp/test-output/structured-iec-result.png', import.meta.url);
await writeFile(outputSvg, svg);
await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(outputPng));
console.log(JSON.stringify({
  mode: result.mode,
  diagnostics: result.diagnostics,
  objectCount: objects.length,
  visibleTerminals: visibleTerminals.length,
  types: [...types],
}, null, 2));
