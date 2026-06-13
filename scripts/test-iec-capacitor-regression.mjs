import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { recognizeHybridSchematic } from '../src/utils/hybridImageRecognizer.js';

const input = fileURLToPath(new URL('../public/samples/iec-capacitor-regression.png', import.meta.url));
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const result = recognizeHybridSchematic(new Uint8Array(data), info.width, info.height);
const symbols = result.objects.filter((object) => object.type !== 'wire');
const counts = symbols.reduce((map, symbol) => {
  map[symbol.type] = (map[symbol.type] || 0) + 1;
  return map;
}, {});

const expected = { capacitor: 2, scr: 1, zener: 1, fuse: 1, diode: 1, resistor: 1 };
for (const [type, count] of Object.entries(expected)) {
  if ((counts[type] || 0) !== count) {
    throw new Error(`Expected ${count} ${type}, received ${counts[type] || 0}. Full result: ${JSON.stringify(counts)}`);
  }
}
console.log('IEC capacitor regression test passed:', counts);
