import { toDegrees } from './geometry.js';
import { objectBounds, normalizedSymbolLength } from './symbols.js';
import { renderSchematicCanvas } from './renderers.js';
import { buildFlowModel } from './pixiGraphAdapter.js';
import { svgMarkupForIecSymbol } from './iecSymbolLibrary.js';

const EXPORT_THEME = {
  ink: '#252a32',
  muted: '#5e6673',
  labelBackground: '#ffffff',
  labelBorder: '#e1e5ec',
  review: '#e5484d',
};

function escapeXml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function svgGroup(object, body) {
  return `<g transform="translate(${object.x} ${object.y}) rotate(${toDegrees(object.rot || 0)})">${body}</g>`;
}

function textPillSvg(text, x, centerY, fontSize, fontWeight = 400) {
  const safe = escapeXml(text);
  const width = Math.max(30, String(text).length * fontSize * 0.62 + 14);
  const height = 22;
  const left = x - width / 2;
  const top = centerY - height / 2;
  return [
    `<rect x="${left}" y="${top}" width="${width}" height="${height}" rx="5" fill="${EXPORT_THEME.labelBackground}" stroke="${EXPORT_THEME.labelBorder}" stroke-width="1"/>`,
    `<text x="${x}" y="${centerY + 0.5}" dominant-baseline="middle" text-anchor="middle" fill="${EXPORT_THEME.muted}" stroke="none" font-family="Inter,system-ui,sans-serif" font-size="${fontSize}" font-weight="${fontWeight}">${safe}</text>`,
  ].join('');
}

function metadataSvg(object) {
  if (!object.label && !object.value) return '';
  const bounds = objectBounds(object);
  const chunks = [];
  if (object.label) {
    chunks.push(textPillSvg(object.label, object.x, bounds.y0 - 13, 13, 600));
  }
  if (object.value) {
    chunks.push(textPillSvg(object.value, object.x, bounds.y1 + 14, 12, 400));
  }
  return chunks.join('');
}

function diodeSvg(object, led, zener = false, scr = false) {
  const length = normalizedSymbolLength(object);
  const half = length / 2;
  const bodyHalf = Math.min(25, length * 0.22);
  const arrows = led
    ? '<path d="M-8-32L-30-54M-30-54L-22-52M-30-54L-28-46M10-31L-12-53M-12-53L-4-51M-12-53L-10-45"/>'
    : '';
  const zenerMarks = zener ? `<path d="M${bodyHalf}-25L${bodyHalf + 8}-19M${bodyHalf}25L${bodyHalf - 8}19"/>` : '';
  const scrGate = scr ? '<path d="M-6 16H-26M-6 16L6 5"/>' : '';
  return svgGroup(
    object,
    `<path d="M${-half} 0H${-bodyHalf}M${bodyHalf} 0H${half}M${-bodyHalf}-23L${bodyHalf} 0L${-bodyHalf} 23ZM${bodyHalf}-25V25"/>${arrows}${zenerMarks}${scrGate}`,
  );
}

export function schematicToSvg(objects, width = 900, height = 650) {
  const output = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    '<rect width="100%" height="100%" fill="white"/>',
    `<g fill="none" stroke="${EXPORT_THEME.ink}" stroke-width="2.35" stroke-linecap="round" stroke-linejoin="round">`,
  ];

  for (const object of objects) {
    if (object.type === 'wire') {
      output.push(`<path d="M${object.x1} ${object.y1}L${object.x2} ${object.y2}"/>`);
    } else if (object.type === 'junction') {
      output.push(`<circle cx="${object.x}" cy="${object.y}" r="4.2" fill="${EXPORT_THEME.ink}" stroke="none"/>`);
    } else if (object.type === 'unknown') {
      const bounds = objectBounds(object);
      output.push(
        `<rect x="${bounds.x0}" y="${bounds.y0}" width="${bounds.x1 - bounds.x0}" height="${bounds.y1 - bounds.y0}" fill="rgba(229,72,77,.07)" stroke="${EXPORT_THEME.review}" stroke-width="1.6" stroke-dasharray="7 5"/>`,
      );
    } else {
      const markup = svgMarkupForIecSymbol(object);
      if (markup) output.push(svgGroup(object, markup));
    }
    if (!['wire', 'junction', 'unknown'].includes(object.type)) output.push(metadataSvg(object));
  }

  const graph = buildFlowModel(objects, -1, 20);
  for (const node of graph.nodes) {
    if (node.data?.kind !== 'terminal') continue;
    const members = node.data?.members?.length || 0;
    if (members <= 1) {
      output.push(`<circle cx="${node.position.x}" cy="${node.position.y}" r="5.5" fill="white" stroke="${EXPORT_THEME.ink}" stroke-width="2.2"/>`);
    }
  }

  output.push('</g></svg>');
  return output.join('');
}

export function downloadBlob(blob, filename) {
  const anchor = document.createElement('a');
  const url = URL.createObjectURL(blob);
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function exportSvg(objects) {
  downloadBlob(new Blob([schematicToSvg(objects)], { type: 'image/svg+xml' }), 'schematic.svg');
}

export function exportPng(objects, width = 900, height = 650) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  renderSchematicCanvas(canvas, objects, -1, null, {
    showGrid: false,
    showEmptyState: false,
  });
  canvas.toBlob((blob) => {
    if (blob) downloadBlob(blob, 'schematic.png');
  }, 'image/png');
}

export function saveProject(strokes, objects) {
  const project = { version: 5.1, format: 'sketch2schematic-react', strokes, objects };
  downloadBlob(
    new Blob([JSON.stringify(project, null, 2)], { type: 'application/json' }),
    'schematic-project.json',
  );
}
