export default function InputControls({
  mode,
  onModeChange,
  penWidth,
  onPenWidthChange,
  onImageUpload,
  onLoadDemo,
  onLoadImageDemo,
}) {
  return (
    <section className="section">
      <h2>Input</h2>
      <div className="toolbar">
        <button
          type="button"
          className={mode === 'draw' ? 'active' : ''}
          onClick={() => onModeChange('draw')}
        >
          ✏ Draw
        </button>
        <button
          type="button"
          className={mode === 'erase' ? 'active' : ''}
          onClick={() => onModeChange('erase')}
        >
          ⌫ Erase
        </button>
        <label className="file-label">
          ⇧ Upload image
          <input type="file" accept="image/*" onChange={onImageUpload} />
        </label>
        <button type="button" className="secondary" onClick={onLoadDemo}>
          Load pen test
        </button>
        <button type="button" className="secondary" onClick={onLoadImageDemo}>
          Load color LED test
        </button>
      </div>
      <div className="row">
        <label htmlFor="pen-width">Pen width</label>
        <input
          id="pen-width"
          type="number"
          min="1"
          max="16"
          value={penWidth}
          onChange={(event) => onPenWidthChange(Number(event.target.value))}
        />
      </div>
    </section>
  );
}
