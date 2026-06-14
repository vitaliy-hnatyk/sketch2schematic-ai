import { createProcessingCanvas, imageDimensions } from './processingCanvas.js';

let cvPromise;
const resultCache = new WeakMap();

async function getOpenCv() {
  if (cvPromise) return cvPromise;
  cvPromise = (async () => {
    const imported = await import('@techstark/opencv-js');
    const module = imported.default || imported;
    if (module instanceof Promise) return module;
    if (module?.Mat) return module;
    await new Promise((resolve, reject) => {
      const timeout = globalThis.setTimeout(() => reject(new Error('OpenCV.js initialization timed out.')), 12000);
      module.onRuntimeInitialized = () => {
        globalThis.clearTimeout(timeout);
        resolve();
      };
    });
    return module;
  })();
  return cvPromise;
}

function cloneObjects(objects) {
  return objects.map((object) => ({ ...object }));
}

function mergeSimilarLines(lines, tolerance = 7) {
  const output = [];
  for (const line of lines) {
    const horizontal = Math.abs(line.x2 - line.x1) >= Math.abs(line.y2 - line.y1);
    let x1 = line.x1;
    let y1 = line.y1;
    let x2 = line.x2;
    let y2 = line.y2;
    if (horizontal) {
      const y = (y1 + y2) / 2;
      y1 = y2 = y;
      if (x1 > x2) [x1, x2] = [x2, x1];
    } else {
      const x = (x1 + x2) / 2;
      x1 = x2 = x;
      if (y1 > y2) [y1, y2] = [y2, y1];
    }
    const normalized = { x1, y1, x2, y2, horizontal };
    const match = output.find((candidate) => {
      if (candidate.horizontal !== horizontal) return false;
      if (horizontal) {
        const overlap = Math.min(candidate.x2, x2) - Math.max(candidate.x1, x1);
        return Math.abs(candidate.y1 - y1) <= tolerance && overlap >= -tolerance * 2;
      }
      const overlap = Math.min(candidate.y2, y2) - Math.max(candidate.y1, y1);
      return Math.abs(candidate.x1 - x1) <= tolerance && overlap >= -tolerance * 2;
    });
    if (!match) output.push(normalized);
    else if (horizontal) {
      match.x1 = Math.min(match.x1, x1);
      match.x2 = Math.max(match.x2, x2);
      match.y1 = match.y2 = (match.y1 + y1) / 2;
    } else {
      match.y1 = Math.min(match.y1, y1);
      match.y2 = Math.max(match.y2, y2);
      match.x1 = match.x2 = (match.x1 + x1) / 2;
    }
  }
  return output;
}

function cacheForImage(image) {
  let cache = resultCache.get(image);
  if (!cache) {
    cache = new Map();
    resultCache.set(image, cache);
  }
  return cache;
}

function collectRunLines(data, width, height, orientation, minimumLength, maxGap) {
  const lines = [];
  const outer = orientation === 'h' ? height : width;
  const inner = orientation === 'h' ? width : height;

  for (let outerIndex = 0; outerIndex < outer; outerIndex += 1) {
    let start = -1;
    let gap = 0;
    let lastHit = -1;

    for (let innerIndex = 0; innerIndex <= inner; innerIndex += 1) {
      const hit = innerIndex < inner && (
        orientation === 'h'
          ? data[outerIndex * width + innerIndex] > 0
          : data[innerIndex * width + outerIndex] > 0
      );

      if (hit) {
        if (start < 0) start = innerIndex;
        gap = 0;
        lastHit = innerIndex;
      } else if (start >= 0) {
        gap += 1;
        if (gap > maxGap || innerIndex === inner) {
          const end = lastHit;
          if (end - start + 1 >= minimumLength) {
            lines.push(orientation === 'h'
              ? { x1: start, y1: outerIndex, x2: end, y2: outerIndex }
              : { x1: outerIndex, y1: start, x2: outerIndex, y2: end });
          }
          start = -1;
          gap = 0;
          lastHit = -1;
        }
      }
    }
  }

  return lines;
}

function detectAxisAlignedWiresFromBinary(binary, width, height, options) {
  const minimumLength = Math.max(16, Math.round(Number(options.minimumLineLength || Math.min(width, height) * 0.055)));
  const maxGap = Math.max(2, Math.round(Number(options.maxLineGap || 8)));
  const horizontal = collectRunLines(binary.data, width, height, 'h', minimumLength, maxGap);
  const vertical = collectRunLines(binary.data, width, height, 'v', minimumLength, maxGap);
  return [...horizontal, ...vertical];
}

function detectHoughWires(cv, edges, resizeScale, width, height, options) {
  const lines = new cv.Mat();
  try {
    const requestedMinimum = Number(options.minimumLineLength || Math.min(width, height) * 0.045);
    const minimumLength = Math.max(18, requestedMinimum * resizeScale);
    cv.HoughLinesP(
      edges,
      lines,
      1,
      Math.PI / 180,
      Math.max(18, Math.round(minimumLength * 0.55)),
      minimumLength,
      Math.max(5, Number(options.maxLineGap || 12) * resizeScale),
    );

    const raw = [];
    for (let row = 0; row < lines.rows; row += 1) {
      const offset = row * 4;
      const x1 = lines.data32S[offset];
      const y1 = lines.data32S[offset + 1];
      const x2 = lines.data32S[offset + 2];
      const y2 = lines.data32S[offset + 3];
      const dx = Math.abs(x2 - x1);
      const dy = Math.abs(y2 - y1);
      if (dx < minimumLength && dy < minimumLength) continue;
      if (Math.min(dx, dy) > Math.max(dx, dy) * 0.16) continue;
      raw.push({ x1, y1, x2, y2 });
    }
    return raw;
  } finally {
    lines.delete();
  }
}

export async function detectWiresWithOpenCv(image, options = {}, onState) {
  const algorithm = options.algorithm === 'hough' ? 'hough' : 'scan';
  const maxDimension = Math.max(240, Number(options.maxDimension || (algorithm === 'hough' ? 900 : 420)));
  const tolerance = Math.max(4, Number(options.tolerance || 8));
  const cacheKey = JSON.stringify({
    algorithm,
    maxDimension,
    tolerance,
    minimumLineLength: Number(options.minimumLineLength || 0),
    maxLineGap: Number(options.maxLineGap || 12),
  });
  const cache = cacheForImage(image);
  const cached = cache.get(cacheKey);
  if (cached) {
    onState?.({ status: 'working', message: 'Using cached OpenCV Lite result…' });
    return { ...cached, objects: cloneObjects(cached.objects), durationMs: 0, cached: true };
  }

  onState?.({ status: 'loading', message: algorithm === 'hough' ? 'Loading OpenCV Hough detector…' : 'Loading OpenCV Lite scanner…' });
  const cv = await getOpenCv();
  const { width: sourceWidth, height: sourceHeight } = imageDimensions(image);
  const resizeScale = Math.min(1, maxDimension / Math.max(sourceWidth, sourceHeight));
  const width = Math.max(1, Math.round(sourceWidth * resizeScale));
  const height = Math.max(1, Math.round(sourceHeight * resizeScale));
  const canvas = createProcessingCanvas(width, height);
  const context = canvas.getContext('2d', { willReadFrequently: true });
  context.drawImage(image, 0, 0, width, height);
  const imageData = context.getImageData(0, 0, width, height);
  const source = cv.matFromImageData(imageData);
  const gray = new cv.Mat();
  const blur = new cv.Mat();
  const binary = new cv.Mat();
  const edges = algorithm === 'hough' ? new cv.Mat() : null;
  const started = performance.now();

  try {
    cv.cvtColor(source, gray, cv.COLOR_RGBA2GRAY);
    cv.GaussianBlur(gray, blur, new cv.Size(3, 3), 0, 0, cv.BORDER_DEFAULT);
    cv.adaptiveThreshold(
      blur,
      binary,
      255,
      cv.ADAPTIVE_THRESH_GAUSSIAN_C,
      cv.THRESH_BINARY_INV,
      25,
      9,
    );

    let raw;
    if (algorithm === 'hough') {
      cv.Canny(binary, edges, 45, 135, 3, false);
      raw = detectHoughWires(cv, edges, resizeScale, width, height, options);
    } else {
      raw = detectAxisAlignedWiresFromBinary(binary, width, height, {
        ...options,
        minimumLineLength: Number(options.minimumLineLength || Math.min(width, height) * 0.055),
        maxLineGap: Math.max(2, Number(options.maxLineGap || 8) * resizeScale),
      });
    }

    const scaled = raw.map((line) => ({
      x1: line.x1 / resizeScale,
      y1: line.y1 / resizeScale,
      x2: line.x2 / resizeScale,
      y2: line.y2 / resizeScale,
    }));
    const merged = mergeSimilarLines(scaled, tolerance);
    const result = {
      objects: merged.map(({ horizontal, ...line }) => ({
        type: 'wire',
        ...line,
        confidence: algorithm === 'hough' ? 0.9 : 0.84,
        detector: algorithm === 'hough' ? 'opencv-hough' : 'opencv-lite-scan',
        strokeIds: [],
      })),
      durationMs: performance.now() - started,
      cached: false,
      processedSize: { width, height },
      algorithm,
    };
    cache.set(cacheKey, result);
    return { ...result, objects: cloneObjects(result.objects) };
  } finally {
    source.delete();
    gray.delete();
    blur.delete();
    binary.delete();
    edges?.delete?.();
  }
}
