import { buildColorMasks, recognizeColoredSchematic } from './imageSymbolRecognizer.js';
import { recognizeMonochromeSchematic } from './monochromeRecognizer.js';
import { recognizeStructuredIecSchematic } from './structuredIecRecognizer.js';

const SUPPLEMENTAL_TYPES = new Set([
  'resistor',
  'fuse',
  'capacitor',
  'battery',
  'diode',
  'zener',
  'led',
  'scr',
  'inductor',
  'source',
  'switch',
  'ground',
  'lamp',
]);

function centerOf(object) {
  if (object.type === 'wire') {
    return {
      x: (object.x1 + object.x2) / 2,
      y: (object.y1 + object.y2) / 2,
    };
  }
  return { x: object.x || 0, y: object.y || 0 };
}

function distanceBetween(a, b) {
  const ac = centerOf(a);
  const bc = centerOf(b);
  return Math.hypot(ac.x - bc.x, ac.y - bc.y);
}

function electricalMaskRgba(masks, width, height) {
  const output = new Uint8Array(width * height * 4);
  output.fill(255);

  for (let pixel = 0; pixel < width * height; pixel += 1) {
    if (!masks.wire[pixel] && !masks.component[pixel]) continue;
    const offset = pixel * 4;
    output[offset] = 0;
    output[offset + 1] = 0;
    output[offset + 2] = 0;
    output[offset + 3] = 255;
  }
  return output;
}

function dedupeWires(wires) {
  const output = [];
  for (const wire of wires) {
    const duplicate = output.some((candidate) => (
      Math.abs(candidate.x1 - wire.x1) < 6
      && Math.abs(candidate.y1 - wire.y1) < 6
      && Math.abs(candidate.x2 - wire.x2) < 6
      && Math.abs(candidate.y2 - wire.y2) < 6
    ));
    if (!duplicate) output.push(wire);
  }
  return output;
}

function mergeColorAndFilteredMonochrome(colored, monochrome, width, height, options = {}) {
  const colorWires = dedupeWires(colored.objects.filter((object) => object.type === 'wire'));
  const colorSymbols = colored.objects.filter((object) => object.type !== 'wire');
  const knownColor = colorSymbols.filter((object) => object.type !== 'unknown');
  let unknownColor = colorSymbols.filter((object) => object.type === 'unknown');
  const additions = [];
  const tolerance = Math.max(2, Number(options.tolerance || 10));
  const distanceLimit = Math.max(12, tolerance * 2.2, Math.min(width, height) * 0.035);

  for (const candidate of monochrome.objects) {
    if (!SUPPLEMENTAL_TYPES.has(candidate.type)) continue;
    const supplementalFloor = Math.max(0.45, Number(options.confidenceThreshold || 0.6) - 0.12);
    if ((candidate.confidence || 0) < supplementalFloor) continue;

    const overlapsKnown = knownColor.some((object) => distanceBetween(object, candidate) < distanceLimit);
    if (overlapsKnown) continue;

    const matchedUnknown = unknownColor.find((object) => distanceBetween(object, candidate) < distanceLimit);
    if (matchedUnknown) {
      unknownColor = unknownColor.filter((object) => object !== matchedUnknown);
    }

    const duplicateAddition = additions.some((object) => distanceBetween(object, candidate) < distanceLimit * 0.65);
    if (!duplicateAddition) additions.push(candidate);
  }

  return [...colorWires, ...knownColor, ...additions, ...unknownColor];
}

export function recognizeHybridSchematic(rgba, width, height, options = {}) {
  const colored = recognizeColoredSchematic(rgba, width, height);

  if (!colored.colorMode) {
    const structured = recognizeStructuredIecSchematic(rgba, width, height, options);
    if (structured.used) {
      return {
        objects: structured.objects,
        mode: 'structured-iec',
        diagnostics: {
          ...(colored.diagnostics || {}),
          ...(structured.diagnostics || {}),
          colorForegroundFiltered: false,
          appliedSettings: { tolerance: options.tolerance || 10, confidenceThreshold: options.confidenceThreshold || 0.6 },
        },
      };
    }

    const monochrome = recognizeMonochromeSchematic(rgba, width, height, options);
    return {
      objects: monochrome.objects,
      mode: 'monochrome-symbols',
      diagnostics: {
        ...(colored.diagnostics || {}),
        ...(monochrome.diagnostics || {}),
        structuredIec: false,
        colorForegroundFiltered: false,
        appliedSettings: { tolerance: options.tolerance || 10, confidenceThreshold: options.confidenceThreshold || 0.6 },
      },
    };
  }

  // Important: do not grayscale the whole image. Gray labels and values would
  // become fake wires. First isolate saturated electrical ink, then convert
  // only that electrical foreground to a clean black/white raster.
  const masks = buildColorMasks(rgba, width, height);
  const cleanRgba = electricalMaskRgba(masks, width, height);
  const monochrome = recognizeMonochromeSchematic(cleanRgba, width, height, options);
  const objects = mergeColorAndFilteredMonochrome(colored, monochrome, width, height, options);
  const types = objects.filter((object) => !['wire', 'junction'].includes(object.type)).reduce((counts, object) => {
    counts[object.type] = (counts[object.type] || 0) + 1;
    return counts;
  }, {});

  return {
    objects,
    mode: 'color-foreground-monochrome',
    diagnostics: {
      ...(colored.diagnostics || {}),
      filteredMonochromeSymbols: monochrome.objects.filter((object) => object.type !== 'wire').length,
      wires: objects.filter((object) => object.type === 'wire').length,
      symbols: objects.filter((object) => object.type !== 'wire').length,
      types,
      colorForegroundFiltered: true,
      appliedSettings: { tolerance: options.tolerance || 10, confidenceThreshold: options.confidenceThreshold || 0.6 },
    },
  };
}
