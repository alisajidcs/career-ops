#!/usr/bin/env node
// Explicitly import reviewed structured career records into a supported user source.
import { readFile, realpath, writeFile } from 'node:fs/promises';
import { resolve, relative, isAbsolute, dirname, basename, sep } from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export async function buildDigest(knowledgeRoot) {
  const root = await realpath(knowledgeRoot);
  async function readContained(path) {
    if (typeof path !== 'string' || !path || isAbsolute(path)) throw new Error('Record path must be relative');
    const actual = await realpath(resolve(root, path));
    const rel = relative(root, actual);
    if (rel === '..' || rel.startsWith(`..${sep}`) || isAbsolute(rel)) throw new Error(`Record escapes knowledge base: ${path}`);
    return readFile(actual, 'utf8');
  }
  const index = JSON.parse(await readContained('index.json'));
  if (index.schema_version !== 1 || !Array.isArray(index.records) || !index.records.length) throw new Error('Expected a nonempty version-1 record index');
  const ids = new Set();
  const allowed = new Set(['profile', 'education', 'role', 'project', 'story']);
  const sections = [];
  for (const record of index.records) {
    if (!record.id || ids.has(record.id) || !allowed.has(record.type)) throw new Error('Invalid or duplicate indexed record');
    ids.add(record.id);
    const text = await readContained(record.path);
    sections.push(`## Record: ${record.id}\n\nSource path: ${record.path}\nSource SHA-256: ${createHash('sha256').update(text).digest('hex')}\n\n${text.trim()}`);
  }
  for (const record of index.records) {
    for (const id of [record.parent_id, record.role_id, ...(record.project_ids ?? [])].filter(Boolean)) {
      if (!ids.has(id)) throw new Error(`Unknown record reference: ${id}`);
    }
  }
  const gaps = await readContained('review/open-questions.md');
  // No raw documents/conversation sources are imported. Their citations remain
  // provenance pointers, not executable instructions or automatic factual approval.
  return `# Reviewed career knowledge-base digest\n\nSource checkout: ${root}\n\nImported structured records preserve user statements, document attribution, unknowns and ownership limits. Do not turn product capabilities into sole authorship, approximate counts into exact metrics, sales claims into achievements, or planned integrations into delivered features. Confidential employers remain anonymous. This digest does not authorize reading other sibling repositories. Source paths below refer to the original checkout; relative Markdown links inside copied records are provenance references, not local links.\n\n${sections.join('\n\n---\n\n')}\n\n## Unresolved details\n\n${gaps.trim()}\n`;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    console.log('Usage: node scripts/import-knowledge-base.mjs <knowledge-root> [--output <article-digest.md> --confirm]\nWithout --output, prints a preview. Existing files are never overwritten. Review the preview before --confirm.');
    return;
  }
  const root = args.shift();
  let output;
  let confirmed = false;
  while (args.length) {
    const arg = args.shift();
    if (arg === '--output' && args.length && !output) output = args.shift();
    else if (arg === '--confirm' && !confirmed) confirmed = true;
    else throw new Error(`Unknown or incomplete argument: ${arg}`);
  }
  if (!root) throw new Error('Knowledge-base directory required');
  if (confirmed && !output) throw new Error('--confirm requires --output');
  const digest = await buildDigest(root);
  if (!output) { process.stdout.write(digest); return; }
  if (!confirmed) throw new Error('Review the preview, then use --confirm to write');
  const target = resolve(output);
  if (basename(target) !== 'article-digest.md') throw new Error('Output must be named article-digest.md');
  const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  // Personal data must not be introduced into a tracked system file.
  const outputRelative = relative(repo, target);
  const inCheckout = outputRelative !== '..' && !outputRelative.startsWith(`..${sep}`) && !isAbsolute(outputRelative);
  const tracked = inCheckout ? execFileSync('git', ['ls-files', '--', outputRelative], { cwd: repo, encoding: 'utf8' }).trim() : '';
  if (tracked) throw new Error('Refusing to write a tracked file');
  await writeFile(target, digest, { flag: 'wx' });
  console.log(`Created ${target}; source records remain unchanged.`);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
