import { fitImageRect } from '../utils/imageRaster.js';

let workerPromise;

function flattenWordsFromBlocks(blocks) {
  const words = [];
  for (const block of blocks || []) {
    for (const paragraph of block.paragraphs || []) {
      for (const line of paragraph.lines || []) {
        for (const word of line.words || []) {
          words.push({
            text: String(word.text || '').trim(),
            confidence: Number(word.confidence || 0),
            bbox: word.bbox || null,
          });
        }
      }
    }
  }
  return words;
}

async function getWorker(onState) {
  if (workerPromise) return workerPromise;
  workerPromise = (async () => {
    const { createWorker, OEM, PSM } = await import('tesseract.js');
    const worker = await createWorker('eng', OEM.LSTM_ONLY, {
      langPath: `${import.meta.env.BASE_URL}tessdata`,
      gzip: true,
      logger: (message) => {
        if (message?.status) {
          const progress = Number.isFinite(message.progress) ? ` ${Math.round(message.progress * 100)}%` : '';
          onState?.({ status: 'working', message: `OCR: ${message.status}${progress}` });
        }
      },
    });
    await worker.setParameters({
      tessedit_pageseg_mode: PSM.SPARSE_TEXT,
      tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.+-/ΩµμkKMmnpfFAWV',
      preserve_interword_spaces: '1',
      user_defined_dpi: '180',
    });
    return worker;
  })();
  return workerPromise;
}

export async function recognizeSchematicText(image, options = {}, onState) {
  const worker = await getWorker(onState);
  onState?.({ status: 'working', message: 'Running Tesseract OCR for labels and values…' });
  const started = performance.now();
  const { data } = await worker.recognize(image, {}, { text: true, blocks: true });
  const minimumConfidence = Number(options.minimumConfidence || 38);
  const words = flattenWordsFromBlocks(data.blocks)
    .filter((word) => word.text && word.bbox && word.confidence >= minimumConfidence);
  return {
    text: String(data.text || '').trim(),
    words,
    durationMs: performance.now() - started,
  };
}

function centerOfBox(box) {
  return { x: (box.x0 + box.x1) / 2, y: (box.y0 + box.y1) / 2 };
}

function designatorForType(type) {
  switch (type) {
    case 'resistor': return /^R\d+$/i;
    case 'capacitor': return /^C\d+$/i;
    case 'fuse': return /^F\d+$/i;
    case 'diode': return /^(D|SD)\d+$/i;
    case 'zener': return /^ZD\d+$/i;
    case 'led': return /^LED\d+$/i;
    case 'scr': return /^(Q|SCR|T)\d+$/i;
    case 'battery': return /^(BAT|B)\d+$/i;
    case 'source': return /^(V|VS)\d+$/i;
    case 'lamp': return /^(L|LP)\d+$/i;
    default: return /^[A-Z]{1,4}\d+$/i;
  }
}

function looksLikeValue(text) {
  return /\d/.test(text) && /(?:Ω|ohm|[munpfkM]?[FAVW]|V|A|W|Hz|K)$/i.test(text.replace(/\s+/g, ''));
}

export function attachOcrToObjects(objects, words, sourceWidth, sourceHeight, targetWidth, targetHeight) {
  if (!words?.length) return objects;
  const fit = fitImageRect(sourceWidth, sourceHeight, targetWidth, targetHeight);
  const mappedWords = words.map((word) => ({
    ...word,
    box: {
      x0: fit.x + word.bbox.x0 * fit.scale,
      y0: fit.y + word.bbox.y0 * fit.scale,
      x1: fit.x + word.bbox.x1 * fit.scale,
      y1: fit.y + word.bbox.y1 * fit.scale,
    },
  }));

  return objects.map((object) => {
    if (['wire', 'junction', 'unknown'].includes(object.type)) return object;
    const objectCenter = { x: object.x || 0, y: object.y || 0 };
    const nearby = mappedWords
      .map((word) => {
        const center = centerOfBox(word.box);
        return { word, distance: Math.hypot(center.x - objectCenter.x, center.y - objectCenter.y) };
      })
      .filter((entry) => entry.distance < 115)
      .sort((a, b) => a.distance - b.distance);
    if (!nearby.length) return object;

    const labelPattern = designatorForType(object.type);
    const label = nearby.find(({ word }) => labelPattern.test(word.text))?.word.text || object.label || '';
    const value = nearby.find(({ word }) => looksLikeValue(word.text) && word.text !== label)?.word.text || object.value || '';
    return { ...object, label, value, ocrAttached: Boolean(label || value) };
  });
}

export async function terminateOcrWorker() {
  if (!workerPromise) return;
  const worker = await workerPromise;
  await worker.terminate();
  workerPromise = null;
}
