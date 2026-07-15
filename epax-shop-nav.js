/* Adds a "Shop" link to the main-site header (desktop nav + mobile menu).
   The shop is a static sub-site at /shop/, outside the Angular router, so the
   link is a plain anchor that triggers a full page load. Re-ensured across
   SPA route changes by a MutationObserver; epax-i18n.js translates the label. */
(function () {
  'use strict';

  var css = document.createElement('style');
  css.textContent =
    '.epax-shop-link{font-family:"Google Sans Text","Google Sans",sans-serif;font-size:14px;line-height:1;color:#202124;' +
      'padding:10px 14px;border-radius:999px;display:inline-flex;align-items:center;' +
      'transition:background-color .25s cubic-bezier(.2,.6,.2,1),color .25s cubic-bezier(.2,.6,.2,1)}' +
    '.epax-shop-link:hover{background:rgba(32,33,36,.06)}' +
    '.epax-shop-link:focus-visible{outline:2px solid #042C53;outline-offset:2px}' +
    '.epax-shop-link:active{background:rgba(32,33,36,.12)}' +
    '.mobile-menu-content .epax-shop-link{width:100%;padding:24px;border-radius:0;font-size:28px;font-weight:450;' +
      'color:#121317;border-top:1px solid #e6eaf0;line-height:1.2}';
  document.head.appendChild(css);

  function makeLink(id) {
    var a = document.createElement('a');
    a.id = id;
    a.href = '/shop/';
    a.className = 'epax-shop-link';
    a.textContent = 'Shop';
    return a;
  }

  function place(scope, id) {
    if (document.getElementById(id)) return;
    /* desktop nav wraps buttons in <app-button>; the mobile menu uses bare
       buttons — anchor on whichever element actually hosts the Blog item */
    var buttons = scope.querySelectorAll('button, a');
    for (var i = 0; i < buttons.length; i++) {
      var label = buttons[i].textContent.trim();
      if (label === 'Blog' || label === 'Блог') {
        var host = buttons[i].closest('app-button') || buttons[i];
        if (host && host.parentNode) host.parentNode.insertBefore(makeLink(id), host.nextSibling);
        return;
      }
    }
  }

  function makeFaq(id) {
    var a = makeLink(id);
    a.href = '/faq/';
    a.textContent = 'FAQ';
    return a;
  }

  function placeFaq(shopId, faqId) {
    if (document.getElementById(faqId)) return;
    var shop = document.getElementById(shopId);
    if (shop && shop.parentNode) shop.parentNode.insertBefore(makeFaq(faqId), shop.nextSibling);
  }

  function ensureFooterLegal() {
    if (document.getElementById('epaxLegalRow')) return;
    var host = document.querySelector('app-footer .footer-google-links .grid-row') ||
               document.querySelector('app-footer footer');
    if (!host) return;
    var span = document.createElement('span');
    span.id = 'epaxLegalRow';
    span.style.cssText = 'display:inline-flex;gap:18px;align-items:center';
    [['/terms/', 'Terms'], ['/privacy/', 'Privacy']].forEach(function (l) {
      var a = document.createElement('a');
      a.href = l[0]; a.textContent = l[1];
      a.className = 'epax-shop-link';
      a.style.cssText = 'font-size:13px;padding:6px 10px';
      span.appendChild(a);
    });
    host.appendChild(span);
  }

  function ensure() {
    ensureFooterLegal();
    var header = document.querySelector('app-header header');
    if (!header) return;
    place(header, 'epaxShopNav');
    placeFaq('epaxShopNav', 'epaxFaqNav');
    var mobile = header.querySelector('.mobile-menu-content');
    if (mobile) { place(mobile, 'epaxShopNavM'); placeFaq('epaxShopNavM', 'epaxFaqNavM'); }
  }

  var pending = 0;
  var observer = new MutationObserver(function () {
    clearTimeout(pending);
    pending = setTimeout(ensure, 100);
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
