#!/usr/bin/env node
// Build limiter: fails the build before the site outgrows GitHub Pages.
//
// Pages refuses to publish a site over 1 GB, and the public domain book pages
// (docs/pd-books-pipeline.md, growth rules) are the first thing
// here that can grow without a human adding files one by one. A hard stop with
// the numbers printed is better than a deploy that silently breaks, and the
// warn threshold is the signal to change hosting rather than trim pages.
//
// Runs after `astro build` (see package.json). No dependencies: plain node.
import { readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MB = 1024 * 1024;
const FAIL_MB = 900; // GitHub Pages hard limit is 1 GB
const WARN_MB = 800;
const FAIL_HTML_FILES = 30000;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

if (!existsSync(dist)) {
  console.error(`check-dist-size: ${dist} does not exist. Run the build first.`);
  process.exit(1);
}

/** @type {{ bytes: number, files: number, html: number }} */
const total = { bytes: 0, files: 0, html: 0 };
/** @type {Map<string, number>} */
const topLevel = new Map();

async function walk(dir, bucket) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isSymbolicLink()) continue; // never followed, never counted twice
    if (entry.isDirectory()) {
      await walk(full, bucket ?? entry.name);
      continue;
    }
    if (!entry.isFile()) continue;
    const { size } = await stat(full);
    total.bytes += size;
    total.files += 1;
    if (entry.name.endsWith('.html')) total.html += 1;
    const key = bucket ?? '(root files)';
    topLevel.set(key, (topLevel.get(key) ?? 0) + size);
  }
}

await walk(dist, null);

const mb = total.bytes / MB;
const biggest = [...topLevel.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);

console.log('');
console.log('dist size check');
console.log(`  total:       ${mb.toFixed(1)} MB (${total.files} files)`);
console.log(`  HTML pages:  ${total.html}`);
console.log(`  thresholds:  warn ${WARN_MB} MB, fail ${FAIL_MB} MB or ${FAIL_HTML_FILES} HTML files`);
console.log('  largest directories:');
for (const [name, bytes] of biggest) {
  console.log(`    ${(bytes / MB).toFixed(1).padStart(8)} MB  ${name}`);
}

const problems = [];
if (mb > FAIL_MB) problems.push(`dist is ${mb.toFixed(1)} MB, over the ${FAIL_MB} MB limit`);
if (total.html > FAIL_HTML_FILES) {
  problems.push(`dist has ${total.html} HTML files, over the ${FAIL_HTML_FILES} limit`);
}

if (problems.length) {
  console.error('');
  console.error('check-dist-size FAILED:');
  for (const problem of problems) console.error(`  ${problem}`);
  console.error('  GitHub Pages refuses sites over 1 GB. Cut pages or move hosting.');
  process.exit(1);
}

if (mb > WARN_MB) {
  console.warn('');
  console.warn(`check-dist-size WARNING: ${mb.toFixed(1)} MB is past the ${WARN_MB} MB warn line.`);
  console.warn('  Plan the hosting change now; the build fails at ' + FAIL_MB + ' MB.');
}

console.log('');
