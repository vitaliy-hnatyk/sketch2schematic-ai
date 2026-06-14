import { getRecognitionProfile, recognitionProfileOptions } from '../config/performanceProfiles.js';

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
  const updateProfile = (value) => onAiSettingsChange((current) => ({
    ...current,
    performanceMode: value,
    useOcr: value === 'fast' ? false : current.useOcr,
  }));
  const profile = getRecognitionProfile(aiSettings.performanceMode);
  const profileOptions = recognitionProfileOptions();
  const outputMode = aiSettings.outputMode || 'hybrid';
  const yoloOnly = outputMode === 'yolo-only';
  const ocrOnly = outputMode === 'ocr-only';
  const heuristicOnly = outputMode === 'heuristic-only';
  const hasYoloModel = Boolean(modelState.buffer || modelState.url);

  return (
    <section className="section">
      <h2>AI recognition</h2>

      <div className="row">
        <label htmlFor="output-mode">Recognition output</label>
        <select
          id="output-mode"
          value={outputMode}
          onChange={(event) => updateAi('outputMode', event.target.value)}
        >
          <option value="hybrid">Hybrid — merge engines</option>
          <option value="heuristic-only">Heuristic/WASM only</option>
          <option value="yolo-only">YOLO-only components</option>
          <option value="ocr-only">OCR-only labels</option>
        </select>
      </div>
      <div className={`engine-explanation ${outputMode}`}>
        {outputMode === 'hybrid' && 'Hybrid keeps heuristic results and replaces/augments them with enabled AI stages.'}
        {heuristicOnly && 'Only the bundled WASM/heuristic recognizer runs. This is the baseline result.'}
        {yoloOnly && 'Only YOLO supplies component symbols; heuristic output is retained only for wires and junctions.'}
        {ocrOnly && 'Tesseract reads text and attaches labels/values to heuristic symbols. It does not classify components.'}
      </div>

      <div className="row">
        <label htmlFor="performance-mode">Recognition speed</label>
        <select
          id="performance-mode"
          value={aiSettings.performanceMode || 'fast'}
          onChange={(event) => updateProfile(event.target.value)}
        >
          {profileOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="performance-note">
        <strong>{profile.label} mode</strong>
        <span>{profile.description}</span>
        <small>
          Image {profile.imageMaxDimension}px · OpenCV {profile.openCvMaxDimension}px/{profile.openCvAlgorithm} · timeout {profile.openCvTimeoutMs}ms · OCR {profile.ocrMaxDimension}px
        </small>
      </div>

      <div className="ai-engine-grid">
        <label className="check-row">
          <input
            type="checkbox"
            checked={yoloOnly || (outputMode === 'hybrid' && aiSettings.useYolo)}
            disabled={heuristicOnly || ocrOnly || yoloOnly}
            onChange={(event) => updateAi('useYolo', event.target.checked)}
          />
          <span>YOLO → ONNX worker</span>
        </label>
        <label className="check-row">
          <input
            type="checkbox"
            checked={outputMode === 'hybrid' && aiSettings.useOpenCv}
            disabled={outputMode !== 'hybrid'}
            onChange={(event) => updateAi('useOpenCv', event.target.checked)}
          />
          <span>OpenCV Lite worker <em className="slow-tag">optional</em></span>
        </label>
        <label className="check-row">
          <input
            type="checkbox"
            checked={ocrOnly || (outputMode === 'hybrid' && aiSettings.useOcr)}
            disabled={heuristicOnly || yoloOnly || ocrOnly}
            onChange={(event) => updateAi('useOcr', event.target.checked)}
          />
          <span>Tesseract OCR worker <em className="slow-tag">slow</em></span>
        </label>
      </div>

      <div className="model-card">
        <div className="model-heading">
          <strong>YOLO model</strong>
          <span className={`engine-badge ${hasYoloModel ? 'ready' : 'missing'}`}>
            {hasYoloModel ? 'MODEL READY' : 'NO MODEL'}
          </span>
        </div>
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
          disabled={heuristicOnly || ocrOnly || !hasYoloModel}
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
          disabled={!(ocrOnly || (outputMode === 'hybrid' && aiSettings.useOcr))}
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
        <span>Output: {outputMode}</span>
        <span>YOLO model: {hasYoloModel ? 'loaded' : 'not loaded'}</span>
        <span>{profile.label} preprocessing — {profile.imageMaxDimension}px maximum</span>
        <span>Grid {settings.gridSize}px — output snapping</span>
        <span>Tolerance {settings.tolerance} — wire/symbol graph cleanup</span>
        <span>YOLO {Math.round(aiSettings.yoloConfidence * 100)}% — detector threshold</span>
        <span>OCR {ocrOnly || (outputMode === 'hybrid' && aiSettings.useOcr) ? 'enabled' : 'disabled'} — labels/values only</span>
      </div>
      <button type="button" className="primary full-width" onClick={onConvert} disabled={converting}>
        {converting ? 'Analyzing…' : 'Analyze and convert'}
      </button>
      <div className={`cv-state ${aiState.status || ''}`}>{aiState.message}</div>
      <div className={`cv-state ${wasmState.status || ''}`}>{wasmState.message}</div>
      <div className="quality">
        <span>cached repeated analysis</span>
        <span>dedicated Web Workers</span>
        <span>ONNX WebGPU/WASM</span>
        <span>isolated engine testing</span>
        <span>optional Tesseract labels</span>
        <span>circuit graph cleanup</span>
      </div>
    </section>
  );
}
