export const DEFAULT_CIRCUIT_LABELS = [
  'resistor',
  'capacitor',
  'battery',
  'fuse',
  'diode',
  'zener',
  'led',
  'scr',
  'switch',
  'lamp',
  'ground',
  'source',
  'junction',
  'terminal',
  'text',
];

export const CLASS_ALIASES = {
  resistor: 'resistor',
  resistance: 'resistor',
  capacitor: 'capacitor',
  cap: 'capacitor',
  polarized_capacitor: 'capacitor',
  battery: 'battery',
  cell: 'battery',
  fuse: 'fuse',
  diode: 'diode',
  rectifier: 'diode',
  zener: 'zener',
  zener_diode: 'zener',
  led: 'led',
  light_emitting_diode: 'led',
  scr: 'scr',
  thyristor: 'scr',
  switch: 'switch',
  lamp: 'lamp',
  bulb: 'lamp',
  ground: 'ground',
  earth: 'ground',
  source: 'source',
  voltage_source: 'source',
  junction: 'junction',
  node: 'junction',
  terminal: 'terminal',
  connector: 'terminal',
  text: 'text',
  label: 'text',
};

function normalizeNames(names) {
  if (Array.isArray(names)) return names.map(String);
  if (names && typeof names === 'object') {
    return Object.keys(names)
      .sort((a, b) => Number(a) - Number(b))
      .map((key) => String(names[key]));
  }
  return DEFAULT_CIRCUIT_LABELS.slice();
}

export function parseLabelsManifest(value) {
  const parsed = typeof value === 'string' ? JSON.parse(value) : value;
  if (Array.isArray(parsed)) {
    return { names: normalizeNames(parsed), inputSize: 640 };
  }
  return {
    names: normalizeNames(parsed?.names ?? parsed?.labels ?? parsed?.classes),
    inputSize: Math.max(320, Math.min(1280, Number(parsed?.inputSize ?? parsed?.imgsz ?? 640))),
  };
}

export function normalizeClassName(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

export function schematicTypeForClass(name) {
  const normalized = normalizeClassName(name)
    .replace(/_(horizontal|vertical|rotated|left|right|up|down)$/g, '');
  return CLASS_ALIASES[normalized] || null;
}

export function rotationForClass(name, box) {
  const normalized = normalizeClassName(name);
  if (normalized.includes('vertical')) return Math.PI / 2;
  if (normalized.includes('horizontal')) return 0;
  return box.height > box.width * 1.18 ? Math.PI / 2 : 0;
}
