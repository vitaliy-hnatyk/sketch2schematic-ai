import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Application,
  Container,
  Graphics,
  Rectangle,
  Text,
} from 'pixi.js';
import { createSnapper, normalizeAxisAngle } from '../utils/geometry.js';
import { makeSymbol } from '../utils/symbols.js';
import {
  buildFlowModel,
  getNodeHandlePoint,
  updateDraggedNodeObjects,
} from '../utils/pixiGraphAdapter.js';
import { drawIecSymbolToPixi } from '../utils/iecSymbolLibrary.js';

const COLORS = {
  background: 0xdfe5eb,
  gridMinor: 0xcfd6de,
  gridMajor: 0xb9c3cd,
  ink: 0x111418,
  selected: 0x6d5dfc,
  port: 0x1769d2,
  review: 0xd73e3e,
  white: 0xffffff,
};

const MIN_ZOOM = 0.12;
const MAX_ZOOM = 4;
const WORLD_EXTENT = 5000;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function strokeStyle(color = COLORS.ink, width = 2.2, alpha = 1) {
  return {
    color,
    width,
    alpha,
    cap: 'round',
    join: 'round',
  };
}


function drawSymbolGeometry(object) {
  const graphics = new Graphics();
  drawIecSymbolToPixi(graphics, object, strokeStyle);
  graphics.rotation = object.rot || 0;
  return graphics;
}

function makeMetadataText(text, anchorX = 0.5) {
  const label = new Text({
    text,
    style: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: 12,
      fontWeight: '700',
      fill: COLORS.ink,
      stroke: { color: COLORS.background, width: 3 },
      lineJoin: 'round',
    },
    anchor: { x: anchorX, y: 0.5 },
    resolution: Math.max(2, window.devicePixelRatio || 1),
  });
  label.autoGenerateMipmaps = true;
  return label;
}

function addMetadata(container, object) {
  if (!object.label && !object.value) return;
  const vertical = Math.abs(Math.sin(object.rot || 0)) > 0.7;
  if (vertical) {
    if (object.label) {
      const label = makeMetadataText(object.label, 0);
      label.position.set(39, -10);
      container.addChild(label);
    }
    if (object.value) {
      const value = makeMetadataText(object.value, 0);
      value.position.set(39, 12);
      container.addChild(value);
    }
    return;
  }

  if (object.label) {
    const label = makeMetadataText(object.label);
    label.position.set(0, -36);
    container.addChild(label);
  }
  if (object.value) {
    const value = makeMetadataText(object.value);
    value.position.set(0, 39);
    container.addChild(value);
  }
}

function drawGrid(graphics, gridSize) {
  graphics.clear();
  const minor = Math.max(10, gridSize);
  const major = minor * 5;

  for (let x = -WORLD_EXTENT; x <= WORLD_EXTENT; x += minor) {
    if (Math.abs(x % major) < 0.01) continue;
    graphics.moveTo(x, -WORLD_EXTENT).lineTo(x, WORLD_EXTENT);
  }
  for (let y = -WORLD_EXTENT; y <= WORLD_EXTENT; y += minor) {
    if (Math.abs(y % major) < 0.01) continue;
    graphics.moveTo(-WORLD_EXTENT, y).lineTo(WORLD_EXTENT, y);
  }
  graphics.stroke(strokeStyle(COLORS.gridMinor, 1, 0.5));

  for (let x = -WORLD_EXTENT; x <= WORLD_EXTENT; x += major) {
    graphics.moveTo(x, -WORLD_EXTENT).lineTo(x, WORLD_EXTENT);
  }
  for (let y = -WORLD_EXTENT; y <= WORLD_EXTENT; y += major) {
    graphics.moveTo(-WORLD_EXTENT, y).lineTo(WORLD_EXTENT, y);
  }
  graphics.stroke(strokeStyle(COLORS.gridMajor, 1.2, 0.7));
}

function getPort(node, handleId) {
  return node.data?.ports?.find((port) => port.id === handleId)
    || node.data?.ports?.[0]
    || { offset: { x: 0, y: 0 }, side: 'left' };
}

function orthogonalPoints(source, target, sourcePort, targetPort) {
  const points = [source];
  const dx = Math.abs(target.x - source.x);
  const dy = Math.abs(target.y - source.y);

  if (dx < 1 || dy < 1) {
    points.push(target);
    return points;
  }

  const horizontalBias = ['left', 'right'].includes(sourcePort.side)
    || ['left', 'right'].includes(targetPort.side);

  if (horizontalBias) {
    const midX = (source.x + target.x) / 2;
    points.push({ x: midX, y: source.y }, { x: midX, y: target.y }, target);
  } else {
    const midY = (source.y + target.y) / 2;
    points.push({ x: source.x, y: midY }, { x: target.x, y: midY }, target);
  }
  return points;
}

function tracePolyline(graphics, points) {
  if (!points.length) return;
  graphics.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i += 1) {
    graphics.lineTo(points[i].x, points[i].y);
  }
}

const SchematicPixi = forwardRef(function SchematicPixi(
  {
    objects,
    objectsRef,
    setObjects,
    selected,
    setSelected,
    placement,
    setPlacement,
    snapshot,
    gridSize,
    onStatus,
  },
  forwardedRef,
) {
  const wrapperRef = useRef(null);
  const appRef = useRef(null);
  const worldRef = useRef(null);
  const layersRef = useRef(null);
  const modelRef = useRef({ nodes: [], edges: [] });
  const nodeDisplaysRef = useRef(new Map());
  const edgeDisplaysRef = useRef(new Map());
  const interactionRef = useRef({ pan: null, drag: null, connection: null });
  const propsRef = useRef(null);
  const previousNodeCountRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [zoomPercent, setZoomPercent] = useState(100);

  propsRef.current = {
    objects,
    objectsRef,
    setObjects,
    selected,
    setSelected,
    placement,
    setPlacement,
    snapshot,
    gridSize,
    onStatus,
  };

  const model = useMemo(
    () => buildFlowModel(objects, selected, gridSize),
    [objects, selected, gridSize],
  );

  const getCurrentNodePosition = useCallback((nodeId) => {
    const display = nodeDisplaysRef.current.get(nodeId);
    if (display) return { x: display.x, y: display.y };
    const node = modelRef.current.nodes.find((item) => item.id === nodeId);
    return node?.position || { x: 0, y: 0 };
  }, []);

  const getCurrentHandlePoint = useCallback((nodeId, handleId) => {
    const node = modelRef.current.nodes.find((item) => item.id === nodeId);
    if (!node) return { x: 0, y: 0 };
    const position = getCurrentNodePosition(nodeId);
    const port = getPort(node, handleId);
    return {
      x: position.x + port.offset.x,
      y: position.y + port.offset.y,
    };
  }, [getCurrentNodePosition]);

  const redrawEdges = useCallback(() => {
    for (const edge of modelRef.current.edges) {
      const graphics = edgeDisplaysRef.current.get(edge.id);
      if (!graphics) continue;
      const sourceNode = modelRef.current.nodes.find((node) => node.id === edge.source);
      const targetNode = modelRef.current.nodes.find((node) => node.id === edge.target);
      if (!sourceNode || !targetNode) continue;
      const source = getCurrentHandlePoint(edge.source, edge.sourceHandle);
      const target = getCurrentHandlePoint(edge.target, edge.targetHandle);
      const points = orthogonalPoints(
        source,
        target,
        getPort(sourceNode, edge.sourceHandle),
        getPort(targetNode, edge.targetHandle),
      );
      graphics.clear();
      tracePolyline(graphics, points);
      graphics.stroke(strokeStyle(COLORS.ink, 17, 0.001));
      tracePolyline(graphics, points);
      graphics.stroke(strokeStyle(edge.selected ? COLORS.selected : COLORS.ink, edge.selected ? 2.8 : 2.2));
    }
  }, [getCurrentHandlePoint]);

  const updateZoomLabel = useCallback(() => {
    const world = worldRef.current;
    if (world) setZoomPercent(Math.round(world.scale.x * 100));
  }, []);

  const zoomAt = useCallback((factor, screenPoint = null) => {
    const app = appRef.current;
    const world = worldRef.current;
    if (!app || !world) return;
    const point = screenPoint || { x: app.renderer.width / 2, y: app.renderer.height / 2 };
    const before = world.toLocal(point);
    const nextScale = clamp(world.scale.x * factor, MIN_ZOOM, MAX_ZOOM);
    world.scale.set(nextScale);
    const after = world.toGlobal(before);
    world.position.x += point.x - after.x;
    world.position.y += point.y - after.y;
    updateZoomLabel();
  }, [updateZoomLabel]);

  const fitView = useCallback((animate = false) => {
    const app = appRef.current;
    const world = worldRef.current;
    const wrapper = wrapperRef.current;
    if (!app || !world || !wrapper) return;
    const nodes = modelRef.current.nodes;
    const width = wrapper.clientWidth || app.renderer.width;
    const height = wrapper.clientHeight || app.renderer.height;

    if (!nodes.length) {
      world.scale.set(1);
      world.position.set(width / 2, height / 2);
      updateZoomLabel();
      return;
    }

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const node of nodes) {
      const position = getCurrentNodePosition(node.id);
      const nodeWidth = node.width || 120;
      const nodeHeight = node.height || 100;
      minX = Math.min(minX, position.x - nodeWidth / 2);
      maxX = Math.max(maxX, position.x + nodeWidth / 2);
      minY = Math.min(minY, position.y - nodeHeight / 2);
      maxY = Math.max(maxY, position.y + nodeHeight / 2);
    }

    const boundsWidth = Math.max(1, maxX - minX);
    const boundsHeight = Math.max(1, maxY - minY);
    const padding = 64;
    const scale = clamp(
      Math.min((width - padding * 2) / boundsWidth, (height - padding * 2) / boundsHeight),
      MIN_ZOOM,
      1.6,
    );
    const targetX = width / 2 - ((minX + maxX) / 2) * scale;
    const targetY = height / 2 - ((minY + maxY) / 2) * scale;

    if (!animate) {
      world.scale.set(scale);
      world.position.set(targetX, targetY);
      updateZoomLabel();
      return;
    }

    const startScale = world.scale.x;
    const startX = world.position.x;
    const startY = world.position.y;
    const started = performance.now();
    const duration = 220;
    const tick = () => {
      const t = clamp((performance.now() - started) / duration, 0, 1);
      const eased = 1 - (1 - t) ** 3;
      const currentScale = startScale + (scale - startScale) * eased;
      world.scale.set(currentScale);
      world.position.set(
        startX + (targetX - startX) * eased,
        startY + (targetY - startY) * eased,
      );
      updateZoomLabel();
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [getCurrentNodePosition, updateZoomLabel]);

  useImperativeHandle(forwardedRef, () => ({
    focus: () => wrapperRef.current?.focus(),
    fitView: () => fitView(true),
    zoomIn: () => zoomAt(1.2),
    zoomOut: () => zoomAt(1 / 1.2),
    getPixi: () => appRef.current,
  }), [fitView, zoomAt]);

  useEffect(() => {
    let cancelled = false;
    let resizeObserver;
    const wrapper = wrapperRef.current;
    if (!wrapper) return undefined;

    const initialize = async () => {
      const app = new Application();
      await app.init({
        resizeTo: wrapper,
        preference: 'webgl',
        preferWebGLVersion: 2,
        powerPreference: 'high-performance',
        antialias: true,
        autoDensity: true,
        resolution: Math.min(2, window.devicePixelRatio || 1),
        backgroundColor: COLORS.background,
      });
      if (cancelled) {
        app.destroy(true);
        return;
      }

      app.canvas.className = 'pixi-schematic-canvas';
      app.canvas.setAttribute('aria-label', 'Interactive corrected schematic');
      wrapper.prepend(app.canvas);

      const world = new Container();
      world.label = 'schematic-world';
      const gridLayer = new Graphics();
      const edgeLayer = new Container();
      const nodeLayer = new Container();
      const overlayLayer = new Container();
      world.addChild(gridLayer, edgeLayer, nodeLayer, overlayLayer);
      app.stage.addChild(world);
      world.position.set(app.renderer.width / 2, app.renderer.height / 2);

      app.stage.eventMode = 'static';
      app.stage.hitArea = new Rectangle(0, 0, app.renderer.width, app.renderer.height);

      appRef.current = app;
      worldRef.current = world;
      layersRef.current = { gridLayer, edgeLayer, nodeLayer, overlayLayer };

      const releaseInteraction = (event) => {
        const interaction = interactionRef.current;
        const currentProps = propsRef.current;

        if (interaction.drag) {
          const drag = interaction.drag;
          if (drag.moved) {
            const currentModel = modelRef.current;
            const draggedNode = currentModel.nodes.find((node) => node.id === drag.nodeId);
            const display = nodeDisplaysRef.current.get(drag.nodeId);
            if (draggedNode && display) {
              currentProps.setObjects((current) => updateDraggedNodeObjects(
                current,
                { ...draggedNode, position: { x: display.x, y: display.y } },
                currentModel.edges,
              ));
              currentProps.onStatus(`${draggedNode.data?.object?.type || draggedNode.data?.kind || 'Connection point'} moved. Connected wires stayed attached.`);
            }
          }
          interaction.drag = null;
        }

        if (interaction.connection) {
          const connection = interaction.connection;
          const worldPoint = world.toLocal(event.global);
          const sourceNode = modelRef.current.nodes.find((node) => node.id === connection.sourceNodeId);
          let best = null;
          let bestDistance = Infinity;

          for (const node of modelRef.current.nodes) {
            for (const port of node.data?.ports || []) {
              if (node.id === connection.sourceNodeId && port.id === connection.sourceHandle) continue;
              const position = getCurrentNodePosition(node.id);
              const point = { x: position.x + port.offset.x, y: position.y + port.offset.y };
              const distance = Math.hypot(point.x - worldPoint.x, point.y - worldPoint.y);
              if (distance < bestDistance) {
                bestDistance = distance;
                best = { node, port, point };
              }
            }
          }

          if (best && bestDistance <= 30 / world.scale.x && sourceNode) {
            const sourcePoint = getCurrentHandlePoint(connection.sourceNodeId, connection.sourceHandle);
            if (Math.hypot(best.point.x - sourcePoint.x, best.point.y - sourcePoint.y) > 2) {
              currentProps.snapshot();
              currentProps.setObjects((current) => [
                ...current,
                {
                  type: 'wire',
                  x1: sourcePoint.x,
                  y1: sourcePoint.y,
                  x2: best.point.x,
                  y2: best.point.y,
                  confidence: 1,
                  strokeIds: [],
                },
              ]);
              currentProps.setPlacement(null);
              currentProps.onStatus('Wire connected. Moving either component keeps it attached.');
            }
          } else {
            currentProps.onStatus('Connection cancelled. Release over another blue port.');
          }
          layersRef.current?.overlayLayer.removeChildren().forEach((child) => child.destroy());
          interaction.connection = null;
        }

        interaction.pan = null;
        app.canvas.style.cursor = currentProps.placement ? 'crosshair' : 'grab';
      };

      app.stage.on('pointerdown', (event) => {
        const currentProps = propsRef.current;
        wrapper.focus();
        if (currentProps.placement) {
          if (currentProps.placement === 'wire') {
            currentProps.onStatus('Drag from one blue port to another to add a connected wire.');
            return;
          }
          const point = world.toLocal(event.global);
          const snap = createSnapper(currentProps.gridSize);
          currentProps.snapshot();
          const newObject = makeSymbol(currentProps.placement, snap(point.x), snap(point.y));
          currentProps.setObjects((current) => [...current, newObject]);
          currentProps.setSelected(currentProps.objectsRef.current.length);
          currentProps.setPlacement(null);
          currentProps.onStatus(`${currentProps.placement} placed. Drag a blue port to connect it.`);
          return;
        }

        currentProps.setSelected(-1);
        interactionRef.current.pan = {
          startGlobal: { x: event.global.x, y: event.global.y },
          startPosition: { x: world.position.x, y: world.position.y },
        };
        app.canvas.style.cursor = 'grabbing';
      });

      app.stage.on('globalpointermove', (event) => {
        const interaction = interactionRef.current;
        const currentProps = propsRef.current;

        if (interaction.pan) {
          world.position.set(
            interaction.pan.startPosition.x + event.global.x - interaction.pan.startGlobal.x,
            interaction.pan.startPosition.y + event.global.y - interaction.pan.startGlobal.y,
          );
          return;
        }

        if (interaction.drag) {
          const drag = interaction.drag;
          const display = nodeDisplaysRef.current.get(drag.nodeId);
          if (!display) return;
          const point = world.toLocal(event.global);
          const snap = createSnapper(currentProps.gridSize);
          const nextX = drag.originalPosition.x + snap(point.x - drag.startWorld.x);
          const nextY = drag.originalPosition.y + snap(point.y - drag.startWorld.y);
          if (nextX !== display.x || nextY !== display.y) {
            if (!drag.moved) {
              currentProps.snapshot();
              drag.moved = true;
            }
            display.position.set(nextX, nextY);
            redrawEdges();
          }
          return;
        }

        if (interaction.connection) {
          const start = getCurrentHandlePoint(
            interaction.connection.sourceNodeId,
            interaction.connection.sourceHandle,
          );
          const end = world.toLocal(event.global);
          const preview = interaction.connection.preview;
          preview.clear();
          const sourceNode = modelRef.current.nodes.find((node) => node.id === interaction.connection.sourceNodeId);
          const sourcePort = sourceNode
            ? getPort(sourceNode, interaction.connection.sourceHandle)
            : { side: 'right' };
          const targetPort = { side: Math.abs(end.x - start.x) > Math.abs(end.y - start.y) ? 'left' : 'top' };
          const points = orthogonalPoints(start, end, sourcePort, targetPort);
          tracePolyline(preview, points);
          preview.stroke(strokeStyle(COLORS.port, 2.2));
        }
      });

      app.stage.on('pointerup', releaseInteraction);
      app.stage.on('pointerupoutside', releaseInteraction);
      app.stage.on('pointercancel', releaseInteraction);

      const handleWheel = (event) => {
        event.preventDefault();
        const rect = app.canvas.getBoundingClientRect();
        zoomAt(event.deltaY < 0 ? 1.12 : 1 / 1.12, {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      };
      app.canvas.addEventListener('wheel', handleWheel, { passive: false });

      resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          if (!appRef.current) return;
          app.stage.hitArea = new Rectangle(0, 0, app.renderer.width, app.renderer.height);
        });
      });
      resizeObserver.observe(wrapper);

      app.canvas.__schematicWheelHandler = handleWheel;
      setReady(true);
    };

    initialize().catch((error) => {
      console.error(error);
      propsRef.current?.onStatus(`Could not start PixiJS WebGL: ${error.message || error}`);
    });

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      const app = appRef.current;
      if (app) {
        if (app.canvas.__schematicWheelHandler) {
          app.canvas.removeEventListener('wheel', app.canvas.__schematicWheelHandler);
        }
        app.destroy(true, { children: true });
      }
      appRef.current = null;
      worldRef.current = null;
      layersRef.current = null;
      nodeDisplaysRef.current.clear();
      edgeDisplaysRef.current.clear();
    };
  }, [getCurrentHandlePoint, getCurrentNodePosition, redrawEdges, zoomAt]);

  useEffect(() => {
    if (!ready || !layersRef.current) return;
    modelRef.current = model;
    const { gridLayer, edgeLayer, nodeLayer, overlayLayer } = layersRef.current;
    drawGrid(gridLayer, gridSize);

    edgeLayer.removeChildren().forEach((child) => child.destroy());
    nodeLayer.removeChildren().forEach((child) => child.destroy({ children: true }));
    overlayLayer.removeChildren().forEach((child) => child.destroy());
    nodeDisplaysRef.current.clear();
    edgeDisplaysRef.current.clear();

    for (const edge of model.edges) {
      const graphics = new Graphics();
      graphics.eventMode = 'static';
      graphics.cursor = 'pointer';
      graphics.on('pointerdown', (event) => {
        event.stopPropagation();
        setSelected(edge.data?.wireIndex ?? -1);
        wrapperRef.current?.focus();
      });
      edgeLayer.addChild(graphics);
      edgeDisplaysRef.current.set(edge.id, graphics);
    }

    for (const node of model.nodes) {
      const container = new Container();
      container.position.set(node.position.x, node.position.y);
      container.eventMode = 'static';
      container.cursor = 'grab';
      container.hitArea = new Rectangle(
        -(node.width || 120) / 2,
        -(node.height || 100) / 2,
        node.width || 120,
        node.height || 100,
      );
      container.label = node.id;
      nodeDisplaysRef.current.set(node.id, container);
      nodeLayer.addChild(container);

      if (node.selected) {
        const selection = new Graphics()
          .rect(
            -(node.width || 120) / 2 + 5,
            -(node.height || 100) / 2 + 5,
            (node.width || 120) - 10,
            (node.height || 100) - 10,
          )
          .fill({ color: COLORS.selected, alpha: 0.045 })
          .stroke(strokeStyle(COLORS.selected, 1.25));
        container.addChild(selection);
      }

      if (node.data.kind === 'terminal') {
        const memberCount = node.data?.members?.length || 0;
        if (memberCount <= 1) {
          const terminal = new Graphics()
            .circle(0, 0, 6)
            .fill(COLORS.background)
            .stroke(strokeStyle(COLORS.ink, 2));
          container.addChild(terminal);
        } else if (memberCount >= 3) {
          container.addChild(new Graphics().circle(0, 0, 4.5).fill(COLORS.ink));
        }
      } else if (node.data.kind === 'junction') {
        container.addChild(new Graphics().circle(0, 0, 4.5).fill(COLORS.ink));
      } else if (node.data.object?.type === 'unknown') {
        const width = (node.width || 120) - 18;
        const height = (node.height || 100) - 18;
        const unknown = new Graphics()
          .rect(-width / 2, -height / 2, width, height)
          .fill({ color: COLORS.review, alpha: 0.045 })
          .stroke(strokeStyle(COLORS.review, 1.5));
        container.addChild(unknown);
        const text = new Text({
          text: 'REVIEW',
          style: { fontFamily: 'Arial', fontSize: 11, fontWeight: '700', fill: COLORS.review },
          anchor: 0.5,
        });
        container.addChild(text);
      } else if (node.data.object) {
        container.addChild(drawSymbolGeometry(node.data.object));
        addMetadata(container, node.data.object);
      }

      const portGraphics = [];
      for (const port of node.data.ports || []) {
        const portGraphic = new Graphics()
          .circle(0, 0, 5)
          .fill(COLORS.white)
          .stroke(strokeStyle(COLORS.port, 2));
        portGraphic.position.set(port.offset.x, port.offset.y);
        portGraphic.eventMode = 'static';
        portGraphic.cursor = 'crosshair';
        portGraphic.alpha = placement === 'wire' || node.selected ? 1 : 0;
        portGraphic.on('pointerdown', (event) => {
          event.stopPropagation();
          const preview = new Graphics();
          overlayLayer.addChild(preview);
          interactionRef.current.connection = {
            sourceNodeId: node.id,
            sourceHandle: port.id,
            preview,
          };
          propsRef.current.onStatus('Drag the wire to another blue port.');
        });
        container.addChild(portGraphic);
        portGraphics.push(portGraphic);
      }

      container.on('pointerover', () => {
        for (const port of portGraphics) port.alpha = 1;
      });
      container.on('pointerout', () => {
        if (propsRef.current.placement !== 'wire' && !node.selected) {
          for (const port of portGraphics) port.alpha = 0;
        }
      });
      container.on('pointerdown', (event) => {
        event.stopPropagation();
        wrapperRef.current?.focus();
        if (Number.isInteger(node.data?.objectIndex)) {
          propsRef.current.setSelected(node.data.objectIndex);
        } else if (node.data?.members?.length) {
          propsRef.current.setSelected(node.data.members[0].wireIndex);
        }
        const point = worldRef.current.toLocal(event.global);
        interactionRef.current.drag = {
          nodeId: node.id,
          startWorld: { x: point.x, y: point.y },
          originalPosition: { x: container.x, y: container.y },
          moved: false,
        };
        appRef.current.canvas.style.cursor = 'grabbing';
      });
    }

    redrawEdges();
    const previousCount = previousNodeCountRef.current;
    previousNodeCountRef.current = model.nodes.length;
    if (model.nodes.length && model.nodes.length !== previousCount) {
      window.setTimeout(() => fitView(true), 60);
    }
  }, [fitView, gridSize, model, placement, ready, redrawEdges, setSelected]);

  const handleKeyDown = useCallback((event) => {
    const currentObjects = objectsRef.current;
    if (selected < 0 || selected >= currentObjects.length) return;
    if (event.key === 'Delete' || event.key === 'Backspace') {
      event.preventDefault();
      snapshot();
      setObjects((current) => current.filter((_, index) => index !== selected));
      setSelected(-1);
      onStatus('Object deleted.');
      return;
    }
    if (event.key === 'r' || event.key === 'R') {
      event.preventDefault();
      snapshot();
      setObjects((current) => current.map((object, index) => {
        if (index !== selected) return object;
        if (object.type === 'wire') {
          const cx = (object.x1 + object.x2) / 2;
          const cy = (object.y1 + object.y2) / 2;
          const dx = (object.x2 - object.x1) / 2;
          const dy = (object.y2 - object.y1) / 2;
          return {
            ...object,
            x1: cx - dy,
            y1: cy + dx,
            x2: cx + dy,
            y2: cy - dx,
          };
        }
        return {
          ...object,
          rot: normalizeAxisAngle((object.rot || 0) + Math.PI / 2),
        };
      }));
      onStatus('Object rotated.');
    }
  }, [objectsRef, onStatus, selected, setObjects, setSelected, snapshot]);

  return (
    <div
      ref={wrapperRef}
      className={`pixi-schematic-wrap ${placement ? 'has-placement-tool' : ''}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="pixi-help-panel" aria-hidden="true">
        <strong>PixiJS WebGL schematic</strong>
        <span>Wheel: zoom</span>
        <span>Drag background: pan</span>
        <span>Drag component: move with wires</span>
        <span>Drag blue port: connect</span>
      </div>
      <div className="pixi-controls" aria-label="Schematic viewport controls">
        <button type="button" onClick={() => zoomAt(1 / 1.2)} title="Zoom out">−</button>
        <span>{zoomPercent}%</span>
        <button type="button" onClick={() => zoomAt(1.2)} title="Zoom in">+</button>
        <button type="button" onClick={() => fitView(true)} title="Fit diagram">Fit</button>
      </div>
      {!ready ? <div className="pixi-loading">Starting WebGL renderer…</div> : null}
    </div>
  );
});

export default SchematicPixi;
