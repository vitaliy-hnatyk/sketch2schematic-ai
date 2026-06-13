import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  canvasPoint,
  clone,
  createSnapper,
  dist,
  normalizeAxisAngle,
  segmentPointDistance,
} from '../utils/geometry.js';
import { makeSymbol, objectCenter } from '../utils/symbols.js';
import { renderSchematicCanvas } from '../utils/renderers.js';

const SchematicCanvas = forwardRef(function SchematicCanvas(
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
  const canvasRef = useRef(null);
  const dragRef = useRef(null);
  const [wireDraft, setWireDraft] = useState(null);
  const wireDraftRef = useRef(null);
  const [hovered, setHovered] = useState(-1);
  const snap = createSnapper(gridSize);

  useImperativeHandle(forwardedRef, () => ({
    focus: () => canvasRef.current?.focus(),
    getCanvas: () => canvasRef.current,
  }));

  useEffect(() => {
    if (canvasRef.current) {
      renderSchematicCanvas(canvasRef.current, objects, selected, wireDraft, {
        hoveredIndex: hovered,
        gridSize,
      });
    }
  }, [objects, selected, wireDraft, hovered, gridSize]);

  const hitTest = (point) => {
    let bestIndex = -1;
    let bestDistance = Infinity;
    objectsRef.current.forEach((object, index) => {
      const distance = object.type === 'wire'
        ? segmentPointDistance(
            point,
            { x: object.x1, y: object.y1 },
            { x: object.x2, y: object.y2 },
          )
        : dist(point, objectCenter(object));
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });
    const object = objectsRef.current[bestIndex];
    const threshold = object?.type === 'wire' ? 18 : 70;
    return bestDistance < threshold ? bestIndex : -1;
  };

  const releaseCapture = (event) => {
    const canvas = canvasRef.current;
    if (canvas && event?.pointerId != null) {
      try {
        if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
      } catch {
        // Pointer capture is optional.
      }
    }
  };

  const finishPointer = (event) => {
    const draft = wireDraftRef.current;
    if (draft) {
      if (dist({ x: draft.x1, y: draft.y1 }, { x: draft.x2, y: draft.y2 }) >= gridSize) {
        snapshot();
        const index = objectsRef.current.length;
        setObjects((current) => [...current, draft]);
        setSelected(index);
        onStatus('Wire added.');
      }
      wireDraftRef.current = null;
      setWireDraft(null);
      setPlacement(null);
    }
    dragRef.current = null;
    releaseCapture(event);
  };

  const handlePointerDown = (event) => {
    event.preventDefault();
    const canvas = canvasRef.current;
    const point = canvasPoint(canvas, event.nativeEvent);
    canvas.focus();

    if (placement === 'wire') {
      const draft = {
        type: 'wire',
        x1: snap(point.x),
        y1: snap(point.y),
        x2: snap(point.x),
        y2: snap(point.y),
        confidence: 1,
        strokeIds: [],
      };
      wireDraftRef.current = draft;
      setWireDraft(draft);
      setHovered(-1);
      try {
        canvas.setPointerCapture(event.pointerId);
      } catch {
        // Wire drawing still works without capture.
      }
      return;
    }

    if (placement) {
      snapshot();
      const newObject = makeSymbol(placement, snap(point.x), snap(point.y));
      const index = objectsRef.current.length;
      setObjects((current) => [...current, newObject]);
      setSelected(index);
      setHovered(index);
      setPlacement(null);
      onStatus('Symbol placed.');
      return;
    }

    const nextSelected = hitTest(point);
    setSelected(nextSelected);
    setHovered(nextSelected);
    if (nextSelected >= 0) {
      dragRef.current = {
        index: nextSelected,
        start: point,
        original: clone(objectsRef.current[nextSelected]),
        moved: false,
      };
      try {
        canvas.setPointerCapture(event.pointerId);
      } catch {
        // Dragging still works while the pointer stays on the canvas.
      }
    }
  };

  const handlePointerMove = (event) => {
    const point = canvasPoint(canvasRef.current, event.nativeEvent);
    const currentDraft = wireDraftRef.current;
    if (currentDraft) {
      let x = snap(point.x);
      let y = snap(point.y);
      if (Math.abs(x - currentDraft.x1) >= Math.abs(y - currentDraft.y1)) {
        y = currentDraft.y1;
      } else {
        x = currentDraft.x1;
      }
      const nextDraft = { ...currentDraft, x2: x, y2: y };
      wireDraftRef.current = nextDraft;
      setWireDraft(nextDraft);
      return;
    }

    const drag = dragRef.current;
    if (!drag) {
      setHovered(hitTest(point));
      return;
    }
    const dx = snap(point.x - drag.start.x);
    const dy = snap(point.y - drag.start.y);
    if (!dx && !dy) return;
    if (!drag.moved) {
      snapshot();
      drag.moved = true;
    }

    setObjects((current) => current.map((object, index) => {
      if (index !== drag.index) return object;
      const original = drag.original;
      if (object.type === 'wire') {
        return {
          ...object,
          x1: original.x1 + dx,
          y1: original.y1 + dy,
          x2: original.x2 + dx,
          y2: original.y2 + dy,
        };
      }
      const next = { ...object, x: original.x + dx, y: original.y + dy };
      if (original.box) {
        next.box = {
          x0: original.box.x0 + dx,
          y0: original.box.y0 + dy,
          x1: original.box.x1 + dx,
          y1: original.box.y1 + dy,
        };
      }
      return next;
    }));
  };

  const handleKeyDown = (event) => {
    if (selected < 0 || selected >= objectsRef.current.length) return;
    if (event.key === 'Delete' || event.key === 'Backspace') {
      event.preventDefault();
      snapshot();
      setObjects((current) => current.filter((_, index) => index !== selected));
      setSelected(-1);
      setHovered(-1);
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
        return { ...object, rot: normalizeAxisAngle((object.rot || 0) + Math.PI / 2) };
      }));
      onStatus('Object rotated.');
    }
  };

  const cursor = placement
    ? 'crosshair'
    : dragRef.current
      ? 'grabbing'
      : hovered >= 0
        ? 'grab'
        : 'default';

  return (
    <div className="canvas-wrap schematic-canvas-wrap">
      <div className="schematic-canvas-badge" aria-hidden="true">
        <span className="badge-grid-icon" />
        {gridSize}px grid
      </div>
      <canvas
        ref={canvasRef}
        className="output-canvas"
        width="900"
        height="650"
        tabIndex="0"
        aria-label="Corrected schematic canvas"
        style={{ cursor }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => {
          if (!dragRef.current && !wireDraftRef.current) setHovered(-1);
        }}
        onPointerUp={finishPointer}
        onPointerCancel={finishPointer}
        onLostPointerCapture={finishPointer}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
});

export default SchematicCanvas;
