import { normalizeAxisAngle } from './geometry.js';

export const SYMBOL_TYPES = [
  'resistor',
  'capacitor',
  'inductor',
  'source',
  'battery',
  'diode',
  'zener',
  'led',
  'scr',
  'fuse',
  'switch',
  'ground',
  'lamp',
  'junction',
  'unknown',
];

export const SYMBOL_BUTTONS = [
  { type: 'wire', label: 'Wire' },
  { type: 'resistor', label: '—[ ]— Resistor' },
  { type: 'fuse', label: '—[ ]— Fuse' },
  { type: 'capacitor', label: '—| |— Capacitor' },
  { type: 'inductor', label: '—oooo— Inductor' },
  { type: 'source', label: '—( )— Source' },
  { type: 'battery', label: '—|‖— Battery' },
  { type: 'diode', label: '—▷|— Diode' },
  { type: 'zener', label: '—▷|<— Zener' },
  { type: 'led', label: '—▷|— LED ↗' },
  { type: 'scr', label: '—▷|— SCR' },
  { type: 'switch', label: '—/ — Switch' },
  { type: 'ground', label: 'Ground ⏚' },
  { type: 'lamp', label: 'Lamp ⊗' },
  { type: 'junction', label: 'Junction ●' },
];

export function normalizedSymbolLength(object) {
  const raw = Number(object?.length);
  const compact = Boolean(object?.compact);
  switch (object?.type) {
    case 'resistor':
      return compact
        ? Math.max(52, Math.min(120, Number.isFinite(raw) ? raw : 70))
        : Math.max(100, Math.min(140, Number.isFinite(raw) ? raw : 120));
    case 'fuse':
      return compact
        ? Math.max(48, Math.min(90, Number.isFinite(raw) ? raw : 60))
        : Math.max(72, Math.min(98, Number.isFinite(raw) ? raw : 84));
    case 'battery':
      return compact
        ? Math.max(52, Math.min(100, Number.isFinite(raw) ? raw : 68))
        : Math.max(88, Math.min(112, Number.isFinite(raw) ? raw : 100));
    case 'diode':
    case 'led':
    case 'zener':
    case 'scr':
      return compact
        ? Math.max(52, Math.min(100, Number.isFinite(raw) ? raw : 66))
        : Math.max(96, Math.min(120, Number.isFinite(raw) ? raw : 108));
    case 'capacitor':
      return compact
        ? Math.max(52, Math.min(96, Number.isFinite(raw) ? raw : 64))
        : 110;
    default:
      return Number.isFinite(raw) ? raw : 120;
  }
}

export function makeSymbol(type, x, y) {
  if (type === 'wire') {
    return { type: 'wire', x1: x - 60, y1: y, x2: x + 60, y2: y, confidence: 1, strokeIds: [] };
  }
  if (type === 'junction') {
    return { type: 'junction', x, y, confidence: 1, strokeIds: [] };
  }
  if (type === 'unknown') {
    return {
      type: 'unknown',
      x,
      y,
      rot: 0,
      confidence: 0.2,
      strokeIds: [],
      box: { x0: x - 40, y0: y - 30, x1: x + 40, y1: y + 30 },
    };
  }
  return {
    type,
    x,
    y,
    rot: 0,
    confidence: 1,
    strokeIds: [],
    ...(['resistor', 'battery', 'diode', 'led', 'zener', 'scr', 'fuse'].includes(type)
      ? { length: type === 'resistor' ? 140 : type === 'fuse' ? 84 : 120 }
      : {}),
  };
}

export function objectCenter(object) {
  return object.type === 'wire'
    ? { x: (object.x1 + object.x2) / 2, y: (object.y1 + object.y2) / 2 }
    : { x: object.x, y: object.y };
}

export function objectBounds(object) {
  if (object.type === 'wire') {
    return {
      x0: Math.min(object.x1, object.x2) - 8,
      y0: Math.min(object.y1, object.y2) - 8,
      x1: Math.max(object.x1, object.x2) + 8,
      y1: Math.max(object.y1, object.y2) + 8,
    };
  }
  if (object.type === 'unknown' && object.box) return object.box;
  const center = objectCenter(object);
  const majorRadius = object.length ? normalizedSymbolLength(object) / 2 + 18 : object.type === 'ground' ? 55 : 75;
  const minorRadius = ['led', 'diode', 'zener', 'scr'].includes(object.type) ? 55 : object.type === 'fuse' ? 36 : 50;
  const vertical = Math.abs(Math.sin(object.rot || 0)) > 0.7;
  return vertical
    ? { x0: center.x - minorRadius, y0: center.y - majorRadius, x1: center.x + minorRadius, y1: center.y + majorRadius }
    : { x0: center.x - majorRadius, y0: center.y - minorRadius, x1: center.x + majorRadius, y1: center.y + minorRadius };
}

export function retypeObject(object, type, snap) {
  const center = objectCenter(object);
  const rotation = object.rot || 0;
  if (type === 'unknown') {
    return {
      type: 'unknown',
      x: center.x,
      y: center.y,
      rot: rotation,
      confidence: object.confidence || 0.2,
      box: objectBounds(object),
      originalType: object.type,
      strokeIds: object.strokeIds || [],
      label: object.label || '',
      value: object.value || '',
    };
  }
  const next = makeSymbol(type, snap(center.x), snap(center.y));
  next.rot = normalizeAxisAngle(rotation);
  next.confidence = 1;
  next.strokeIds = object.strokeIds || [];
  next.label = object.label || '';
  next.value = object.value || '';
  if (object.length && ['resistor', 'battery', 'diode', 'led', 'zener', 'scr', 'fuse'].includes(type)) {
    next.length = Math.max(80, snap(object.length));
  }
  return next;
}
