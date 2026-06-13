import { parseLabelsManifest, schematicTypeForClass } from '../src/ai/modelManifest.js';

const manifest = parseLabelsManifest({ inputSize: 640, names: { 0: 'resistor', 1: 'thyristor', 2: 'text' } });
if (manifest.names.length !== 3) throw new Error('Labels manifest parsing failed.');
if (schematicTypeForClass('thyristor') !== 'scr') throw new Error('Thyristor alias failed.');
if (schematicTypeForClass('capacitor_vertical') !== 'capacitor') throw new Error('Orientation suffix failed.');
console.log('AI manifest test passed:', manifest);
