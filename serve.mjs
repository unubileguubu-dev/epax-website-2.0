import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { gzipSync } from 'node:zlib';

const COMPRESSIBLE = new Set(['.html', '.js', '.mjs', '.css', '.json', '.svg', '.md', '.txt', '.xml']);
const gzipCache = new Map();

const ROOT = new URL('.', import.meta.url).pathname;
const PORT = 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2',
  '.md': 'text/markdown; charset=utf-8',
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    let path = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
    let file = join(ROOT, path);

    let s = await stat(file).catch(() => null);
    if (s && s.isDirectory()) {
      // static sub-site (e.g. /shop/) — serve its index.html when present
      const idx = join(file, 'index.html');
      const si = await stat(idx).catch(() => null);
      if (si) { file = idx; s = si; }
      else {
        file = join(ROOT, 'index.html');
        s = await stat(file).catch(() => null);
      }
    } else if (!s) {
      if (extname(path)) {
        // A real file was requested and it's missing — report it honestly
        res.writeHead(404);
        res.end('not found');
        return;
      }
      // SPA fallback: Angular router handles the path client-side.
      // Re-stat so the gzip cache sees index.html's real mtime — otherwise
      // fallback routes serve a stale cached copy after index.html changes.
      file = join(ROOT, 'index.html');
      s = await stat(file).catch(() => null);
    }

    let body = await readFile(file);
    const headers = { 'content-type': MIME[extname(file)] || 'application/octet-stream' };
    const ext = extname(file);
    if (COMPRESSIBLE.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '')) {
      let gz = gzipCache.get(file);
      if (!gz || gz.mtime !== s?.mtimeMs) {
        gz = { data: gzipSync(body), mtime: s?.mtimeMs };
        gzipCache.set(file, gz);
      }
      body = gz.data;
      headers['content-encoding'] = 'gzip';
      headers['vary'] = 'Accept-Encoding';
    }
    res.writeHead(200, headers);
    res.end(body);
  } catch (e) {
    res.writeHead(404);
    res.end('not found');
  }
}).listen(PORT, () => console.log(`serving ${ROOT} at http://localhost:${PORT}`));
