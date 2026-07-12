# EPAX Website — Handoff Guide (moving to Opus 4.8 or any other model)

Written 2026-07-12 by Claude Fable 5 at the end of the build. Two parts:
**A)** how to set up and continue working, **B)** the future-work roadmap.
The technical rulebook lives in `MAINTENANCE.md` — this file is about *continuity*.

---

## A. Setup

### A1. If you keep using Claude Code on this same Mac and folder (easiest)

Nothing to set up. Open Claude Code in `~/Desktop/antigravity.google` with any model:

- `CLAUDE.md` loads automatically and points the model at `MAINTENANCE.md`.
- The project memory (in `~/.claude/projects/-Users-uubiinoo-Desktop-antigravity-google/memory/`)
  is keyed to this folder path, not to the model — Opus 4.8 inherits everything
  Fable 5 learned, including your pending to-dos.
- First message to give any new model, verbatim:

  > Read MAINTENANCE.md and HANDOFF.md first. Start `node serve.mjs`, then run
  > `node doctor.mjs --live` and confirm it is green before changing anything.
  > Verify all changes on BOTH desktop (1440px) and mobile (390px) viewports.

### A2. If you move to a new machine

```bash
git clone https://github.com/unubileguubu-dev/epax-website-2.0.git
cd epax-website-2.0
npm install puppeteer-core axe-core --no-save   # screenshot/audit tooling
gh auth login                                    # for pushing
node serve.mjs &                                 # dev server -> localhost:3000
node doctor.mjs --live                           # must be green
```

Requirements: Node 22+, Google Chrome installed (scripts expect
`/Applications/Google Chrome.app/...` on macOS — on another OS, update the
`executablePath` in `screenshot.mjs`, `prerender.mjs`, `doctor.mjs`).
The Claude memory folder does NOT transfer to a new machine — that's fine;
`MAINTENANCE.md` + this file are the durable brain. (Optionally copy the memory
folder from the old Mac to keep session color.)

### A3. Deploys

Push to `main` → Vercel auto-deploys to https://www.epax.mn in ~1 minute.
No secrets, no build step, no environment variables. The Vercel project is
connected under your account; domain epax.mn (apex 308s to www).

### A4. The golden workflow (memorize this)

```
edit → (if bundle/css changed: fingerprint-rename + update shell.html)
     → node prerender.mjs → node doctor.mjs --live → commit → push → spot-check phone
```

Any model that follows this cannot silently break the site: the doctor blocks
every failure class we actually shipped during development.

---

## B. What needs work in the future

### B1. Blocked on Unubileg (do these first — they complete the lead funnel)

| # | Task | Why it matters |
|---|---|---|
| 1 | **Working lead inbox.** epax.mn has NO email service (no MX records) — hello@epax.mn is a dead letterbox. Either set up mail hosting (Zoho free / Google Workspace) or change the endpoint in `epax-audit-form.js` to a real inbox. Then submit the form once and click the formsubmit.co activation link that arrives. | Audit requests currently only reach the mailto fallback |
| 2 | **Real phone number.** Replace `+976 9999 9999` (bundle ×4 + JSON-LD in shell.html + MAINTENANCE notes). Bundle edit ⇒ fingerprint-rename ⇒ prerender ⇒ push. The doctor warns until this is done. | Prospects will dial the fake number |
| 3 | **Enable Vercel Web Analytics** (dashboard → project → Analytics → Enable). Snippet + custom events (`audit_request_*`, `js_error`) already deployed. | Currently blind to traffic and conversions |
| 4 | **Google Search Console**: add property `epax.mn`, verify, submit `sitemap.xml` (48 URLs). | Makes the whole prerender/SEO investment start paying |
| 5 | **Push the CI workflow.** `.github/workflows/doctor.yml` exists locally but the git token lacks `workflow` scope. Run `gh auth refresh -h github.com -s workflow`, then commit+push it. | Doctor runs on GitHub for every future push |
| 6 | Facebook page handle (if one exists) → add a Messenger deep-link button next to Instagram on the audit page. Confirm @epax.ub is a Business/Creator account (ig.me links require it). | Mongolians do business in Messenger |

### B2. Content & credibility (high value, no blockers)

- **Mongolian-keyword blog posts.** MN pages are now indexable — write 2–3 posts
  targeting what owners actually search ("зочид буудлын дүүргэлт", "гадаад жуулчин
  татах", "Google Maps бүртгэл"). Five unused slugs exist in the bundle whitelist:
  `google-io-2026-feature-deep-dive`, `changes-to-epax-plans`,
  `nano-banana-pro-in-epax`, `ai-3-flash-in-epax`, `ai-3-1-pro-in-epax`.
  Follow MAINTENANCE.md §6.
- **Amgalan Ganbat**: photo for the team section (currently an AG monogram) and
  his company name for the five blog mentions.
- **Real numbers**: the two case-study posts use illustrative figures with an
  honest caveat — swap in real client data when permission exists; add a
  testimonial/social-proof strip to the homepage.
- **Legal pages**: `/terms` is orphaned English Antigravity boilerplate. Write real
  EPAX terms + privacy (EN/MN), link them in the footer. Needed before running ads.

### B3. Technical debt (known, deliberate, documented)

- Legacy orphan pages (`/releases`, `/changelog`, `/support`, `/press`, `/terms`)
  still exist in the bundle — unlinked and noindexed. Cosmetic; purge someday.
- `epax business website.html` (source business doc) is in the public repo/site.
  Harmless overlap, but consider removing from the deploy.
- Flaky `offsetLeft` console error (0–2 per load) — pre-existing, harmless,
  documented; don't chase it.
- MNT rate is hard-baked at 1$=3,650₮ across the i18n dict. If the rate moves
  materially, it's a find-replace across dict values (keep USD at $10 multiples).
- Videos are H.264 only; AV1/WebM variants could halve them again (low priority).

### B4. The long-term question

This site is a string-surgery fork of a compiled Angular bundle. It works, it's
fast, and it's now well-guarded — but it can never be *comfortably* extended
(every content edit is bundle surgery). When EPAX outgrows it (real CMS needs,
online payments for the shop — QPay for Mongolia, client dashboards), the right
move is a rebuild on a modern framework. The migration is well prepared:
**every page's final HTML already exists as prerendered snapshots** (a perfect
visual/content spec), all copy is in `epax-i18n.js` + `assets/blog-posts/`, and
`MAINTENANCE.md` maps where everything lives. Budget roughly a week of model
time for a faithful rebuild — but there is no urgency; the current backbone is
solid.

---

*Фэйбл 5-аас Опус 4.8-д: сайтыг сайн харж ханд. Баяртай!* 🖖
