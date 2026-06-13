import { SYMBOL_TYPES } from '../utils/symbols.js';

const confidenceClass = (value) => (value >= 0.78 ? 'high' : value >= 0.58 ? 'med' : 'low');

export default function RecognitionReview({
  objects,
  selected,
  onSelect,
  onRetype,
  onMetadataChange,
  onDelete,
}) {
  const reviewObjects = objects
    .map((object, index) => ({ object, index }))
    .filter(({ object }) => !['wire', 'junction'].includes(object.type));

  return (
    <section className="section">
      <h2>Recognition review</h2>
      <div className="review-list">
        {!reviewObjects.length && (
          <div className="review-empty">No detected symbols to review.</div>
        )}
        {reviewObjects.map(({ object, index }) => {
          const confidence = object.confidence == null ? 1 : object.confidence;
          const rawLabel =
            object.type === 'unknown' && object.originalType
              ? `Uncertain ${object.originalType}`
              : object.type;
          const label = rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1);
          return (
            <div
              key={`${object.type}-${index}-${object.x ?? object.x1}-${object.y ?? object.y1}`}
              className={`review-item ${index === selected ? 'selected' : ''}`}
              onClick={() => onSelect(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') onSelect(index);
              }}
            >
              <div className="review-head">
                <strong>{label}</strong>
                <span className={`confidence ${confidenceClass(confidence)}`}>
                  {Math.round(confidence * 100)}%
                </span>
              </div>
              <div className="review-controls" onClick={(event) => event.stopPropagation()}>
                <select
                  aria-label="Correct detected symbol"
                  value={object.type}
                  onChange={(event) => onRetype(index, event.target.value)}
                >
                  {SYMBOL_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <button type="button" className="danger" onClick={() => onDelete(index)}>
                  Delete
                </button>
                <input
                  type="text"
                  value={object.label || ''}
                  placeholder="Reference, e.g. R1"
                  aria-label="Component reference"
                  onChange={(event) => onMetadataChange(index, 'label', event.target.value)}
                />
                <input
                  type="text"
                  value={object.value || ''}
                  placeholder="Value, e.g. 220 Ω"
                  aria-label="Component value"
                  onChange={(event) => onMetadataChange(index, 'value', event.target.value)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
