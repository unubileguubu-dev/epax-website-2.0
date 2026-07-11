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
    '.mobile-menu-content .epax-shop-link{width:100%;padding:16px 0;border-radius:0;font-size:16px}';
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
    var buttons = scope.querySelectorAll('app-button button');
    for (var i = 0; i < buttons.length; i++) {
      var label = buttons[i].textContent.trim();
      if (label === 'Blog' || label === 'Блог') {
        var host = buttons[i].closest('app-button');
        if (host && host.parentNode) host.parentNode.insertBefore(makeLink(id), host.nextSibling);
        return;
      }
    }
  }

  function ensure() {
    var header = document.querySelector('app-header header');
    if (!header) return;
    place(header, 'epaxShopNav');
    var mobile = header.querySelector('.mobile-menu-content');
    if (mobile) place(mobile, 'epaxShopNavM');
  }

  var pending = 0;
  var observer = new MutationObserver(function () {
    clearTimeout(pending);
    pending = setTimeout(ensure, 100);
  });

  function start() {
    ensure();
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
