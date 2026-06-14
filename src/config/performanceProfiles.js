export const RECOGNITION_PROFILES = Object.freeze({
  fast: Object.freeze({
    id: 'fast',
    label: 'Fast',
    description: 'Lowest-latency mode. Uses lower-resolution preprocessing, cached stages, OCR off, and OpenCV only as a short-timeout lite scan when fallback wires are weak.',
    imageMaxDimension: 760,
    openCvMaxDimension: 420,
    openCvTimeoutMs: 1200,
    openCvAlgorithm: 'scan',
    ocrMaxDimension: 800,
    yoloInputSize: 416,
    skipOpenCvWhenFallbackWiresAtLeast: 2,
    runAiStagesInParallel: false,
  }),
  balanced: Object.freeze({
    id: 'balanced',
    label: 'Balanced',
    description: 'Medium-resolution recognition. OpenCV uses the lite axis-line scanner first and has a short timeout.',
    imageMaxDimension: 1000,
    openCvMaxDimension: 640,
    openCvTimeoutMs: 2500,
    openCvAlgorithm: 'scan',
    ocrMaxDimension: 1000,
    yoloInputSize: 512,
    skipOpenCvWhenFallbackWiresAtLeast: 5,
    runAiStagesInParallel: false,
  }),
  accurate: Object.freeze({
    id: 'accurate',
    label: 'Accurate',
    description: 'Slowest mode for difficult images. Allows full OpenCV Hough line detection and optional OCR.',
    imageMaxDimension: 1300,
    openCvMaxDimension: 1100,
    openCvTimeoutMs: 8000,
    openCvAlgorithm: 'hough',
    ocrMaxDimension: 1300,
    yoloInputSize: 640,
    skipOpenCvWhenFallbackWiresAtLeast: Number.POSITIVE_INFINITY,
    runAiStagesInParallel: true,
  }),
});

export function getRecognitionProfile(profileId = 'fast') {
  return RECOGNITION_PROFILES[profileId] || RECOGNITION_PROFILES.fast;
}

export function recognitionProfileOptions() {
  return Object.values(RECOGNITION_PROFILES).map(({ id, label, description }) => ({
    value: id,
    label,
    description,
  }));
}
