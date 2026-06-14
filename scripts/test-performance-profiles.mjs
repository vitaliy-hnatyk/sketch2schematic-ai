import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { getRecognitionProfile, recognitionProfileOptions } from '../src/config/performanceProfiles.js';

const fast = getRecognitionProfile('fast');
const balanced = getRecognitionProfile('balanced');
const accurate = getRecognitionProfile('accurate');

assert.equal(recognitionProfileOptions().length, 3);
assert.ok(fast.imageMaxDimension < balanced.imageMaxDimension);
assert.ok(balanced.imageMaxDimension < accurate.imageMaxDimension);
assert.ok(fast.openCvMaxDimension < balanced.openCvMaxDimension);
assert.ok(balanced.openCvMaxDimension < accurate.openCvMaxDimension);
assert.ok(fast.openCvTimeoutMs < balanced.openCvTimeoutMs);
assert.equal(fast.openCvAlgorithm, 'scan');
assert.equal(accurate.openCvAlgorithm, 'hough');
assert.ok(fast.ocrMaxDimension < accurate.ocrMaxDimension);
assert.ok(fast.skipOpenCvWhenFallbackWiresAtLeast < accurate.skipOpenCvWhenFallbackWiresAtLeast);

const appSource = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8');
assert.match(appSource, /performanceMode:\s*'fast'/);
assert.match(appSource, /useOcr:\s*false/);
assert.match(appSource, /imageMaxDimension:\s*recognitionProfile\.imageMaxDimension/);

const pipelineSource = await readFile(new URL('../src/ai/aiPipeline.js', import.meta.url), 'utf8');
assert.match(pipelineSource, /runAiStagesInParallel/);
assert.match(pipelineSource, /skipOpenCvWhenFallbackWiresAtLeast/);
assert.match(pipelineSource, /openCvTimeoutMs/);
assert.match(pipelineSource, /openCvAlgorithm/);
assert.match(pipelineSource, /ocrMaxDimension/);

console.log('Performance profile test passed:', {
  fast: fast.imageMaxDimension,
  balanced: balanced.imageMaxDimension,
  accurate: accurate.imageMaxDimension,
});
