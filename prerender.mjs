// Pre-renders every customer-facing route to static HTML — EN at its own
// path, MN under /mn/<route> — so search engines and link previews see real
// content instead of an empty SPA shell. Also regenerates sitemap.xml with
// hreflang pairs.
//
// RUN THIS (and commit the output) after ANY change to the bundle, styles,
// helper scripts, or content:   node serve.mjs &   node prerender.mjs
// Snapshots reference the fingerprinted bundle by name — stale snapshots
// point at deleted files and break the page. The script verifies this.
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer-core');

const ROOT = dirname(new URL(import.meta.url).pathname);
const BASE = 'http://localhost:3000';
const ORIGIN = 'https://www.epax.mn';

const BLOG_SLUGS = ['ger-camp-bookings', 'google-maps-guide', 'hotel-occupancy-mongolia', 'google-io-2026', 'introducing-epax-2', 'epax-built-an-os', 'introducing-epax-cli',
  'introducing-epax-sdk', 'epax-for-enterprises', 'ai-3-5-flash-in-epax', 'introducing-epax'];

const ROUTES = ['/', '/pricing', '/blog', '/use-cases', '/product', '/download',
  '/product/epax-2', '/product/epax-cli', '/product/epax-sdk', '/product/epax-ide',
  '/use-cases/fullstack', '/use-cases/frontend', '/use-cases/enterprise', '/use-cases/science', '/use-cases/marketer',
  ...BLOG_SLUGS.map(s => '/blog/' + s)];

/* per-route meta descriptions; blog posts get theirs from the article lede */
const DESC = {
  '/': [
    'EPAX gets Mongolian hotels, restaurants, and tour operators found by foreign tourists. English presence, social media, guest communications — handled.',
    'EPAX — Монголын зочид буудал, ресторан, тур компаниудыг гадаад жуулчдад олддог болгоно. Англи хэлт орон зай, сошиал медиа, зочидтой харилцах — бүгдийг хариуцна.'],
  '/pricing': [
    'Simple monthly pricing for hotels, restaurants, and touring companies — Starter $200, Growth $400, Full Ops $600. Month-to-month, backed by the EPAX guarantee.',
    'Зочид буудал, ресторан, тур компанид зориулсан энгийн сарын үнэ — Стартер 730,000₮, Өсөлт 1,460,000₮, Бүрэн үйл ажиллагаа 2,190,000₮. Сар бүрийн сунгалттай, EPAX баталгаатай.'],
  '/blog': [
    'Field notes from EPAX — case studies, playbooks, and honest takes on AI in Mongolian hospitality.',
    'EPAX блог — кейс судалгаа, ажлын арга, Монголын зочлох үйлчилгээн дэх AI-ийн тухай шударга байр суурь.'],
  '/use-cases': [
    'Who EPAX serves: hotels & resorts, restaurants & cafés, touring companies, ger camps, and guest houses across Mongolia.',
    'EPAX хэнд зориулагдсан бэ: зочид буудал, ресторан, тур компани, гэр бааз, гэст хаус — Монгол даяар.'],
  '/product': [
    'EPAX services: platform presence, English social media, guest communications, and reports & invoicing — one digital back office for your business.',
    'EPAX үйлчилгээ: платформ дээрх байр суурь, англи хэлт сошиал медиа, зочидтой харилцах, тайлан ба нэхэмжлэх — таны дижитал ар алба.'],
  '/download': [
    'Request your free audit — see exactly what foreign tourists see when they search for your business. Ready in 24 hours, in English and Mongolian.',
    'Үнэгүй аудитаа хүсээрэй — гадаад жуулчид таны бизнесийг хайхад яг юу хардагийг хараарай. 24 цагт, англи монгол хэлээр бэлэн.'],
  '/product/epax-2': [
    'Platform presence by EPAX — Google Maps, TripAdvisor, and Booking.com set up, verified, and kept fresh in English.',
    'EPAX платформ дээрх байр суурь — Google Maps, TripAdvisor, Booking.com дээр англи хэлээр бүрэн тохируулж, байнга шинэлэг байлгана.'],
  '/product/epax-cli': [
    'English social media by EPAX — weekly content written for international guests that wins bookings, not just likes.',
    'EPAX англи хэлт сошиал медиа — олон улсын зочдод зориулсан, захиалга авчирдаг долоо хоног тутмын контент.'],
  '/product/epax-sdk': [
    'Guest communications by EPAX — every DM, review, and inquiry answered in fluent English within two business hours.',
    'EPAX зочидтой харилцах үйлчилгээ — мессеж, сэтгэгдэл, лавлагаа бүрд ажлын хоёр цагийн дотор англи хэлээр хариулна.'],
  '/product/epax-ide': [
    'Reports & invoicing by EPAX — a clear monthly growth report plus compliant e-invoice processing.',
    'EPAX тайлан ба нэхэмжлэх — ойлгомжтой сарын өсөлтийн тайлан, и-баримт боловсруулалт.'],
  '/use-cases/fullstack': [
    'EPAX for hotels & resorts — from 30% occupancy to fully booked through visibility, fast replies, and managed reviews.',
    'Зочид буудал, резортод зориулсан EPAX — танигдах байдал, шуурхай хариулт, сэтгэгдлийн менежментээр дүүргэлтээ өсгөөрэй.'],
  '/use-cases/frontend': [
    'EPAX for touring companies — precise English itineraries, fast quoting, and an off-season pause built for Mongolian seasonality.',
    'Тур компанид зориулсан EPAX — нарийвчилсан англи маршрут, шуурхай үнийн санал, улирлын завсарлага.'],
  '/use-cases/enterprise': [
    'EPAX for restaurants & cafés — get on the tourist map in English with photos, reviews, and a readable menu.',
    'Ресторан, кафед зориулсан EPAX — зураг, сэтгэгдэл, ойлгомжтой цэсээр жуулчдын газрын зурагт орно.'],
  '/use-cases/science': [
    'EPAX for ger camps — the English presence that gets your gers found and booked all season.',
    'Гэр баазад зориулсан EPAX — гэрүүдийг тань улирлын турш олддог, захиалгатай байлгах англи хэлт орон зай.'],
  '/use-cases/marketer': [
    'EPAX for guest houses — fresh profiles, current photos, and instant replies for small teams.',
    'Гэст хаусад зориулсан EPAX — жижиг багт зориулсан шинэлэг профайл, шуурхай хариулт.'],
};
const MN_BLOG_DESC = 'EPAX блог — Монголын зочлох үйлчилгээн дэх AI ба бодит туршлага.';
const BLOG_META = {};
for (const slug of BLOG_SLUGS) {
  const md = readFileSync(join(ROOT, 'assets/blog-posts', slug + '.md'), 'utf8');
  const lede = md.split(/^---$/m)[2].trim().split(/\n\s*\n/)[0].replace(/\s+/g, ' ').slice(0, 155);
  DESC['/blog/' + slug] = [lede, MN_BLOG_DESC];
  BLOG_META[slug] = {
    date: (md.match(/^date: (\S+)/m) || [])[1] || '',
    image: (md.match(/^articleImage: (\S+)/m) || [])[1] || '',
  };
}

/* sanity: the shell must reference assets that exist on disk */
const shell = readFileSync(join(ROOT, 'shell.html'), 'utf8');
for (const m of shell.matchAll(/(?:src|href)="(main-[A-Z0-9]+\.js|styles-[A-Z0-9]+\.css)"/g)) {
  if (!existsSync(join(ROOT, m[1]))) { console.error('MISSING ASSET in shell.html:', m[1]); process.exit(1); }
}
const SHELL_BUNDLE = (shell.match(/src="(main-[A-Z0-9]+\.js)"/) || [])[1];
const SHELL_STYLES = (shell.match(/href="(styles-[A-Z0-9]+\.css)"/) || [])[1];
const SHELL_V = (shell.match(/epax-i18n\.js\?v=(\d+)/) || [])[1];

/* the crawl may be served from snapshots of an OLDER shell — rewrite any
   stale fingerprint/version references to the current ones */
const SHELL_FONT_LINKS = [...shell.matchAll(/<link[^>]*fonts\.googleapis\.com\/css2\?family=(?!Google\+Symbols)[^>]*>/g)]
  .map(m => m[0]).join('\n  ');
function normalizeAssets(html) {
  html = html.replace(/main-[A-Z0-9]+\.js/g, SHELL_BUNDLE);
  html = html.replace(/styles-[A-Z0-9]+\.css/g, SHELL_STYLES);
  html = html.replace(/(epax-[a-z0-9-]+\.js\?v=)\d+/g, `$1${SHELL_V}`);
  /* text-font links must match the shell (Symbols untouched): drop whatever
     css2 family links + inline @font-face blocks the old snapshot carried,
     then re-insert the shell's links after the fonts.gstatic preconnect */
  html = html.replace(/\s*<link[^>]*fonts\.googleapis\.com\/css2\?family=(?!Google\+Symbols)[^>]*>/g, '');
  html = html.replace(/\s*<style>@font-face\{font-family:'Google Sans Flex'[\s\S]*?<\/style>/g, '');
  if (SHELL_FONT_LINKS && !html.includes(SHELL_FONT_LINKS.split('\n')[0])) {
    html = html.replace(/(<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com"[^>]*>)/,
      `$1\n  ${SHELL_FONT_LINKS}`);
  }
  return html;
}

const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });

function ogImage(route) {
  if (route.startsWith('/blog')) return 'sitecard-blog.png';
  if (route === '/pricing') return 'sitecard-plans-and-pricing.png';
  if (route.startsWith('/use-cases')) return 'sitecard-use-cases.png';
  return 'sitecard-default.png';
}

function headSurgery(html, route, lang, h1) {
  const [en, mn] = DESC[route] || DESC['/'];
  const desc = (lang === 'mn' ? mn : en).replace(/"/g, '&quot;');
  const enUrl = ORIGIN + (route === '/' ? '/' : route);
  const mnUrl = ORIGIN + '/mn' + (route === '/' ? '' : route);
  const self = lang === 'mn' ? mnUrl : enUrl;

  // idempotency: the crawl may be served from a previous run's snapshots,
  // so strip everything a prior headSurgery injected before re-injecting
  html = html.replace(/\s*<meta name="robots" content="noindex">/, '');
  html = html.replace(/<link rel="alternate" hreflang="[^"]*" href="[^"]*">/g, '');
  html = html.replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema\.org","@type":"BlogPosting"[\s\S]*?<\/script>/g, '');
  html = html.replace(/<script>try\{localStorage\.setItem\('epax-lang'[\s\S]*?<\/script>/g, '');
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${desc}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${desc}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${desc}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${self}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${self}">` +
    `<link rel="alternate" hreflang="en" href="${enUrl}">` +
    `<link rel="alternate" hreflang="mn" href="${mnUrl}">` +
    `<link rel="alternate" hreflang="x-default" href="${enUrl}">`);
  const img = `${ORIGIN}/assets/image/sitecards/${ogImage(route)}`;
  html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${img}">`);
  html = html.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${img}">`);
  const slug = route.startsWith('/blog/') ? route.slice(6) : null;
  if (slug && BLOG_META[slug]) {
    const meta = BLOG_META[slug];
    const ld = {
      '@context': 'https://schema.org', '@type': 'BlogPosting',
      headline: h1 || slug, description: lang === 'mn' ? mn : en,
      datePublished: meta.date, dateModified: meta.date,
      image: meta.image ? `${ORIGIN}/assets/image/${meta.image}` : img,
      inLanguage: lang, mainEntityOfPage: self,
      author: { '@type': 'Organization', name: 'EPAX', url: ORIGIN },
      publisher: { '@type': 'Organization', name: 'EPAX', url: ORIGIN },
    };
    html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(ld)}</script></head>`);
  }
  if (lang === 'mn') {
    // hand off to the SPA: persist the language and restore the EN route
    // BEFORE any app script runs, so the Angular router never sees /mn/*
    const handoff = `<script>try{localStorage.setItem('epax-lang','mn')}catch(e){};` +
      `history.replaceState(null,'',${JSON.stringify(route)});</script>`;
    html = html.replace('<script', handoff + '<script');
  }
  return html;
}

for (const lang of ['en', 'mn']) {
  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    if (lang === 'mn') await page.evaluateOnNewDocument(() => localStorage.setItem('epax-lang', 'mn'));
    else await page.evaluateOnNewDocument(() => localStorage.removeItem('epax-lang'));
    await page.goto(BASE + route, { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 5000));
    let { html, h1 } = await page.evaluate(() => {
      // strip injected widgets whose event listeners can't serialize —
      // their runtime injectors re-create them on load
      document.getElementById('epaxLangTg')?.remove();
      document.getElementById('epaxAuditForm')?.remove();
      return {
        html: '<!doctype html>' + document.documentElement.outerHTML,
        h1: (document.querySelector('h1')?.textContent || '').replace(/\s+/g, ' ').trim(),
      };
    });
    html = normalizeAssets(headSurgery(html, route, lang, h1));
    const rel = (lang === 'mn' ? 'mn' + (route === '/' ? '' : route) : route === '/' ? '.' : route.slice(1));
    const dir = join(ROOT, rel);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
    console.log(`${lang} ${route} -> ${rel}/index.html (${Math.round(html.length / 1024)}KB)`);
    await page.close();
  }
}
await browser.close();

/* sitemap with hreflang pairs */
const today = new Date().toISOString().slice(0, 10);
const urls = [];
for (const route of ROUTES) {
  const enUrl = ORIGIN + (route === '/' ? '/' : route);
  const mnUrl = ORIGIN + '/mn' + (route === '/' ? '' : route);
  const alts = `\n    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>` +
    `\n    <xhtml:link rel="alternate" hreflang="mn" href="${mnUrl}"/>`;
  urls.push(`  <url>\n    <loc>${enUrl}</loc>${alts}\n    <lastmod>${today}</lastmod>\n  </url>`);
  urls.push(`  <url>\n    <loc>${mnUrl}</loc>${alts}\n    <lastmod>${today}</lastmod>\n  </url>`);
}
urls.push(`  <url>\n    <loc>${ORIGIN}/shop/</loc>\n    <lastmod>${today}</lastmod>\n  </url>`);
urls.push(`  <url>\n    <loc>${ORIGIN}/faq/</loc>\n    <lastmod>${today}</lastmod>\n  </url>`);
for (const p of ['terms', 'privacy']) urls.push(`  <url>\n    <loc>${ORIGIN}/${p}/</loc>\n    <lastmod>${today}</lastmod>\n  </url>`);
writeFileSync(join(ROOT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);
console.log(`sitemap.xml: ${urls.length} URLs`);
