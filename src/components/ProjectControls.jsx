export default function ProjectControls({
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onClear,
  onSaveProject,
  onExportSvg,
  onExportPng,
  onOpenProject,
}) {
  return (
    <section className="section">
      <h2>Edit / export</h2>
      <div className="grid2">
        <button type="button" onClick={onUndo} disabled={!canUndo}>↶ Undo</button>
        <button type="button" onClick={onRedo} disabled={!canRedo}>↷ Redo</button>
        <button type="button" className="danger" onClick={onClear}>Clear</button>
        <button type="button" onClick={onSaveProject}>Save JSON</button>
        <button type="button" onClick={onExportSvg}>Export SVG</button>
        <button type="button" onClick={onExportPng}>Export PNG</button>
      </div>
      <label className="file-label project-file-label">
        Open project JSON
        <input type="file" accept="application/json,.json" onChange={onOpenProject} />
      </label>
    </section>
  );
}
