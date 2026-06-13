import { rotationForClass, schematicTypeForClass } from './modelManifest.js';
import { mapRasterObjects } from '../utils/imageRaster.js';

export function detectionsToSchematicObjects(
  detections,
  sourceWidth,
  sourceHeight,
  targetWidth,
  targetHeight,
  gridSize = 10,
) {
  const rasterObjects = [];
  const textRegions = [];

  for (const detection of detections) {
    const type = schematicTypeForClass(detection.label);
    if (!type) continue;
    const box = detection.box;
    if (type === 'text') {
      textRegions.push({ ...detection });
      continue;
    }

    const x = (box.x0 + box.x1) / 2;
    const y = (box.y0 + box.y1) / 2;
    if (type === 'junction' || type === 'terminal') {
      rasterObjects.push({
        type: 'junction',
        x,
        y,
        openTerminal: type === 'terminal',
        confidence: detection.score,
        detector: 'yolo',
        strokeIds: [],
      });
      continue;
    }

    const rot = rotationForClass(detection.label, box);
    const major = rot ? box.height : box.width;
    rasterObjects.push({
      type,
      x,
      y,
      rot,
      length: Math.max(40, Math.min(220, major + 18)),
      confidence: detection.score,
      detector: 'yolo',
      sourceBox: { x0: box.x0, y0: box.y0, x1: box.x1, y1: box.y1 },
      strokeIds: [],
    });
  }

  return {
    objects: mapRasterObjects(
      rasterObjects,
      sourceWidth,
      sourceHeight,
      targetWidth,
      targetHeight,
      gridSize,
    ),
    textRegions,
  };
}

function centerOf(object) {
  if (object.type === 'wire') {
    return { x: (object.x1 + object.x2) / 2, y: (object.y1 + object.y2) / 2 };
  }
  return { x: object.x || 0, y: object.y || 0 };
}

export function mergeAiSymbolsWithFallback(aiObjects, fallbackObjects, distanceLimit = 54) {
  const wires = fallbackObjects.filter((object) => ['wire', 'junction'].includes(object.type));
  const fallbackSymbols = fallbackObjects.filter((object) => !['wire', 'junction'].includes(object.type));
  const result = [...wires, ...aiObjects];

  for (const fallback of fallbackSymbols) {
    const fallbackCenter = centerOf(fallback);
    const overlappingAi = aiObjects.some((candidate) => {
      const candidateCenter = centerOf(candidate);
      return Math.hypot(candidateCenter.x - fallbackCenter.x, candidateCenter.y - fallbackCenter.y) < distanceLimit;
    });
    if (!overlappingAi) result.push(fallback);
  }
  return result;
}
