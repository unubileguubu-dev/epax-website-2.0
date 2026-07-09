// Usage: node screenshot.mjs <url> [label] [--scroll=N]
// Saves auto-incremented screenshots to "./temporary screenshots/".
// Captures the top viewport plus (with --scroll) additional viewports down the page,
// so scroll-triggered animations get a chance to fire before each capture.
import { createRequire } from 'node:module';
import { mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire('/private/tmp/claude-501/-Users-uubiinoo-Desktop-antigravity-google/2c8d6cbe-3fe5-4607-bf26-297571236ac3/scratchpad/');
const puppeteer = require('puppeteer-core');

const url = process.argv[2] || 'http://localhost:3000';
const label = (process.argv[3] && !process.argv[3].startsWith('--')) ? process.argv[3] : '';
const scrollArg = process.argv.find(a => a.startsWith('--scroll='));
const scrolls = scrollArg ? parseInt(scrollArg.split('=')[1], 10) : 0;

const DIR = join(new URL('.', import.meta.url).pathname, 'temporary screenshots');
mkdirSync(DIR, { recursive: true });

function nextIndex() {
  const nums = readdirSync(DIR)
    .map(f => /^screenshot-(\d+)/.exec(f))
    .filter(Boolean)
    .map(m => parseInt(m[1], 10));
  return nums.length ? Math.max(...nums) + 1 : 1;
}

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
await new Promise(r => setTimeout(r, 3500)); // let intro animations settle

let n = nextIndex();
const save = async suffix => {
  const name = `screenshot-${n++}${label ? '-' + label : ''}${suffix}.png`;
  await page.screenshot({ path: join(DIR, name) });
  console.log(join('temporary screenshots', name));
};

await save('');
for (let i = 1; i <= scrolls; i++) {
  await page.evaluate(h => window.scrollTo({ top: h, behavior: 'instant' }), 850 * i);
  await new Promise(r => setTimeout(r, 1800));
  await save(`-s${i}`);
}

await browser.close();
