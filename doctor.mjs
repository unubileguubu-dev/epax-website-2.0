// EPAX site doctor — run before every push:  node doctor.mjs  [--live]
// Static integrity checks for the whole deploy surface; encodes every class
// of bug this site has actually shipped: stale fingerprint references,
// duplicate SEO tags, snapshot drift, version-string drift, dead widgets in
// snapshots, missing security headers. --live adds browser smoke tests
// (requires `node serve.mjs` running).
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';

const ROOT = dirname(new URL(import.meta.url).pathname);
let fails = 0, warns = 0;
const fail = m => { console.log('  ✗ ' + m); fails++; };
const warn = m => { console.log('  ⚠ ' + m); warns++; };
const ok = m => console.log('  ✓ ' + m);
const read = f => readFileSync(join(ROOT, f), 'utf8');

/* ---------- 1. shell + fingerprinted assets ---------- */
console.log('shell & assets');
const shell = read('shell.html');
const bundle = (shell.match(/src="(main-[A-Z0-9]+\.js)"/) || [])[1];
const styles = (shell.match(/href="(styles-[A-Z0-9]+\.css)"/) || [])[1];
if (!bundle || !existsSync(join(ROOT, bundle))) fail(`shell bundle ref broken: ${bundle}`);
else ok(`bundle ${bundle}`);
if (!styles || !existsSync(join(ROOT, styles))) fail(`shell styles ref broken: ${styles}`);
else ok(`styles ${styles}`);
const stray = readdirSync(ROOT).filter(f => /^(main-|styles-)/.test(f) && f !== bundle && f !== styles);
if (stray.length) fail('orphan fingerprinted files (old names still on disk): ' + stray.join(', '));
if (!/name="robots" content="noindex"/.test(shell)) fail('shell.html lost its noindex (orphan routes would get indexed)');
else ok('shell noindex present');

/* helper script versions must agree everywhere */
const vs = new Set([...shell.matchAll(/epax-[a-z0-9-]+\.js\?v=(\d+)/g)].map(m => m[1]));
const shopHtml = read('shop/index.html');
[...shopHtml.matchAll(/epax-[a-z0-9-]+\.js\?v=(\d+)/g)].forEach(m => vs.add(m[1]));
if (vs.size > 1) fail('helper ?v= drift across shell/shop: ' + [...vs].join(','));
else ok(`helper scripts at v=${[...vs][0]}`);

/* ---------- 2. helper scripts parse ---------- */
console.log('helper scripts');
for (const f of ['epax-i18n.js', 'epax-team.js', 'epax-shop-nav.js', 'epax-audit-form.js', 'serve.mjs', 'prerender.mjs']) {
  try { execSync(`node --check "${join(ROOT, f)}"`, { stdio: 'pipe' }); ok(f); }
  catch (e) { fail(`${f} syntax: ${String(e.stderr).slice(0, 100)}`); }
}

/* ---------- 3. snapshots ---------- */
console.log('snapshots');
const routes = ['', 'pricing', 'blog', 'use-cases', 'product', 'download',
  'product/epax-2', 'product/epax-cli', 'product/epax-sdk', 'product/epax-ide',
  'use-cases/fullstack', 'use-cases/frontend', 'use-cases/enterprise', 'use-cases/science', 'use-cases/marketer',
  ...['ger-camp-bookings', 'google-maps-guide', 'hotel-occupancy-mongolia', 'google-io-2026', 'introducing-epax-2', 'epax-built-an-os', 'introducing-epax-cli',
      'introducing-epax-sdk', 'epax-for-enterprises', 'ai-3-5-flash-in-epax', 'introducing-epax'].map(s => 'blog/' + s)];
let snapProblems = 0;
const shellMtime = statSync(join(ROOT, 'shell.html')).mtimeMs;
let oldestSnap = Infinity;
for (const lang of ['', 'en/']) {
  for (const r of routes) {
    const p = join(ROOT, lang + r, 'index.html');
    if (!existsSync(p)) { fail(`missing snapshot: ${lang}${r || '/'}`); snapProblems++; continue; }
    oldestSnap = Math.min(oldestSnap, statSync(p).mtimeMs);
    const h = readFileSync(p, 'utf8');
    const c = {
      canonical: (h.match(/rel="canonical"/g) || []).length,
      hrefMn: (h.match(/hreflang="mn"/g) || []).length,
      blogLd: (h.match(/"BlogPosting"/g) || []).length,
      noindex: /content="noindex"/.test(h),
      bundleRef: h.includes(bundle) && h.includes(styles),
      handoff: (h.match(/epax-lang','en'/g) || []).length,
      // GSAP runtime styles serialized onto root tags ship the page pre-locked
      // (touch-action:pan-x) and kill ALL mobile scrolling — 2026-07-16 incident
      rootLock: /<(?:html|body)[^>]*style="[^"]*touch-action/.test(h),
    };
    const bad = [];
    if (c.canonical !== 1) bad.push(`canonical×${c.canonical}`);
    if (c.hrefMn !== 1) bad.push(`hreflang-mn×${c.hrefMn}`);
    if (c.blogLd > 1) bad.push(`BlogPosting×${c.blogLd}`);
    if (r.startsWith('blog/') && c.blogLd !== 1) bad.push('missing BlogPosting');
    if (c.noindex) bad.push('noindex leaked into snapshot');
    if (!c.bundleRef) bad.push('references a different bundle than shell');
    if (lang && c.handoff !== 1) bad.push(`en handoff×${c.handoff}`);
    if (!lang && c.handoff !== 0) bad.push('en handoff leaked into a root (MN) snapshot');
    if (c.rootLock) bad.push('GSAP scroll-lock styles on <html>/<body> (mobile cannot scroll)');
    if (bad.length) { fail(`${lang}${r || '/'}: ${bad.join(', ')}`); snapProblems++; }
  }
}
if (!snapProblems) ok(`all ${routes.length * 2} snapshots consistent with ${bundle}`);
if (oldestSnap < shellMtime) warn('shell.html is newer than some snapshots — re-run prerender.mjs');

/* ---------- 4. sitemap ---------- */
console.log('sitemap');
const sm = read('sitemap.xml');
const locs = (sm.match(/<loc>/g) || []).length;
if (locs !== routes.length * 2 + 4) fail(`sitemap has ${locs} URLs, expected ${routes.length * 2 + 4}`);
else ok(`${locs} URLs`);

/* ---------- 5. vercel config ---------- */
console.log('vercel.json');
const vc = JSON.parse(read('vercel.json'));
if (vc.rewrites?.[0]?.destination !== '/shell.html') fail('SPA fallback rewrite missing or wrong');
else ok('SPA fallback -> /shell.html');
const hdrJson = JSON.stringify(vc.headers || []);
for (const h of ['immutable', 'nosniff', 'X-Frame-Options', 'Referrer-Policy', 'Permissions-Policy']) {
  if (!hdrJson.includes(h)) fail(`header config missing: ${h}`);
}
if (hdrJson.includes('immutable') && hdrJson.includes('nosniff')) ok('cache + security headers configured');

/* ---------- 6. i18n dictionary ---------- */
console.log('i18n');
const i18n = read('epax-i18n.js');
const keys = [...i18n.matchAll(/^\s{4}(['"])((?:\\.|(?!\1).)*)\1:/gm)].map(m => m[2]);
const dupes = keys.filter((k, i) => keys.indexOf(k) !== i);
if (dupes.length) fail('duplicate dictionary keys: ' + [...new Set(dupes)].slice(0, 5).join(' | '));
else ok(`${keys.length} dictionary keys, no duplicates`);

/* ---------- 7. known placeholders ---------- */
console.log('placeholders');
if (read(bundle).includes('+976 9999 9999')) warn('placeholder phone +976 9999 9999 still live (waiting on real number)');
if (!existsSync(join(ROOT, 'assets/image/team'))) warn('team photos folder missing');

/* ---------- 8. optional live smoke tests ---------- */
if (process.argv.includes('--live')) {
  console.log('live smoke tests');
  const { createRequire } = await import('node:module');
  const puppeteer = createRequire(join(ROOT, 'noop.js'))('puppeteer-core');
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
  const checks = [
    ['/', p => !!p.querySelector('#epaxTeam') && !!p.querySelector('#epaxShopNav') && !!p.querySelector('#epaxLangTg'), 'team+shop+lang widgets'],
    ['/download', p => !!p.querySelector('#epaxAuditForm form'), 'audit form'],
    ['/en/pricing', p => location.pathname === '/pricing' && localStorage.getItem('epax-lang') === 'en', 'en handoff'],
  ];
  for (const [route, fn, label] of checks) {
    const page = await browser.newPage();
    try {
      await page.goto('http://localhost:3000' + route, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 4000));
      const pass = await page.evaluate(`(${fn.toString()})(document)`);
      pass ? ok(`${route} ${label}`) : fail(`${route} ${label}`);
    } catch (e) { fail(`${route}: ${String(e).slice(0, 80)} (is serve.mjs running?)`); }
    await page.close();
  }
  await browser.close();
}

console.log(`\n${fails ? '✗ ' + fails + ' failure(s)' : '✓ healthy'}${warns ? `, ${warns} warning(s)` : ''}`);
process.exit(fails ? 1 : 0);
