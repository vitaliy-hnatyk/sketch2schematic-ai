import { buildFlowModel, updateDraggedNodeObjects } from '../src/utils/pixiGraphAdapter.js';

const objects = [
  { type: 'resistor', x: 200, y: 160, rot: 0, length: 120, confidence: 1 },
  { type: 'battery', x: 500, y: 160, rot: 0, length: 120, confidence: 1 },
  { type: 'wire', x1: 260, y1: 160, x2: 440, y2: 160, confidence: 1 },
];

const model = buildFlowModel(objects, -1, 20);
if (model.nodes.length !== 2) throw new Error(`Expected 2 component nodes, got ${model.nodes.length}`);
if (model.edges.length !== 1) throw new Error(`Expected 1 edge, got ${model.edges.length}`);

const resistorNode = model.nodes.find((node) => node.id === 'object-0');
const moved = { ...resistorNode, position: { x: 240, y: 220 } };
const updated = updateDraggedNodeObjects(objects, moved, model.edges);

if (updated[0].x !== 240 || updated[0].y !== 220) {
  throw new Error('Dragged component position was not updated.');
}
if (updated[2].x1 !== 300 || updated[2].y1 !== 220) {
  throw new Error(`Connected wire did not follow component port: ${updated[2].x1},${updated[2].y1}`);
}

console.log('Pixi graph model test passed: connected wire follows dragged component.');
