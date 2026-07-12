/* EPAX team section — injected on the homepage before the bottom CTA.
   The site is a compiled Angular bundle, so this section lives outside it,
   re-ensured by a MutationObserver across SPA route changes. All copy is
   English in the DOM; epax-i18n.js swaps it to Mongolian in MN mode. */
(function () {
  'use strict';

  var ID = 'epaxTeam';

  var css = document.createElement('style');
  css.textContent =
    '#epaxTeam{padding-block:96px;border-top:1px solid rgba(33,34,38,.08)}' +
    '#epaxTeam .team-inner{max-width:1296px;margin-inline:auto;padding-inline:24px}' +
    '#epaxTeam h2{font-family:"Google Sans Flex","Google Sans",sans-serif;font-size:clamp(28px,3.2vw,44px);font-weight:400;letter-spacing:-.02em;line-height:1.15;color:#202124;margin:0 0 12px}' +
    '#epaxTeam .team-intro{font-family:"Google Sans Text","Google Sans",sans-serif;font-size:16px;line-height:1.7;color:#5f6368;max-width:560px;margin:0 0 48px}' +
    '#epaxTeam .team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}' +
    '#epaxTeam .team-card{background:#f8f9fc;border-radius:28px;overflow:hidden;transition:transform .35s cubic-bezier(.2,.6,.2,1),box-shadow .35s cubic-bezier(.2,.6,.2,1)}' +
    '#epaxTeam .team-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(4,44,83,.10),0 2px 8px rgba(4,44,83,.06)}' +
    '#epaxTeam .team-photo{aspect-ratio:4/4.6;width:100%;overflow:hidden;position:relative}' +
    '#epaxTeam .team-photo img{width:100%;height:100%;object-fit:cover;object-position:center 20%;display:block}' +
    '#epaxTeam .team-photo--placeholder{display:flex;align-items:center;justify-content:center;background:radial-gradient(120% 120% at 20% 0%,#0b3d6e 0%,#042C53 55%,#02182e 100%)}' +
    '#epaxTeam .team-photo--placeholder span{font-family:"Google Sans Flex","Google Sans",sans-serif;font-size:64px;letter-spacing:.04em;color:#C9A84C}' +
    '#epaxTeam .team-copy{padding:24px 24px 28px}' +
    '#epaxTeam .team-role{font-family:"Google Sans Text","Google Sans",sans-serif;font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:#042C53;margin:0 0 6px}' +
    '#epaxTeam .team-name{font-family:"Google Sans Flex","Google Sans",sans-serif;font-size:22px;font-weight:500;letter-spacing:-.01em;color:#202124;margin:0 0 10px}' +
    '#epaxTeam .team-bio{font-family:"Google Sans Text","Google Sans",sans-serif;font-size:14px;line-height:1.7;color:#5f6368;margin:0}' +
    '#epaxTeam .team-note{margin-top:24px;background:#f8f9fc;border-radius:28px;padding:24px 28px}' +
    '#epaxTeam .team-note p{font-family:"Google Sans Text","Google Sans",sans-serif;font-size:14px;line-height:1.7;color:#5f6368;margin:0}' +
    '@media (max-width:1024px){#epaxTeam{padding-block:72px}#epaxTeam .team-grid{grid-template-columns:1fr;max-width:520px}}';
  document.head.appendChild(css);

  var HTML =
    '<div class="team-inner">' +
      '<h2>The people behind EPAX</h2>' +
      '<p class="team-intro">A small bilingual team in Ulaanbaatar — with serious technical firepower behind it.</p>' +
      '<div class="team-grid">' +
        '<div class="team-card">' +
          '<div class="team-photo"><img src="/assets/image/team/unubileg-batjargal.jpg" alt="Unubileg Batjargal"></div>' +
          '<div class="team-copy">' +
            '<p class="team-role">Founder</p>' +
            '<h3 class="team-name">Unubileg Batjargal</h3>' +
            '<p class="team-bio">Unubileg holds a bachelor’s degree from Aspira University in Croatia and is now studying business in Los Angeles. He is building EPAX on one conviction: Mongolian hospitality deserves to be found by the world.</p>' +
          '</div>' +
        '</div>' +
        '<div class="team-card">' +
          '<div class="team-photo"><img src="/assets/image/team/enkhzul-lkhagvajav.jpg" alt="Enkhzul Lkhagvajav"></div>' +
          '<div class="team-copy">' +
            '<p class="team-role">Co-founder</p>' +
            '<h3 class="team-name">Enkhzul Lkhagvajav</h3>' +
            '<p class="team-bio">Enkhzul graduated with a red-diploma degree in architecture in St. Petersburg and is now studying design in Italy. She is the eye behind EPAX — every profile, photo set, and page a guest sees passes through her hands.</p>' +
          '</div>' +
        '</div>' +
        '<div class="team-card">' +
          '<div class="team-photo team-photo--placeholder"><span>AG</span></div>' +
          '<div class="team-copy">' +
            '<p class="team-role">Technical &amp; Logistics Advisor</p>' +
            '<h3 class="team-name">Amgalan Ganbat</h3>' +
            '<p class="team-bio">Amgalan is the CEO of an AI technology company in Tokyo, an EPAX shareholder, and an active advisor on our logistics and technical architecture. His standard runs through everything we do: let AI carry the busywork, let people carry the hospitality.</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="team-note"><p>Behind them, an AI and IT engineering team keeps every EPAX system running — the monitoring, the automation, and the tools our editors rely on every day.</p></div>' +
    '</div>';

  function ensure() {
    var onHome = location.pathname === '/' || location.pathname === '/index.html';
    var existing = document.getElementById('epaxTeam');
    if (!onHome) { if (existing) existing.remove(); return; }
    if (existing) return;
    var anchor = document.querySelector('download-section');
    if (!anchor || !anchor.parentNode) return;
    var el = document.createElement('section');
    el.id = 'epaxTeam';
    el.innerHTML = HTML;
    anchor.parentNode.insertBefore(el, anchor);
  }

  var pending = 0;
  var observer = new MutationObserver(function () {
    /* if the SPA bootstrap just wiped our section, restore it synchronously —
       waiting out a debounce here causes visible layout shift (CLS) */
    if ((location.pathname === '/' || location.pathname === '/index.html') && !document.getElementById(ID)) { ensure(); return; }
    clearTimeout(pending);
    pending = setTimeout(ensure, 80);
  });

  function start() {
    ensure();
    observer.observe(document.body, { childList: true, subtree: true });
    /* debounce starves under continuous mutations (see epax-i18n.js note) —
       a periodic idempotent ensure guarantees injection regardless */
    setInterval(ensure, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
