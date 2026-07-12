/* Audit-request form for /download — the conversion endpoint of every CTA.
   Injected into the compiled Angular page (same pattern as epax-team.js):
   idempotent ensure() re-run by MutationObserver + a slow interval, verified
   on mobile. Submits via formsubmit.co (form-to-email, no backend needed);
   falls back to a prefilled mailto: draft if the request fails. All labels
   are text nodes so epax-i18n.js translates them in MN mode. */
(function () {
  'use strict';

  var ID = 'epaxAuditForm';

  var ENDPOINT = 'https://formsubmit.co/ajax/hello@epax.mn';
  var IG = 'https://ig.me/m/epax.ub';

  var css = document.createElement('style');
  css.textContent =
    '#epaxAuditForm{max-width:600px;margin:8px auto 56px;padding:0 20px}' +
    '#epaxAuditForm .af-card{background:#fff;border:1px solid rgba(33,34,38,.12);border-radius:24px;' +
      'padding:32px 28px;box-shadow:0 1px 2px rgba(4,44,83,.05),0 10px 30px rgba(4,44,83,.07)}' +
    '#epaxAuditForm label{display:block;font:500 13px/1.4 "Google Sans Text","Google Sans",sans-serif;' +
      'color:#5f6368;margin:18px 0 6px;letter-spacing:.02em}' +
    '#epaxAuditForm label:first-child{margin-top:0}' +
    '#epaxAuditForm input{width:100%;box-sizing:border-box;font:400 16px/1.4 "Google Sans Text","Google Sans",sans-serif;' +
      'color:#202124;background:#f8f9fc;border:1px solid rgba(33,34,38,.16);border-radius:12px;padding:13px 14px;' +
      'transition:border-color .2s cubic-bezier(.2,.6,.2,1),background-color .2s cubic-bezier(.2,.6,.2,1)}' +
    '#epaxAuditForm input:hover{border-color:rgba(33,34,38,.3)}' +
    '#epaxAuditForm input:focus{outline:none;border-color:#042C53;background:#fff}' +
    '#epaxAuditForm input:focus-visible{outline:2px solid #042C53;outline-offset:1px}' +
    '#epaxAuditForm .af-btn{width:100%;margin-top:24px;font:500 16px/1 "Google Sans Text","Google Sans",sans-serif;' +
      'color:#fff;background:#202124;border:none;border-radius:999px;padding:16px 24px;cursor:pointer;' +
      'transition:background-color .25s cubic-bezier(.2,.6,.2,1),transform .15s cubic-bezier(.2,.6,.2,1)}' +
    '#epaxAuditForm .af-btn:hover{background:#042C53}' +
    '#epaxAuditForm .af-btn:focus-visible{outline:2px solid #042C53;outline-offset:3px}' +
    '#epaxAuditForm .af-btn:active{transform:scale(.985)}' +
    '#epaxAuditForm .af-btn[disabled]{background:#9aa0a6;cursor:default;transform:none}' +
    '#epaxAuditForm .af-hint{text-align:center;font:400 13px/1.7 "Google Sans Text","Google Sans",sans-serif;' +
      'color:#5f6368;margin:14px 0 0}' +
    '#epaxAuditForm .af-ig{display:block;text-align:center;font:500 14px/1.4 "Google Sans Text","Google Sans",sans-serif;' +
      'color:#042C53;margin-top:18px;text-decoration:none;padding:10px;border-radius:999px;' +
      'transition:background-color .25s cubic-bezier(.2,.6,.2,1)}' +
    '#epaxAuditForm .af-ig:hover{background:rgba(4,44,83,.06)}' +
    '#epaxAuditForm .af-ig:focus-visible{outline:2px solid #042C53;outline-offset:2px}' +
    '#epaxAuditForm .af-ig:active{background:rgba(4,44,83,.12)}' +
    '#epaxAuditForm .af-msg{font:400 14px/1.6 "Google Sans Text","Google Sans",sans-serif;margin:14px 0 0;display:none}' +
    '#epaxAuditForm .af-msg--err{color:#b3261e}' +
    '#epaxAuditForm .af-success{text-align:center;padding:28px 6px;display:none}' +
    '#epaxAuditForm .af-success .af-check{width:52px;height:52px;border-radius:50%;background:#042C53;color:#fff;' +
      'display:inline-flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:16px}' +
    '#epaxAuditForm .af-success p{font:400 16px/1.7 "Google Sans Text","Google Sans",sans-serif;color:#202124;margin:0}';
  document.head.appendChild(css);

  function track(name) {
    try { window.va && window.va('event', { name: name }); } catch (e) {}
  }

  function build() {
    var wrap = document.createElement('div');
    wrap.id = 'epaxAuditForm';
    wrap.innerHTML =
      '<div class="af-card">' +
        '<form novalidate>' +
          '<label for="afName">Your name</label>' +
          '<input id="afName" name="name" type="text" autocomplete="name">' +
          '<label for="afBiz">Business or property name</label>' +
          '<input id="afBiz" name="business" type="text" autocomplete="organization">' +
          '<label for="afPhone">Phone number</label>' +
          '<input id="afPhone" name="phone" type="tel" autocomplete="tel">' +
          '<button class="af-btn" type="submit">Request my free audit</button>' +
          '<p class="af-msg af-msg--err"></p>' +
        '</form>' +
        '<div class="af-success"><span class="af-check">✓</span>' +
          '<p>Received! Your audit will be ready within 24 hours — we will contact you.</p></div>' +
        '<p class="af-hint">Free · Ready in 24 hours · No commitment</p>' +
        '<a class="af-ig" href="' + IG + '" target="_blank" rel="noopener">Prefer chat? Message us on Instagram</a>' +
      '</div>';

    var form = wrap.querySelector('form');
    var btn = wrap.querySelector('.af-btn');
    var err = wrap.querySelector('.af-msg');
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var name = wrap.querySelector('#afName').value.trim();
      var biz = wrap.querySelector('#afBiz').value.trim();
      var phone = wrap.querySelector('#afPhone').value.trim();
      err.style.display = 'none';
      if (!name || !biz || !phone) {
        err.textContent = 'Please fill in all three fields.';
        err.style.display = 'block';
        return;
      }
      btn.disabled = true;
      btn.textContent = 'Sending…';
      track('audit_request_submit');
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: name, business: biz, phone: phone,
          _subject: 'New audit request — epax.mn',
          page: location.href, language: document.documentElement.lang || 'en'
        })
      }).then(function (r) {
        if (!r.ok) throw new Error('http ' + r.status);
        form.style.display = 'none';
        wrap.querySelector('.af-success').style.display = 'block';
        track('audit_request_success');
      }).catch(function () {
        /* fallback: open a prefilled email draft so the lead is never lost */
        btn.disabled = false;
        btn.textContent = 'Request my free audit';
        err.textContent = 'Could not send — opening your email app instead.';
        err.style.display = 'block';
        var body = 'Name: ' + name + '\nBusiness: ' + biz + '\nPhone: ' + phone;
        location.href = 'mailto:hello@epax.mn?subject=' +
          encodeURIComponent('Free audit request') + '&body=' + encodeURIComponent(body);
      });
    });
    return wrap;
  }

  function ensure() {
    var onAudit = location.pathname === '/download';
    var existing = document.getElementById('epaxAuditForm');
    if (!onAudit) { if (existing) existing.remove(); return; }
    if (existing) return;
    var anchor = document.querySelector('app-download .sections-wrapper');
    if (!anchor || !anchor.parentNode) return;
    anchor.parentNode.insertBefore(build(), anchor);
  }

  var pending = 0;
  var observer = new MutationObserver(function () {
    /* if the SPA bootstrap just wiped our section, restore it synchronously —
       waiting out a debounce here causes visible layout shift (CLS) */
    if ((location.pathname === '/download') && !document.getElementById(ID)) { ensure(); return; }
    clearTimeout(pending);
    pending = setTimeout(ensure, 80);
  });

  function start() {
    ensure();
    observer.observe(document.body, { childList: true, subtree: true });
    setInterval(ensure, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
