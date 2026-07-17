# EPAX Website — Maintenance Handbook

**Read this before changing anything.** (Setup for a new model/machine and the future-work roadmap: see `HANDOFF.md`.) This file is the durable memory of how this
site works, written for whichever human or AI model maintains it next.
Production: **https://epax.mn** — Vercel, auto-deploys from GitHub
`unubileguubu-dev/epax-website-2.0`, branch `main`. Every push goes live in ~1 minute.

---

## 1. What this site actually is

A "save page" clone of a compiled Angular SPA (originally antigravity.google),
rebranded into EPAX — a real Mongolian agency that gets hotels, restaurants, and
touring companies found by foreign tourists. There is **no build system and no
source code**: the app is one minified bundle edited by careful string surgery.

| File / dir | What it is |
|---|---|
| `main-<HASH>.js` | The entire compiled Angular app **and all page copy** (pricing, nav, services, use-cases data live inside as JS object literals) |
| `styles-<HASH>.css` | Global stylesheet + our appended overrides (logo swap, hidden sections, a11y fixes) |
| `shell.html` | **Source of truth** for the HTML shell: script tags, meta, analytics, error beacon. Serves as SPA fallback for unknown routes (noindex) |
| `index.html`, `pricing/`, `blog/…`, `mn/…` etc. | **Generated** pre-rendered snapshots — never edit by hand, always regenerate |
| `epax-i18n.js` | EN↔MN translation layer: exact-match dictionary over DOM text nodes + MutationObserver. All Mongolian lives here |
| `epax-team.js`, `epax-shop-nav.js`, `epax-audit-form.js` | DOM injectors for the team section, Shop nav link, and audit-request form |
| `assets/blog-posts/*.md` | Blog articles (frontmatter + markdown, fetched client-side; slugs must stay in the bundle's whitelist) |
| `shop/index.html` | Standalone static merch page (self-contained, SVG product renders generated in inline JS) |
| `prerender.mjs` | Regenerates all 46 snapshots + sitemap. See workflow below |
| `doctor.mjs` | Pre-push integrity gate. Run it. Trust it |
| `serve.mjs` | Local dev server (`node serve.mjs` → localhost:3000) with SPA fallback + directory indexes |

## 2. The three iron rules

1. **Fingerprint on every change.** If you touch `main-*.js` or `styles-*.css`,
   rename the file to its new hash (`md5 -q file | cut -c1-8`, uppercase) and update
   `shell.html`. If you touch a helper script (`epax-*.js`), bump its `?v=` in
   `shell.html` **and** `shop/index.html`. Skipping this means returning visitors
   (especially mobile Safari) keep the stale version and "see no updates".
2. **Regenerate after every change.** `node serve.mjs &` then `node prerender.mjs`,
   commit the regenerated snapshots + sitemap. Snapshots bake in asset names; stale
   snapshots reference deleted files. (prerender normalizes refs and is idempotent,
   but it needs to *run*.)
3. **`node doctor.mjs --live` must be green before every push.** It catches every
   bug class this site has actually shipped. Static checks alone: `node doctor.mjs`.

**Always verify changes at BOTH 1440px and 390px (mobile) viewports.** The mobile
header/menu DOM is different, and the site's worst historical bug was mobile-only.

## 3. How to edit content (bundle surgery)

Copy lives in the bundle as object literals (`v7`=pricing, `Ele`/`_7`=nav,
`TV`=/product page, `mH`=service detail pages, `o7`=who-we-serve details,
`ru`=homepage, `a7`=blog page, `EV`=footer). Pattern that has worked ~40 times:

```js
// write a script that does exact-match, assert-count-1 replacements:
const old = 'description:"Exact current string"';
assert(src.split(old).length - 1 === 1);
src = src.replace(old, 'description:"New string"');
```

Never regex-replace blind, never edit the minified file in an editor. After the
edit: fingerprint-rename → update shell.html → prerender → doctor → push.

**Every new user-visible EN string needs an MN entry in `epax-i18n.js`** (see §4).

## 4. The Mongolian layer — rules

- Exact-match on rendered text: the dict key must equal the DOM text after
  whitespace collapse. Curly quotes (’ “ ”) must match exactly; smartypants is OFF.
- Blocks that get translated must not contain inline links/bold — translation
  replaces the whole container's textContent and would destroy inline markup.
- Attributes (placeholder, aria-label, title) are **not** translated — only text
  nodes. Use visible `<label>`s, not placeholders.
- Prices: MN shows tugrik at the fixed rate **1 USD = 3,650₮**, baked as literal
  strings ('$200/month' → 'сард 730,000₮'). A price change = bundle edit + dict
  edit, both sides. Keep USD at multiples of $10 so MNT stays clean.
- Typed headlines translate via the `window.__epaxTypedMN` hook (types Mongolian
  natively). New typed text needs its dict entry before it can type in MN.

## 5. DOM injector pattern (team / shop-nav / audit-form)

All injectors follow the same hardened shape — copy it for new widgets:
idempotent `ensure()` keyed on an element id · re-run by a MutationObserver
(debounced 80–100ms) · **plus a 1s `setInterval` fallback** (a mutation storm once
starved the debounce on mobile) · synchronous re-inject when the SPA bootstrap
wipes the widget (avoids layout shift). Never gate on `offsetParent === null` for
`position:fixed` elements — that check is always true and caused an infinite
mutation loop. Widgets with event listeners are stripped from snapshots by
prerender and re-created at runtime; pure-markup widgets (team, shop link) persist.

## 6. Blog

New post: pick an unused slug from the bundle's `BLOG_POST_SLUGS` whitelist (or
patch the whitelist), write `assets/blog-posts/<slug>.md` (frontmatter: slug,
categories, author, date, title, articleImage), add the card to `a7` and
`latestBlogs` in the bundle, add MN dict entries for every paragraph/heading
(generate them from the md file so keys can't drift), add the route to
`prerender.mjs` + `doctor.mjs` lists, regenerate.

## 7. Leads, analytics, contact

- Audit form (`/download`) posts to formsubmit.co → `hello@epax.mn`, falls back to
  a prefilled mailto draft. **⚠ epax.mn has NO MX records** — until email hosting
  exists (or the endpoint is repointed to a real inbox in `epax-audit-form.js`),
  submissions only reach the fallback. First real submission triggers a
  formsubmit.co activation email that must be clicked once.
- Vercel Web Analytics snippet is deployed; it records nothing until Analytics is
  enabled in the Vercel dashboard. Custom events: `audit_request_submit`,
  `audit_request_success`, `js_error`, `js_rejection`.
- **⚠ The phone number `+976 9999 9999` is a placeholder** (bundle ×4 + JSON-LD).
  Swap it everywhere the moment the real number exists.

## 8. Known quirks & past incidents (don't relearn these)

- Vercel's bot protection challenges rapid headless crawls — audit against
  `localhost:3000`, not production.
- **THE MOBILE NO-SCROLL INCIDENT (2026-07-16), real root cause:** prerender
  snapshots serialized GSAP's runtime scroll-lock styles onto the root tags
  (`<html style="touch-action:pan-x …"><body style="height:…;touch-action:pan-x">`).
  Angular re-renders body *contents* on boot but never resets root attributes,
  so every snapshot-served page shipped pre-locked: desktop wheel worked, touch
  was completely dead. Shipped in the first prerender commit (dc1a221) and went
  unnoticed for days because `doctor --live` never touch-scrolled. Fixed by
  stripping root `style=""` in prerender's `normalizeAssets()`; doctor now fails
  any snapshot with `touch-action` on a root tag. Debug method that found it:
  CDP `Input.synthesizeScrollGesture` (NOT hand-rolled touch dispatches — those
  fail even on healthy builds), with antigravity.google as a working control
  and `git worktree` bisect.
- Also from that hunt: avoid CSS `filter` on a playing `<video>` (iOS software-
  compositing risk). The hero film's gold grade is baked into
  `hero_video_gold.mp4` via ffmpeg `hue=h=190:s=0.85` instead.
- Snapshots inherit their `<head>` from the *previous* snapshot generation, not
  from shell.html (the crawl is served old snapshots). Bundle/styles/`?v=` refs
  and text-font `<link>`s are normalized by `normalizeAssets()` in prerender.mjs
  (2026-07-16, Heritage retheme incident: new font links silently missing from
  all 50 snapshots). Any OTHER head change to shell.html needs its own
  normalization rule there — grep the regenerated index.html to confirm it took.
- `hero_video.mp4` / `epax-loop.mp4` are already optimally encoded — recompressing
  makes them **larger**. Dash-Gradient/logo-blue were compressed 2026-07-11.
- The Google Symbols icon font renders ligature names as text for a beat before
  the font loads; only use icon names already present in the bundle data.
- serve.mjs gzip-caches by mtime; SPA-fallback responses stat `shell.html` — keep
  that if you touch the server.
- A flaky `offsetLeft` console error (0–2 per load) predates everything and is
  harmless; don't chase it as a regression.
- Legacy Antigravity orphan pages (/releases, /changelog, /terms, /support,
  /press) still exist in the bundle: unlinked, noindexed via shell fallback,
  partly untranslated. Deliberate.
- CLS measurements: sum ≠ metric. Use windowed CLS; the boot re-render shifts
  ~0.08 per window, which passes.

## 9. Release checklist

```bash
node serve.mjs &          # 1. local server
# 2. make changes (rules §2–§4)
node prerender.mjs        # 3. regenerate snapshots + sitemap
node doctor.mjs --live    # 4. must be green
git add -A && git commit && git push   # 5. Vercel deploys automatically
# 6. spot-check https://epax.mn (desktop + a real phone)
```
