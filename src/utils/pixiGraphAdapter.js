import { normalizedSymbolLength } from './symbols.js';
const DEFAULT_LENGTH = 120;

function normalizeQuarterTurn(angle = 0) {
  const quarter = Math.round(angle / (Math.PI / 2));
  return ((quarter % 4) + 4) % 4;
}

function rotatePoint(x, y, angle = 0) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: x * cos - y * sin, y: x * sin + y * cos };
}

function objectCenter(object) {
  if (object.type === 'wire') {
    return { x: (object.x1 + object.x2) / 2, y: (object.y1 + object.y2) / 2 };
  }
  return { x: object.x, y: object.y };
}

function basePortOffsets(object) {
  if (object.type === 'junction') return [{ id: 'p0', x: 0, y: 0 }];
  if (object.type === 'ground') return [{ id: 'p0', x: 0, y: -45 }];
  if (object.type === 'unknown') return [];

  const half = normalizedSymbolLength(object) / 2;
  const ports = [
    { id: 'p0', x: -half, y: 0 },
    { id: 'p1', x: half, y: 0 },
  ];
  if (object.type === 'scr') ports.push({ id: 'p2', x: -8, y: 28 });
  return ports;
}

function sideForOffset(offset) {
  if (Math.abs(offset.x) >= Math.abs(offset.y)) return offset.x < 0 ? 'left' : 'right';
  return offset.y < 0 ? 'top' : 'bottom';
}

export function getObjectPorts(object) {
  if (object.type === 'wire') return [];
  const center = objectCenter(object);
  return basePortOffsets(object).map((port) => {
    const rotated = rotatePoint(port.x, port.y, object.rot || 0);
    return {
      id: port.id,
      offset: rotated,
      side: sideForOffset(rotated),
      point: { x: center.x + rotated.x, y: center.y + rotated.y },
    };
  });
}

function dimensionsForObject(object, ports) {
  if (object.type === 'junction') return { width: 24, height: 24 };
  if (object.type === 'unknown' && object.box) {
    return {
      width: Math.max(90, object.box.x1 - object.box.x0 + 20),
      height: Math.max(70, object.box.y1 - object.box.y0 + 20),
    };
  }

  const maxX = Math.max(60, ...ports.map((port) => Math.abs(port.offset.x) + 18));
  const maxY = Math.max(55, ...ports.map((port) => Math.abs(port.offset.y) + 18));
  return {
    width: Math.max(120, maxX * 2),
    height: Math.max(110, maxY * 2),
  };
}

function endpointKey(point, gridSize) {
  const precision = Math.max(2, Math.min(10, gridSize / 2));
  return `${Math.round(point.x / precision)}:${Math.round(point.y / precision)}`;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function makeObjectNode(object, objectIndex, selectedIndex) {
  const ports = getObjectPorts(object);
  const size = dimensionsForObject(object, ports);
  return {
    id: `object-${objectIndex}`,
    type: 'schematic',
    position: objectCenter(object),
    width: size.width,
    height: size.height,
    style: { width: size.width, height: size.height },
    data: {
      kind: object.type === 'junction' ? 'junction' : 'component',
      object,
      objectIndex,
      ports,
      width: size.width,
      height: size.height,
    },
    selected: selectedIndex === objectIndex,
    draggable: true,
    selectable: true,
    connectable: object.type !== 'unknown',
    zIndex: 2,
  };
}

function makeTerminalNode(key, point, members, selectedIndex) {
  return {
    id: `terminal-${key}`,
    type: 'schematic',
    position: point,
    width: 22,
    height: 22,
    style: { width: 22, height: 22 },
    data: {
      kind: 'terminal',
      ports: [{ id: 'p0', offset: { x: 0, y: 0 }, side: 'left', point }],
      members,
      width: 22,
      height: 22,
    },
    selected: members.some((member) => member.wireIndex === selectedIndex),
    draggable: true,
    selectable: true,
    connectable: true,
    zIndex: 3,
  };
}

export function buildFlowModel(objects, selectedIndex = -1, gridSize = 20) {
  const objectNodes = [];
  const availablePorts = [];

  objects.forEach((object, objectIndex) => {
    if (object.type === 'wire') return;
    const node = makeObjectNode(object, objectIndex, selectedIndex);
    objectNodes.push(node);
    node.data.ports.forEach((port) => {
      availablePorts.push({
        nodeId: node.id,
        handleId: port.id,
        objectIndex,
        point: port.point,
      });
    });
  });

  const terminalMap = new Map();
  const edges = [];
  const tolerance = Math.max(18, gridSize * 1.25);

  function attachEndpoint(point, wireIndex, endpoint) {
    let best = null;
    let bestDistance = Infinity;
    for (const port of availablePorts) {
      const currentDistance = distance(point, port.point);
      if (currentDistance < bestDistance) {
        best = port;
        bestDistance = currentDistance;
      }
    }
    if (best && bestDistance <= tolerance) {
      return {
        ...best,
        endpoint,
        terminal: false,
      };
    }

    const key = endpointKey(point, gridSize);
    if (!terminalMap.has(key)) {
      terminalMap.set(key, {
        key,
        point: { ...point },
        members: [],
      });
    }
    const terminal = terminalMap.get(key);
    terminal.members.push({ wireIndex, endpoint });
    return {
      nodeId: `terminal-${key}`,
      handleId: 'p0',
      point: terminal.point,
      endpoint,
      terminal: true,
      terminalKey: key,
    };
  }

  objects.forEach((object, wireIndex) => {
    if (object.type !== 'wire') return;
    const sourceAttachment = attachEndpoint(
      { x: object.x1, y: object.y1 },
      wireIndex,
      'source',
    );
    const targetAttachment = attachEndpoint(
      { x: object.x2, y: object.y2 },
      wireIndex,
      'target',
    );

    edges.push({
      id: `wire-${wireIndex}`,
      source: sourceAttachment.nodeId,
      sourceHandle: sourceAttachment.handleId,
      target: targetAttachment.nodeId,
      targetHandle: targetAttachment.handleId,
      type: 'step',
      selected: selectedIndex === wireIndex,
      selectable: true,
      focusable: true,
      reconnectable: true,
      interactionWidth: 18,
      style: { stroke: '#111418', strokeWidth: 2.2 },
      pathOptions: { borderRadius: 0, offset: 8 },
      data: {
        wireIndex,
        sourceAttachment,
        targetAttachment,
      },
      zIndex: 1,
    });
  });

  const terminalNodes = [...terminalMap.values()].map((terminal) =>
    makeTerminalNode(terminal.key, terminal.point, terminal.members, selectedIndex),
  );

  return {
    nodes: [...objectNodes, ...terminalNodes],
    edges,
  };
}

export function getNodeHandlePoint(node, handleId = 'p0') {
  const port = node.data?.ports?.find((item) => item.id === handleId)
    || node.data?.ports?.[0]
    || { offset: { x: 0, y: 0 } };
  return {
    x: node.position.x + port.offset.x,
    y: node.position.y + port.offset.y,
  };
}

export function updateDraggedNodeObjects(objects, draggedNode, edges) {
  const next = objects.map((object) => ({ ...object }));
  const data = draggedNode.data || {};

  if (data.kind === 'terminal') {
    for (const member of data.members || []) {
      const wire = next[member.wireIndex];
      if (!wire || wire.type !== 'wire') continue;
      if (member.endpoint === 'source') {
        wire.x1 = draggedNode.position.x;
        wire.y1 = draggedNode.position.y;
      } else {
        wire.x2 = draggedNode.position.x;
        wire.y2 = draggedNode.position.y;
      }
    }
    return next;
  }

  const objectIndex = data.objectIndex;
  const object = next[objectIndex];
  if (!object || object.type === 'wire') return next;
  const previousCenter = objectCenter(object);
  const dx = draggedNode.position.x - previousCenter.x;
  const dy = draggedNode.position.y - previousCenter.y;
  object.x = draggedNode.position.x;
  object.y = draggedNode.position.y;
  if (object.box) {
    object.box = {
      x0: object.box.x0 + dx,
      y0: object.box.y0 + dy,
      x1: object.box.x1 + dx,
      y1: object.box.y1 + dy,
    };
  }

  for (const edge of edges) {
    const wire = next[edge.data?.wireIndex];
    if (!wire || wire.type !== 'wire') continue;
    if (edge.source === draggedNode.id) {
      const point = getNodeHandlePoint(draggedNode, edge.sourceHandle);
      wire.x1 = point.x;
      wire.y1 = point.y;
    }
    if (edge.target === draggedNode.id) {
      const point = getNodeHandlePoint(draggedNode, edge.targetHandle);
      wire.x2 = point.x;
      wire.y2 = point.y;
    }
  }
  return next;
}

export function degreesForObject(object) {
  return normalizeQuarterTurn(object.rot || 0) * 90;
}
