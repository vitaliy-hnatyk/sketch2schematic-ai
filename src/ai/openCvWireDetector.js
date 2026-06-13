let cvPromise;

async function getOpenCv() {
  if (cvPromise) return cvPromise;
  cvPromise = (async () => {
    const imported = await import('@techstark/opencv-js');
    const module = imported.default || imported;
    if (module instanceof Promise) return module;
    if (module?.Mat) return module;
    await new Promise((resolve, reject) => {
      const timeout = window.setTimeout(() => reject(new Error('OpenCV.js initialization timed out.')), 20000);
      module.onRuntimeInitialized = () => {
        window.clearTimeout(timeout);
        resolve();
      };
    });
    return module;
  })();
  return cvPromise;
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

export async function detectWiresWithOpenCv(image, options = {}, onState) {
  onState?.({ status: 'loading', message: 'Loading OpenCV.js WASM wire detector…' });
  const cv = await getOpenCv();
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const resizeScale = Math.min(1, 1400 / Math.max(sourceWidth, sourceHeight));
  const width = Math.max(1, Math.round(sourceWidth * resizeScale));
  const height = Math.max(1, Math.round(sourceHeight * resizeScale));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  context.drawImage(image, 0, 0, width, height);
  const imageData = context.getImageData(0, 0, width, height);
  const source = cv.matFromImageData(imageData);
  const gray = new cv.Mat();
  const blur = new cv.Mat();
  const binary = new cv.Mat();
  const edges = new cv.Mat();
  const lines = new cv.Mat();
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
    cv.Canny(binary, edges, 45, 135, 3, false);
    const minimumLength = Math.max(18, Number(options.minimumLineLength || Math.min(width, height) * 0.045));
    cv.HoughLinesP(
      edges,
      lines,
      1,
      Math.PI / 180,
      Math.max(18, Math.round(minimumLength * 0.55)),
      minimumLength,
      Math.max(5, Number(options.maxLineGap || 12)),
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
      raw.push({ x1: x1 / resizeScale, y1: y1 / resizeScale, x2: x2 / resizeScale, y2: y2 / resizeScale });
    }

    const merged = mergeSimilarLines(raw, Math.max(4, Number(options.tolerance || 8)));
    return {
      objects: merged.map(({ horizontal, ...line }) => ({
        type: 'wire',
        ...line,
        confidence: 0.9,
        detector: 'opencv',
        strokeIds: [],
      })),
      durationMs: performance.now() - started,
    };
  } finally {
    source.delete();
    gray.delete();
    blur.delete();
    binary.delete();
    edges.delete();
    lines.delete();
  }
}
