export const clone = (value) => JSON.parse(JSON.stringify(value));
export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
export const midpoint = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
export const toDegrees = (radians) => (radians * 180) / Math.PI;

export function normalizeAxisAngle(angle) {
  let next = angle;
  while (next < 0) next += Math.PI;
  while (next >= Math.PI) next -= Math.PI;
  return next;
}

export function angleDifference(a, b) {
  const difference = Math.abs(normalizeAxisAngle(a) - normalizeAxisAngle(b));
  return Math.min(difference, Math.PI - difference);
}

export const createSnapper = (gridSize) => (value) =>
  Math.round(value / Math.max(1, gridSize)) * Math.max(1, gridSize);

export function canvasPoint(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) * canvas.width) / rect.width,
    y: ((event.clientY - rect.top) * canvas.height) / rect.height,
  };
}

export function segmentPointDistance(point, start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const lengthSquared = dx * dx + dy * dy;
  if (!lengthSquared) return dist(point, start);
  const t = clamp(
    ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared,
    0,
    1,
  );
  return dist(point, { x: start.x + t * dx, y: start.y + t * dy });
}
