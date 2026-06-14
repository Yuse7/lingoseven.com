#!/usr/bin/env node
// Export the Lingo7 Instagram grid as nine 1080x1080 PNG posts.
//
// `instagram-grid.html` renders one continuous 3240x3240 artwork and exposes
// window.exportTile(n) / window.exportDone() to show tile n at 1:1 in a fixed
// 1080x1080 viewport (#exp). This script drives the already-installed Chrome
// over the DevTools Protocol (no npm install, no Playwright), opens the file via
// file://, and captures each tile into out/instagram/lingo7-post-0N.png.
//
// The nine tiles reassemble into one picture; publish them in REVERSE order
// (9 -> 1) so Instagram lays them back into the 3x3 grid.
//
// Usage:
//   node capture.mjs                 # all nine posts
//   node capture.mjs --only 5        # just tile 5 (1-based)
//   node capture.mjs --out DIR       # output dir (default ../../out/instagram)
//   node capture.mjs --chrome PATH   # Chrome/Chromium binary (or set $CHROME)
//
// Requires only Node 22+ and a Chromium-based browser.

import { spawn, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── Args ──────────────────────────────────────────────────────────────────────
function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) out[key] = true;
    else { out[key] = next; i++; }
  }
  return out;
}
const args = parseArgs(process.argv.slice(2));

const SRC = resolve(__dirname, 'instagram-grid.html');
// Output into a committed folder next to the generator (out/ is gitignored).
const OUT = resolve(args.out ? String(args.out) : resolve(__dirname, 'posts'));
const TILES = args.only ? [Number(args.only) - 1] : [0, 1, 2, 3, 4, 5, 6, 7, 8];
const SIZE = 1080;                      // CSS px per tile (the design's coordinate unit)
const SCALE = Number(args.scale || 2);  // supersample factor -> output is SIZE*SCALE px (2160 @2x)

// ── Resolve Chrome ─────────────────────────────────────────────────────────────
function findChrome() {
  if (args.chrome) return String(args.chrome);
  if (process.env.CHROME) return process.env.CHROME;
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ];
  for (const c of candidates) if (existsSync(c)) return c;
  for (const name of ['google-chrome', 'chromium', 'chromium-browser']) {
    const r = spawnSync('which', [name]);
    if (r.status === 0) return r.stdout.toString().trim();
  }
  return null;
}
const CHROME = findChrome();
if (!CHROME) { console.error('No Chrome/Chromium found. Pass --chrome <path> or set $CHROME.'); process.exit(1); }
if (!existsSync(SRC)) { console.error(`Missing source: ${SRC}`); process.exit(1); }

// ── Minimal CDP client over the page target's websocket ────────────────────────
async function connectCDP(port) {
  let wsUrl = null;
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline && !wsUrl) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
      const page = list.find((t) => t.type === 'page') || list[0];
      if (page) wsUrl = page.webSocketDebuggerUrl;
    } catch { /* not ready */ }
    if (!wsUrl) await sleep(300);
  }
  if (!wsUrl) throw new Error('Could not find a CDP page target');

  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = () => rej(new Error('CDP ws error')); });

  let nextId = 1;
  const pending = new Map();
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve: r, reject: j } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? j(new Error(msg.error.message)) : r(msg.result);
    }
  };
  const send = (method, params = {}) =>
    new Promise((res, rej) => { const id = nextId++; pending.set(id, { resolve: res, reject: rej }); ws.send(JSON.stringify({ id, method, params })); });
  return { send, close: () => ws.close() };
}

const evalJS = (cdp, expression, awaitPromise = false) =>
  cdp.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise });

// ── Main ───────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`Chrome: ${CHROME}`);
  await mkdir(OUT, { recursive: true });

  const port = 9600 + (process.pid % 300);
  const udd = resolve(tmpdir(), `lingo7-ig-${process.pid}`);
  const chrome = spawn(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--mute-audio',
    '--no-first-run', '--no-default-browser-check', `--force-device-scale-factor=${SCALE}`,
    `--remote-debugging-port=${port}`, `--user-data-dir=${udd}`, 'about:blank',
  ], { stdio: 'ignore' });

  const done = [];
  let cdp;
  try {
    cdp = await connectCDP(port);
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: SIZE, height: SIZE, deviceScaleFactor: SCALE, mobile: false });

    // Load the grid source.
    const url = pathToFileURL(SRC).toString();
    await cdp.send('Page.navigate', { url });
    // Wait for the export hook + fonts + all images.
    const ready = '(typeof window.exportTile==="function") && Array.from(document.images).every(i=>i.complete && i.naturalWidth>0)';
    const deadline = Date.now() + 60000;
    let ok = false;
    while (Date.now() < deadline) {
      const r = await evalJS(cdp, ready);
      if (r.result && r.result.value === true) { ok = true; break; }
      await sleep(250);
    }
    if (!ok) throw new Error('grid did not become ready');
    await evalJS(cdp, 'document.fonts.ready.then(()=>true)', true);

    for (const n of TILES) {
      const file = resolve(OUT, `lingo7-post-${String(n + 1).padStart(2, '0')}.png`);
      process.stdout.write(`  tile ${n + 1} … `);
      await evalJS(cdp, `window.exportTile(${n})`);
      // Wait for the freshly cloned tile's images to finish.
      const tdl = Date.now() + 15000;
      while (Date.now() < tdl) {
        const r = await evalJS(cdp, 'Array.from(document.querySelectorAll("#exp img")).every(i=>i.complete && i.naturalWidth>0)');
        if (r.result && r.result.value === true) break;
        await sleep(150);
      }
      await sleep(300); // settle layout/gradients
      const shot = await cdp.send('Page.captureScreenshot', {
        format: 'png', captureBeyondViewport: false,
        // deviceScaleFactor already applies SCALE; keep clip scale at 1 so output is SIZE*SCALE.
        clip: { x: 0, y: 0, width: SIZE, height: SIZE, scale: 1 },
      });
      await writeFile(file, Buffer.from(shot.data, 'base64'));
      await evalJS(cdp, 'window.exportDone()');
      console.log('ok');
      done.push(file);
    }
  } finally {
    try { cdp?.close(); } catch {}
    chrome.kill();
    await rm(udd, { recursive: true, force: true }).catch(() => {});
  }

  console.log(`\nDone. ${done.length} post(s) in ${OUT}`);
  console.log('Publish in REVERSE order (9 -> 1) so the tiles reassemble in the profile grid.');
}

main().catch((e) => { console.error(e); process.exit(1); });
