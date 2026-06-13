import { useEffect, useRef } from 'react';
import { canvasPoint, dist } from '../utils/geometry.js';
import { renderSketchCanvas } from '../utils/renderers.js';

export default function SketchCanvas({
  strokes,
  setStrokes,
  backgroundImage,
  mode,
  penWidth,
  onStatus,
}) {
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const currentStrokeRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      renderSketchCanvas(canvasRef.current, strokes, backgroundImage, penWidth);
    }
  }, [strokes, backgroundImage, penWidth]);

  const finishDrawing = (event) => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    currentStrokeRef.current = null;
    const canvas = canvasRef.current;
    if (canvas && event?.pointerId != null) {
      try {
        if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
      } catch {
        // Pointer capture is optional and browser-dependent.
      }
    }
    onStatus(`Sketch contains ${strokes.length} stroke${strokes.length === 1 ? '' : 's'}. Press Analyze and convert.`);
  };

  const handlePointerDown = (event) => {
    event.preventDefault();
    const canvas = canvasRef.current;
    const point = canvasPoint(canvas, event);

    if (mode === 'erase') {
      const eraseRadius = Math.max(18, Number(penWidth) * 3);
      const next = strokes.filter(
        (stroke) => !stroke.some((candidate) => dist(point, candidate) < eraseRadius),
      );
      setStrokes(next);
      onStatus(next.length < strokes.length ? 'Stroke erased.' : 'No stroke was close enough to erase.');
      return;
    }

    drawingRef.current = true;
    const stroke = [point];
    currentStrokeRef.current = stroke;
    setStrokes((current) => [...current, stroke]);
    try {
      canvas.setPointerCapture(event.pointerId);
    } catch {
      // Drawing still works without pointer capture.
    }
    onStatus('Drawing…');
  };

  const handlePointerMove = (event) => {
    if (!drawingRef.current || mode !== 'draw' || !currentStrokeRef.current) return;
    event.preventDefault();
    const canvas = canvasRef.current;
    const events = typeof event.nativeEvent.getCoalescedEvents === 'function'
      ? event.nativeEvent.getCoalescedEvents()
      : [event.nativeEvent];
    let changed = false;
    for (const pointerEvent of events) {
      const point = canvasPoint(canvas, pointerEvent);
      const currentStroke = currentStrokeRef.current;
      const previous = currentStroke[currentStroke.length - 1];
      if (dist(point, previous) > 0.7) {
        currentStroke.push(point);
        changed = true;
      }
    }
    if (changed) setStrokes((current) => [...current]);
  };

  return (
    <div className="canvas-wrap">
      <canvas
        ref={canvasRef}
        className="source-canvas"
        width="900"
        height="650"
        aria-label="Freehand sketch canvas"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrawing}
        onPointerCancel={finishDrawing}
        onLostPointerCapture={finishDrawing}
      />
      {!strokes.length && !backgroundImage && (
        <div className="sketch-guide">
          <div className="sketch-guide-inner">
            <strong>DRAW THE CIRCUIT HERE</strong>
            Use separate strokes for wires and symbol parts. The converter groups nearby strokes
            automatically.
          </div>
        </div>
      )}
    </div>
  );
}
