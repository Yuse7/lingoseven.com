#!/usr/bin/env node
// Render a clean, high-resolution LIGHT reader phone for the Instagram grid
// centerpiece, using the SAME widget that powers the store screenshots
// (ReaderDemo on the /shot page). Captures only the phone element (frame +
// real parallel-reading screen) on a transparent background, at 4x, so it stays
// razor sharp when placed big in the grid center.
//
// Output: scripts/instagram/reader-phone.png  (transparent, ~1328x2580)
//
// Needs the Astro dev server (reuses an existing one at --url, default :4321).
//
// Usage:
//   node make-reader.mjs                 # es-en, 4x
//   node make-reader.mjs --pair de-en --scale 4 --out reader-phone.png

import { spawn, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { writeFile, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]; if (!a.startsWith('--')) continue;
    const k = a.slice(2); const n = argv[i + 1];
    if (n === undefined || n.startsWith('--')) out[k] = true; else { out[k] = n; i++; }
  }
  return out;
}
const args = parseArgs(process.argv.slice(2));
const [tgt, ui] = String(args.pair || 'es-en').split('-');
const SCALE = Number(args.scale || 6);
// Capture just the reader SCREEN (no phone-clean.svg wireframe bezel — its thin
// grey outline looks bad on the bright green scene). The grid wraps this screen
// in its own clean CSS device frame.
const SELECTOR = String(args.selector || '.reader-demo__frame');
// Tap a specific, evocative word and float the finger above it (pointing down) so
// it never covers the highlighted translation. Defaults suit the en-ru centerpiece.
const TAPWORD = args.tapword === undefined ? 'stars' : String(args.tapword);
const FINGER = args.finger === undefined ? 'angled' : String(args.finger);
const baseUrl = (args.url || 'http://localhost:4321').replace(/\/$/, '');
const OUT = resolve(__dirname, String(args.out || 'reader-phone.png'));

function findChrome() {
  if (args.chrome) return String(args.chrome);
  if (process.env.CHROME) return process.env.CHROME;
  const c = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  ];
  for (const p of c) if (existsSync(p)) return p;
  for (const n of ['google-chrome', 'chromium', 'chromium-browser']) {
    const r = spawnSync('which', [n]); if (r.status === 0) return r.stdout.toString().trim();
  }
  return null;
}
const CHROME = findChrome();
if (!CHROME) { console.error('No Chrome found.'); process.exit(1); }

async function isUp(u) { try { const r = await fetch(u, { method: 'HEAD' }); return r.ok || r.status < 500; } catch { return false; } }

async function connectCDP(port) {
  let ws = null; const dl = Date.now() + 15000;
  while (Date.now() < dl && !ws) {
    try { const l = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); const p = l.find((t) => t.type === 'page') || l[0]; if (p) ws = p.webSocketDebuggerUrl; } catch {}
    if (!ws) await sleep(300);
  }
  if (!ws) throw new Error('no CDP target');
  const sock = new WebSocket(ws);
  await new Promise((res, rej) => { sock.onopen = res; sock.onerror = () => rej(new Error('ws err')); });
  let id = 1; const pend = new Map();
  sock.onmessage = (ev) => { const m = JSON.parse(ev.data); if (m.id && pend.has(m.id)) { const { resolve: r, reject: j } = pend.get(m.id); pend.delete(m.id); m.error ? j(new Error(m.error.message)) : r(m.result); } };
  const send = (method, params = {}) => new Promise((res, rej) => { const i = id++; pend.set(i, { resolve: res, reject: rej }); sock.send(JSON.stringify({ id: i, method, params })); });
  return { send, close: () => sock.close() };
}
const evalJS = (cdp, expression, awaitPromise = false) => cdp.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise });

async function main() {
  if (!(await isUp(baseUrl))) { console.error(`No dev server at ${baseUrl}. Start it: (cd lingoseven.com && npm run dev)`); process.exit(1); }
  console.log(`Chrome: ${CHROME}\nReader: ${tgt}-${ui} @${SCALE}x  ->  ${OUT}`);

  const port = 9700 + (process.pid % 200);
  const udd = resolve(tmpdir(), `lingo7-reader-${process.pid}`);
  const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--mute-audio', '--no-first-run', '--no-default-browser-check', `--remote-debugging-port=${port}`, `--user-data-dir=${udd}`, 'about:blank'], { stdio: 'ignore' });

  let cdp;
  try {
    cdp = await connectCDP(port);
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', { width: 520, height: 1200, deviceScaleFactor: 1, mobile: false });
    await cdp.send('Emulation.setDefaultBackgroundColorOverride', { color: { r: 0, g: 0, b: 0, a: 0 } });

    const q = new URLSearchParams({ widget: 'reader', tgt, ui });
    if (TAPWORD) q.set('tapword', TAPWORD);
    if (FINGER) q.set('finger', FINGER);
    const url = `${baseUrl}/shot?${q.toString()}`;
    await cdp.send('Page.navigate', { url });
    const ready = '(window.__shotReady===true) && Array.from(document.images).every(i=>i.complete && i.naturalWidth>0)';
    const dl = Date.now() + 60000; let ok = false;
    while (Date.now() < dl) { const r = await evalJS(cdp, ready); if (r.result && r.result.value === true) { ok = true; break; } await sleep(250); }
    if (!ok) throw new Error('reader did not become ready');
    await evalJS(cdp, 'document.fonts.ready.then(()=>true)', true);
    await sleep(400);

    // Clear every background behind the phone so the rounded-corner gaps come
    // out transparent (the global body bg #0e1521 would otherwise fill them).
    await evalJS(cdp, `(()=>{document.documentElement.style.background='transparent';document.body.style.background='transparent';const e=document.querySelector(${JSON.stringify(SELECTOR)});for(let p=e.parentElement;p;p=p.parentElement){p.style.background='transparent';p.style.backgroundImage='none';}return true;})()`);
    await sleep(120);

    // Bounding box of the captured element (the reader screen), in page CSS px.
    const box = (await evalJS(cdp, `(()=>{const e=document.querySelector(${JSON.stringify(SELECTOR)});const r=e.getBoundingClientRect();return {x:r.x+scrollX,y:r.y+scrollY,w:r.width,h:r.height};})()`)).result.value;
    if (!box || !box.w) throw new Error('element not found: ${SELECTOR}');

    const shot = await cdp.send('Page.captureScreenshot', {
      format: 'png', captureBeyondViewport: true,
      clip: { x: box.x, y: box.y, width: box.w, height: box.h, scale: SCALE },
    });
    await writeFile(OUT, Buffer.from(shot.data, 'base64'));
    console.log(`ok  (${Math.round(box.w * SCALE)}x${Math.round(box.h * SCALE)})`);
  } finally {
    try { cdp?.close(); } catch {}
    chrome.kill();
    await rm(udd, { recursive: true, force: true }).catch(() => {});
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
