import { createDemoStrokes } from '../src/utils/demo.js';
import { recognizeVectorStrokes } from '../src/utils/recognizer.js';

const objects = recognizeVectorStrokes(createDemoStrokes(), { gridSize: 20, tolerance: 12 });
const types = new Set(objects.map((object) => object.type));
for (const required of ['resistor', 'lamp', 'source', 'wire']) {
  if (!types.has(required)) throw new Error(`Demo recognition did not produce: ${required}`);
}
console.log(`Recognizer test passed with ${objects.length} objects: ${[...types].join(', ')}`);
