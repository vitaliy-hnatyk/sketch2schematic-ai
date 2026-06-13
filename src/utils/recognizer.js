import {
  angleDifference,
  clamp,
  clone,
  createSnapper,
  dist,
  midpoint,
  normalizeAxisAngle,
  segmentPointDistance,
} from './geometry.js';
import { normalizedSymbolLength } from './symbols.js';

function cleanPoints(points) {
  if (points.length < 2) return points.slice();
  const cleaned = [points[0]];
  for (let i = 1; i < points.length; i += 1) {
    if (dist(points[i], cleaned[cleaned.length - 1]) > 0.8) cleaned.push(points[i]);
  }
  return cleaned;
}

function rdp(points, epsilon) {
  if (points.length < 3) return points.slice();
  const start = points[0];
  const end = points[points.length - 1];
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const denominator = Math.hypot(dx, dy) || 1;
  let maxDistance = 0;
  let index = 0;

  for (let i = 1; i < points.length - 1; i += 1) {
    const distance = Math.abs(
      dy * points[i].x - dx * points[i].y + end.x * start.y - end.y * start.x,
    ) / denominator;
    if (distance > maxDistance) {
      maxDistance = distance;
      index = i;
    }
  }

  if (maxDistance > epsilon) {
    const left = rdp(points.slice(0, index + 1), epsilon);
    const right = rdp(points.slice(index), epsilon);
    return left.slice(0, -1).concat(right);
  }
  return [start, end];
}

function boundsOf(points) {
  let x0 = Infinity;
  let y0 = Infinity;
  let x1 = -Infinity;
  let y1 = -Infinity;
  for (const point of points) {
    x0 = Math.min(x0, point.x);
    y0 = Math.min(y0, point.y);
    x1 = Math.max(x1, point.x);
    y1 = Math.max(y1, point.y);
  }
  return {
    x0,
    y0,
    x1,
    y1,
    w: x1 - x0,
    h: y1 - y0,
    cx: (x0 + x1) / 2,
    cy: (y0 + y1) / 2,
  };
}

function pca(points) {
  let cx = 0;
  let cy = 0;
  for (const point of points) {
    cx += point.x;
    cy += point.y;
  }
  cx /= points.length || 1;
  cy /= points.length || 1;

  let xx = 0;
  let yy = 0;
  let xy = 0;
  for (const point of points) {
    const x = point.x - cx;
    const y = point.y - cy;
    xx += x * x;
    yy += y * y;
    xy += x * y;
  }

  const angle = 0.5 * Math.atan2(2 * xy, xx - yy);
  const cosine = Math.cos(angle);
  const sine = Math.sin(angle);
  let alongMin = Infinity;
  let alongMax = -Infinity;
  let perpendicularMin = Infinity;
  let perpendicularMax = -Infinity;

  for (const point of points) {
    const x = point.x - cx;
    const y = point.y - cy;
    const along = x * cosine + y * sine;
    const perpendicular = -x * sine + y * cosine;
    alongMin = Math.min(alongMin, along);
    alongMax = Math.max(alongMax, along);
    perpendicularMin = Math.min(perpendicularMin, perpendicular);
    perpendicularMax = Math.max(perpendicularMax, perpendicular);
  }

  return {
    cx,
    cy,
    angle: normalizeAxisAngle(angle),
    spanA: alongMax - alongMin,
    spanP: perpendicularMax - perpendicularMin,
  };
}

function strokeFeatures(points, id, tolerance) {
  const cleaned = cleanPoints(points);
  const bounds = boundsOf(cleaned);
  const simple = rdp(cleaned, Math.max(2, tolerance * 0.32));
  let length = 0;
  for (let i = 1; i < cleaned.length; i += 1) length += dist(cleaned[i - 1], cleaned[i]);
  const direct = cleaned.length > 1 ? dist(cleaned[0], cleaned[cleaned.length - 1]) : 0;
  const diagonal = Math.hypot(bounds.w, bounds.h) || 1;
  const axis = pca(cleaned);
  const closed = direct / diagonal;

  let radialMean = 0;
  let radialVariance = 0;
  for (const point of cleaned) radialMean += Math.hypot(point.x - bounds.cx, point.y - bounds.cy);
  radialMean /= cleaned.length || 1;
  for (const point of cleaned) {
    const delta = Math.hypot(point.x - bounds.cx, point.y - bounds.cy) - radialMean;
    radialVariance += delta * delta;
  }
  radialVariance = Math.sqrt(radialVariance / (cleaned.length || 1)) / (radialMean || 1);

  const sharpAngles = [];
  for (let i = 1; i < simple.length - 1; i += 1) {
    const a = Math.atan2(simple[i - 1].y - simple[i].y, simple[i - 1].x - simple[i].x);
    const b = Math.atan2(simple[i + 1].y - simple[i].y, simple[i + 1].x - simple[i].x);
    let difference = Math.abs(a - b);
    if (difference > Math.PI) difference = 2 * Math.PI - difference;
    sharpAngles.push(difference);
  }
  const sharpCorners = sharpAngles.filter((value) => value < 2.35).length;

  const cosine = Math.cos(axis.angle);
  const sine = Math.sin(axis.angle);
  const perpendiculars = cleaned.map(
    (point) => -(point.x - axis.cx) * sine + (point.y - axis.cy) * cosine,
  );
  let signChanges = 0;
  let lastSign = 0;
  let amplitude = 0;
  for (const value of perpendiculars) {
    amplitude = Math.max(amplitude, Math.abs(value));
    const sign = Math.abs(value) < Math.max(2, axis.spanP * 0.13) ? 0 : value > 0 ? 1 : -1;
    if (sign && lastSign && sign !== lastSign) signChanges += 1;
    if (sign) lastSign = sign;
  }

  const straightness = direct / (length || 1);
  const lineScore =
    clamp((straightness - 0.86) / 0.13, 0, 1) *
    clamp((axis.spanA - 16) / 45, 0, 1) *
    clamp(1 - axis.spanP / Math.max(9, axis.spanA * 0.22), 0, 1);
  const aspect = Math.max(bounds.w, bounds.h) / Math.max(1, Math.min(bounds.w, bounds.h));
  const circleScore =
    clamp((0.38 - closed) / 0.3, 0, 1) *
    clamp((2 - aspect) / 1, 0, 1) *
    clamp((0.38 - radialVariance) / 0.3, 0, 1) *
    clamp((diagonal - 25) / 45, 0, 1);
  const zigzagScore =
    clamp((length / (direct || 1) - 1.13) / 0.75, 0, 1) *
    clamp((signChanges - 3) / 4, 0, 1) *
    clamp(sharpCorners / 5, 0, 1) *
    clamp(axis.spanA / Math.max(1, axis.spanP) - 1.5, 0, 1);
  const waveScore =
    clamp((length / (direct || 1) - 1.15) / 1.4, 0, 1) *
    clamp((signChanges - 3) / 5, 0, 1) *
    clamp((5 - sharpCorners) / 5, 0, 1) *
    clamp(axis.spanA / Math.max(1, axis.spanP) - 1, 0, 1);

  return {
    id,
    pts: cleaned,
    simple,
    b: bounds,
    length,
    direct,
    diag: diagonal,
    axis,
    closed,
    radialVar: radialVariance,
    straightness,
    lineScore,
    circleScore,
    zigzagScore,
    waveScore,
    sharpCorners,
    signChanges,
    amp: amplitude,
  };
}

function bboxGap(a, b) {
  const dx = Math.max(0, a.x0 - b.x1, b.x0 - a.x1);
  const dy = Math.max(0, a.y0 - b.y1, b.y0 - a.y1);
  return Math.hypot(dx, dy);
}

function lineEnds(feature) {
  const cosine = Math.cos(feature.axis.angle);
  const sine = Math.sin(feature.axis.angle);
  const half = feature.axis.spanA / 2;
  return [
    { x: feature.axis.cx - cosine * half, y: feature.axis.cy - sine * half },
    { x: feature.axis.cx + cosine * half, y: feature.axis.cy + sine * half },
  ];
}

function nearestEndpointDistance(a, b) {
  const aEnds = lineEnds(a);
  const bEnds = lineEnds(b);
  return Math.min(
    dist(aEnds[0], bEnds[0]),
    dist(aEnds[0], bEnds[1]),
    dist(aEnds[1], bEnds[0]),
    dist(aEnds[1], bEnds[1]),
  );
}

function makeDetected(type, x, y, rotation, confidence, strokeIds, snap, extra = {}) {
  return {
    type,
    x: snap(x),
    y: snap(y),
    rot: normalizeAxisAngle(rotation || 0),
    confidence: clamp(confidence || 0, 0, 1),
    strokeIds: strokeIds || [],
    ...extra,
  };
}

function detectGround(lines, used, results, snap) {
  const candidates = lines.filter(
    (feature) => !used.has(feature.id) && feature.axis.spanA > 16 && feature.axis.spanA < 115,
  );

  for (let i = 0; i < candidates.length; i += 1) {
    for (let j = i + 1; j < candidates.length; j += 1) {
      for (let k = j + 1; k < candidates.length; k += 1) {
        const bars = [candidates[i], candidates[j], candidates[k]];
        if (
          angleDifference(bars[0].axis.angle, bars[1].axis.angle) > 0.18 ||
          angleDifference(bars[0].axis.angle, bars[2].axis.angle) > 0.18
        ) continue;

        const angle = bars[0].axis.angle;
        const cosine = Math.cos(angle);
        const sine = Math.sin(angle);
        const normal = (feature) => -feature.axis.cx * sine + feature.axis.cy * cosine;
        bars.sort((a, b) => normal(a) - normal(b));
        const gaps = [normal(bars[1]) - normal(bars[0]), normal(bars[2]) - normal(bars[1])];
        if (gaps.some((gap) => gap < 4 || gap > 28)) continue;

        const lengths = bars.map((value) => value.axis.spanA);
        const forward = lengths[0] > lengths[1] && lengths[1] > lengths[2];
        const reverse = lengths[2] > lengths[1] && lengths[1] > lengths[0];
        if (!forward && !reverse) continue;

        const ordered = forward ? bars : bars.slice().reverse();
        const longest = ordered[0];
        const centersAligned = Math.max(
          ...ordered.map((value) =>
            Math.abs(
              (value.axis.cx - longest.axis.cx) * cosine +
              (value.axis.cy - longest.axis.cy) * sine,
            ),
          ),
        ) < 18;
        if (!centersAligned) continue;

        const stem = lines.find(
          (line) =>
            !used.has(line.id) &&
            !bars.includes(line) &&
            angleDifference(line.axis.angle, angle) > 1.15 &&
            angleDifference(line.axis.angle, angle) < 1.55 &&
            nearestEndpointDistance(line, longest) < 24,
        );
        if (!stem) continue;

        const terminal = lineEnds(stem).sort(
          (a, b) =>
            dist(b, { x: longest.axis.cx, y: longest.axis.cy }) -
            dist(a, { x: longest.axis.cx, y: longest.axis.cy }),
        )[0];
        const rotation =
          Math.atan2(terminal.y - longest.axis.cy, terminal.x - longest.axis.cx) - Math.PI / 2;
        const score = 0.78 + clamp((24 - Math.max(...gaps)) / 80, 0, 0.12);
        results.push(
          makeDetected(
            'ground',
            longest.axis.cx,
            longest.axis.cy,
            rotation,
            score,
            [...bars.map((value) => value.id), stem.id],
            snap,
          ),
        );
        bars.forEach((value) => used.add(value.id));
        used.add(stem.id);
      }
    }
  }
}

function detectParallelPair(lines, used, results, snap) {
  const pairs = [];
  for (let i = 0; i < lines.length; i += 1) {
    for (let j = i + 1; j < lines.length; j += 1) {
      const a = lines[i];
      const b = lines[j];
      if (
        used.has(a.id) ||
        used.has(b.id) ||
        a.axis.spanA < 18 ||
        b.axis.spanA < 18 ||
        a.axis.spanA > 130 ||
        b.axis.spanA > 130
      ) continue;

      const angleDelta = angleDifference(a.axis.angle, b.axis.angle);
      if (angleDelta > 0.18) continue;
      const angle = (a.axis.angle + b.axis.angle) / 2;
      const cosine = Math.cos(angle);
      const sine = Math.sin(angle);
      const dx = b.axis.cx - a.axis.cx;
      const dy = b.axis.cy - a.axis.cy;
      const normal = Math.abs(-dx * sine + dy * cosine);
      const along = Math.abs(dx * cosine + dy * sine);
      const minLength = Math.min(a.axis.spanA, b.axis.spanA);
      if (normal < 7 || normal > 48 || along > minLength * 0.55) continue;

      const ratio = Math.max(a.axis.spanA, b.axis.spanA) / Math.max(1, minLength);
      const type = ratio > 1.5 ? 'battery' : 'capacitor';
      const score = clamp(
        0.9 - angleDelta * 1.5 - Math.abs(normal - 20) / 90 - along / Math.max(50, minLength * 2),
        0.5,
        0.94,
      );
      pairs.push({ a, b, type, score, angle });
    }
  }

  pairs.sort((a, b) => b.score - a.score);
  for (const pair of pairs) {
    if (used.has(pair.a.id) || used.has(pair.b.id)) continue;
    const center = {
      x: (pair.a.axis.cx + pair.b.axis.cx) / 2,
      y: (pair.a.axis.cy + pair.b.axis.cy) / 2,
    };
    results.push(
      makeDetected(
        pair.type,
        center.x,
        center.y,
        pair.angle + Math.PI / 2,
        pair.score,
        [pair.a.id, pair.b.id],
        snap,
      ),
    );
    used.add(pair.a.id);
    used.add(pair.b.id);
  }
}

function detectSwitches(lines, used, results, snap) {
  const remaining = lines.filter((line) => !used.has(line.id));
  for (const lever of remaining) {
    for (let i = 0; i < remaining.length; i += 1) {
      for (let j = i + 1; j < remaining.length; j += 1) {
        const a = remaining[i];
        const b = remaining[j];
        if (
          a === lever ||
          b === lever ||
          used.has(a.id) ||
          used.has(b.id) ||
          used.has(lever.id)
        ) continue;
        if (angleDifference(a.axis.angle, b.axis.angle) > 0.16) continue;
        const mainAngle = (a.axis.angle + b.axis.angle) / 2;
        const leverDelta = angleDifference(lever.axis.angle, mainAngle);
        if (leverDelta < 0.22 || leverDelta > 1.1) continue;

        const aEnds = lineEnds(a);
        const bEnds = lineEnds(b);
        let best = Infinity;
        let pointA = null;
        let pointB = null;
        for (const x of aEnds) {
          for (const y of bEnds) {
            const distance = dist(x, y);
            if (distance < best) {
              best = distance;
              pointA = x;
              pointB = y;
            }
          }
        }
        if (best < 10 || best > 65) continue;
        const leverEnds = lineEnds(lever);
        const near = Math.min(
          dist(leverEnds[0], pointA),
          dist(leverEnds[1], pointA),
          dist(leverEnds[0], pointB),
          dist(leverEnds[1], pointB),
        );
        if (near > 24) continue;

        const center = midpoint(pointA, pointB);
        const score = clamp(0.86 - best / 180 - near / 120, 0.58, 0.9);
        results.push(
          makeDetected(
            'switch',
            center.x,
            center.y,
            mainAngle,
            score,
            [a.id, b.id, lever.id],
            snap,
          ),
        );
        used.add(a.id);
        used.add(b.id);
        used.add(lever.id);
      }
    }
  }
}

function clusterUnknown(features, used, tolerance) {
  const remaining = features.filter((feature) => !used.has(feature.id));
  const groups = [];
  const seen = new Set();
  for (const feature of remaining) {
    if (seen.has(feature.id)) continue;
    const queue = [feature];
    const group = [];
    seen.add(feature.id);
    while (queue.length) {
      const next = queue.pop();
      group.push(next);
      for (const candidate of remaining) {
        if (seen.has(candidate.id)) continue;
        if (bboxGap(next.b, candidate.b) < Math.max(18, tolerance * 1.6)) {
          seen.add(candidate.id);
          queue.push(candidate);
        }
      }
    }
    groups.push(group);
  }
  return groups;
}

function orientedTerminalPoints(object, half) {
  const rotation = object.rot || 0;
  const cosine = Math.cos(rotation);
  const sine = Math.sin(rotation);
  return [
    { x: object.x - half * cosine, y: object.y - half * sine },
    { x: object.x + half * cosine, y: object.y + half * sine },
  ];
}


function transformedLocalPoint(object, x, y) {
  const rotation = object.rot || 0;
  const cosine = Math.cos(rotation);
  const sine = Math.sin(rotation);
  return {
    x: object.x + x * cosine - y * sine,
    y: object.y + x * sine + y * cosine,
  };
}

function rawTerminalPoints(object) {
  if (object.type === 'ground') {
    const rotation = object.rot || 0;
    return [{ x: object.x - 45 * Math.sin(rotation), y: object.y + 45 * Math.cos(rotation) }];
  }
  const rawLength = Number(object.length);
  let half = 60;
  if (['resistor', 'battery', 'diode', 'led', 'zener', 'scr', 'fuse'].includes(object.type) && Number.isFinite(rawLength)) {
    half = rawLength / 2;
  }
  if (object.type === 'capacitor') half = normalizedSymbolLength(object) / 2;
  const ports = orientedTerminalPoints(object, half);
  if (object.type === 'scr') ports.push(transformedLocalPoint(object, -8, 28));
  return ports;
}

export function terminalPoints(object) {
  if (object.type === 'wire') return [{ x: object.x1, y: object.y1 }, { x: object.x2, y: object.y2 }];
  if (object.type === 'junction') return [{ x: object.x, y: object.y }];
  if (object.type === 'unknown') return [];
  if (object.type === 'ground') {
    const rotation = object.rot || 0;
    return [{ x: object.x - 45 * Math.sin(rotation), y: object.y + 45 * Math.cos(rotation) }];
  }
  const ports = orientedTerminalPoints(object, normalizedSymbolLength(object) / 2);
  if (object.type === 'scr') ports.push(transformedLocalPoint(object, -8, 28));
  return ports;
}

export function cleanupGraph(input, { gridSize = 20, tolerance = 12 } = {}) {
  const snap = createSnapper(gridSize);
  const output = input.map((object) => clone(object));
  const wires = output.filter((object) => object.type === 'wire');
  const symbols = output.filter(
    (object) => !['wire', 'unknown', 'junction'].includes(object.type),
  );

  // Component masks can include a little text or plate overhang, which may put
  // the detected center beside the actual wire axis. Align only perpendicular
  // to the component direction, using nearby wire endpoints. This keeps a
  // vertical battery/diode on the same x coordinate as its leads and a
  // horizontal component on the same y coordinate as its leads.
  const alignmentTolerance = Math.max(36, tolerance * 3);
  for (const symbol of symbols) {
    if (symbol.type === 'ground') continue;
    const rawPorts = rawTerminalPoints(symbol);
    const nearbyEndpoints = [];
    for (const terminal of rawPorts) {
      let nearest = null;
      let nearestDistance = alignmentTolerance;
      for (const wire of wires) {
        for (const point of [
          { x: wire.x1, y: wire.y1 },
          { x: wire.x2, y: wire.y2 },
        ]) {
          const currentDistance = dist(terminal, point);
          if (currentDistance < nearestDistance) {
            nearest = point;
            nearestDistance = currentDistance;
          }
        }
      }
      if (nearest) nearbyEndpoints.push(nearest);
    }

    if (!nearbyEndpoints.length) continue;
    const vertical = Math.abs(Math.sin(symbol.rot || 0)) > 0.7;
    if (vertical) {
      const x = nearbyEndpoints.reduce((sum, point) => sum + point.x, 0) / nearbyEndpoints.length;
      if (Math.abs(x - symbol.x) <= alignmentTolerance) symbol.x = x;
    } else {
      const y = nearbyEndpoints.reduce((sum, point) => sum + point.y, 0) / nearbyEndpoints.length;
      if (Math.abs(y - symbol.y) <= alignmentTolerance) symbol.y = y;
    }
  }

  for (const wire of wires) {
    for (const [xKey, yKey] of [['x1', 'y1'], ['x2', 'y2']]) {
      const point = { x: wire[xKey], y: wire[yKey] };
      const isWireJunction = wires.some((other) => {
        if (other === wire) return false;
        return segmentPointDistance(
          point,
          { x: other.x1, y: other.y1 },
          { x: other.x2, y: other.y2 },
        ) < 4;
      });
      if (wire.structuredAxis && isWireJunction) continue;
      let best = null;
      let bestDistance = Math.max(30, tolerance * 2.5);
      for (const symbol of symbols) {
        const normalized = terminalPoints(symbol);
        const raw = rawTerminalPoints(symbol);
        for (let terminalIndex = 0; terminalIndex < normalized.length; terminalIndex += 1) {
          const normalizedTerminal = normalized[terminalIndex];
          const rawTerminal = raw[terminalIndex] || normalizedTerminal;
          const distance = Math.min(
            dist(point, normalizedTerminal),
            dist(point, rawTerminal),
          );
          if (distance < bestDistance) {
            bestDistance = distance;
            best = normalizedTerminal;
          }
        }
      }
      if (best) {
        wire[xKey] = best.x;
        wire[yKey] = best.y;
      }
    }
  }

  let changed = true;
  while (changed) {
    changed = false;
    outer: for (let i = 0; i < wires.length; i += 1) {
      for (let j = i + 1; j < wires.length; j += 1) {
        const a = wires[i];
        const b = wires[j];
        if (a.structuredAxis && b.structuredAxis) continue;
        const aHorizontal = Math.abs(a.y2 - a.y1) < 2;
        const bHorizontal = Math.abs(b.y2 - b.y1) < 2;
        const aVertical = Math.abs(a.x2 - a.x1) < 2;
        const bVertical = Math.abs(b.x2 - b.x1) < 2;

        if (aHorizontal && bHorizontal && Math.abs(a.y1 - b.y1) < 3) {
          const low = Math.min(a.x1, a.x2, b.x1, b.x2);
          const high = Math.max(a.x1, a.x2, b.x1, b.x2);
          const combinedLength = Math.abs(a.x2 - a.x1) + Math.abs(b.x2 - b.x1);
          if (high - low <= combinedLength + gridSize * 0.6) {
            a.x1 = low;
            a.x2 = high;
            a.y1 = a.y2 = snap((a.y1 + b.y1) / 2);
            const outputIndex = output.indexOf(b);
            if (outputIndex >= 0) output.splice(outputIndex, 1);
            wires.splice(j, 1);
            changed = true;
            break outer;
          }
        }

        if (aVertical && bVertical && Math.abs(a.x1 - b.x1) < 3) {
          const low = Math.min(a.y1, a.y2, b.y1, b.y2);
          const high = Math.max(a.y1, a.y2, b.y1, b.y2);
          const combinedLength = Math.abs(a.y2 - a.y1) + Math.abs(b.y2 - b.y1);
          if (high - low <= combinedLength + gridSize * 0.6) {
            a.y1 = low;
            a.y2 = high;
            a.x1 = a.x2 = snap((a.x1 + b.x1) / 2);
            const outputIndex = output.indexOf(b);
            if (outputIndex >= 0) output.splice(outputIndex, 1);
            wires.splice(j, 1);
            changed = true;
            break outer;
          }
        }
      }
    }
  }

  const existing = output.filter((object) => object.type === 'junction');
  const candidates = [];
  for (const wire of wires) {
    candidates.push({ x: wire.x1, y: wire.y1 }, { x: wire.x2, y: wire.y2 });
  }
  for (const point of candidates) {
    let degree = 0;
    for (const wire of wires) {
      if (segmentPointDistance(point, { x: wire.x1, y: wire.y1 }, { x: wire.x2, y: wire.y2 }) < 4) {
        degree += 1;
      }
    }
    for (const symbol of symbols) {
      if (terminalPoints(symbol).some((terminal) => dist(point, terminal) < 4)) degree += 1;
    }
    if (degree >= 3 && !existing.some((junction) => dist(junction, point) < 6)) {
      const junction = { type: 'junction', x: point.x, y: point.y, confidence: 0.92, strokeIds: [] };
      existing.push(junction);
      output.push(junction);
    }
  }
  return output;
}


function lineFullyInsideCircle(line, circle, margin = 4) {
  const ends = lineEnds(line);
  return ends.every((point) => (
    point.x >= circle.b.x0 - margin
    && point.x <= circle.b.x1 + margin
    && point.y >= circle.b.y0 - margin
    && point.y <= circle.b.y1 + margin
  ));
}

function mergeOrthogonalSegments(segments, gridSize) {
  const output = [];
  for (const segment of segments) {
    const horizontal = Math.abs(segment.y2 - segment.y1) <= Math.abs(segment.x2 - segment.x1);
    let normalized = { ...segment };
    if (horizontal && normalized.x1 > normalized.x2) {
      [normalized.x1, normalized.x2] = [normalized.x2, normalized.x1];
    }
    if (!horizontal && normalized.y1 > normalized.y2) {
      [normalized.y1, normalized.y2] = [normalized.y2, normalized.y1];
    }

    const previous = output[output.length - 1];
    if (previous) {
      const previousHorizontal = Math.abs(previous.y2 - previous.y1) <= Math.abs(previous.x2 - previous.x1);
      if (horizontal === previousHorizontal) {
        if (horizontal
          && Math.abs(previous.y1 - normalized.y1) <= gridSize * 0.45
          && normalized.x1 <= previous.x2 + gridSize * 0.8) {
          previous.x1 = Math.min(previous.x1, normalized.x1);
          previous.x2 = Math.max(previous.x2, normalized.x2);
          previous.y1 = previous.y2 = (previous.y1 + normalized.y1) / 2;
          continue;
        }
        if (!horizontal
          && Math.abs(previous.x1 - normalized.x1) <= gridSize * 0.45
          && normalized.y1 <= previous.y2 + gridSize * 0.8) {
          previous.y1 = Math.min(previous.y1, normalized.y1);
          previous.y2 = Math.max(previous.y2, normalized.y2);
          previous.x1 = previous.x2 = (previous.x1 + normalized.x1) / 2;
          continue;
        }
      }
    }
    output.push(normalized);
  }
  return output;
}

function orthogonalWireSegments(feature, snap, gridSize, tolerance) {
  const points = rdp(feature.pts, Math.max(3, tolerance * 0.48));
  if (points.length < 3) return [];

  const raw = [];
  let acceptedLength = 0;
  let totalLength = 0;
  const minimumSegment = Math.max(12, gridSize * 0.75);
  const tangentLimit = Math.tan(Math.PI / 7); // roughly 26 degrees from an axis

  for (let index = 1; index < points.length; index += 1) {
    const a = points[index - 1];
    const b = points[index];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const length = Math.hypot(dx, dy);
    totalLength += length;
    if (length < minimumSegment) continue;

    const horizontal = Math.abs(dy) <= Math.abs(dx) * tangentLimit;
    const vertical = Math.abs(dx) <= Math.abs(dy) * tangentLimit;
    if (!horizontal && !vertical) continue;

    if (horizontal) {
      const y = snap((a.y + b.y) / 2);
      const x1 = snap(a.x);
      const x2 = snap(b.x);
      if (Math.abs(x2 - x1) >= minimumSegment) {
        raw.push({ x1, y1: y, x2, y2: y });
        acceptedLength += length;
      }
    } else {
      const x = snap((a.x + b.x) / 2);
      const y1 = snap(a.y);
      const y2 = snap(b.y);
      if (Math.abs(y2 - y1) >= minimumSegment) {
        raw.push({ x1: x, y1, x2: x, y2 });
        acceptedLength += length;
      }
    }
  }

  if (raw.length < 2 || acceptedLength / Math.max(1, totalLength) < 0.55) return [];
  return mergeOrthogonalSegments(raw, gridSize).filter((segment) => (
    Math.hypot(segment.x2 - segment.x1, segment.y2 - segment.y1) >= minimumSegment
  ));
}

export function recognizeVectorStrokes(rawStrokes, { gridSize = 20, tolerance = 12 } = {}) {
  const snap = createSnapper(gridSize);
  const features = rawStrokes
    .map((stroke, index) => strokeFeatures(stroke, index, tolerance))
    .filter((feature) => feature.pts.length > 0);
  const used = new Set();
  const results = [];
  const straightCandidates = features.filter((feature) => (
    feature.straightness > 0.86
    && feature.axis.spanA > 8
    && feature.axis.spanP < Math.max(8, feature.axis.spanA * 0.25)
  ));
  const lines = straightCandidates.filter((feature) => feature.lineScore > 0.58);
  const circles = features
    .filter((feature) => feature.circleScore > 0.48)
    .sort((a, b) => b.circleScore - a.circleScore);

  for (const circle of circles) {
    if (used.has(circle.id)) continue;
    const inside = straightCandidates.filter(
      (line) =>
        !used.has(line.id) &&
        line.id !== circle.id &&
        line.axis.cx > circle.b.x0 - 8 &&
        line.axis.cx < circle.b.x1 + 8 &&
        line.axis.cy > circle.b.y0 - 8 &&
        line.axis.cy < circle.b.y1 + 8 &&
        line.axis.spanA < circle.diag * 1.25,
    );
    let crossingPair = null;
    for (let i = 0; i < inside.length; i += 1) {
      for (let j = i + 1; j < inside.length; j += 1) {
        if (angleDifference(inside[i].axis.angle, inside[j].axis.angle) > 0.9) {
          crossingPair = [inside[i], inside[j]];
          break;
        }
      }
      if (crossingPair) break;
    }

    const internalLines = inside.filter((line) => lineFullyInsideCircle(line, circle, 5));

    if (crossingPair) {
      const symbolLines = new Set([crossingPair[0].id, crossingPair[1].id, ...internalLines.map((line) => line.id)]);
      results.push(
        makeDetected(
          'lamp',
          circle.b.cx,
          circle.b.cy,
          0,
          clamp(0.72 + circle.circleScore * 0.22, 0, 1),
          [circle.id, ...symbolLines],
          snap,
        ),
      );
      used.add(circle.id);
      symbolLines.forEach((id) => used.add(id));
    } else {
      const polarityLine = internalLines
        .slice()
        .sort((a, b) => b.axis.spanA - a.axis.spanA)[0];
      const sourceRotation = polarityLine
        ? normalizeAxisAngle(polarityLine.axis.angle + Math.PI / 2)
        : 0;
      results.push(
        makeDetected(
          'source',
          circle.b.cx,
          circle.b.cy,
          sourceRotation,
          clamp(0.62 + circle.circleScore * 0.27, 0, 1),
          [circle.id, ...internalLines.map((line) => line.id)],
          snap,
        ),
      );
      used.add(circle.id);
      internalLines.forEach((line) => used.add(line.id));
    }
  }

  detectGround(lines, used, results, snap);
  detectSwitches(lines, used, results, snap);
  detectParallelPair(lines, used, results, snap);

  for (const feature of features) {
    if (used.has(feature.id)) continue;
    if (feature.zigzagScore > 0.43 && feature.axis.spanA > 40) {
      results.push(
        makeDetected(
          'resistor',
          feature.axis.cx,
          feature.axis.cy,
          feature.axis.angle,
          clamp(0.55 + feature.zigzagScore * 0.42, 0, 1),
          [feature.id],
          snap,
          { length: Math.max(100, snap(feature.axis.spanA)) },
        ),
      );
      used.add(feature.id);
      continue;
    }
    if (feature.waveScore > 0.56 && feature.axis.spanA > 45) {
      results.push(
        makeDetected(
          'inductor',
          feature.axis.cx,
          feature.axis.cy,
          feature.axis.angle,
          clamp(0.5 + feature.waveScore * 0.38, 0, 1),
          [feature.id],
          snap,
          { length: Math.max(100, snap(feature.axis.spanA)) },
        ),
      );
      used.add(feature.id);
    }
  }

  for (const feature of features) {
    if (used.has(feature.id) || feature.lineScore > 0.58) continue;
    const segments = orthogonalWireSegments(feature, snap, gridSize, tolerance);
    if (!segments.length) continue;
    for (const segment of segments) {
      results.push({
        type: 'wire',
        ...segment,
        confidence: 0.86,
        strokeIds: [feature.id],
      });
    }
    used.add(feature.id);
  }

  for (const feature of lines) {
    if (used.has(feature.id)) continue;
    const ends = lineEnds(feature);
    const angle = feature.axis.angle;
    const horizontal = Math.abs(Math.sin(angle));
    const vertical = Math.abs(Math.cos(angle));
    if (Math.min(horizontal, vertical) < Math.sin(Math.PI / 9)) {
      let x1 = snap(ends[0].x);
      let y1 = snap(ends[0].y);
      let x2 = snap(ends[1].x);
      let y2 = snap(ends[1].y);
      if (Math.abs(x2 - x1) >= Math.abs(y2 - y1)) {
        y1 = y2 = snap((y1 + y2) / 2);
      } else {
        x1 = x2 = snap((x1 + x2) / 2);
      }
      results.push({
        type: 'wire',
        x1,
        y1,
        x2,
        y2,
        confidence: clamp(0.58 + feature.lineScore * 0.38, 0, 1),
        strokeIds: [feature.id],
      });
      used.add(feature.id);
    }
  }

  for (const feature of straightCandidates) {
    if (used.has(feature.id)) continue;
    const angle = feature.axis.angle;
    const horizontal = Math.abs(Math.sin(angle));
    const vertical = Math.abs(Math.cos(angle));
    if (Math.min(horizontal, vertical) >= Math.sin(Math.PI / 8)) continue;
    if (feature.axis.spanA < Math.max(14, gridSize * 0.7)) continue;
    const ends = lineEnds(feature);
    let x1 = snap(ends[0].x);
    let y1 = snap(ends[0].y);
    let x2 = snap(ends[1].x);
    let y2 = snap(ends[1].y);
    if (Math.abs(x2 - x1) >= Math.abs(y2 - y1)) {
      y1 = y2 = snap((y1 + y2) / 2);
    } else {
      x1 = x2 = snap((x1 + x2) / 2);
    }
    results.push({
      type: 'wire',
      x1,
      y1,
      x2,
      y2,
      confidence: 0.8,
      strokeIds: [feature.id],
    });
    used.add(feature.id);
  }

  for (const group of clusterUnknown(features, used, tolerance)) {
    const points = group.flatMap((feature) => feature.pts);
    const bounds = boundsOf(points);
    if (Math.max(bounds.w, bounds.h) < 8) {
      results.push({
        type: 'junction',
        x: snap(bounds.cx),
        y: snap(bounds.cy),
        confidence: 0.58,
        strokeIds: group.map((feature) => feature.id),
      });
    } else {
      results.push({
        type: 'unknown',
        x: bounds.cx,
        y: bounds.cy,
        rot: 0,
        confidence: 0.2,
        strokeIds: group.map((feature) => feature.id),
        box: { x0: bounds.x0, y0: bounds.y0, x1: bounds.x1, y1: bounds.y1 },
      });
    }
  }

  return cleanupGraph(results, { gridSize, tolerance });
}
