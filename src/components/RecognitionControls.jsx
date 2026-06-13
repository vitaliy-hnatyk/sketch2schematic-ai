export default function RecognitionControls({
  settings,
  onSettingsChange,
  onConvert,
  converting,
  wasmState,
  aiSettings,
  onAiSettingsChange,
  aiState,
  modelState,
  onModelUpload,
  onLabelsUpload,
}) {
  const update = (key, value) => onSettingsChange((current) => ({ ...current, [key]: value }));
  const updateAi = (key, value) => onAiSettingsChange((current) => ({ ...current, [key]: value }));

  return (
    <section className="section">
      <h2>AI recognition</h2>

      <div className="ai-engine-grid">
        <label className="check-row">
          <input
            type="checkbox"
            checked={aiSettings.useYolo}
            onChange={(event) => updateAi('useYolo', event.target.checked)}
          />
          <span>YOLO → ONNX Runtime</span>
        </label>
        <label className="check-row">
          <input
            type="checkbox"
            checked={aiSettings.useOpenCv}
            onChange={(event) => updateAi('useOpenCv', event.target.checked)}
          />
          <span>OpenCV.js wires</span>
        </label>
        <label className="check-row">
          <input
            type="checkbox"
            checked={aiSettings.useOcr}
            onChange={(event) => updateAi('useOcr', event.target.checked)}
          />
          <span>Tesseract OCR</span>
        </label>
      </div>

      <div className="model-card">
        <strong>YOLO model</strong>
        <span>{modelState.name}</span>
        <small>{modelState.message}</small>
        <div className="model-file-row">
          <label className="file-button compact">
            Select .onnx
            <input type="file" accept=".onnx,application/octet-stream" onChange={onModelUpload} />
          </label>
          <label className="file-button compact">
            Labels JSON
            <input type="file" accept=".json,application/json" onChange={onLabelsUpload} />
          </label>
        </div>
      </div>

      <div className="row">
        <label htmlFor="yolo-confidence">YOLO confidence</label>
        <input
          id="yolo-confidence"
          type="number"
          min="0.1"
          max="0.9"
          step="0.05"
          value={aiSettings.yoloConfidence}
          onChange={(event) => updateAi('yoloConfidence', Number(event.target.value))}
        />
      </div>
      <div className="row">
        <label htmlFor="ocr-confidence">OCR confidence</label>
        <input
          id="ocr-confidence"
          type="number"
          min="10"
          max="90"
          step="5"
          value={aiSettings.ocrConfidence}
          onChange={(event) => updateAi('ocrConfidence', Number(event.target.value))}
        />
      </div>

      <h3 className="subsection-title">Graph cleanup</h3>
      <div className="row">
        <label htmlFor="grid-size">Snap grid</label>
        <input
          id="grid-size"
          type="number"
          min="5"
          max="50"
          value={settings.gridSize}
          onChange={(event) => update('gridSize', Number(event.target.value))}
        />
      </div>
      <div className="row">
        <label htmlFor="line-tolerance">Recognition tolerance</label>
        <input
          id="line-tolerance"
          type="number"
          min="4"
          max="30"
          value={settings.tolerance}
          onChange={(event) => update('tolerance', Number(event.target.value))}
        />
      </div>
      <div className="row">
        <label htmlFor="confidence-threshold">Review threshold</label>
        <select
          id="confidence-threshold"
          value={settings.confidenceThreshold}
          onChange={(event) => update('confidenceThreshold', Number(event.target.value))}
        >
          <option value="0.45">Flexible</option>
          <option value="0.60">Balanced</option>
          <option value="0.75">Strict</option>
        </select>
      </div>

      <div className="parameter-effect" aria-live="polite">
        <strong>Applied on next analysis:</strong>
        <span>Grid {settings.gridSize}px — output snapping</span>
        <span>Tolerance {settings.tolerance} — wire/symbol graph cleanup</span>
        <span>YOLO {Math.round(aiSettings.yoloConfidence * 100)}% — detector threshold</span>
      </div>
      <button type="button" className="primary full-width" onClick={onConvert} disabled={converting}>
        {converting ? 'Analyzing…' : 'Analyze and convert'}
      </button>
      <div className={`cv-state ${aiState.status || ''}`}>{aiState.message}</div>
      <div className={`cv-state ${wasmState.status || ''}`}>{wasmState.message}</div>
      <div className="quality">
        <span>ONNX WebGPU/WASM</span>
        <span>OpenCV Hough wires</span>
        <span>Tesseract labels</span>
        <span>circuit graph cleanup</span>
        <span>PixiJS editing</span>
      </div>
    </section>
  );
}
