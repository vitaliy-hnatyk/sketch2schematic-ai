import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { recognizeStructuredIecSchematic } from '../src/utils/structuredIecRecognizer.js';

const input = fileURLToPath(new URL('../public/samples/iec-classifier-fix.png', import.meta.url));
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const result = recognizeStructuredIecSchematic(new Uint8Array(data), info.width, info.height);

if (!result.used) throw new Error('Structured IEC recognizer did not activate.');
const symbols = result.objects.filter((object) => object.type !== 'wire');
const counts = symbols.reduce((map, symbol) => {
  map[symbol.type] = (map[symbol.type] || 0) + 1;
  return map;
}, {});

const expected = {
  fuse: 1,
  capacitor: 2,
  resistor: 1,
  diode: 1,
  zener: 1,
  scr: 1,
};

for (const [type, count] of Object.entries(expected)) {
  if ((counts[type] || 0) !== count) {
    throw new Error(`Expected ${count} ${type}, received ${counts[type] || 0}.`);
  }
}

console.log('IEC classifier test passed:', counts);
