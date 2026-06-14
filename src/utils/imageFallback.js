import { cleanupGraph } from './recognizer.js';
import { recognizeHybridSchematic } from './hybridImageRecognizer.js';
import { imageToImageData, mapRasterObjects } from './imageRaster.js';

export function extractImageFallback(image, width, height, options) {
  const prepared = imageToImageData(image, Number(options.imageMaxDimension || 1400));
  const result = recognizeHybridSchematic(
    prepared.imageData.data,
    prepared.width,
    prepared.height,
    options,
  );

  const mapped = mapRasterObjects(
    result.objects,
    prepared.width,
    prepared.height,
    width,
    height,
    options.gridSize,
  );
  return cleanupGraph(mapped, options);
}
