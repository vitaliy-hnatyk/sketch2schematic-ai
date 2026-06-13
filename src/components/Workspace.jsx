import { lazy, Suspense, useState } from 'react';
import SketchCanvas from './SketchCanvas.jsx';

const SchematicPixi = lazy(() => import('./SchematicPixi.jsx'));

export default function Workspace({ sketchProps, schematicProps, schematicRef }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`workspace ${expanded ? 'expanded-corrected' : ''}`}>
      <section className="pane sketch-pane">
        <div className="pane-title">
          <span>1. Pen sketch</span>
          <span className="hint">freehand or uploaded image</span>
        </div>
        <SketchCanvas {...sketchProps} />
      </section>
      <section className="pane corrected-pane">
        <div className="pane-title corrected-pane-title">
          <div>
            <span>2. Corrected schematic</span>
            <span className="pane-subtitle">connected PixiJS circuit graph</span>
          </div>
          <div className="corrected-title-actions">
            <div className="schematic-legend" aria-label="Canvas controls">
              <span>drag to pan</span>
              <span>wheel to zoom</span>
            </div>
            <button
              type="button"
              className="expand-schematic-button"
              onClick={() => {
                setExpanded((value) => !value);
                window.setTimeout(() => schematicRef.current?.fitView?.(), 180);
              }}
              title={expanded ? 'Return to split view' : 'Expand corrected schematic'}
            >
              {expanded ? 'Split view' : 'Expand'}
            </button>
          </div>
        </div>
        <Suspense fallback={<div className="pixi-loading-static">Loading WebGL renderer…</div>}>
          <SchematicPixi ref={schematicRef} {...schematicProps} />
        </Suspense>
      </section>
    </div>
  );
}
