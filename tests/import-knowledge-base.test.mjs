import { mkdtemp, writeFile, mkdir, symlink, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { buildDigest } from '../scripts/import-knowledge-base.mjs';
import { pass, fail } from './helpers.mjs';
const root = await mkdtemp(join(tmpdir(), 'career-kb-'));
async function rejects(label, fn) {
  try { await fn(); fail(label); } catch { pass(label); }
}
try {
  await mkdir(join(root, 'review'));
  await writeFile(join(root, 'review/open-questions.md'), 'Dates unresolved; no measured savings.');
  await writeFile(join(root, 'record.md'), '# Example\nTeam-built; personally owned frontend.');
  const index = { schema_version: 1, records: [{ id: 'role-example', type: 'role', path: 'record.md' }] };
  const save = () => writeFile(join(root, 'index.json'), JSON.stringify(index));
  await save();
  const digest = await buildDigest(root);
  if (digest.includes('personally owned frontend') && digest.includes('Dates unresolved') && /Source SHA-256: [a-f0-9]{64}/.test(digest)) pass('imports ownership, unresolved details and source hashes');
  else fail('imports ownership, unresolved details and source hashes');
  index.records.push({ ...index.records[0] }); await save();
  await rejects('rejects duplicate record IDs', () => buildDigest(root));
  index.records.pop(); index.records[0].parent_id = 'missing'; await save();
  await rejects('rejects unresolved record references', () => buildDigest(root));
  delete index.records[0].parent_id;
  index.records[0].path = '../' + root.split('/').pop() + '-outside.md'; await save();
  await writeFile(`${root}-outside.md`, 'outside');
  await rejects('rejects path traversal', () => buildDigest(root));
  await symlink(`${root}-outside.md`, join(root, 'escape.md'));
  index.records[0].path = 'escape.md'; await save();
  await rejects('rejects symlink escapes', () => buildDigest(root));
  await rm(`${root}-outside.md`);
} finally { await rm(root, { recursive: true, force: true }); }
