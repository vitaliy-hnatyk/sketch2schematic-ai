const PI_HALF = Math.PI / 2;

function finalizeBox(box) {
  return {
    ...box,
    w: box.x1 - box.x0 + 1,
    h: box.y1 - box.y0 + 1,
    cx: (box.x0 + box.x1) / 2,
    cy: (box.y0 + box.y1) / 2,
  };
}

function unionBox(a, b) {
  return {
    x0: Math.min(a.x0, b.x0),
    y0: Math.min(a.y0, b.y0),
    x1: Math.max(a.x1, b.x1),
    y1: Math.max(a.y1, b.y1),
  };
}

function bboxGap(a, b) {
  const dx = Math.max(0, a.x0 - b.x1, b.x0 - a.x1);
  const dy = Math.max(0, a.y0 - b.y1, b.y0 - a.y1);
  return Math.hypot(dx, dy);
}

export function rgbaToMonochrome(rgba, width, height) {
  const integral = new Uint32Array((width + 1) * (height + 1));
  const luma = new Uint8Array(width * height);
  for (let y = 1; y <= height; y += 1) {
    let row = 0;
    for (let x = 1; x <= width; x += 1) {
      const offset = ((y - 1) * width + x - 1) * 4;
      const lum = (54 * rgba[offset] + 183 * rgba[offset + 1] + 19 * rgba[offset + 2]) >> 8;
      luma[(y - 1) * width + (x - 1)] = lum;
      row += lum;
      integral[y * (width + 1) + x] = integral[(y - 1) * (width + 1) + x] + row;
    }
  }

  const binary = new Uint8Array(width * height);
  const radius = Math.max(8, Math.round(Math.min(width, height) * 0.018));
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const x0 = Math.max(0, x - radius);
      const x1 = Math.min(width - 1, x + radius);
      const y0 = Math.max(0, y - radius);
      const y1 = Math.min(height - 1, y + radius);
      const sum =
        integral[(y1 + 1) * (width + 1) + x1 + 1] -
        integral[y0 * (width + 1) + x1 + 1] -
        integral[(y1 + 1) * (width + 1) + x0] +
        integral[y0 * (width + 1) + x0];
      const mean = sum / ((x1 - x0 + 1) * (y1 - y0 + 1));
      const lum = luma[y * width + x];
      binary[y * width + x] = lum < mean - 16 ? 1 : 0;
    }
  }

  return { binary, luma };
}

function connectedComponents(mask, width, height, minimumArea = 6) {
  const visited = new Uint8Array(mask.length);
  const queue = new Int32Array(mask.length);
  const components = [];

  for (let start = 0; start < mask.length; start += 1) {
    if (!mask[start] || visited[start]) continue;
    let head = 0;
    let tail = 0;
    queue[tail++] = start;
    visited[start] = 1;
    const pixels = [];
    let x0 = width;
    let y0 = height;
    let x1 = 0;
    let y1 = 0;

    while (head < tail) {
      const index = queue[head++];
      pixels.push(index);
      const x = index % width;
      const y = Math.floor(index / width);
      x0 = Math.min(x0, x);
      y0 = Math.min(y0, y);
      x1 = Math.max(x1, x);
      y1 = Math.max(y1, y);
      for (let dy = -1; dy <= 1; dy += 1) {
        const yy = y + dy;
        if (yy < 0 || yy >= height) continue;
        for (let dx = -1; dx <= 1; dx += 1) {
          if (!dx && !dy) continue;
          const xx = x + dx;
          if (xx < 0 || xx >= width) continue;
          const next = yy * width + xx;
          if (mask[next] && !visited[next]) {
            visited[next] = 1;
            queue[tail++] = next;
          }
        }
      }
    }

    if (pixels.length >= minimumArea) {
      components.push({ pixels, area: pixels.length, box: finalizeBox({ x0, y0, x1, y1 }) });
    }
  }

  return components;
}

function groupNearbyComponents(components, width, height, options = {}) {
  const parent = components.map((_, index) => index);
  const find = (value) => {
    let root = value;
    while (parent[root] !== root) root = parent[root];
    while (parent[value] !== value) {
      const next = parent[value];
      parent[value] = root;
      value = next;
    }
    return root;
  };
  const join = (a, b) => {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent[rb] = ra;
  };
  const tolerance = Math.max(2, Number(options.tolerance || 10));
  const gapLimit = Math.max(6, Math.min(36, Math.round(Math.max(Math.min(width, height) * 0.014, tolerance * 1.35))));
  for (let i = 0; i < components.length; i += 1) {
    for (let j = i + 1; j < components.length; j += 1) {
      const a = components[i].box;
      const b = components[j].box;
      const gap = bboxGap(a, b);
      if (gap > gapLimit) continue;
      const centerDistance = Math.hypot(a.cx - b.cx, a.cy - b.cy);
      if (centerDistance < Math.max(a.w, a.h, b.w, b.h) * 2.1) join(i, j);
    }
  }
  const groups = new Map();
  components.forEach((component, index) => {
    const root = find(index);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(component);
  });
  return [...groups.values()].map((parts) => {
    const box = finalizeBox(parts.reduce((current, part) => unionBox(current, part.box), parts[0].box));
    return {
      parts,
      largest: parts.reduce((best, part) => (part.area > best.area ? part : best), parts[0]),
      area: parts.reduce((sum, part) => sum + part.area, 0),
      pixels: parts.flatMap((part) => part.pixels),
      box,
    };
  });
}

function longestRunForRow(mask, width, box, y) {
  let bestStart = -1;
  let bestEnd = -1;
  let start = -1;
  let gap = 0;
  for (let x = box.x0; x <= box.x1 + 1; x += 1) {
    const hit = x <= box.x1 && mask[y * width + x];
    if (hit) {
      if (start < 0) start = x;
      gap = 0;
    } else if (start >= 0) {
      gap += 1;
      if (gap > 1) {
        const end = x - gap;
        if (end - start > bestEnd - bestStart) {
          bestStart = start;
          bestEnd = end;
        }
        start = -1;
        gap = 0;
      }
    }
  }
  return bestStart < 0 ? null : { start: bestStart, end: bestEnd, length: bestEnd - bestStart + 1, coord: y };
}

function longestRunForColumn(mask, width, box, x) {
  let bestStart = -1;
  let bestEnd = -1;
  let start = -1;
  let gap = 0;
  for (let y = box.y0; y <= box.y1 + 1; y += 1) {
    const hit = y <= box.y1 && mask[y * width + x];
    if (hit) {
      if (start < 0) start = y;
      gap = 0;
    } else if (start >= 0) {
      gap += 1;
      if (gap > 1) {
        const end = y - gap;
        if (end - start > bestEnd - bestStart) {
          bestStart = start;
          bestEnd = end;
        }
        start = -1;
        gap = 0;
      }
    }
  }
  return bestStart < 0 ? null : { start: bestStart, end: bestEnd, length: bestEnd - bestStart + 1, coord: x };
}

function mergeRunBands(runs, coordinateTolerance = 3) {
  const sorted = runs.filter(Boolean).sort((a, b) => a.coord - b.coord || b.length - a.length);
  const bands = [];
  for (const run of sorted) {
    const band = bands.find((candidate) => {
      if (Math.abs(candidate.coord - run.coord) > coordinateTolerance) return false;
      const overlap = Math.min(candidate.end, run.end) - Math.max(candidate.start, run.start) + 1;
      return overlap >= Math.min(candidate.length, run.length) * 0.42;
    });
    if (!band) {
      bands.push({ ...run, samples: 1 });
      continue;
    }
    band.coord = (band.coord * band.samples + run.coord) / (band.samples + 1);
    band.samples += 1;
    if (run.length > band.length) {
      band.start = run.start;
      band.end = run.end;
      band.length = run.length;
    }
  }
  return bands;
}

function strongBands(mask, width, box) {
  const horizontal = [];
  const vertical = [];
  const minHorizontal = Math.max(10, box.w * 0.22);
  const minVertical = Math.max(10, box.h * 0.22);
  for (let y = box.y0; y <= box.y1; y += 1) {
    const run = longestRunForRow(mask, width, box, y);
    if (run && run.length >= minHorizontal) horizontal.push(run);
  }
  for (let x = box.x0; x <= box.x1; x += 1) {
    const run = longestRunForColumn(mask, width, box, x);
    if (run && run.length >= minVertical) vertical.push(run);
  }
  return {
    horizontal: mergeRunBands(horizontal),
    vertical: mergeRunBands(vertical),
  };
}

function diagonalNeighborScore(mask, width, height, pixels) {
  let diagonal = 0;
  let axial = 0;
  for (const index of pixels) {
    const x = index % width;
    const y = Math.floor(index / width);
    for (const [dx, dy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const xx = x + dx;
      const yy = y + dy;
      if (xx >= 0 && xx < width && yy >= 0 && yy < height && mask[yy * width + xx]) diagonal += 1;
    }
    for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      const xx = x + dx;
      const yy = y + dy;
      if (xx >= 0 && xx < width && yy >= 0 && yy < height && mask[yy * width + xx]) axial += 1;
    }
  }
  return diagonal / Math.max(1, axial + diagonal);
}

function density(group) {
  return group.area / Math.max(1, group.box.w * group.box.h);
}

function classifyParallelPlates(group, mask, width) {
  const box = group.box;
  const bands = strongBands(mask, width, box);
  const h = bands.horizontal.slice().sort((a, b) => b.length - a.length);
  const v = bands.vertical.slice().sort((a, b) => b.length - a.length);
  const pick = (items, span, rot) => {
    if (items.length < 2) return null;
    for (let i = 0; i < items.length; i += 1) {
      for (let j = i + 1; j < items.length; j += 1) {
        const a = items[i];
        const b = items[j];
        const separation = Math.abs(a.coord - b.coord);
        if (separation < Math.max(5, span * 0.12) || separation > span * 0.75) continue;
        const ratio = Math.max(a.length, b.length) / Math.max(1, Math.min(a.length, b.length));
        return { a, b, ratio, rot };
      }
    }
    return null;
  };
  return pick(h, box.h, PI_HALF) || pick(v, box.w, 0);
}

function classifyRectangular(group) {
  const box = group.largest.box;
  const aspect = Math.max(box.w, box.h) / Math.max(1, Math.min(box.w, box.h));
  const fill = density(group);
  const horizontal = box.w >= box.h;
  if (aspect < 1.2 || aspect > 6.5) return null;
  if (fill > 0.7) return null;
  if (Math.min(box.w, box.h) < 6) return null;
  const smallDimension = Math.min(box.w, box.h);
  const longDimension = Math.max(box.w, box.h);
  const rotation = horizontal ? 0 : PI_HALF;
  if (smallDimension <= 18 && longDimension <= 46) return { type: 'fuse', rotation, confidence: 0.74 };
  return { type: 'resistor', rotation, confidence: 0.72 };
}

function classifyDiodeFamily(group, mask, width, height) {
  const box = group.box;
  const bands = strongBands(mask, width, box);
  const strongestHorizontal = bands.horizontal.slice().sort((a, b) => b.length - a.length)[0];
  const strongestVertical = bands.vertical.slice().sort((a, b) => b.length - a.length)[0];
  const hScore = strongestHorizontal ? strongestHorizontal.length / Math.max(1, box.w) : 0;
  const vScore = strongestVertical ? strongestVertical.length / Math.max(1, box.h) : 0;
  const strongest = Math.max(hScore, vScore);
  const diag = diagonalNeighborScore(mask, width, height, group.pixels);
  if (strongest < 0.32 || diag < 0.15) return null;
  const rotation = hScore >= vScore ? PI_HALF : 0;

  const hasManyParts = group.parts.length >= 3;
  const aspect = Math.max(box.w, box.h) / Math.max(1, Math.min(box.w, box.h));
  if (hasManyParts && aspect < 3.2) return { type: 'scr', rotation, confidence: 0.68 };

  // A zener often adds a short skewed cathode stroke, making the component a bit denser and more multi-part.
  if (group.parts.length >= 2 && density(group) < 0.42) {
    return { type: 'zener', rotation, confidence: 0.76 };
  }
  return { type: 'diode', rotation, confidence: 0.74 };
}

function classifyComponentGroup(group, mask, width, height) {
  const box = group.box;
  if (group.area < 12 || Math.max(box.w, box.h) < 8) return null;

  // Filter likely text early.
  if ((box.w < 10 && box.h < 10) || (box.h < 9 && box.w < 24) || (box.w < 9 && box.h < 24)) return null;

  const parallel = classifyParallelPlates(group, mask, width);
  if (parallel) {
    const type = parallel.ratio >= 1.24 ? 'battery' : 'capacitor';
    return {
      type,
      x: box.cx,
      y: box.cy,
      rot: parallel.rot,
      length: Math.max(type === 'battery' ? 90 : 100, parallel.rot ? box.h : box.w),
      confidence: type === 'battery' ? 0.84 : 0.8,
      strokeIds: [],
      sourceBox: box,
    };
  }

  const diode = classifyDiodeFamily(group, mask, width, height);
  if (diode) {
    return {
      type: diode.type,
      x: box.cx,
      y: box.cy,
      rot: diode.rotation,
      length: Math.max(96, diode.rotation ? box.h : box.w),
      confidence: diode.confidence,
      strokeIds: [],
      sourceBox: box,
    };
  }

  const rect = classifyRectangular(group);
  if (rect) {
    return {
      type: rect.type,
      x: box.cx,
      y: box.cy,
      rot: rect.rotation,
      length: Math.max(80, rect.rotation ? box.h : box.w),
      confidence: rect.confidence,
      strokeIds: [],
      sourceBox: box,
    };
  }

  return {
    type: 'unknown',
    x: box.cx,
    y: box.cy,
    rot: 0,
    confidence: 0.22,
    strokeIds: [],
    box: { x0: box.x0, y0: box.y0, x1: box.x1, y1: box.y1 },
  };
}

function scanRuns(mask, width, height, horizontal, minimumRun) {
  const lines = [];
  const primaryMax = horizontal ? height : width;
  const secondaryMax = horizontal ? width : height;
  for (let primary = 0; primary < primaryMax; primary += 1) {
    let start = -1;
    let gap = 0;
    for (let secondary = 0; secondary <= secondaryMax; secondary += 1) {
      const x = horizontal ? secondary : primary;
      const y = horizontal ? primary : secondary;
      const hit = secondary < secondaryMax && mask[y * width + x];
      if (hit) {
        if (start < 0) start = secondary;
        gap = 0;
      } else if (start >= 0) {
        gap += 1;
        if (gap > 1) {
          const end = secondary - gap;
          if (end - start + 1 >= minimumRun) {
            lines.push(horizontal
              ? { x1: start, y1: primary, x2: end, y2: primary }
              : { x1: primary, y1: start, x2: primary, y2: end });
          }
          start = -1;
          gap = 0;
        }
      }
    }
  }
  return lines;
}

function mergeParallelLines(lines, horizontal) {
  const sorted = lines.slice().sort((a, b) => {
    const ca = horizontal ? a.y1 : a.x1;
    const cb = horizontal ? b.y1 : b.x1;
    return ca - cb;
  });
  const output = [];
  for (const line of sorted) {
    const start = horizontal ? Math.min(line.x1, line.x2) : Math.min(line.y1, line.y2);
    const end = horizontal ? Math.max(line.x1, line.x2) : Math.max(line.y1, line.y2);
    const coord = horizontal ? line.y1 : line.x1;
    let match = null;
    for (const candidate of output) {
      const candidateCoord = horizontal ? candidate.y1 : candidate.x1;
      if (Math.abs(candidateCoord - coord) > 3) continue;
      const candidateStart = horizontal ? Math.min(candidate.x1, candidate.x2) : Math.min(candidate.y1, candidate.y2);
      const candidateEnd = horizontal ? Math.max(candidate.x1, candidate.x2) : Math.max(candidate.y1, candidate.y2);
      const overlap = Math.min(end, candidateEnd) - Math.max(start, candidateStart) + 1;
      const shorter = Math.min(end - start + 1, candidateEnd - candidateStart + 1);
      if (overlap >= shorter * 0.5) {
        match = candidate;
        break;
      }
    }
    if (!match) output.push({ ...line, samples: 1 });
    else {
      if (horizontal) {
        match.x1 = Math.min(match.x1, start);
        match.x2 = Math.max(match.x2, end);
        match.y1 = match.y2 = (match.y1 * match.samples + coord) / (match.samples + 1);
      } else {
        match.y1 = Math.min(match.y1, start);
        match.y2 = Math.max(match.y2, end);
        match.x1 = match.x2 = (match.x1 * match.samples + coord) / (match.samples + 1);
      }
      match.samples += 1;
    }
  }
  return output.map(({ samples, ...line }) => line);
}

function extractWires(mask, width, height) {
  const minimumRun = Math.max(12, Math.round(Math.min(width, height) * 0.04));
  const horizontal = mergeParallelLines(scanRuns(mask, width, height, true, minimumRun), true);
  const vertical = mergeParallelLines(scanRuns(mask, width, height, false, minimumRun), false);
  return [...horizontal, ...vertical].map((line) => ({
    type: 'wire',
    ...line,
    confidence: 0.88,
    strokeIds: [],
  }));
}

function clearWireMask(binary, width, height, wires, options = {}) {
  const component = binary.slice();
  const tolerance = Math.max(2, Number(options.tolerance || 10));
  const eraseRadius = Math.max(2, Math.min(6, Math.round(tolerance * 0.28)));
  for (const wire of wires) {
    const horizontal = Math.abs(wire.y2 - wire.y1) <= Math.abs(wire.x2 - wire.x1);
    if (horizontal) {
      const y = Math.round((wire.y1 + wire.y2) / 2);
      const x0 = Math.max(0, Math.round(Math.min(wire.x1, wire.x2)));
      const x1 = Math.min(width - 1, Math.round(Math.max(wire.x1, wire.x2)));
      for (let x = x0; x <= x1; x += 1) {
        for (let dy = -eraseRadius; dy <= eraseRadius; dy += 1) {
          const yy = y + dy;
          if (yy < 0 || yy >= height) continue;
          component[yy * width + x] = 0;
        }
      }
    } else {
      const x = Math.round((wire.x1 + wire.x2) / 2);
      const y0 = Math.max(0, Math.round(Math.min(wire.y1, wire.y2)));
      const y1 = Math.min(height - 1, Math.round(Math.max(wire.y1, wire.y2)));
      for (let y = y0; y <= y1; y += 1) {
        for (let dx = -eraseRadius; dx <= eraseRadius; dx += 1) {
          const xx = x + dx;
          if (xx < 0 || xx >= width) continue;
          component[y * width + xx] = 0;
        }
      }
    }
  }
  return component;
}

function dedupeObjects(objects) {
  const output = [];
  for (const object of objects) {
    const duplicate = output.some((candidate) => {
      if (candidate.type !== object.type) return false;
      if (object.type === 'wire') {
        return Math.abs(candidate.x1 - object.x1) < 6
          && Math.abs(candidate.y1 - object.y1) < 6
          && Math.abs(candidate.x2 - object.x2) < 6
          && Math.abs(candidate.y2 - object.y2) < 6;
      }
      return Math.hypot(candidate.x - object.x, candidate.y - object.y) < 10;
    });
    if (!duplicate) output.push(object);
  }
  return output;
}

export function recognizeMonochromeSchematic(rgba, width, height, options = {}) {
  const { binary } = rgbaToMonochrome(rgba, width, height);
  const wires = extractWires(binary, width, height);
  const componentMask = clearWireMask(binary, width, height, wires, options);
  const components = connectedComponents(componentMask, width, height, Math.max(12, Math.round(width * height * 0.00005)));
  const filtered = components.filter((component) => {
    const box = component.box;
    if (component.area < 12) return false;
    // Remove most isolated text glyphs and specks.
    if ((box.w <= 16 && box.h <= 16) || (box.w <= 11 && box.h <= 26) || (box.h <= 11 && box.w <= 26)) return false;
    return true;
  });
  const groups = groupNearbyComponents(filtered, width, height, options);
  const symbols = groups
    .map((group) => classifyComponentGroup(group, componentMask, width, height))
    .filter(Boolean);

  return {
    colorMode: false,
    objects: dedupeObjects([...wires, ...symbols]),
    diagnostics: {
      monochromeConverted: true,
      connectedComponents: components.length,
      componentGroups: groups.length,
      wires: wires.length,
      symbols: symbols.length,
      appliedTolerance: Number(options.tolerance || 10),
      types: symbols.reduce((counts, symbol) => {
        counts[symbol.type] = (counts[symbol.type] || 0) + 1;
        return counts;
      }, {}),
    },
  };
}
