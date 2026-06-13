const PI_HALF = Math.PI / 2;

function bboxGap(a, b) {
  const dx = Math.max(0, a.x0 - b.x1, b.x0 - a.x1);
  const dy = Math.max(0, a.y0 - b.y1, b.y0 - a.y1);
  return Math.hypot(dx, dy);
}

function unionBox(a, b) {
  return {
    x0: Math.min(a.x0, b.x0),
    y0: Math.min(a.y0, b.y0),
    x1: Math.max(a.x1, b.x1),
    y1: Math.max(a.y1, b.y1),
  };
}

function finalizeBox(box) {
  return {
    ...box,
    w: box.x1 - box.x0 + 1,
    h: box.y1 - box.y0 + 1,
    cx: (box.x0 + box.x1) / 2,
    cy: (box.y0 + box.y1) / 2,
  };
}

export function buildColorMasks(rgba, width, height) {
  const wire = new Uint8Array(width * height);
  const component = new Uint8Array(width * height);
  let wirePixels = 0;
  let componentPixels = 0;

  for (let pixel = 0; pixel < width * height; pixel += 1) {
    const offset = pixel * 4;
    const r = rgba[offset];
    const g = rgba[offset + 1];
    const b = rgba[offset + 2];
    const a = rgba[offset + 3];
    if (a < 48) continue;

    const green = g >= 52 && g - r >= 20 && g - b >= 20 && g >= r * 1.25 && g >= b * 1.2;
    const red = r >= 58 && r - g >= 24 && r - b >= 20 && r >= g * 1.35 && r >= b * 1.25;
    if (green) {
      wire[pixel] = 1;
      wirePixels += 1;
    } else if (red) {
      component[pixel] = 1;
      componentPixels += 1;
    }
  }

  return { wire, component, wirePixels, componentPixels };
}

function connectedComponents(mask, width, height, minimumArea = 6) {
  const visited = new Uint8Array(mask.length);
  const components = [];
  const queue = new Int32Array(mask.length);

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

function groupNearbyComponents(components, width, height) {
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

  const gapLimit = Math.max(10, Math.round(Math.min(width, height) * 0.05));
  for (let i = 0; i < components.length; i += 1) {
    for (let j = i + 1; j < components.length; j += 1) {
      const a = components[i].box;
      const b = components[j].box;
      const gap = bboxGap(a, b);
      if (gap > gapLimit) continue;
      const horizontalOverlap = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0);
      const verticalOverlap = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0);
      const centerDistance = Math.hypot(a.cx - b.cx, a.cy - b.cy);
      const closeEnough = centerDistance < Math.max(a.w, a.h, b.w, b.h) * 2.2;
      if (horizontalOverlap >= -gapLimit || verticalOverlap >= -gapLimit || closeEnough) join(i, j);
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
      box,
      area: parts.reduce((sum, part) => sum + part.area, 0),
      pixels: parts.flatMap((part) => part.pixels),
      largest: parts.reduce((best, part) => (part.area > best.area ? part : best), parts[0]),
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
      return overlap >= Math.min(candidate.length, run.length) * 0.45;
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
  const minHorizontal = Math.max(14, box.w * 0.24);
  const minVertical = Math.max(14, box.h * 0.24);
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

function zigzagTransitions(mask, width, box, horizontal) {
  const values = [];
  if (horizontal) {
    for (let x = box.x0; x <= box.x1; x += 1) {
      let sum = 0;
      let count = 0;
      for (let y = box.y0; y <= box.y1; y += 1) {
        if (mask[y * width + x]) {
          sum += y;
          count += 1;
        }
      }
      if (count) values.push(sum / count - box.cy);
    }
  } else {
    for (let y = box.y0; y <= box.y1; y += 1) {
      let sum = 0;
      let count = 0;
      for (let x = box.x0; x <= box.x1; x += 1) {
        if (mask[y * width + x]) {
          sum += x;
          count += 1;
        }
      }
      if (count) values.push(sum / count - box.cx);
    }
  }

  const threshold = Math.max(1.8, (horizontal ? box.h : box.w) * 0.1);
  let lastSign = 0;
  let transitions = 0;
  for (const value of values) {
    const sign = value > threshold ? 1 : value < -threshold ? -1 : 0;
    if (!sign) continue;
    if (lastSign && sign !== lastSign) transitions += 1;
    lastSign = sign;
  }
  return transitions;
}

function detectBattery(group, mask, width) {
  const body = group.box;
  const bands = strongBands(mask, width, body);
  const candidate = (items, perpendicularSpan, rotation) => {
    const sorted = items.slice().sort((a, b) => b.length - a.length);
    if (sorted.length < 2) return null;
    for (let i = 0; i < sorted.length; i += 1) {
      for (let j = i + 1; j < sorted.length; j += 1) {
        const a = sorted[i];
        const b = sorted[j];
        const separation = Math.abs(a.coord - b.coord);
        const ratio = Math.max(a.length, b.length) / Math.max(1, Math.min(a.length, b.length));
        if (separation >= Math.max(7, perpendicularSpan * 0.12)
          && separation <= perpendicularSpan * 0.72
          && ratio >= 1.28) {
          return { rotation, a, b, ratio, separation };
        }
      }
    }
    return null;
  };
  return candidate(bands.horizontal, body.h, PI_HALF)
    || candidate(bands.vertical, body.w, 0);
}

function detectResistor(group, mask, width) {
  const box = group.largest.box;
  const horizontal = box.w >= box.h;
  const aspect = horizontal ? box.w / Math.max(1, box.h) : box.h / Math.max(1, box.w);
  if (aspect < 2.05) return null;
  const transitions = zigzagTransitions(mask, width, box, horizontal);
  if (transitions < 4) return null;
  return { rotation: horizontal ? 0 : PI_HALF, transitions };
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

function detectDiodeOrLed(group, mask, width, height) {
  const body = group.largest;
  const box = body.box;
  const aspect = box.w / Math.max(1, box.h);
  if (aspect < 0.25 || aspect > 3.8 || Math.max(box.w, box.h) < 22) return null;
  const bands = strongBands(mask, width, box);
  const strongestHorizontal = bands.horizontal.sort((a, b) => b.length - a.length)[0];
  const strongestVertical = bands.vertical.sort((a, b) => b.length - a.length)[0];
  const horizontalScore = strongestHorizontal ? strongestHorizontal.length / box.w : 0;
  const verticalScore = strongestVertical ? strongestVertical.length / box.h : 0;
  const strongest = Math.max(horizontalScore, verticalScore);
  if (strongest < 0.42) return null;
  const diagonalScore = diagonalNeighborScore(mask, width, height, body.pixels);
  if (diagonalScore < 0.23) return null;
  const rotation = horizontalScore >= verticalScore ? PI_HALF : 0;
  const type = group.parts.length >= 2 ? 'led' : 'diode';
  return { type, rotation, diagonalScore, barScore: strongest };
}

function classifyComponentGroup(group, mask, width, height) {
  const battery = detectBattery(group, mask, width);
  if (battery) {
    const body = group.box;
    return {
      type: 'battery',
      x: body.cx,
      y: body.cy,
      rot: battery.rotation,
      length: Math.max(90, battery.rotation ? body.h : body.w),
      confidence: Math.min(0.98, 0.78 + Math.min(0.16, (battery.ratio - 1.28) * 0.16)),
      strokeIds: [],
      sourceBox: group.box,
    };
  }

  const resistor = detectResistor(group, mask, width);
  if (resistor) {
    const body = group.largest.box;
    return {
      type: 'resistor',
      x: body.cx,
      y: body.cy,
      rot: resistor.rotation,
      length: Math.max(100, resistor.rotation ? body.h : body.w),
      confidence: Math.min(0.98, 0.72 + resistor.transitions * 0.035),
      strokeIds: [],
      sourceBox: group.box,
    };
  }

  const diode = detectDiodeOrLed(group, mask, width, height);
  if (diode) {
    const body = group.largest.box;
    return {
      type: diode.type,
      x: body.cx,
      y: body.cy,
      rot: diode.rotation,
      length: Math.max(90, diode.rotation ? body.h : body.w),
      confidence: Math.min(0.96, 0.68 + diode.barScore * 0.17 + diode.diagonalScore * 0.17),
      strokeIds: [],
      sourceBox: group.box,
    };
  }

  const box = group.box;
  if (Math.max(box.w, box.h) < 10 || group.area < 15) return null;
  return {
    type: 'unknown',
    x: box.cx,
    y: box.cy,
    rot: 0,
    confidence: 0.28,
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
      if (Math.abs(candidateCoord - coord) > 4) continue;
      const candidateStart = horizontal ? Math.min(candidate.x1, candidate.x2) : Math.min(candidate.y1, candidate.y2);
      const candidateEnd = horizontal ? Math.max(candidate.x1, candidate.x2) : Math.max(candidate.y1, candidate.y2);
      const overlap = Math.min(end, candidateEnd) - Math.max(start, candidateStart) + 1;
      const shorter = Math.min(end - start + 1, candidateEnd - candidateStart + 1);
      if (overlap >= shorter * 0.55) {
        match = candidate;
        break;
      }
    }
    if (!match) {
      output.push({ ...line, samples: 1 });
    } else {
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

function extractColorWires(mask, width, height) {
  const minimumRun = Math.max(12, Math.round(Math.min(width, height) * 0.035));
  const horizontal = mergeParallelLines(scanRuns(mask, width, height, true, minimumRun), true);
  const vertical = mergeParallelLines(scanRuns(mask, width, height, false, minimumRun), false);
  return horizontal.concat(vertical).map((line) => ({
    type: 'wire',
    ...line,
    confidence: 0.94,
    strokeIds: [],
  }));
}

export function recognizeColoredSchematic(rgba, width, height) {
  const masks = buildColorMasks(rgba, width, height);
  const minimumColoredPixels = Math.max(24, Math.round(width * height * 0.00012));
  if (masks.wirePixels < minimumColoredPixels && masks.componentPixels < minimumColoredPixels) {
    return {
      colorMode: false,
      objects: [],
      diagnostics: {
        wirePixels: masks.wirePixels,
        componentPixels: masks.componentPixels,
        symbols: 0,
        wires: 0,
      },
    };
  }

  const components = connectedComponents(masks.component, width, height, 6);
  const groups = groupNearbyComponents(components, width, height);
  const symbols = groups
    .map((group) => classifyComponentGroup(group, masks.component, width, height))
    .filter(Boolean);
  const wires = extractColorWires(masks.wire, width, height);

  return {
    colorMode: true,
    objects: [...wires, ...symbols],
    diagnostics: {
      wirePixels: masks.wirePixels,
      componentPixels: masks.componentPixels,
      connectedComponents: components.length,
      componentGroups: groups.length,
      symbols: symbols.length,
      wires: wires.length,
      types: symbols.reduce((counts, symbol) => {
        counts[symbol.type] = (counts[symbol.type] || 0) + 1;
        return counts;
      }, {}),
    },
  };
}
