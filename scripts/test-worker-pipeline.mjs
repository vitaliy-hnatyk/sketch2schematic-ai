import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');

const [pipeline, yoloClient, openCvClient, imageWorker, yoloWorker, openCvWorker, yoloDetector, cvDetector, packageJson] = await Promise.all([
  read('src/ai/aiPipeline.js'),
  read('src/ai/workerYoloDetector.js'),
  read('src/ai/workerOpenCvDetector.js'),
  read('src/workers/imageRecognizer.worker.js'),
  read('src/workers/yolo.worker.js'),
  read('src/workers/opencv.worker.js'),
  read('src/ai/yoloOnnxDetector.js'),
  read('src/ai/openCvWireDetector.js'),
  read('package.json'),
]);

const checks = [
  [pipeline.includes('detectWithYoloWorker'), 'AI pipeline must call the YOLO worker client'],
  [pipeline.includes('detectWiresWithOpenCvWorker'), 'AI pipeline must call the OpenCV worker client'],
  [yoloClient.includes("new Worker(new URL('../workers/yolo.worker.js'"), 'YOLO client must use a dedicated module worker'],
  [openCvClient.includes("new Worker(new URL('../workers/opencv.worker.js'"), 'OpenCV client must use a dedicated module worker'],
  [imageWorker.includes('detectLines('), 'Image worker must execute the bundled WASM line detector'],
  [imageWorker.includes("detector: 'bundled-wasm'"), 'WASM prepass objects must be identifiable'],
  [yoloWorker.includes('detectWithYolo'), 'YOLO worker must run ONNX detection'],
  [openCvWorker.includes('detectWiresWithOpenCv'), 'OpenCV worker must run the WASM detector'],
  [openCvClient.includes('timeoutMs'), 'OpenCV client must support timeout fallback'],
  [cvDetector.includes("algorithm === 'hough'"), 'OpenCV detector must support full Hough mode'],
  [cvDetector.includes('detectAxisAlignedWiresFromBinary'), 'OpenCV detector must support the lite scanner'],
  [!yoloDetector.includes("document.createElement('canvas')"), 'YOLO preprocessing must be worker-safe'],
  [!cvDetector.includes('window.setTimeout'), 'OpenCV initialization must be worker-safe'],
  [JSON.parse(packageJson).version === '7.5.0', 'package version must be 7.5.0'],
];

for (const [ok, message] of checks) {
  if (!ok) throw new Error(message);
}

console.log(JSON.stringify({
  workers: ['heuristic-wasm', 'yolo-onnx', 'opencv-wasm', 'tesseract-internal'],
  transferableInputs: ['ArrayBuffer', 'ImageBitmap'],
  version: '7.5.0',
}, null, 2));
