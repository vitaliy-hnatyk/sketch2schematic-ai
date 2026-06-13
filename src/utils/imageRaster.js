import { createSnapper } from './geometry.js';

export function fitImageRect(sourceWidth, sourceHeight, targetWidth, targetHeight) {
  const safeWidth = Math.max(1, sourceWidth || targetWidth || 1);
  const safeHeight = Math.max(1, sourceHeight || targetHeight || 1);
  const scale = Math.min(targetWidth / safeWidth, targetHeight / safeHeight);
  const width = safeWidth * scale;
  const height = safeHeight * scale;
  return {
    x: (targetWidth - width) / 2,
    y: (targetHeight - height) / 2,
    width,
    height,
    scale,
  };
}

export function imageProcessingSize(image, maxDimension = 1400) {
  const width = Math.max(1, image.naturalWidth || image.width || 1);
  const height = Math.max(1, image.naturalHeight || image.height || 1);
  const scale = Math.min(1, maxDimension / Math.max(width, height));
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

export function imageToImageData(image, maxDimension = 1400) {
  const size = imageProcessingSize(image, maxDimension);
  const canvas = document.createElement('canvas');
  canvas.width = size.width;
  canvas.height = size.height;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, size.width, size.height);
  context.drawImage(image, 0, 0, size.width, size.height);
  return {
    imageData: context.getImageData(0, 0, size.width, size.height),
    width: size.width,
    height: size.height,
  };
}

export function mapRasterObjects(objects, sourceWidth, sourceHeight, targetWidth, targetHeight, gridSize = 20) {
  const fit = fitImageRect(sourceWidth, sourceHeight, targetWidth, targetHeight);
  const snap = createSnapper(gridSize);
  const point = (x, y) => ({ x: snap(fit.x + x * fit.scale), y: snap(fit.y + y * fit.scale) });

  return objects.map((object) => {
    if (object.type === 'wire') {
      const start = point(object.x1, object.y1);
      const end = point(object.x2, object.y2);
      if (Math.abs(end.x - start.x) >= Math.abs(end.y - start.y)) {
        const y = snap((start.y + end.y) / 2);
        return { ...object, x1: start.x, y1: y, x2: end.x, y2: y };
      }
      const x = snap((start.x + end.x) / 2);
      return { ...object, x1: x, y1: start.y, x2: x, y2: end.y };
    }

    const center = point(object.x, object.y);
    const mapped = {
      ...object,
      x: center.x,
      y: center.y,
      ...(object.length ? { length: Math.max(object.compact ? gridSize * 2.5 : gridSize * 4, snap(object.length * fit.scale)) } : {}),
    };
    if (object.box) {
      const topLeft = point(object.box.x0, object.box.y0);
      const bottomRight = point(object.box.x1, object.box.y1);
      mapped.box = { x0: topLeft.x, y0: topLeft.y, x1: bottomRight.x, y1: bottomRight.y };
    }
    if (object.sourceBox) {
      mapped.sourceBox = {
        x0: fit.x + object.sourceBox.x0 * fit.scale,
        y0: fit.y + object.sourceBox.y0 * fit.scale,
        x1: fit.x + object.sourceBox.x1 * fit.scale,
        y1: fit.y + object.sourceBox.y1 * fit.scale,
      };
    }
    return mapped;
  });
}
