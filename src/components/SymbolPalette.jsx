import { SYMBOL_BUTTONS } from '../utils/symbols.js';

export default function SymbolPalette({ placement, onSelectSymbol }) {
  return (
    <section className="section">
      <h2>Add or correct symbol</h2>
      <div className="symbol-grid">
        {SYMBOL_BUTTONS.map(({ type, label }) => (
          <button
            type="button"
            key={type}
            className={placement === type ? 'active' : ''}
            onClick={() => onSelectSymbol(type)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="hint palette-hint">
        Choose a symbol and click the clean canvas. Drag objects to move them. Press R to rotate and
        Delete to remove.
      </div>
    </section>
  );
}
