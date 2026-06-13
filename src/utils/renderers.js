import { objectBounds, normalizedSymbolLength } from './symbols.js';
import { fitImageRect } from './imageRaster.js';
import { drawIecSymbolToContext } from './iecSymbolLibrary.js';

export const SCHEMATIC_THEME = {
  canvas: '#dfe5eb',
  gridMinor: '#dfe5eb',
  gridMajor: '#dfe5eb',
  ink: '#111418',
  mutedInk: '#111418',
  selection: '#6d5dfc',
  selectionSoft: 'rgba(109, 93, 252, 0.08)',
  port: '#6d5dfc',
  wireDraft: '#6d5dfc',
  review: '#d73e3e',
  labelBackground: 'transparent',
  labelBorder: 'transparent',
};

function roundedRectPath(context, x, y, width, height, radius) {
  const r = Math.max(0, Math.min(radius, width / 2, height / 2));
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
}

function drawGrid(context, width, height, gridSize = 20) {
  context.save();
  context.fillStyle = SCHEMATIC_THEME.canvas;
  context.fillRect(0, 0, width, height);
  context.restore();
}

function withTransform(context, object, draw) {
  context.save();
  context.translate(object.x, object.y);
  context.rotate(object.rot || 0);
  draw();
  context.restore();
}

function transformPoint(object, x, y) {
  const angle = object.rot || 0;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: object.x + x * cos - y * sin,
    y: object.y + x * sin + y * cos,
  };
}

function objectPorts(object) {
  if (object.type === 'wire') {
    return [
      { x: object.x1, y: object.y1 },
      { x: object.x2, y: object.y2 },
    ];
  }
  if (object.type === 'junction') return [{ x: object.x, y: object.y }];
  if (object.type === 'ground') return [transformPoint(object, 0, -45)];
  if (object.type === 'unknown') return [];

  const half = normalizedSymbolLength(object) / 2;
  const ports = [transformPoint(object, -half, 0), transformPoint(object, half, 0)];
  if (object.type === 'scr') ports.push(transformPoint(object, -8, 28));
  return ports;
}

function drawWire(context, object) {
  context.beginPath();
  context.moveTo(object.x1, object.y1);
  context.lineTo(object.x2, object.y2);
  context.stroke();
}

function drawResistor(context, object) {
  withTransform(context, object, () => {
    const length = normalizedSymbolLength(object);
    const half = length / 2;
    const bodyWidth = Math.min(46, length * 0.36);
    const bodyHalf = bodyWidth / 2;
    const bodyHeight = 16;
    context.beginPath();
    context.moveTo(-half, 0);
    context.lineTo(-bodyHalf, 0);
    context.moveTo(bodyHalf, 0);
    context.lineTo(half, 0);
    context.stroke();
    context.strokeRect(-bodyHalf, -bodyHeight / 2, bodyWidth, bodyHeight);
  });
}


function drawFuse(context, object) {
  withTransform(context, object, () => {
    const length = normalizedSymbolLength(object);
    const half = length / 2;
    const bodyWidth = Math.min(30, length * 0.32);
    const bodyHalf = bodyWidth / 2;
    const bodyHeight = 14;
    context.beginPath();
    context.moveTo(-half, 0);
    context.lineTo(-bodyHalf, 0);
    context.moveTo(bodyHalf, 0);
    context.lineTo(half, 0);
    context.stroke();
    context.strokeRect(-bodyHalf, -bodyHeight / 2, bodyWidth, bodyHeight);
  });
}

function drawCapacitor(context, object) {
  withTransform(context, object, () => {
    context.beginPath();
    context.moveTo(-55, 0);
    context.lineTo(-14, 0);
    context.moveTo(14, 0);
    context.lineTo(55, 0);
    context.stroke();

    context.save();
    context.lineWidth = 4.8;
    context.beginPath();
    context.moveTo(-12, -18);
    context.lineTo(-12, 18);
    context.moveTo(12, -18);
    context.lineTo(12, 18);
    context.stroke();
    context.restore();
  });
}

function drawBattery(context, object) {
  withTransform(context, object, () => {
    const length = normalizedSymbolLength(object);
    const half = length / 2;
    const plateGap = Math.min(16, length * 0.13);
    context.beginPath();
    context.moveTo(-half, 0);
    context.lineTo(-plateGap, 0);
    context.moveTo(plateGap, 0);
    context.lineTo(half, 0);
    context.stroke();

    context.save();
    context.beginPath();
    context.lineWidth = 3.8;
    context.moveTo(-plateGap, -27);
    context.lineTo(-plateGap, 27);
    context.stroke();
    context.beginPath();
    context.lineWidth = 2.2;
    context.moveTo(plateGap, -17);
    context.lineTo(plateGap, 17);
    context.stroke();
    context.restore();
  });
}

function drawArrow(context, x1, y1, x2, y2) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const head = 7;
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.moveTo(x2, y2);
  context.lineTo(
    x2 - head * Math.cos(angle - Math.PI / 6),
    y2 - head * Math.sin(angle - Math.PI / 6),
  );
  context.moveTo(x2, y2);
  context.lineTo(
    x2 - head * Math.cos(angle + Math.PI / 6),
    y2 - head * Math.sin(angle + Math.PI / 6),
  );
  context.stroke();
}

function drawDiodeShape(context, object, withArrows, zenerStyle = false, scrStyle = false) {
  withTransform(context, object, () => {
    const length = normalizedSymbolLength(object);
    const half = length / 2;
    const bodyHalf = Math.min(22, length * 0.2);
    context.beginPath();
    context.moveTo(-half, 0);
    context.lineTo(-bodyHalf, 0);
    context.moveTo(bodyHalf, 0);
    context.lineTo(half, 0);
    context.stroke();

    context.beginPath();
    context.moveTo(-bodyHalf, -21);
    context.lineTo(bodyHalf, 0);
    context.lineTo(-bodyHalf, 21);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(bodyHalf, -23);
    context.lineTo(bodyHalf, 23);
    context.stroke();

    if (zenerStyle) {
      context.beginPath();
      context.moveTo(bodyHalf, -23);
      context.lineTo(bodyHalf + 8, -17);
      context.moveTo(bodyHalf, 23);
      context.lineTo(bodyHalf - 8, 17);
      context.stroke();
    }

    if (scrStyle) {
      context.beginPath();
      context.moveTo(-6, 16);
      context.lineTo(-26, 16);
      context.moveTo(-6, 16);
      context.lineTo(6, 5);
      context.stroke();
    }

    if (withArrows) {
      drawArrow(context, -4, -28, -22, -44);
      drawArrow(context, 10, -26, -8, -42);
    }
  });
}

function drawInductor(context, object) {
  withTransform(context, object, () => {
    context.beginPath();
    context.moveTo(-58, 0);
    context.lineTo(-36, 0);
    for (let i = 0; i < 4; i += 1) {
      context.arc(-27 + i * 18, 0, 9, Math.PI, 0);
    }
    context.lineTo(58, 0);
    context.stroke();
  });
}

function drawSource(context, object) {
  withTransform(context, object, () => {
    context.beginPath();
    context.arc(0, 0, 24, 0, Math.PI * 2);
    context.moveTo(-58, 0);
    context.lineTo(-24, 0);
    context.moveTo(24, 0);
    context.lineTo(58, 0);
    context.moveTo(-6, -7);
    context.lineTo(6, -7);
    context.moveTo(0, -13);
    context.lineTo(0, -1);
    context.moveTo(-6, 8);
    context.lineTo(6, 8);
    context.stroke();
  });
}

function drawSwitch(context, object) {
  withTransform(context, object, () => {
    context.beginPath();
    context.moveTo(-58, 0);
    context.lineTo(-18, 0);
    context.moveTo(18, 0);
    context.lineTo(58, 0);
    context.moveTo(-18, 0);
    context.lineTo(18, -22);
    context.stroke();
    context.beginPath();
    context.arc(-18, 0, 2.8, 0, Math.PI * 2);
    context.arc(18, 0, 2.8, 0, Math.PI * 2);
    context.fill();
  });
}

function drawGround(context, object) {
  withTransform(context, object, () => {
    context.beginPath();
    context.moveTo(0, -42);
    context.lineTo(0, 0);
    context.moveTo(-24, 0);
    context.lineTo(24, 0);
    context.moveTo(-16, 8);
    context.lineTo(16, 8);
    context.moveTo(-8, 16);
    context.lineTo(8, 16);
    context.stroke();
  });
}

function drawLamp(context, object) {
  withTransform(context, object, () => {
    context.beginPath();
    context.arc(0, 0, 24, 0, Math.PI * 2);
    context.moveTo(-17, -17);
    context.lineTo(17, 17);
    context.moveTo(17, -17);
    context.lineTo(-17, 17);
    context.moveTo(-58, 0);
    context.lineTo(-24, 0);
    context.moveTo(24, 0);
    context.lineTo(58, 0);
    context.stroke();
  });
}

function drawUnknown(context, object) {
  const bounds = object.box || {
    x0: object.x - 35,
    y0: object.y - 25,
    x1: object.x + 35,
    y1: object.y + 25,
  };
  context.save();
  context.strokeStyle = SCHEMATIC_THEME.review;
  context.fillStyle = 'rgba(215, 62, 62, 0.06)';
  context.setLineDash([7, 5]);
  context.lineWidth = 1.5;
  context.fillRect(bounds.x0, bounds.y0, bounds.x1 - bounds.x0, bounds.y1 - bounds.y0);
  context.strokeRect(bounds.x0, bounds.y0, bounds.x1 - bounds.x0, bounds.y1 - bounds.y0);
  context.setLineDash([]);
  context.font = '700 11px Arial, sans-serif';
  context.fillStyle = SCHEMATIC_THEME.review;
  context.fillText('REVIEW', bounds.x0 + 6, bounds.y0 + 15);
  context.restore();
}

function drawMetadataText(context, text, x, y, font, align = 'center') {
  context.save();
  context.font = font;
  context.textAlign = align;
  context.textBaseline = 'middle';
  context.fillStyle = SCHEMATIC_THEME.mutedInk;
  context.fillText(text, x, y);
  context.restore();
}

function drawMetadata(context, object) {
  if (!object.label && !object.value) return;
  const bounds = objectBounds(object);
  const isVertical = Math.abs(Math.sin(object.rot || 0)) > 0.7;

  if (isVertical) {
    const anchorX = bounds.x1 + 14;
    if (object.label) drawMetadataText(context, object.label, anchorX, object.y - 10, '700 12px Arial, sans-serif', 'left');
    if (object.value) drawMetadataText(context, object.value, anchorX, object.y + 12, '700 12px Arial, sans-serif', 'left');
    return;
  }

  if (object.label) {
    drawMetadataText(context, object.label, object.x, bounds.y0 - 10, '700 12px Arial, sans-serif');
  }
  if (object.value) {
    drawMetadataText(context, object.value, object.x, bounds.y1 + 12, '700 12px Arial, sans-serif');
  }
}

export function drawSchematicObject(context, object) {
  switch (object.type) {
    case 'wire':
      drawWire(context, object);
      break;
    case 'junction':
      context.beginPath();
      context.arc(object.x, object.y, 4.4, 0, Math.PI * 2);
      context.fill();
      break;
    case 'unknown':
      drawUnknown(context, object);
      break;
    default:
      withTransform(context, object, () => {
        drawIecSymbolToContext(context, object);
      });
      break;
  }
  if (!['wire', 'junction', 'unknown'].includes(object.type)) drawMetadata(context, object);
}

function drawPorts(context, object, selected = false) {
  const ports = objectPorts(object);
  if (!ports.length) return;
  context.save();
  for (const port of ports) {
    context.beginPath();
    context.arc(port.x, port.y, selected ? 3.8 : 3, 0, Math.PI * 2);
    context.fillStyle = '#ffffff';
    context.fill();
    context.strokeStyle = SCHEMATIC_THEME.port;
    context.lineWidth = selected ? 1.6 : 1.2;
    context.stroke();
  }
  context.restore();
}

function drawSelection(context, object) {
  const bounds = objectBounds(object);
  const x = bounds.x0 - 8;
  const y = bounds.y0 - 8;
  const width = bounds.x1 - bounds.x0 + 16;
  const height = bounds.y1 - bounds.y0 + 16;

  context.save();
  context.fillStyle = SCHEMATIC_THEME.selectionSoft;
  context.strokeStyle = SCHEMATIC_THEME.selection;
  context.lineWidth = 1.2;
  context.setLineDash([5, 4]);
  context.fillRect(x, y, width, height);
  context.strokeRect(x, y, width, height);
  context.setLineDash([]);
  context.restore();

  drawPorts(context, object, true);
}

function drawHover(context, object) {
  if (object.type === 'unknown') return;
  const bounds = objectBounds(object);
  context.save();
  context.strokeStyle = 'rgba(108, 99, 255, 0.45)';
  context.lineWidth = 1;
  context.setLineDash([3, 4]);
  context.strokeRect(
    bounds.x0 - 5,
    bounds.y0 - 5,
    bounds.x1 - bounds.x0 + 10,
    bounds.y1 - bounds.y0 + 10,
  );
  context.restore();
}

function drawEmptyState(context, width, height) {
  context.save();
  const cardWidth = 300;
  const cardHeight = 108;
  const x = (width - cardWidth) / 2;
  const y = (height - cardHeight) / 2;
  roundedRectPath(context, x, y, cardWidth, cardHeight, 8);
  context.fillStyle = 'rgba(255, 255, 255, 0.95)';
  context.fill();
  context.strokeStyle = '#c7cdd5';
  context.lineWidth = 1;
  context.stroke();

  context.fillStyle = '#111418';
  context.font = '700 16px Arial, sans-serif';
  context.textAlign = 'left';
  context.fillText('Corrected schematic appears here', x + 20, y + 38);
  context.fillStyle = '#444a52';
  context.font = '12px Arial, sans-serif';
  context.fillText('Convert a sketch or place a component from the palette.', x + 20, y + 62);
  context.fillText('Drag objects • R rotates • Delete removes', x + 20, y + 82);
  context.restore();
}

export function renderSchematicCanvas(
  canvas,
  objects,
  selectedIndex = -1,
  wireDraft = null,
  options = {},
) {
  const context = canvas.getContext('2d');
  const {
    hoveredIndex = -1,
    showGrid = false,
    gridSize = 20,
    showEmptyState = true,
  } = options;

  context.clearRect(0, 0, canvas.width, canvas.height);
  if (showGrid) {
    drawGrid(context, canvas.width, canvas.height, gridSize);
  } else {
    context.fillStyle = SCHEMATIC_THEME.canvas;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  context.lineWidth = 2.2;
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = SCHEMATIC_THEME.ink;
  context.fillStyle = SCHEMATIC_THEME.ink;

  objects.forEach((object) => drawSchematicObject(context, object));

  if (hoveredIndex >= 0 && hoveredIndex !== selectedIndex && objects[hoveredIndex]) {
    drawHover(context, objects[hoveredIndex]);
  }
  if (selectedIndex >= 0 && objects[selectedIndex]) {
    drawSelection(context, objects[selectedIndex]);
  }

  if (wireDraft) {
    context.save();
    context.strokeStyle = SCHEMATIC_THEME.wireDraft;
    context.lineWidth = 2.2;
    context.setLineDash([6, 5]);
    drawWire(context, wireDraft);
    context.setLineDash([]);
    drawPorts(context, wireDraft, true);
    context.restore();
  }

  if (!objects.length && !wireDraft && showEmptyState) {
    drawEmptyState(context, canvas.width, canvas.height);
  }
}

export function renderSketchCanvas(canvas, strokes, backgroundImage, penWidth) {
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (backgroundImage) {
    const sourceWidth = backgroundImage.naturalWidth || backgroundImage.width;
    const sourceHeight = backgroundImage.naturalHeight || backgroundImage.height;
    const fit = fitImageRect(sourceWidth, sourceHeight, canvas.width, canvas.height);
    context.globalAlpha = 0.72;
    context.drawImage(backgroundImage, fit.x, fit.y, fit.width, fit.height);
    context.globalAlpha = 1;
  }

  const width = Math.max(2, Number(penWidth) || 4);
  context.lineCap = 'round';
  context.lineJoin = 'round';
  for (const stroke of strokes) {
    if (!stroke.length) continue;
    if (stroke.length === 1) {
      context.beginPath();
      context.fillStyle = '#075fd8';
      context.arc(stroke[0].x, stroke[0].y, Math.max(3, width / 2), 0, Math.PI * 2);
      context.fill();
      continue;
    }
    context.beginPath();
    context.moveTo(stroke[0].x, stroke[0].y);
    for (let i = 1; i < stroke.length; i += 1) context.lineTo(stroke[i].x, stroke[i].y);
    context.strokeStyle = 'rgba(255,255,255,.98)';
    context.lineWidth = width + 5;
    context.stroke();

    context.beginPath();
    context.moveTo(stroke[0].x, stroke[0].y);
    for (let i = 1; i < stroke.length; i += 1) context.lineTo(stroke[i].x, stroke[i].y);
    context.strokeStyle = '#075fd8';
    context.lineWidth = width;
    context.stroke();
  }
}
