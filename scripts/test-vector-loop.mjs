import { createDemoStrokes } from '../src/utils/demo.js';
import { recognizeVectorStrokes } from '../src/utils/recognizer.js';

const objects = recognizeVectorStrokes(createDemoStrokes(), { gridSize: 20, tolerance: 12 });
const types = objects.map((object) => object.type);
const unknown = objects.filter((object) => object.type === 'unknown');
const wires = objects.filter((object) => object.type === 'wire');

for (const required of ['source', 'resistor', 'lamp']) {
  if (!types.includes(required)) throw new Error(`Missing ${required}: ${types.join(', ')}`);
}
if (unknown.length) throw new Error(`Unexpected unknown objects: ${unknown.length}`);
if (wires.length < 6) throw new Error(`Expected split orthogonal wires, got ${wires.length}`);

console.log(`Vector loop test passed: ${types.join(', ')}`);
