# EPAX — "Reports" loop · handoff

**What this is:** the replacement visual for the placeholder video in the **Reports & invoicing** block
(currently `/assets/video/landing/an-ai-ide-core.mp4` — the LoginButton.tsx / React clip that ships with the theme).

**File:** `epax_report_loop.html` — a self-contained animation. ~10 KB. No build step, no dependencies.
Open it in any browser to preview.

---

## What it shows

A monthly report for a sample client (`UB Restaurant`, fictional) assembling itself, in Mongolian:

| Row | Value |
|---|---|
| Google Maps дээрх үзэлт | 12,480 |
| Рестораны вэб сайтын хандалт | 1,840 |
| Ширээний захиалгууд | 214 |
| Зочдын үнэлгээ | 4.2 → 4.6 |
| *(faded)* Хариулсан хүсэлтүүд | 96 · дундаж 41 мин |
| *(faded)* Сошиал сувгуудын хандалт | 38,000 |

Closing line: **EPAX-ийн хийсэн ажил болон танд авчирсан үр дүн — бүгд энд бий**

The report is in **Mongolian on purpose**, sitting on the English site — it demonstrates the
"Bilingual by design" promise directly: guests see English, the owner sees Mongolian.

**Note:** e-invoicing is deliberately *not* shown. The block is titled "Reports & invoicing",
so the video covers the reports half only. That is intentional for now.

---

## The loop

11 seconds, **seamless** — the last frame is identical to the first, so it can run `loop` with no visible cut.

```
0.0 – 0.9   blank page, gold cursor blinking
0.7 – 1.9   header builds
2.0 – 5.9   metric rows enter one by one, numbers count up
5.8 – 6.6   gold hairline draws
6.6 – 8.0   camera pulls back — the panel resolves into an A4-proportioned page
8.0 – 9.4   closing line
9.6 – 10.4  camera pushes back in; the page empties as it approaches
10.4 – 11.0 blank page, gold cursor  → loops to 0.0
```

---

## How to embed

**Option A — iframe (fastest, zero refactor):**

```html
<iframe src="/assets/embeds/epax-report-loop.html"
        style="width:100%;aspect-ratio:16/9;border:0;display:block"
        loading="lazy" scrolling="no" title=""></iframe>
```

**Option B — port into the component.** The markup and the JS timeline are plain and self-explanatory;
lift them into the existing block and drop the `#frame` wrapper. Preferred if you want it to inherit
the site's font stack.

Either way, delete the `<video>` element the theme ships with.

---

## Design tokens used

```
--navy   #0A2342   text, rules
--gold   #C8A24A   accent — appears exactly 3 times: cursor, the 4.2→4.6 arrow, the hairline
--paper  #FFFFFF   section background
--panel  #F4F5F7   the report surface
```

Type: **Inter** (300/400/500/600) for text and figures, **JetBrains Mono** (400/500) for the eyebrow
and the tagline. Both loaded from Google Fonts and both cover Mongolian Cyrillic (ө, ү).
If the site already ships its own sans, swap `Inter` for it — that is the only change needed.

---

## Two things to check on your side

1. **The right-hand crop.** The panel bleeds past the right edge, matching how the block is laid out today.
   Everything that matters lives in the **left 66%** of the frame. The preview has a **Safe zone** button
   that shades the part that gets cut. Please confirm the real crop on desktop and mobile — if it differs
   from 66%, tell us the number and we re-centre.

2. **The logo mark.** The star in the closing frame is redrawn by hand from a description, so it is
   almost certainly not pixel-correct. **Please send the real logo as SVG** and it gets swapped in.

---

## Preview controls

`Pause` · `Restart` · `Safe zone` — these are preview-only. Strip the `.bar` div and the `#safe` div
before shipping; they are not part of the loop.

---

## Still open

- Numbers are **plausible placeholders**, not real data — EPAX has no clients yet. If any of them look
  inflated for a UB restaurant, say so and they change in one line.
- No mp4 version exists. If one is needed for social later, the loop gets re-cut to 9:16 with a hard ending.
