const PI_HALF = Math.PI / 2;

function adaptiveBinary(rgba, width, height) {
  const luma = new Uint8Array(width * height);
  const integral = new Uint32Array((width + 1) * (height + 1));
  for (let y = 1; y <= height; y += 1) {
    let row = 0;
    for (let x = 1; x <= width; x += 1) {
      const offset = ((y - 1) * width + x - 1) * 4;
      const value = (54 * rgba[offset] + 183 * rgba[offset + 1] + 19 * rgba[offset + 2]) >> 8;
      luma[(y - 1) * width + x - 1] = value;
      row += value;
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
      const value = luma[y * width + x];
      binary[y * width + x] = value < mean - 16 || value < 190 ? 1 : 0;
    }
  }
  return binary;
}

function longestRun(values, maxGap = 2) {
  let bestLength = 0;
  let bestStart = -1;
  let bestEnd = -1;
  let start = -1;
  let gap = 0;
  for (let index = 0; index <= values.length; index += 1) {
    const hit = index < values.length && values[index];
    if (hit) {
      if (start < 0) start = index;
      gap = 0;
    } else if (start >= 0) {
      gap += 1;
      if (gap > maxGap || index === values.length) {
        const end = index === values.length ? values.length - 1 : index - gap;
        const length = end - start + 1;
        if (length > bestLength) {
          bestLength = length;
          bestStart = start;
          bestEnd = end;
        }
        start = -1;
        gap = 0;
      }
    }
  }
  return { length: bestLength, start: bestStart, end: bestEnd };
}

function clusterIndices(indices, weights) {
  const groups = [];
  if (!indices.length) return groups;
  let current = [indices[0]];
  for (let i = 1; i < indices.length; i += 1) {
    if (indices[i] <= indices[i - 1] + 1) current.push(indices[i]);
    else {
      groups.push(current);
      current = [indices[i]];
    }
  }
  groups.push(current);
  return groups.map((group) => {
    let weighted = 0;
    let total = 0;
    for (const value of group) {
      const weight = Math.max(1, weights[value] || 1);
      weighted += value * weight;
      total += weight;
    }
    return Math.round(weighted / total);
  });
}

function detectAxes(binary, width, height) {
  const rowRuns = new Int32Array(height);
  const colRuns = new Int32Array(width);
  const row = new Uint8Array(width);
  const col = new Uint8Array(height);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) row[x] = binary[y * width + x];
    rowRuns[y] = longestRun(row).length;
  }
  for (let x = 0; x < width; x += 1) {
    for (let y = 0; y < height; y += 1) col[y] = binary[y * width + x];
    colRuns[x] = longestRun(col).length;
  }

  const minHorizontal = Math.max(64, Math.round(width * 0.17));
  const minVertical = Math.max(82, Math.round(height * 0.20));
  const horizontalCandidates = [];
  const verticalCandidates = [];
  for (let y = 0; y < height; y += 1) if (rowRuns[y] >= minHorizontal) horizontalCandidates.push(y);
  for (let x = 0; x < width; x += 1) if (colRuns[x] >= minVertical) verticalCandidates.push(x);

  const horizontal = clusterIndices(horizontalCandidates, rowRuns);
  let vertical = clusterIndices(verticalCandidates, colRuns);
  vertical = vertical.filter((x) => {
    const nearRight = x > width * 0.94;
    const almostFullHeight = colRuns[x] > height * 0.90;
    return !(nearRight && almostFullHeight);
  });

  return { horizontal, vertical, rowRuns, colRuns };
}

function connectedComponents(mask, width, height, minimumArea = 4) {
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
      x1 = Math.max(x1, x);
      y0 = Math.min(y0, y);
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
      components.push({
        pixels,
        area: pixels.length,
        box: {
          x0,
          y0,
          x1,
          y1,
          w: x1 - x0 + 1,
          h: y1 - y0 + 1,
          cx: (x0 + x1) / 2,
          cy: (y0 + y1) / 2,
        },
      });
    }
  }
  return components;
}

function eraseAxisBands(binary, width, height, horizontal, vertical, radius = 2) {
  const residual = binary.slice();
  for (const y of horizontal) {
    for (let yy = Math.max(0, y - radius); yy <= Math.min(height - 1, y + radius); yy += 1) {
      residual.fill(0, yy * width, yy * width + width);
    }
  }
  for (const x of vertical) {
    for (let y = 0; y < height; y += 1) {
      for (let xx = Math.max(0, x - radius); xx <= Math.min(width - 1, x + radius); xx += 1) {
        residual[y * width + xx] = 0;
      }
    }
  }
  return residual;
}

function distanceToAxis(box, orientation, axis) {
  if (orientation === 'h') {
    if (box.y0 <= axis && axis <= box.y1) return 0;
    return Math.min(Math.abs(box.y0 - axis), Math.abs(box.y1 - axis));
  }
  if (box.x0 <= axis && axis <= box.x1) return 0;
  return Math.min(Math.abs(box.x0 - axis), Math.abs(box.x1 - axis));
}

function groupAxisFragments(components, orientation, axis, tolerance = 7, gap = 12) {
  const parts = components
    .filter((component) => distanceToAxis(component.box, orientation, axis) <= tolerance)
    .sort((a, b) => orientation === 'h' ? a.box.x0 - b.box.x0 : a.box.y0 - b.box.y0);

  const grouped = [];
  for (const part of parts) {
    const start = orientation === 'h' ? part.box.x0 : part.box.y0;
    const end = orientation === 'h' ? part.box.x1 : part.box.y1;
    const last = grouped[grouped.length - 1];
    if (!last || start > last.end + gap) {
      grouped.push({ parts: [part], start, end });
    } else {
      last.parts.push(part);
      last.end = Math.max(last.end, end);
    }
  }

  return grouped.map((group) => {
    const x0 = Math.min(...group.parts.map((part) => part.box.x0));
    const y0 = Math.min(...group.parts.map((part) => part.box.y0));
    const x1 = Math.max(...group.parts.map((part) => part.box.x1));
    const y1 = Math.max(...group.parts.map((part) => part.box.y1));
    return {
      orientation,
      axis,
      parts: group.parts,
      area: group.parts.reduce((sum, part) => sum + part.area, 0),
      box: {
        x0,
        y0,
        x1,
        y1,
        w: x1 - x0 + 1,
        h: y1 - y0 + 1,
        cx: (x0 + x1) / 2,
        cy: (y0 + y1) / 2,
      },
    };
  });
}

function axisSignal(binary, width, height, orientation, axis, radius = 2) {
  const length = orientation === 'h' ? width : height;
  const signal = new Uint8Array(length);
  for (let position = 0; position < length; position += 1) {
    let hit = false;
    for (let offset = -radius; offset <= radius && !hit; offset += 1) {
      const x = orientation === 'h' ? position : axis + offset;
      const y = orientation === 'h' ? axis + offset : position;
      if (x >= 0 && x < width && y >= 0 && y < height && binary[y * width + x]) hit = true;
    }
    signal[position] = hit ? 1 : 0;
  }
  return signal;
}

function sideSupport(signal, start, end) {
  const sample = (a, b) => {
    const from = Math.max(0, Math.floor(a));
    const to = Math.min(signal.length - 1, Math.ceil(b));
    if (to < from) return 0;
    let hits = 0;
    for (let i = from; i <= to; i += 1) hits += signal[i];
    return hits / Math.max(1, to - from + 1);
  };
  const left = sample(start - 22, start - 5);
  const right = sample(end + 5, end + 22);
  const nearLeft = sample(start - 8, start - 2);
  const nearRight = sample(end + 2, end + 8);
  return {
    left,
    right,
    nearLeft,
    nearRight,
    both: left >= 0.34 && right >= 0.34 && nearLeft >= 0.22 && nearRight >= 0.22,
  };
}

function bandsAlongPerpendicular(binary, width, height, candidate) {
  const { box, orientation } = candidate;
  const runs = [];
  if (orientation === 'v') {
    for (let y = box.y0; y <= box.y1; y += 1) {
      const values = new Uint8Array(box.w);
      for (let x = box.x0; x <= box.x1; x += 1) values[x - box.x0] = binary[y * width + x];
      const run = longestRun(values, 1);
      if (run.length >= Math.max(8, box.w * 0.42)) runs.push({ coord: y, length: run.length });
    }
  } else {
    for (let x = box.x0; x <= box.x1; x += 1) {
      const values = new Uint8Array(box.h);
      for (let y = box.y0; y <= box.y1; y += 1) values[y - box.y0] = binary[y * width + x];
      const run = longestRun(values, 1);
      if (run.length >= Math.max(8, box.h * 0.42)) runs.push({ coord: x, length: run.length });
    }
  }

  const merged = [];
  for (const run of runs) {
    const last = merged[merged.length - 1];
    if (!last || run.coord > last.end + 1) merged.push({ start: run.coord, end: run.coord, maxLength: run.length });
    else {
      last.end = run.coord;
      last.maxLength = Math.max(last.maxLength, run.length);
    }
  }
  return merged;
}

function diagonalScore(binary, width, height, box) {
  let diagonal = 0;
  let axial = 0;
  for (let y = box.y0; y <= box.y1; y += 1) {
    for (let x = box.x0; x <= box.x1; x += 1) {
      if (!binary[y * width + x]) continue;
      for (const [dx, dy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
        const xx = x + dx;
        const yy = y + dy;
        if (xx >= 0 && xx < width && yy >= 0 && yy < height && binary[yy * width + xx]) diagonal += 1;
      }
      for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
        const xx = x + dx;
        const yy = y + dy;
        if (xx >= 0 && xx < width && yy >= 0 && yy < height && binary[yy * width + xx]) axial += 1;
      }
    }
  }
  return diagonal / Math.max(1, diagonal + axial);
}


function directParallelPlateEvidence(candidate, binary, width, height) {
  const { orientation, box } = candidate;
  const bands = bandsAlongPerpendicular(binary, width, height, candidate)
    .slice()
    .sort((a, b) => b.maxLength - a.maxLength);
  if (bands.length < 2) return null;

  const perpendicular = orientation === 'h' ? box.h : box.w;
  const strongest = bands.slice(0, 2);
  const centers = strongest.map((band) => (band.start + band.end) / 2);
  const separation = Math.abs(centers[0] - centers[1]);
  const short = Math.min(strongest[0].maxLength, strongest[1].maxLength);
  const long = Math.max(strongest[0].maxLength, strongest[1].maxLength);
  const coverage = short / Math.max(1, perpendicular);
  const ratio = long / Math.max(1, short);
  const diag = diagonalScore(binary, width, height, box);
  const shapeAspect = (orientation === 'h' ? box.w : box.h) / Math.max(1, perpendicular);

  // Two broad, parallel, similarly sized bars with little diagonal ink are a
  // capacitor. This rule intentionally runs before diode/zener classification.
  if (
    separation >= 4
    && separation <= perpendicular * 0.82
    && coverage >= 0.52
    && ratio <= 1.30
    && shapeAspect >= 0.55
  ) {
    return {
      type: 'capacitor',
      rot: orientation === 'v' ? PI_HALF : 0,
      confidence: 0.94,
      length: Math.max(48, (orientation === 'h' ? box.w : box.h) + 16),
      evidence: 'parallel-equal-plates',
    };
  }

  // Unequal parallel plates are treated as a battery.
  if (
    separation >= 4
    && separation <= perpendicular * 0.82
    && coverage >= 0.42
    && ratio >= 1.30
    && shapeAspect >= 0.55
  ) {
    return {
      type: 'battery',
      rot: orientation === 'v' ? PI_HALF : 0,
      confidence: 0.92,
      length: Math.max(44, (orientation === 'h' ? box.w : box.h) + 16),
      evidence: 'parallel-unequal-plates',
    };
  }

  return null;
}


function capacitorBandRescue(candidate, binary, width, height) {
  if (candidate.orientation !== 'v') return null;
  const { box } = candidate;
  const bands = bandsAlongPerpendicular(binary, width, height, candidate)
    .slice()
    .sort((a, b) => b.maxLength - a.maxLength);
  if (bands.length < 2) return null;

  const top = bands[0];
  const second = bands[1];
  const short = Math.min(top.maxLength, second.maxLength);
  const long = Math.max(top.maxLength, second.maxLength);
  const ratio = long / Math.max(1, short);
  const separation = Math.abs((top.start + top.end) / 2 - (second.start + second.end) / 2);
  const normalizedCoverage = short / Math.max(1, box.w);
  const diag = diagonalScore(binary, width, height, box);

  const pairLikeCapacitor = (
    normalizedCoverage >= 0.62
    && ratio <= 1.18
    && separation >= Math.max(6, box.h * 0.12)
    && separation <= Math.max(14, box.h * 0.52)
    && diag <= 0.12
  );

  if (!pairLikeCapacitor) return null;

  return {
    type: 'capacitor',
    rot: PI_HALF,
    confidence: 0.97,
    length: Math.max(52, box.h + 14),
    evidence: 'rescue-parallel-capacitor-bands',
  };
}

function zenerBandEvidence(candidate, binary, width, height) {
  if (candidate.orientation !== 'v') return false;
  const { box } = candidate;
  const bands = bandsAlongPerpendicular(binary, width, height, candidate)
    .slice()
    .sort((a, b) => b.maxLength - a.maxLength);
  if (!bands.length) return false;
  const strongest = bands[0];
  const coverage = strongest.maxLength / Math.max(1, box.w);
  const diag = diagonalScore(binary, width, height, box);
  return coverage >= 0.5 && diag >= 0.12;
}

function hasCrossingGateAxis(candidate, axes) {
  if (candidate.orientation !== 'v') return false;
  const { box } = candidate;
  const center = box.cy;
  const margin = Math.max(5, box.h * 0.18);
  return axes.horizontal.some((axis) => (
    axis >= box.y0 - margin
    && axis <= box.y1 + margin
    && Math.abs(axis - center) <= Math.max(10, box.h * 0.33)
  ));
}

function sideGateInkScore(candidate, binary, width, height) {
  if (candidate.orientation !== 'v') return 0;
  const { box, axis } = candidate;
  const centerY = box.cy;
  const bandRadius = Math.max(3, Math.round(box.h * 0.18));
  let sideHits = 0;
  let sideSamples = 0;
  let centerHits = 0;
  let centerSamples = 0;

  for (let y = Math.max(0, Math.round(centerY - bandRadius)); y <= Math.min(height - 1, Math.round(centerY + bandRadius)); y += 1) {
    for (let x = Math.max(0, box.x0 - 12); x <= Math.min(width - 1, box.x1 + 12); x += 1) {
      const hit = binary[y * width + x] ? 1 : 0;
      if (Math.abs(x - axis) <= 4) {
        centerHits += hit;
        centerSamples += 1;
      } else if (x < axis - 4 || x > axis + 4) {
        sideHits += hit;
        sideSamples += 1;
      }
    }
  }

  const sideDensity = sideHits / Math.max(1, sideSamples);
  const centerDensity = centerHits / Math.max(1, centerSamples);
  return sideDensity * 1.8 + centerDensity * 0.2;
}

function classifyCandidate(candidate, binary, width, height, axes) {
  const { orientation, box, parts } = candidate;
  const along = orientation === 'h' ? box.w : box.h;
  const perpendicular = orientation === 'h' ? box.h : box.w;
  if (along < 7 || perpendicular < 5 || along > Math.max(width, height) * 0.22) return null;

  const plateEvidence = directParallelPlateEvidence(candidate, binary, width, height);
  if (plateEvidence) return plateEvidence;

  const capacitorRescue = capacitorBandRescue(candidate, binary, width, height);
  if (capacitorRescue) return capacitorRescue;

  const aspect = along / Math.max(1, perpendicular);
  if (orientation === 'h' && along >= 18 && perpendicular <= 28 && aspect >= 1.15 && parts.length <= 4) {
    return {
      type: along <= 44 ? 'fuse' : 'resistor',
      rot: 0,
      confidence: 0.84,
      length: Math.max(40, along + 14),
    };
  }
  if (orientation === 'v' && along >= 28 && perpendicular <= 20 && aspect >= 1.65 && parts.length <= 3) {
    return {
      type: 'resistor',
      rot: PI_HALF,
      confidence: 0.84,
      length: Math.max(52, along + 12),
    };
  }

  const diag = diagonalScore(binary, width, height, box);
  if (diag >= 0.15 && perpendicular >= 14) {
    let type = 'diode';
    let confidence = 0.84;
    let evidence = 'diagonal-diode-shape';

    if (orientation === 'v') {
      const crossingGate = hasCrossingGateAxis(candidate, axes);
      const gateScore = sideGateInkScore(candidate, binary, width, height);
      const strongZenerBand = zenerBandEvidence(candidate, binary, width, height);
      if (crossingGate && gateScore >= 0.18) {
        type = 'scr';
        confidence = 0.94;
        evidence = 'crossing-gate-axis';
      } else if (strongZenerBand) {
        type = 'zener';
        confidence = 0.9;
        evidence = 'vertical-zener-band';
      } else if (crossingGate && parts.length >= 4) {
        type = 'scr';
        confidence = 0.87;
        evidence = 'crossing-gate-multipart';
      } else {
        type = 'zener';
        confidence = 0.84;
        evidence = 'vertical-diode-no-gate';
      }
    }

    return {
      type,
      rot: orientation === 'v' ? PI_HALF : 0,
      confidence,
      length: Math.max(44, along + 16),
      evidence,
    };
  }

  return null;
}

function detectCandidates(binary, width, height, axes, options = {}) {
  const tolerance = Math.max(2, Number(options.tolerance || 10));
  const fragmentTolerance = Math.max(3, Math.min(18, Math.round(tolerance * 0.72)));
  const fragmentGap = Math.max(6, Math.min(34, Math.round(tolerance * 1.25)));
  const dedupeDistance = Math.max(6, Math.min(26, tolerance * 1.15));
  const residual = eraseAxisBands(binary, width, height, axes.horizontal, axes.vertical, 2);
  const components = connectedComponents(residual, width, height, 4);
  const candidates = [];

  for (const axis of axes.horizontal) {
    const signal = axisSignal(binary, width, height, 'h', axis);
    for (const group of groupAxisFragments(components, 'h', axis, fragmentTolerance, fragmentGap)) {
      const support = sideSupport(signal, group.box.x0, group.box.x1);
      if (!support.both) continue;
      const classification = classifyCandidate(group, binary, width, height, axes);
      if (!classification) continue;
      candidates.push({
        ...classification,
        orientation: 'h',
        axis,
        x: group.box.cx,
        y: axis,
        sourceBox: group.box,
        parts: group.parts.length,
        evidence: classification.evidence,
      });
    }
  }

  for (const axis of axes.vertical) {
    const signal = axisSignal(binary, width, height, 'v', axis);
    for (const group of groupAxisFragments(components, 'v', axis, fragmentTolerance, fragmentGap)) {
      const support = sideSupport(signal, group.box.y0, group.box.y1);
      if (!support.both) continue;
      const classification = classifyCandidate(group, binary, width, height, axes);
      if (!classification) continue;
      candidates.push({
        ...classification,
        orientation: 'v',
        axis,
        x: axis,
        y: group.box.cy,
        sourceBox: group.box,
        parts: group.parts.length,
        evidence: classification.evidence,
      });
    }
  }

  const deduped = [];
  for (const candidate of candidates.sort((a, b) => b.confidence - a.confidence)) {
    const duplicate = deduped.some((existing) => Math.hypot(existing.x - candidate.x, existing.y - candidate.y) < dedupeDistance);
    if (!duplicate) deduped.push(candidate);
  }
  return { candidates: deduped, components };
}

function makeWireRuns(binary, width, height, orientation, axis, candidates, perpendicularAxes = [], options = {}) {
  const signal = axisSignal(binary, width, height, orientation, axis);
  for (const candidate of candidates.filter((item) => item.orientation === orientation && item.axis === axis)) {
    const center = orientation === 'h' ? candidate.x : candidate.y;
    const half = Math.max(10, candidate.length / 2);
    const start = Math.max(0, Math.floor(center - half));
    const end = Math.min(signal.length - 1, Math.ceil(center + half));
    signal.fill(0, start, end + 1);
  }

  const wires = [];
  let start = -1;
  let gap = 0;
  const tolerance = Math.max(2, Number(options.tolerance || 10));
  const allowedGap = Math.max(1, Math.min(8, Math.round(tolerance / 3)));
  const minimumRun = Math.max(12, Math.round(Math.min(width, height) * 0.024));
  for (let index = 0; index <= signal.length; index += 1) {
    const hit = index < signal.length && signal[index];
    if (hit) {
      if (start < 0) start = index;
      gap = 0;
    } else if (start >= 0) {
      gap += 1;
      if (gap > allowedGap) {
        const end = index - gap;
        if (end - start + 1 >= minimumRun) {
          const snapToAxis = (value) => {
            let nearest = value;
            let distance = 9;
            for (const candidateAxis of perpendicularAxes) {
              const current = Math.abs(candidateAxis - value);
              if (current < distance) {
                nearest = candidateAxis;
                distance = current;
              }
            }
            return nearest;
          };
          const snappedStart = snapToAxis(start);
          const snappedEnd = snapToAxis(end);
          if (Math.abs(snappedEnd - snappedStart) >= Math.max(10, minimumRun * 0.6)) {
            wires.push(orientation === 'h'
              ? { type: 'wire', x1: snappedStart, y1: axis, x2: snappedEnd, y2: axis, confidence: 0.96, strokeIds: [], structuredAxis: true }
              : { type: 'wire', x1: axis, y1: snappedStart, x2: axis, y2: snappedEnd, confidence: 0.96, strokeIds: [], structuredAxis: true });
          }
        }
        start = -1;
        gap = 0;
      }
    }
  }
  return wires;
}


function splitWiresAtIntersections(wires) {
  const cuts = wires.map(() => []);
  for (let i = 0; i < wires.length; i += 1) {
    const a = wires[i];
    const aHorizontal = Math.abs(a.y2 - a.y1) <= Math.abs(a.x2 - a.x1);
    for (let j = i + 1; j < wires.length; j += 1) {
      const b = wires[j];
      const bHorizontal = Math.abs(b.y2 - b.y1) <= Math.abs(b.x2 - b.x1);
      if (aHorizontal === bHorizontal) continue;
      const horizontal = aHorizontal ? a : b;
      const vertical = aHorizontal ? b : a;
      const horizontalIndex = aHorizontal ? i : j;
      const verticalIndex = aHorizontal ? j : i;
      const x = vertical.x1;
      const y = horizontal.y1;
      const hMin = Math.min(horizontal.x1, horizontal.x2);
      const hMax = Math.max(horizontal.x1, horizontal.x2);
      const vMin = Math.min(vertical.y1, vertical.y2);
      const vMax = Math.max(vertical.y1, vertical.y2);
      if (x < hMin - 1 || x > hMax + 1 || y < vMin - 1 || y > vMax + 1) continue;
      if (x > hMin + 1 && x < hMax - 1) cuts[horizontalIndex].push(x);
      if (y > vMin + 1 && y < vMax - 1) cuts[verticalIndex].push(y);
    }
  }

  const output = [];
  wires.forEach((wire, index) => {
    const horizontal = Math.abs(wire.y2 - wire.y1) <= Math.abs(wire.x2 - wire.x1);
    const start = horizontal ? Math.min(wire.x1, wire.x2) : Math.min(wire.y1, wire.y2);
    const end = horizontal ? Math.max(wire.x1, wire.x2) : Math.max(wire.y1, wire.y2);
    const points = [start, ...cuts[index].filter((value) => value > start && value < end), end]
      .sort((a, b) => a - b)
      .filter((value, position, array) => position === 0 || Math.abs(value - array[position - 1]) > 1);
    for (let i = 1; i < points.length; i += 1) {
      if (points[i] - points[i - 1] < 2) continue;
      output.push(horizontal
        ? { ...wire, x1: points[i - 1], y1: wire.y1, x2: points[i], y2: wire.y1 }
        : { ...wire, x1: wire.x1, y1: points[i - 1], x2: wire.x1, y2: points[i] });
    }
  });
  return output;
}

export function recognizeStructuredIecSchematic(rgba, width, height, options = {}) {
  const binary = adaptiveBinary(rgba, width, height);
  const axes = detectAxes(binary, width, height);
  if (axes.horizontal.length < 2 || axes.vertical.length < 2) {
    return { used: false, objects: [], diagnostics: { reason: 'insufficient-axis-structure' } };
  }

  const { candidates, components } = detectCandidates(binary, width, height, axes, options);
  const rawWires = [];
  for (const axis of axes.horizontal) rawWires.push(...makeWireRuns(binary, width, height, 'h', axis, candidates, axes.vertical, options));
  for (const axis of axes.vertical) rawWires.push(...makeWireRuns(binary, width, height, 'v', axis, candidates, axes.horizontal, options));
  const wires = splitWiresAtIntersections(rawWires);

  const symbols = candidates.map((candidate) => ({
    type: candidate.type,
    x: candidate.x,
    y: candidate.y,
    rot: candidate.rot,
    length: candidate.length,
    compact: true,
    confidence: candidate.confidence,
    strokeIds: [],
    sourceBox: candidate.sourceBox,
    recognitionEvidence: candidate.evidence || '',
  }));

  const strongEnough = wires.length >= 5 && symbols.length >= 2;
  return {
    used: strongEnough,
    objects: strongEnough ? [...wires, ...symbols] : [],
    diagnostics: {
      structuredIec: strongEnough,
      horizontalAxes: axes.horizontal.length,
      verticalAxes: axes.vertical.length,
      residualComponents: components.length,
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
