/* EPAX EN/MN language layer.
   The site is a compiled Angular bundle, so translation happens at the DOM level:
   an exact-match dictionary over text nodes, re-applied via MutationObserver so it
   survives route changes, re-renders, and the typing animations (a partially typed
   string doesn't match any key; the completed string does and gets swapped). */
(function () {
  'use strict';

  var MN = {
    /* ---- nav ---- */
    'Services': 'Үйлчилгээ',
    'Who We Serve': 'Хэнд зориулагдсан',
    'Pricing': 'Үнэ',
    'Blog': 'Блог',
    'Resources': 'Нэмэлт мэдээлэл',
    'Free Audit': 'Үнэгүй аудит',
    'See overview': 'Тойм үзэх',
    'Explore our services': 'Манай үйлчилгээтэй танилцаарай',
    'Built for hospitality in the tourist-first era': 'Жуулчны эрин үеийн зочлох үйлчилгээнд зориулав',
    'Everything you need to stay up-to-date and get help': 'Шинэ мэдээлэл авах, тусламж хүсэхэд хэрэгтэй бүхэн',
    'Documentation': 'Баримт бичиг',
    'Changelog': 'Өөрчлөлтийн түүх',
    'Support': 'Тусламж',
    'Press': 'Хэвлэл',
    'Releases': 'Хувилбарууд',

    /* ---- hero ---- */
    "Foreign tourists can't find you. We fix that.": 'Гадаад жуулчид таныг олж чадахгүй байна. Бид үүнийг засна.',
    'Get a Free Audit': 'Үнэгүй аудит авах',
    'Explore services': 'Үйлчилгээ үзэх',
    'Play intro': 'Танилцуулга',

    /* ---- typed statement ---- */
    "EPAX is Mongolia's digital back office for hotels, restaurants, and touring companies — built for the tourist-first era.":
      'EPAX бол Монголын зочид буудал, ресторан, тур компаниудын дижитал ар алба — жуулчны эрин үед зориулж бүтээгдсэн.',

    /* ---- services (inventory) ---- */
    'Platform presence': 'Платформ дээрх байр суурь',
    'Google Maps, TripAdvisor, and Booking.com — fully set up and optimized in English. When 809,000 foreign tourists search for a place to stay, eat, or explore, your business is what they find first.':
      'Google Maps, TripAdvisor, Booking.com — бүгдийг англи хэл дээр бүрэн тохируулж, оновчилно. 809,000 гадаад жуулчин хоноглох, хооллох, аялах газраа хайхад таны бизнес хамгийн түрүүнд олдоно.',
    'English social media': 'Англи хэлт сошиал медиа',
    'Weekly content on Instagram and Facebook, written in English for international guests — not just local likes. Food, steppe, culture, atmosphere. The kind of content that makes travelers say “I have to go here.”':
      'Instagram, Facebook дээр долоо хоног бүр англи хэлээр контент — зөвхөн дотоодын лайк биш, олон улсын зочдод зориулагдсан. Хоол, тал нутаг, соёл, уур амьсгал. Аялагчдыг «Би энд заавал очно» гэж хэлүүлдэг контент.',
    'Guest communications': 'Зочидтой харилцах',
    'Every DM, review, and inquiry answered in fluent English — fast. No lead left waiting, no tourist left without a reply, no booking lost to silence. A bad review handled well becomes a trust signal.':
      'Бүх мессеж, сэтгэгдэл, лавлагаанд чөлөөтэй англи хэлээр — хурдан хариулна. Хүлээж суусан зочин ч, хариугүй үлдсэн жуулчин ч, чимээгүйгээс алдсан захиалга ч байхгүй. Сайн зохицуулсан муу сэтгэгдэл итгэлийн дохио болдог.',
    'Reports & invoicing': 'Тайлан ба нэхэмжлэх',
    'A clear monthly report on your visibility, inquiries, and growth — plus e-invoice processing, documented and clean. You always know exactly what EPAX did and what it earned you.':
      'Таны танигдах байдал, лавлагаа, өсөлтийн тухай ойлгомжтой сарын тайлан — мөн и-баримт боловсруулалт, бүгд баримтжуулсан, цэгцтэй. EPAX юу хийж, танд юу авчирсныг та үргэлж тодорхой мэднэ.',
    'Explore Product': 'Дэлгэрэнгүй үзэх',

    /* ---- who we serve (homepage) ---- */
    'Built for hospitality': 'Зочлох үйлчилгээнд зориулав',
    'for the tourist-first era': 'жуулчны эрин үед бүтээв',
    "EPAX is Mongolia's digital back office for hotels, restaurants, and touring companies — bilingual in Mongolian and English, priced from less than a part-time hire, month-to-month with no lock-in.":
      'EPAX бол Монголын зочид буудал, ресторан, тур компаниудын дижитал ар алба — монгол, англи хоёр хэлтэй, үнэ нь хагас цагийн нэг ажилтнаас ч хямдаас эхэлдэг, сар бүрийн сунгалттай, урт гэрээгээр хүлдэггүй.',
    'Hotels & Resorts': 'Зочид буудал ба резорт',
    "The average hotel in Mongolia runs at 30% occupancy. The gap to 60% isn't a product problem — it's a visibility problem. We fix it.":
      'Монголын зочид буудлын дундаж дүүргэлт ердөө 30%. 60% хүрэх зөрүү нь бүтээгдэхүүний биш — танигдах байдлын асуудал. Бид үүнийг шийднэ.',
    'Restaurants & Cafés': 'Ресторан ба кафе',
    "Foreign visitors choose where to eat on Google Maps and Instagram. If you're not there in English — photos, reviews, readable menu — they keep walking.":
      'Гадаад зочид хаана хооллохоо Google Maps, Instagram-аас шийддэг. Та тэнд англи хэлээр — зураг, сэтгэгдэл, ойлгомжтой цэстэй — байхгүй бол тэд цааш алхдаг.',
    'Touring Companies': 'Тур компаниуд',
    'Travelers book Mongolia 3–6 months ahead, online. No English presence and slow replies means they book a competitor.':
      'Аялагчид Монголын аяллаа 3–6 сарын өмнө онлайнаар захиалдаг. Англи хэлээр олдохгүй, хариулт удаан бол тэд өрсөлдөгчөөс захиалдаг.',
    'Watch case': 'Түүх үзэх',
    'View case': 'Түүх үзэх',

    /* ---- twin CTA band ---- */
    'Free · Done in 24 hours': 'Үнэгүй · 24 цагт бэлэн',
    'For your business': 'Танай бизнест',
    'The free audit — see what tourists see': 'Үнэгүй аудит — жуулчдын хардагийг хараарай',
    'Request Audit': 'Аудит хүсэх',
    'Zero risk': 'Эрсдэлгүй',
    'The EPAX guarantee': 'EPAX баталгаа',
    'Month one fails, month two is free': 'Эхний сар үр дүнгүй бол дараагийн сар үнэгүй',
    'How it works': 'Хэрхэн ажилладаг вэ',

    /* ---- client stories ---- */
    'Client stories': 'Харилцагчдын түүх',
    'View blog': 'Блог үзэх',
    'Read blog': 'Унших',
    'Product': 'Бүтээгдэхүүн',
    'Enterprise': 'Байгууллага',
    'EPAX at ITM Mongolia 2026': 'EPAX — ITM Mongolia 2026 үзэсгэлэнд',
    'Introducing the EPAX Growth plan': 'EPAX Өсөлт багцыг танилцуулж байна',
    'From invisible to fully booked': 'Үл харагдахаас бүрэн захиалгатай болтол',
    'English social media that wins bookings': 'Захиалга авчирдаг англи хэлт сошиал медиа',
    'Guest communications, handled': 'Зочидтой харилцах — бид хариуцна',
    'EPAX for touring companies': 'Тур компаниудад зориулсан EPAX',
    'Turning a 2-star review into 4 stars': '2 одтой сэтгэгдлийг 4 од болгосон нь',
    'Introducing EPAX': 'EPAX-ийг танилцуулж байна',
    'Changes to EPAX Plans': 'EPAX багцуудын өөрчлөлт',

    /* ---- bottom CTA ---- */
    'Get found. Get booked. Grow.': 'Олдоорой. Захиалга аваарай. Өсөөрэй.',

    /* ---- footer ---- */
    'Peace in every process': 'Үйл явц бүрд амар амгалан',
    'Docs': 'Баримт бичиг',
    'Ulaanbaatar, Mongolia': 'Улаанбаатар, Монгол',
    'Privacy': 'Нууцлалын бодлого',
    'Terms': 'Үйлчилгээний нөхцөл',
    'Manage cookies': 'Күүки тохиргоо',

    /* ---- pricing page ---- */
    'Choose the perfect plan for your journey': 'Танд тохирох багцаа сонгоорой',
    'EPAX is now available!': 'EPAX ажиллаж эхэллээ!',
    'Starter': 'Стартер',
    'Growth': 'Өсөлт',
    'Full Ops': 'Бүрэн үйл ажиллагаа',
    'Restaurants & Touring': 'Ресторан ба аялал',
    'Best value': 'Хамгийн ашигтай',
    'Full service': 'Бүрэн үйлчилгээ',
    'New!': 'Шинэ!',
    /* prices convert to MNT at 1$ = 3,650₮ when MN is selected */
    '$200/month': 'сард 730,000₮',
    '$400/month': 'сард 1,460,000₮',
    '$600/month': 'сард 2,190,000₮',
    'from $150/month': 'сард 547,500₮-аас',
    'Get found — your platforms set up, optimized, and kept fresh in English': 'Таныг олддог болгоно — платформуудыг тань англи хэлээр бүрэн тохируулж, байнга шинэлэг байлгана',
    'Everything a hotel needs to get found and booked by foreign tourists': 'Гадаад жуулчдад олдож, захиалга авахад зочид буудалд хэрэгтэй бүхэн',
    'Your complete digital back office — still less than one full-time hire': 'Таны бүрэн дижитал ар алба — бүтэн цагийн нэг ажилтнаас ч хямд',
    'Tailored plans for restaurants, cafés, and touring companies — month-to-month, no lock-in': 'Ресторан, кафе, тур компанид тохирсон багцууд — сар бүрийн сунгалттай, урт гэрээгүй',
    'Get started': 'Эхлэх',
    'Plan includes:': 'Багцад багтана:',
    'Everything in Starter and:': 'Стартер багцын бүх зүйл, дээр нь:',
    'Everything in Growth and:': 'Өсөлт багцын бүх зүйл, дээр нь:',
    'Now Available:': 'Одоо боломжтой:',
    '3-platform setup — Google Maps, TripAdvisor, Booking.com': '3 платформын тохиргоо — Google Maps, TripAdvisor, Booking.com',
    'Weekly English social content': 'Долоо хоног бүр англи хэлт сошиал контент',
    'Monthly report': 'Сарын тайлан',
    'Guest communication handled in English': 'Англи хэлээр зочидтой харилцана',
    'Review management': 'Сэтгэгдлийн менежмент',
    'Monthly growth report': 'Сарын өсөлтийн тайлан',
    'Save $250+/mo vs. an in-house English-speaking hire': 'Англи хэлтэй ажилтан авахаас сард 912,500₮+ хэмнэнэ',
    'E-invoice processing': 'И-баримт боловсруулалт',
    'Priority response': 'Тэргүүн ээлжийн хариу',
    'Dedicated account lead': 'Хариуцсан менежертэй',
    'Quarterly strategy session': 'Улирал бүр стратегийн уулзалт',
    'Restaurants from $150/month': 'Ресторан — сард 547,500₮-аас',
    'Touring companies from $300/month': 'Тур компани — сард 1,095,000₮-аас',
    'Off-season pause — pay only for months you operate': 'Улирлын завсарлага — зөвхөн ажиллаж буй саруудаа төлнө',
    'The EPAX guarantee: month one fails, month two is free': 'EPAX баталгаа: эхний сар үр дүнгүй бол дараагийн сар үнэгүй',

    /* ---- free audit page ---- */
    'Request your': 'Үнэгүй аудитаа',
    'free audit': 'хүсээрэй',
    'Request your free audit': 'Үнэгүй аудитаа<br>хүсээрэй',
    /* the typed heading's <br> leaves no whitespace between the split words */
    'Request yourfree audit': 'Үнэгүй аудитаа<br>хүсээрэй',
    'View previous releases': 'Өмнөх хувилбарууд',
    'The free audit': 'Үнэгүй аудит',
    'Call us': 'Бидэн рүү залгаарай',
    'Visit us': 'Манайд зочлоорой',
    'Free audit, delivered in 24 hours, in English and Mongolian. We show you exactly what foreign tourists see when they search for you — no pitch, no commitment. We limit new clients to 5 per quarter.':
      'Үнэгүй аудитыг 24 цагийн дотор англи, монгол хэлээр хүргэнэ. Гадаад жуулчид таныг хайхад яг юу хардагийг бид харуулна — ямар ч тулгасан борлуулалт, амлалт шаардахгүй. Шинэ харилцагчдыг улирал бүр 5-аар хязгаарладаг.',
    'Prefer to talk? Call us in English or Mongolian — every inquiry gets a reply within 24 hours, and month one comes with the EPAX guarantee: if it fails, month two is free.':
      'Ярилцахыг илүүд үздэг үү? Англи эсвэл монгол хэлээр залгаарай — лавлагаа бүрд 24 цагийн дотор хариулна. Эхний сар EPAX баталгаатай: үр дүнгүй бол дараагийн сар үнэгүй.',
    'EPAX is based in Ulaanbaatar, Mongolia. Find us on Instagram at @epax.ub, or drop by — we work with hotels, restaurants, and touring companies across the country.':
      'EPAX Улаанбаатар хотод байрладаг. Instagram дээр @epax.ub хаягаар олоорой — бид улс даяар зочид буудал, ресторан, тур компаниудтай хамтран ажилладаг.',

    /* ---- use cases page ---- */
    'Explore use case': 'Дэлгэрэнгүй үзэх',
    'Ger Camps': 'Гэр баазууд',
    'Guest Houses': 'Гэст хаус',
    'Foreign visitors choose where to eat on Google Maps and Instagram. EPAX puts you there in English — photos, reviews, and a readable menu — so tourists stop walking past.':
      'Гадаад зочид хаана хооллохоо Google Maps, Instagram-аас шийддэг. EPAX таныг тэнд англи хэлээр — зураг, сэтгэгдэл, ойлгомжтой цэстэй — байршуулснаар жуулчид хажуугаар тань өнгөрөхөө болино.',
    'Travelers book Mongolia 3–6 months ahead, online. EPAX builds your English presence and answers every inquiry fast, so they book you — not a competitor.':
      'Аялагчид Монголын аяллаа 3–6 сарын өмнө онлайнаар захиалдаг. EPAX таны англи хэлт орон зайг бүрдүүлж, лавлагаа бүрд шуурхай хариулснаар тэд өрсөлдөгчөөс биш танаас захиална.',
    "The average hotel in Mongolia runs at 30% occupancy. The gap to 60% isn't a product problem — it's a visibility problem. EPAX fixes it.":
      'Монголын зочид буудлын дундаж дүүргэлт ердөө 30%. 60% хүрэх зөрүү нь бүтээгдэхүүний биш — танигдах байдлын асуудал. EPAX үүнийг шийднэ.',
    'Your camp is unforgettable — but invisible online. EPAX builds the English presence that gets your gers found and booked all season.':
      'Таны бааз мартагдашгүй — гэвч онлайнд үл харагдана. EPAX англи хэлт орон зайг тань бүрдүүлж, гэрүүдийг тань улирлын турш захиалгатай байлгана.',
    'Guests pick where to stay from reviews and photos. EPAX keeps your profiles fresh, your photos current, and your replies instant.':
      'Зочид хаана буудаллахаа сэтгэгдэл, зургаас шийддэг. EPAX таны профайлыг шинэлэг, зургийг сүүлийн үеийн, хариултыг шуурхай байлгана.',
    'Get Found. Get Seated.': 'Олдоорой. Зочдоо угтаарай.',
    'Every Inquiry Answered, Every Booking Won': 'Лавлагаа бүрд хариулж, захиалга бүрийг авна',
    'From Invisible to Fully Booked': 'Үл харагдахаас бүрэн захиалгатай болтол',
    'The Steppe, Seen by the World': 'Дэлхийд харагдах тал нутаг',
    'Small Team, Full Presence': 'Жижиг баг, бүрэн дүүрэн орон зай',
    'We keep your Google Maps, TripAdvisor, and Instagram presence fresh in English, answer inquiries fast, and turn good meals into great reviews.':
      'Бид таны Google Maps, TripAdvisor, Instagram дахь орон зайг англи хэлээр шинэлэг байлгаж, лавлагаанд шуурхай хариулж, сайхан хоолыг гайхалтай сэтгэгдэл болгодог.',
    'One missed booking is $3,000–$6,000 gone. We handle platform presence, inquiry responses, and reviews so your calendar fills itself.':
      'Нэг алдсан захиалга гэдэг 10.9–21.9 сая ₮ алга болно гэсэн үг. Платформ дээрх байр суурь, лавлагааны хариулт, сэтгэгдлийг бид хариуцаж, таны хуанли өөрөө дүүрнэ.',
    'Optimized profiles on Google Maps, TripAdvisor, and Booking.com, weekly English content, and guest communications handled — priced from less than a part-time hire.':
      'Google Maps, TripAdvisor, Booking.com дээрх оновчилсон профайл, долоо хоног бүрийн англи контент, зочидтой харилцах бүх ажил — хагас цагийн нэг ажилтнаас ч хямд үнээс эхэлдэг.',
    'Photos updated weekly, reviews answered in English, and booking inquiries handled within hours — while you focus on your guests.':
      'Долоо хоног бүр шинэчлэгдэх зураг, англи хэлээр хариулах сэтгэгдэл, хэдхэн цагт шийдэгдэх захиалгын лавлагаа — та зочдодоо л анхаарлаа хандуулаарай.',
    'A complete digital back office — platform presence, social media, and guest communications — month-to-month with no lock-in.':
      'Бүрэн дижитал ар алба — платформ дээрх байр суурь, сошиал медиа, зочидтой харилцах — сар бүрийн сунгалттай, урт гэрээгүй.'
  };

  var EN = {};
  Object.keys(MN).forEach(function (k) {
    /* first EN key wins when two variants share one MN string */
    if (!(MN[k] in EN)) EN[MN[k]] = k;
    /* looked-up keys come from textContent, which flattens <br> to whitespace */
    var flat = MN[k].replace(/<br>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!(flat in EN)) EN[flat] = k;
  });

  var TITLES = {
    en: 'EPAX — Peace in Every Process',
    mn: 'EPAX — Үйл явц бүрд амар амгалан'
  };

  var lang = 'en';
  try { if (localStorage.getItem('epax-lang') === 'mn') lang = 'mn'; } catch (e) {}

  function translateNode(node, dict) {
    var raw = node.nodeValue;
    var key = raw.trim();
    if (!key) return;
    var out = dict[key];
    if (out && out !== key) node.nodeValue = raw.replace(key, out);
  }

  function translatePage(dict) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentElement;
        if (!p || p.closest('script,style,#epaxLangTg')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = walker.nextNode())) translateNode(n, dict);
    /* typed headlines and scroll-scrub paragraphs are split into per-word wrappers,
       so the sentence never exists as one text node — match containers' combined text */
    document.querySelectorAll('.typed-content, .visually-hidden, p, h1, h2, h3, h4, h5, h6, li').forEach(function (el) {
      if (el.querySelector('#epaxLangTg')) return;
      var key = el.textContent.replace(/\s+/g, ' ').trim();
      var out = dict[key];
      if (!out || out === key) return;
      if (out.indexOf('<br>') !== -1) el.innerHTML = out;
      else el.textContent = out;
    });
    document.title = TITLES[lang];
    document.documentElement.lang = lang;
  }

  /* re-apply MN whenever Angular renders new content (debounced; MN→MN is a no-op,
     so our own replacements don't re-trigger work) */
  var pending = 0;
  var observer = new MutationObserver(function () {
    clearTimeout(pending);
    pending = setTimeout(function () {
      ensureToggle();
      if (lang === 'mn') translatePage(MN);
    }, 60);
  });

  function setLang(l) {
    lang = l;
    try { localStorage.setItem('epax-lang', l); } catch (e) {}
    translatePage(l === 'mn' ? MN : EN);
    var tg = document.getElementById('epaxLangTg');
    if (tg) {
      tg.querySelectorAll('button').forEach(function (b) {
        b.classList.toggle('on', b.dataset.lang === l);
      });
    }
  }

  /* ---- toggle UI ---- */
  var css = document.createElement('style');
  css.textContent =
    '#epaxLangTg{display:inline-flex;align-items:center;gap:2px;border:1px solid rgba(33,34,38,.16);border-radius:999px;padding:3px;background:#fff;margin-right:12px;flex:none}' +
    '#epaxLangTg button{font-family:"Google Sans Flex","Google Sans",sans-serif;font-size:12px;font-weight:500;letter-spacing:.05em;line-height:1;padding:7px 12px;border-radius:999px;border:none;background:transparent;color:#5f6368;cursor:pointer;transition:background .25s cubic-bezier(.2,.6,.2,1),color .25s cubic-bezier(.2,.6,.2,1)}' +
    '#epaxLangTg button.on{background:#202124;color:#fff}' +
    '#epaxLangTg button:hover:not(.on){color:#202124;background:rgba(32,33,36,.06)}' +
    '#epaxLangTg button:focus-visible{outline:2px solid #042C53;outline-offset:2px}' +
    '#epaxLangTg button:active:not(.on){transform:scale(.96)}' +
    '#epaxLangTg.epax-fixed{position:fixed;right:20px;bottom:20px;z-index:9999;box-shadow:0 4px 18px rgba(4,44,83,.18),0 1px 4px rgba(4,44,83,.12)}' +
    '@media (max-width:1024px){#epaxLangTg.epax-in-header{position:fixed;right:16px;bottom:16px;margin:0;box-shadow:0 4px 18px rgba(4,44,83,.18),0 1px 4px rgba(4,44,83,.12);z-index:9999}}';
  document.head.appendChild(css);

  function buildToggle() {
    var tg = document.createElement('div');
    tg.id = 'epaxLangTg';
    tg.setAttribute('role', 'group');
    tg.setAttribute('aria-label', 'Language / Хэл');
    ['en', 'mn'].forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button';
      b.dataset.lang = l;
      b.textContent = l.toUpperCase();
      b.className = l === lang ? 'on' : '';
      b.setAttribute('aria-pressed', l === lang ? 'true' : 'false');
      b.addEventListener('click', function () {
        setLang(l);
        tg.querySelectorAll('button').forEach(function (x) {
          x.setAttribute('aria-pressed', x.dataset.lang === l ? 'true' : 'false');
        });
      });
      tg.appendChild(b);
    });
    return tg;
  }

  function ensureToggle() {
    var slot = document.querySelector('header .header-actions');
    var slotVisible = !!(slot && slot.offsetParent !== null);
    var existing = document.getElementById('epaxLangTg');
    if (existing) {
      /* Angular's header renders after our first pass — relocate the pill into it,
         and fall back to a fixed pill when the header slot is hidden (mobile menu) */
      if (slotVisible && !slot.contains(existing)) {
        existing.classList.remove('epax-fixed');
        existing.classList.add('epax-in-header');
        slot.insertBefore(existing, slot.firstChild);
      } else if (!slotVisible && existing.offsetParent === null) {
        existing.classList.remove('epax-in-header');
        existing.classList.add('epax-fixed');
        document.body.appendChild(existing);
      }
      return;
    }
    var tg = buildToggle();
    if (slotVisible) {
      tg.classList.add('epax-in-header');
      slot.insertBefore(tg, slot.firstChild);
    } else {
      tg.classList.add('epax-fixed');
      document.body.appendChild(tg);
    }
  }

  function start() {
    ensureToggle();
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    if (lang === 'mn') translatePage(MN);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
