import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const required = [
  'MODEL_TRAINING.md',
  'docs/model-training.md',
  'training/check_dataset.py',
  'training/train.py',
  'training/validate.py',
  'training/export_onnx.py',
  'training/circuit-dataset.yaml',
  'training/requirements.txt',
];

for (const relative of required) {
  const filename = path.join(root, relative);
  if (!fs.existsSync(filename)) throw new Error(`Missing model guide file: ${relative}`);
}

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
for (const command of ['model:check-data', 'model:train', 'model:validate', 'model:export']) {
  if (!pkg.scripts?.[command]) throw new Error(`Missing npm command: ${command}`);
}

const guide = fs.readFileSync(path.join(root, 'docs/model-training.md'), 'utf8');
for (const phrase of ['Prepare the dataset', 'Check the dataset', 'Train the model', 'Export the model to ONNX', 'Run the browser with the model']) {
  if (!guide.includes(phrase)) throw new Error(`Model guide is missing section: ${phrase}`);
}

console.log('Model training guide and helper scripts are present.');
