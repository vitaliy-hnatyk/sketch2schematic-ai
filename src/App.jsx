import { useEffect, useRef, useState } from 'react';
import AppHeader from './components/AppHeader.jsx';
import Sidebar from './components/Sidebar.jsx';
import StatusBar from './components/StatusBar.jsx';
import Workspace from './components/Workspace.jsx';
import { useObjectHistory } from './hooks/useObjectHistory.js';
import { createSnapper } from './utils/geometry.js';
import { createDemoStrokes } from './utils/demo.js';
import { exportPng, exportSvg, saveProject } from './utils/exporters.js';
import { extractImageFallback } from './utils/imageFallback.js';
import { extractImageWasm, warmWasmRecognizer } from './utils/wasmImageRecognizer.js';
import { cleanupGraph, recognizeVectorStrokes } from './utils/recognizer.js';
import { objectBounds, retypeObject } from './utils/symbols.js';
import { runAiRecognitionPipeline } from './ai/aiPipeline.js';
import { DEFAULT_CIRCUIT_LABELS, parseLabelsManifest } from './ai/modelManifest.js';
import { resetYoloSession } from './ai/yoloOnnxDetector.js';
import { APP_BUILD_LABEL } from './config/appMeta.js';

const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 650;

export default function App() {
  const [mode, setMode] = useState('draw');
  const [penWidth, setPenWidth] = useState(4);
  const [settings, setSettings] = useState({
    gridSize: 10,
    tolerance: 10,
    confidenceThreshold: 0.6,
  });
  const [aiSettings, setAiSettings] = useState({
    useYolo: true,
    useOpenCv: true,
    useOcr: true,
    yoloConfidence: 0.35,
    nmsIou: 0.45,
    ocrConfidence: 38,
    inputSize: 640,
  });
  const [modelState, setModelState] = useState({
    name: 'No trained model loaded',
    message: 'Select circuit-yolo.onnx. OpenCV, OCR, and heuristic fallback still work.',
    buffer: null,
    labels: DEFAULT_CIRCUIT_LABELS,
    inputSize: 640,
    cacheKey: 'none',
  });
  const [aiState, setAiState] = useState({
    status: '',
    message: 'AI pipeline: ONNX model optional • OpenCV wires • Tesseract OCR.',
  });
  const [strokes, setStrokes] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [selected, setSelected] = useState(-1);
  const [placement, setPlacement] = useState(null);
  const [status, setStatus] = useState('Ready. Draw a circuit or load the test sketch.');
  const [converting, setConverting] = useState(false);
  const [wasmState, setWasmState] = useState({
    status: '',
    message:
      'Mouse strokes use the vector recognizer. Uploaded images use bundled WebAssembly in a background worker.',
  });
  const schematicRef = useRef(null);

  useEffect(() => {
    const bundledModelUrl = `${import.meta.env.BASE_URL}models/circuit-yolo.onnx`;
    fetch(bundledModelUrl, { method: 'HEAD', cache: 'no-store' })
      .then((response) => {
        const contentType = response.headers.get('content-type') || '';
        const contentLength = Number(response.headers.get('content-length') || 0);
        if (!response.ok || contentType.includes('text/html') || (contentLength && contentLength < 1024)) return;
        setModelState((current) => ({
          ...current,
          name: 'Bundled circuit-yolo.onnx',
          message: 'Bundled ONNX model found. WebGPU will be preferred when available.',
          url: bundledModelUrl,
          buffer: null,
          cacheKey: `bundled:${bundledModelUrl}`,
        }));
      })
      .catch(() => {});
  }, []);

  const confidenceLabel = (value) => {
    if (value >= 0.75) return 'Strict';
    if (value <= 0.45) return 'Flexible';
    return 'Balanced';
  };

  const updateRecognitionSettings = (updater) => {
    setSettings(updater);
    setStatus('Recognition settings changed. Press Analyze and convert to apply them.');
  };


  const updateAiSettings = (updater) => {
    setAiSettings(updater);
    setStatus('AI settings changed. Press Analyze and convert to apply them.');
  };

  const handleModelUpload = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    try {
      const buffer = await file.arrayBuffer();
      resetYoloSession();
      setModelState((current) => ({
        ...current,
        name: file.name,
        message: `${(buffer.byteLength / 1024 / 1024).toFixed(1)} MB ONNX model loaded in memory.`,
        buffer,
        url: null,
        cacheKey: `${file.name}:${file.size}:${file.lastModified}`,
      }));
      setAiState({ status: 'ready', message: `YOLO model loaded: ${file.name}` });
    } catch (error) {
      setAiState({ status: 'error', message: `Could not load ONNX model: ${error.message || error}` });
    }
  };

  const handleLabelsUpload = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    try {
      const manifest = parseLabelsManifest(await file.text());
      resetYoloSession();
      setModelState((current) => ({
        ...current,
        labels: manifest.names,
        inputSize: manifest.inputSize,
        message: `${manifest.names.length} class labels loaded; input ${manifest.inputSize}×${manifest.inputSize}.`,
        cacheKey: `${current.cacheKey}:labels:${file.name}:${file.lastModified}`,
      }));
      setAiState({ status: 'ready', message: `YOLO labels loaded: ${manifest.names.join(', ')}` });
    } catch (error) {
      setAiState({ status: 'error', message: `Invalid labels JSON: ${error.message || error}` });
    }
  };

  const {
    objects,
    objectsRef,
    setObjects,
    snapshot,
    undo,
    redo,
    resetHistory,
    canUndo,
    canRedo,
  } = useObjectHistory([]);

  const changeMode = (nextMode) => {
    setMode(nextMode);
    setStatus(
      nextMode === 'draw'
        ? 'Draw mode. Hold the mouse button and drag.'
        : 'Erase mode. Click a blue stroke.',
    );
  };

  const loadImage = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      setBackgroundImage(image);
      setStrokes([]);
      setObjects([]);
      resetHistory();
      setSelected(-1);
      URL.revokeObjectURL(url);
      setStatus('Image loaded. The bundled WebAssembly recognizer is being prepared.');
      warmWasmRecognizer(setWasmState).catch((error) => console.warn(error));
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      setStatus('Could not read that image.');
    };
    image.src = url;
  };

  const handleImageUpload = (event) => {
    loadImage(event.target.files?.[0]);
    event.target.value = '';
  };

  const loadDemo = () => {
    setBackgroundImage(null);
    setStrokes(createDemoStrokes());
    setStatus('Test sketch loaded. Press Analyze and convert.');
  };


  const loadColorImageDemo = () => {
    const image = new Image();
    image.onload = () => {
      setBackgroundImage(image);
      setStrokes([]);
      setObjects([]);
      resetHistory();
      setSelected(-1);
      setStatus('Color LED circuit loaded. Press Analyze and convert.');
      warmWasmRecognizer(setWasmState).catch((error) => console.warn(error));
    };
    image.onerror = () => setStatus('Could not load the bundled color sample.');
    image.src = `${import.meta.env.BASE_URL}samples/led-resistor-battery.png`;
  };

  const convertSketch = async () => {
    setConverting(true);
    setStatus('Analyzing strokes, grouping symbol parts, and rebuilding the connection graph…');
    let recognizedSummary = '';
    let recognitionMode = '';
    const settingsSummary = `grid ${settings.gridSize}px • tolerance ${settings.tolerance} • ${confidenceLabel(settings.confidenceThreshold)}`;
    try {
      snapshot();
      let result = [];
      if (strokes.length) result = recognizeVectorStrokes(strokes, settings);
      if (backgroundImage) {
        let imageResult = [];
        let imageDuration = null;
        try {
          const wasmResult = await extractImageWasm(
            backgroundImage,
            CANVAS_WIDTH,
            CANVAS_HEIGHT,
            settings,
            setWasmState,
          );
          imageResult = wasmResult.objects;
          imageDuration = wasmResult.durationMs;
          if (['color-symbols', 'hybrid-color-monochrome', 'monochrome-symbols', 'color-foreground-monochrome', 'structured-iec'].includes(wasmResult.mode)) {
            const types = wasmResult.diagnostics?.types || {};
            const summary = Object.entries(types).map(([type, count]) => `${count} ${type}`).join(', ');
            recognizedSummary = summary;
            recognitionMode = wasmResult.mode;
            setStatus(`Schematic recognized${summary ? `: ${summary}` : ''}. Rebuilding connections…`);
          }
        } catch (error) {
          console.warn('WebAssembly recognition failed; using JavaScript fallback.', error);
          setWasmState({
            status: 'error',
            message: 'WebAssembly failed; the slower JavaScript fallback was used.',
          });
          const fallbackStarted = performance.now();
          imageResult = extractImageFallback(
            backgroundImage,
            CANVAS_WIDTH,
            CANVAS_HEIGHT,
            settings,
          );
          imageDuration = performance.now() - fallbackStarted;
        }
        let combinedImageResult = imageResult;
        if (aiSettings.useYolo || aiSettings.useOpenCv || aiSettings.useOcr) {
          const aiResult = await runAiRecognitionPipeline({
            image: backgroundImage,
            fallbackObjects: imageResult,
            targetWidth: CANVAS_WIDTH,
            targetHeight: CANVAS_HEIGHT,
            settings,
            aiSettings,
            model: modelState,
            onState: setAiState,
          });
          combinedImageResult = aiResult.objects;
          recognitionMode = aiResult.mode;
          const yoloCount = aiResult.diagnostics?.yolo?.detections || 0;
          const ocrWords = aiResult.diagnostics?.ocr?.words || 0;
          const cvWires = aiResult.diagnostics?.opencv?.wires || 0;
          recognizedSummary = [
            yoloCount ? `${yoloCount} YOLO detections` : '',
            cvWires ? `${cvWires} OpenCV wires` : '',
            ocrWords ? `${ocrWords} OCR words` : '',
          ].filter(Boolean).join(', ') || recognizedSummary;
        }
        result = cleanupGraph(result.concat(combinedImageResult), settings);
        if (imageDuration !== null) {
          setStatus(`Image analysis completed in ${imageDuration.toFixed(1)} ms. Rebuilding the connection graph…`);
        }
      }

      const converted = result.map((object) => {
        const acceptedType = ['unknown', 'wire', 'junction'].includes(object.type);
        if (acceptedType || object.confidence >= settings.confidenceThreshold) return object;
        return {
          ...object,
          originalType: object.type,
          type: 'unknown',
          box: objectBounds(object),
        };
      });
      setObjects(converted);
      setSelected(-1);

      const uncertain = converted.filter((object) => object.type === 'unknown').length;
      if (!converted.length) {
        setStatus(`${APP_BUILD_LABEL} • ${settingsSummary} • nothing recognized.`);
      } else if (uncertain) {
        setStatus(
          `${APP_BUILD_LABEL} • ${recognitionMode || 'vector'} • ${settingsSummary} • ${converted.length} objects, ${uncertain} REVIEW.`,
        );
      } else {
        setStatus(
          `${APP_BUILD_LABEL} • ${recognitionMode || 'vector'} • ${settingsSummary}${recognizedSummary ? ` • ${recognizedSummary}` : ''} • ${converted.length} objects.`,
        );
      }
    } catch (error) {
      console.error(error);
      setStatus(`Conversion error: ${error.message || error}`);
    } finally {
      setConverting(false);
    }
  };

  const selectSymbol = (type) => {
    setPlacement(type);
    setStatus(
      type === 'wire'
        ? 'Wire tool: drag on the clean canvas.'
        : `Click the clean canvas to place ${type}.`,
    );
    schematicRef.current?.focus();
  };

  const handleRetype = (index, type) => {
    snapshot();
    const snap = createSnapper(settings.gridSize);
    setObjects((current) =>
      current.map((object, objectIndex) =>
        objectIndex === index ? retypeObject(object, type, snap) : object,
      ),
    );
    setSelected(index);
    setStatus(`Detection changed to ${type}.`);
    schematicRef.current?.focus();
  };


  const handleMetadataChange = (index, key, value) => {
    setObjects((current) => current.map((object, objectIndex) =>
      objectIndex === index ? { ...object, [key]: value } : object,
    ));
    setSelected(index);
  };

  const handleDeleteReview = (index) => {
    snapshot();
    setObjects((current) => current.filter((_, objectIndex) => objectIndex !== index));
    setSelected(-1);
    setStatus('Detection deleted.');
  };

  const handleUndo = () => {
    if (!canUndo) return;
    undo();
    setSelected(-1);
    setStatus('Undo.');
  };

  const handleRedo = () => {
    if (!canRedo) return;
    redo();
    setSelected(-1);
    setStatus('Redo.');
  };

  const clearAll = () => {
    snapshot();
    setObjects([]);
    setStrokes([]);
    setBackgroundImage(null);
    setSelected(-1);
    setPlacement(null);
    setStatus('Both canvases cleared.');
  };

  const openProject = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    try {
      const project = JSON.parse(await file.text());
      if (!Array.isArray(project.strokes) || !Array.isArray(project.objects)) {
        throw new Error('Missing strokes or objects arrays');
      }
      setStrokes(project.strokes);
      setObjects(cleanupGraph(project.objects, settings));
      setBackgroundImage(null);
      setSelected(-1);
      setPlacement(null);
      resetHistory();
      setStatus('Project opened.');
    } catch (error) {
      console.error(error);
      setStatus('Could not open project: invalid JSON.');
    }
  };

  const sidebarProps = {
    input: {
      mode,
      onModeChange: changeMode,
      penWidth,
      onPenWidthChange: setPenWidth,
      onImageUpload: handleImageUpload,
      onLoadDemo: loadDemo,
      onLoadImageDemo: loadColorImageDemo,
    },
    recognition: {
      settings,
      onSettingsChange: updateRecognitionSettings,
      onConvert: convertSketch,
      converting,
      wasmState,
      aiSettings,
      onAiSettingsChange: updateAiSettings,
      aiState,
      modelState,
      onModelUpload: handleModelUpload,
      onLabelsUpload: handleLabelsUpload,
    },
    review: {
      objects,
      selected,
      onSelect: (index) => {
        setSelected(index);
        schematicRef.current?.focus();
      },
      onRetype: handleRetype,
      onMetadataChange: handleMetadataChange,
      onDelete: handleDeleteReview,
    },
    palette: {
      placement,
      onSelectSymbol: selectSymbol,
    },
    project: {
      onUndo: handleUndo,
      onRedo: handleRedo,
      canUndo,
      canRedo,
      onClear: clearAll,
      onSaveProject: () => saveProject(strokes, objects),
      onExportSvg: () => exportSvg(objects),
      onExportPng: () => exportPng(objects, CANVAS_WIDTH, CANVAS_HEIGHT),
      onOpenProject: openProject,
    },
  };

  const sketchProps = {
    strokes,
    setStrokes,
    backgroundImage,
    mode,
    penWidth,
    onStatus: setStatus,
  };

  const schematicProps = {
    objects,
    objectsRef,
    setObjects,
    selected,
    setSelected,
    placement,
    setPlacement,
    snapshot,
    gridSize: settings.gridSize,
    onStatus: setStatus,
  };

  return (
    <>
      <AppHeader />
      <div className="app-shell">
        <Sidebar {...sidebarProps} />
        <main>
          <StatusBar status={status} objects={objects} />
          <Workspace
            sketchProps={sketchProps}
            schematicProps={schematicProps}
            schematicRef={schematicRef}
          />
        </main>
      </div>
    </>
  );
}
