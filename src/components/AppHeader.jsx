import { APP_NAME, APP_STACK_LABEL, APP_VERSION } from '../config/appMeta.js';

export default function AppHeader() {
  return (
    <header className="app-header">
      <h1>{APP_NAME}</h1>
      <span className="tag">AI circuit recognition</span>
      <span className="version">{APP_STACK_LABEL} · v{APP_VERSION}</span>
    </header>
  );
}
