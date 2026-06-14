import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const metadataPath = path.join(repoRoot, '.github', 'repository-metadata.json');

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: options.capture ? 'pipe' : 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    const details = options.capture ? result.stderr.trim() : '';
    throw new Error(`${command} ${args.join(' ')} failed${details ? `: ${details}` : ''}`);
  }
  return options.capture ? result.stdout.trim() : '';
}

const metadata = JSON.parse(await readFile(metadataPath, 'utf8'));
const explicitRepository = process.argv[2];
let repository = explicitRepository;

if (!repository) {
  repository = run('gh', ['repo', 'view', '--json', 'nameWithOwner', '--jq', '.nameWithOwner'], {
    capture: true,
  });
}

if (!repository) {
  throw new Error('Could not determine the GitHub repository. Pass OWNER/REPO as the first argument.');
}

const args = ['repo', 'edit', repository, '--description', metadata.description];
for (const topic of metadata.topics) args.push('--add-topic', topic);

const homepage = process.env.GITHUB_PAGES_URL?.trim();
if (homepage) args.push('--homepage', homepage);

run('gh', args);
console.log(`Updated GitHub About metadata for ${repository}.`);
console.log(`Description: ${metadata.description}`);
console.log(`Topics: ${metadata.topics.join(', ')}`);
if (!homepage) {
  console.log('Homepage was not changed. Set GITHUB_PAGES_URL to add one.');
}
