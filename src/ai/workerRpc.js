export class WorkerRpcClient {
  constructor(createWorker, name) {
    this.createWorker = createWorker;
    this.name = name;
    this.worker = null;
    this.sequence = 0;
    this.pending = new Map();
  }

  getWorker() {
    if (this.worker) return this.worker;
    this.worker = this.createWorker();
    this.worker.onmessage = (event) => {
      const message = event.data || {};
      const request = this.pending.get(message.id);
      if (!request) return;
      if (message.type === 'progress') {
        request.onState?.(message.state);
        return;
      }
      this.pending.delete(message.id);
      if (message.ok) request.resolve(message.result ?? message);
      else request.reject(new Error(message.error || `${this.name} worker failed`));
    };
    this.worker.onerror = (event) => {
      const error = new Error(event.message || `${this.name} worker crashed`);
      for (const request of this.pending.values()) request.reject(error);
      this.pending.clear();
      this.worker?.terminate();
      this.worker = null;
    };
    return this.worker;
  }

  request(type, payload = {}, transfer = [], onState) {
    const id = ++this.sequence;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject, onState });
      this.getWorker().postMessage({ id, type, ...payload }, transfer);
    });
  }

  terminate() {
    const error = new Error(`${this.name} worker was reset`);
    for (const request of this.pending.values()) request.reject(error);
    this.pending.clear();
    this.worker?.terminate();
    this.worker = null;
  }
}

export function canUseProcessingWorkers() {
  return typeof Worker !== 'undefined' && typeof createImageBitmap === 'function';
}
