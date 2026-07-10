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
      'Бүрэн дижитал ар алба — платформ дээрх байр суурь, сошиал медиа, зочидтой харилцах — сар бүрийн сунгалттай, урт гэрээгүй.',

    /* ---- blog: introducing-epax ---- */
    "Mongolia welcomed more than 800,000 foreign tourists this year, and almost every one of them made their decisions online, in English, weeks before landing. They compared hotels on Google Maps, read restaurant reviews on TripAdvisor, and messaged touring companies on Instagram. The businesses that showed up in those searches got booked. The ones that did not were invisible — no matter how good their rooms, their food, or their guides actually were.": "Монгол улс энэ жил 800,000 гаруй гадаад жуулчин хүлээн авсан бөгөөд тэдний бараг бүгд шийдвэрээ буухаас хэдэн долоо хоногийн өмнө, онлайнаар, англи хэл дээр гаргасан. Тэд зочид буудлуудыг Google Maps дээр харьцуулж, ресторануудын сэтгэгдлийг TripAdvisor дээр уншиж, тур компаниудад Instagram-аар бичсэн. Тэр хайлтад харагдсан бизнесүүд захиалгаа авсан. Харагдаагүй нь — өрөө, хоол, хөтөч нь хичнээн сайн байсан ч — үл үзэгдэгч хэвээр үлдсэн.",
    "EPAX exists to close that gap. We are a digital back office for Mongolian hotels, restaurants, and touring companies: we set up and maintain your presence on the platforms tourists actually use, publish English content every week, answer every guest inquiry and review in fluent English, and send you a clear monthly report on what changed. You keep running your business. We make sure the world can find it.": "EPAX яг энэ зөрүүг арилгахын тулд бий болсон. Бид Монголын зочид буудал, ресторан, тур компаниудын дижитал ар алба: жуулчдын бодитоор ашигладаг платформууд дээр таны байр суурийг бүрдүүлж, долоо хоног бүр англи контент нийтэлж, зочны лавлагаа, сэтгэгдэл бүрд чөлөөтэй англи хэлээр хариулж, юу өөрчлөгдсөнийг ойлгомжтой сарын тайлангаар хүргэнэ. Та бизнесээ л удирдаарай. Дэлхий таныг олдог болгохыг бид хариуцна.",
    "The team behind it": "Ард нь зогсох баг",
    "EPAX is built in Ulaanbaatar by a bilingual team that has worked on both sides of this problem — in Mongolian hospitality and in international tech. We also brought serious technical firepower on board: the chief executive of a Japanese AI technology company is an EPAX shareholder and an active advisor on our logistics and technical architecture. His experience automating service operations in Japan shapes a principle we apply every day: let AI carry the busywork, and let people carry the hospitality.": "EPAX-ийг энэ асуудлын хоёр талд нь — Монголын зочлох үйлчилгээ болон олон улсын технологийн салбарт — ажиллаж байсан хоёр хэлтэй баг Улаанбаатарт бүтээсэн. Бид мөн технологийн ноцтой хүчийг багтаа авчирсан: Японы хиймэл оюуны технологийн компанийн гүйцэтгэх захирал EPAX-ийн хувьцаа эзэмшигч бөгөөд логистик, техник архитектурын идэвхтэй зөвлөх маань юм. Японд үйлчилгээний процессуудыг автоматжуулсан түүний туршлага бидний өдөр бүр баримталдаг зарчмыг тодорхойлсон: ажлын ачааг AI үүрч, зочломтгой харилцааг хүн хариуцаг.",
    "That is why our AI drafts content and classifies inquiries in seconds, but a human editor with native-level English approves every word that reaches a guest. Speed from the machines, judgment from people.": "Тийм ч учраас манай AI контентын ноорог бэлдэж, лавлагааг хэдхэн секундэд ангилдаг ч, зочинд хүрэх үг бүрийг төрөлх түвшний англи хэлтэй редактор баталдаг. Хурд нь машинаас, эрүүл ухаан нь хүнээс.",
    "How we work": "Бид хэрхэн ажилладаг вэ",
    "Every engagement starts with a free audit, delivered within 24 hours, showing you exactly what foreign tourists see when they search for your business. We take on a maximum of five new clients per quarter so quality never slips, and every plan is month-to-month with no lock-in. And we back it with the EPAX guarantee: if month one fails, month two is free.": "Хамтын ажиллагаа бүр 24 цагийн дотор хүргэгддэг үнэгүй аудитаас эхэлдэг — гадаад жуулчид таны бизнесийг хайхад яг юу хардагийг харуулна. Чанараа алдахгүйн тулд бид улирал бүр дээд тал нь таван шинэ харилцагч авдаг бөгөөд бүх багц сар бүрийн сунгалттай, урт гэрээгээр хүлдэггүй. Дээр нь EPAX баталгаа: эхний сар үр дүнгүй бол дараагийн сар үнэгүй.",
    "Peace in every process — that is the promise.": "Үйл явц бүрд амар амгалан — энэ бол бидний амлалт.",

    /* ---- blog: google-io-2026 ---- */
    "This May we spent three days at ITM Mongolia 2026 in Ulaanbaatar, the country's largest international travel trade fair. We came to meet the people we work for — hoteliers, ger camp owners, restaurant managers, and tour operators from across Mongolia — and to show, live, what a modern digital back office looks like.": "Энэ тавдугаар сард бид Улаанбаатарт болсон Монголын хамгийн том олон улсын аялал жуулчлалын үзэсгэлэн ITM Mongolia 2026-д гурван өдөр оролцлоо. Бид өөрсдийн төлөө нь ажилладаг хүмүүстэйгээ — улс даяарх зочид буудлын эзэд, гэр баазын эзэд, ресторанын менежерүүд, тур операторуудтай — уулзаж, орчин үеийн дижитал ар алба ямар байдгийг шууд үзүүлэхээр ирсэн юм.",
    "What we demonstrated": "Бид юу үзүүлсэн бэ",
    "At our stand we ran live audits: a visitor named their property, and within minutes we showed them exactly what a foreign tourist sees when searching for it on Google Maps, TripAdvisor, and Booking.com. For many owners it was the first time seeing their business through a tourist's eyes — missing English descriptions, outdated photos, unanswered reviews.": "Манай асарт бид шууд аудит хийж байлаа: зочин өөрийн газрын нэрийг хэлэхэд, хэдхэн минутын дотор гадаад жуулчин түүнийг Google Maps, TripAdvisor, Booking.com дээр хайхад яг юу хардагийг үзүүлж байв. Олон эзэнд бизнесээ жуулчны нүдээр харах анхны тохиолдол байсан — англи тайлбар алга, зургууд хуучирсан, сэтгэгдлүүд хариугүй.",
    "We also demonstrated our AI-assisted review workflow. Our system flags a new review within minutes and drafts a reply, and a bilingual editor shapes and approves it before anything is sent. Visitors watched a two-star review get a professional English response in under ten minutes — the same workflow we run for clients every day.": "Мөн бид AI-д суурилсан сэтгэгдлийн ажлын урсгалаа үзүүлсэн. Манай систем шинэ сэтгэгдлийг хэдхэн минутад илрүүлж, хариултын ноорог бэлддэг бол хоёр хэлтэй редактор илгээхээс нь өмнө засаж баталдаг. Хоёр одтой сэтгэгдэл арав хүрэхгүй минутад мэргэжлийн англи хариулт авахыг зочид нүдээрээ харсан — энэ бол бидний харилцагчдадаа өдөр бүр ажиллуулдаг яг тэр урсгал.",
    "AI in Mongolian hospitality": "Монголын зочлох үйлчилгээн дэх хиймэл оюун",
    "The highlight of the fair for us was the panel on AI in hospitality. Our technical advisor — the CEO of a Japanese AI technology company and an EPAX shareholder — joined the discussion and shared what Japan's service industry learned as it automated: technology should carry the busywork, and people should carry the hospitality. When software answers in seconds but a human decides what it says, guests get both speed and warmth. That principle is built into every EPAX process, and hearing it argued from twenty years of Japanese operations experience made it land differently.": "Үзэсгэлэнгийн бидний хувьд хамгийн онцлох үйл явдал нь зочлох үйлчилгээн дэх AI сэдэвт хэлэлцүүлэг байлаа. Манай техникийн зөвлөх — Японы хиймэл оюуны технологийн компанийн гүйцэтгэх захирал, EPAX-ийн хувьцаа эзэмшигч — хэлэлцүүлэгт оролцож, Японы үйлчилгээний салбар автоматжуулалтаас юу сурснаа хуваалцсан: ажлын ачааг технологи үүрч, зочломтгой харилцааг хүн хариуцах ёстой. Программ секундэд хариулдаг ч юу хэлэхийг нь хүн шийддэг бол зочин хурд, дулаан хоёрын аль алиныг нь мэдэрдэг. Энэ зарчим EPAX-ийн процесс бүрд шингэсэн бөгөөд үүнийг Японы үйл ажиллагааны хорин жилийн туршлагатай хүнээс сонсоход өөр жинтэй сонсогдож байлаа.",
    "What comes next": "Дараагийн алхам",
    "We left ITM with a full notebook and a waiting list. As always, we take on five new clients per quarter, and every engagement starts with the free 24-hour audit. If we met you at the fair — or if you wish we had — the audit is the place to start.": "Бид ITM-ээс дүүрэн тэмдэглэл, хүлээлгийн жагсаалттай буцсан. Урьдын адил бид улирал бүр таван шинэ харилцагч авдаг бөгөөд хамтын ажиллагаа бүр 24 цагийн үнэгүй аудитаас эхэлдэг. Үзэсгэлэн дээр бидэнтэй уулзсан бол — эсвэл уулзаагүйдээ харамсаж байгаа бол — аудитаас эхлээрэй.",

    /* ---- blog: introducing-epax-2 ---- */
    "Since we launched, one request has come up in almost every conversation with hotel owners: one plan that simply handles all of it. Platforms, content, guest messages, reviews — without hiring anyone, without managing anyone. Today we are introducing exactly that: the EPAX Growth plan, at 400 dollars per month.": "Биднийг эхэлснээс хойш зочид буудлын эздтэй хийсэн бараг бүх ярианд нэг л хүсэлт давтагдсан: бүгдийг нь зүгээр л хариуцаад явдаг нэг багц. Платформ, контент, зочны мессеж, сэтгэгдэл — хэн нэгнийг ажилд авалгүй, хэн нэгнийг удирдалгүй. Өнөөдөр бид яг түүнийг танилцуулж байна: EPAX Өсөлт багц, сард 1,460,000₮ (400 ам.доллар).",
    "What Growth includes": "Өсөлт багцад юу багтдаг вэ",
    "Growth starts where our Starter plan ends. Your profiles on Google Maps, TripAdvisor, and Booking.com are set up, optimized, and kept fresh in English. Every week we publish English social content written for international guests. On top of that, Growth adds the two things that turn visibility into bookings: guest communication handled in fluent English, and full review management. Every month you receive a growth report showing your visibility, inquiries, and what we did about them.": "Өсөлт багц Стартер багцын төгссөн газраас эхэлдэг. Google Maps, TripAdvisor, Booking.com дээрх профайлууд тань англи хэлээр бүрэн тохируулагдаж, оновчлогдож, байнга шинэлэг байна. Долоо хоног бүр бид олон улсын зочдод зориулж бичсэн англи сошиал контент нийтэлнэ. Дээр нь Өсөлт багц танигдах байдлыг захиалга болгон хувиргадаг хоёр зүйлийг нэмдэг: чөлөөтэй англи хэлээр зочидтой харилцах, сэтгэгдлийн бүрэн менежмент. Сар бүр та танигдах байдал, лавлагаа, бидний хийсэн ажлыг харуулсан өсөлтийн тайлан авна.",
    "Why 400 dollars": "Яагаад 400 ам.доллар гэж",
    "We priced Growth against the alternative: hiring. A full-time, English-fluent marketing person in Ulaanbaatar costs well over two million tugrik per month once you include the realities of employment — and you still have to manage them, cover their holidays, and hope they stay. Growth delivers a whole team plus the tooling for less, saving you at least 250 dollars a month against an in-house hire. Regional agencies charge 500 dollars and up for social media management alone; Growth includes it as one part of a larger system.": "Бид Өсөлт багцын үнийг цорын ганц бодит хувилбартай нь — ажилтан авахтай — харьцуулж тогтоосон. Улаанбаатарт англи хэлтэй, бүтэн цагийн маркетингийн ажилтан хөдөлмөр эрхлэлтийн бодит зардлыг оруулаад сард хоёр сая гаруй төгрөгийн өртөгтэй — дээр нь та түүнийг удирдаж, амралтыг нь нөхөж, ажлаасаа гарахгүй гэж найдах хэрэгтэй. Өсөлт багц бүтэн баг, багаж хэрэгслийг түүнээс хямдаар хүргэж, дотооддоо ажилтан авахтай харьцуулахад сард дор хаяж 912,500₮ хэмнэнэ. Бүс нутгийн агентлагууд ганц сошиал медиа менежментэд л сард 1,825,000₮ ба түүнээс дээш үнэ хэлдэг; Өсөлт багцад энэ нь том системийн зөвхөн нэг хэсэг нь.",
    "Where the AI fits": "AI хаана нь байдаг вэ",
    "Our AI drafts content, translates, and classifies incoming inquiries the moment they arrive — that is how a two-person conversation with a guest starts in minutes, not hours. But no AI-generated word reaches your guests unreviewed. A bilingual editor approves everything, because speed without judgment is how businesses embarrass themselves online. This division of labor — machines for pace, people for taste — comes directly from the operating philosophy our Japanese technical advisor brought to EPAX.": "Манай AI контентын ноорог бэлдэж, орчуулж, ирсэн лавлагааг тэр дороо ангилдаг — зочинтой хийх яриа ийм л учраас цагаар биш, минутаар эхэлдэг. Гэхдээ AI-н бичсэн нэг ч үг хянагдалгүйгээр зочдод тань хүрдэггүй. Бүгдийг хоёр хэлтэй редактор баталдаг, учир нь эрүүл ухаангүй хурд бол бизнесүүдийн онлайнд нэрээ баллуулдаг арга. Ажлын ийм хуваарь — хурдыг машинд, мэдрэмжийг хүнд — манай Японы техникийн зөвлөхийн EPAX-д авчирсан үйл ажиллагааны философиос шууд гаралтай.",
    "Growth is month-to-month with no lock-in, and covered by the EPAX guarantee: if month one fails, month two is free. The free audit is the first step.": "Өсөлт багц сар бүрийн сунгалттай, урт гэрээгээр хүлдэггүй бөгөөд EPAX баталгаанд хамрагдана: эхний сар үр дүнгүй бол дараагийн сар үнэгүй. Эхний алхам нь үнэгүй аудит.",

    /* ---- blog: epax-built-an-os ---- */
    "Last June, a 24-room tourist hotel forty minutes outside Ulaanbaatar was running at 31 percent occupancy in what should have been its best month. The rooms were clean, the staff was warm, the location was genuinely beautiful. The problem was simpler and more brutal: foreign tourists could not find it.": "Өнгөрсөн зургадугаар сард Улаанбаатараас дөчин минутын зайтай, 24 өрөөтэй жуулчны зочид буудал хамгийн сайн байх ёстой сардаа 31 хувийн дүүргэлттэй ажиллаж байлаа. Өрөөнүүд нь цэвэрхэн, ажилтнууд нь дотно, байршил нь үнэхээр үзэсгэлэнтэй. Асуудал нь илүү энгийн бөгөөд хатуу байв: гадаад жуулчид түүнийг олж чадахгүй байлаа.",
    "Our audit took one day and told the whole story. The hotel's Google Maps listing had no English description and photos from 2019. Its TripAdvisor page had eleven reviews, four of them unanswered, including one asking a question that cost a booking. Booking.com showed the property under a romanized name no tourist would ever search for. On Instagram, the hotel posted in Mongolian to an audience of local friends.": "Манай аудит нэг өдөр үргэлжилж, бүх түүхийг ил гаргалаа. Зочид буудлын Google Maps бүртгэлд англи тайлбар байхгүй, зургууд нь 2019 оных. TripAdvisor хуудсанд нь арван нэгэн сэтгэгдэл байснаас дөрөв нь хариугүй, тэр дундаа нэг захиалгыг алдуулсан асуулт ч байв. Booking.com дээр уг газар ямар ч жуулчны хэзээ ч хайхгүй латин галигтай нэрээр харагдаж байлаа. Instagram дээр буудал монголоор, нутгийн танилууддаа зориулж нийтэлдэг байв.",
    "The 90-day plan": "90 хоногийн төлөвлөгөө",
    "Weeks one and two were platform surgery: consistent naming everywhere, English descriptions written for travelers, sixty new photos, menus translated, booking links fixed. From week three, the rhythm started — English content published weekly, photos refreshed, and every inquiry routed through our communications desk. Our AI classifies each message the moment it arrives and drafts a reply; a bilingual editor sends it. Average response time went from over a day to under two hours.": "Эхний хоёр долоо хоног платформын их засвар байлаа: хаа сайгүй нэг мөр нэршил, аялагчдад зориулж бичсэн англи тайлбар, жаран шинэ зураг, орчуулсан цэс, зассан захиалгын холбоосууд. Гурав дахь долоо хоногоос хэмнэл эхэлсэн — долоо хоног бүр англи контент нийтлэгдэж, зургууд шинэчлэгдэж, лавлагаа бүр манай харилцааны албаар дамждаг болов. Манай AI мессеж бүрийг ирмэгц нь ангилж, хариултын ноорог бэлддэг; хоёр хэлтэй редактор илгээдэг. Дундаж хариулах хугацаа нэг хоногоос хоёр цаг хүрэхгүй болтол буурсан.",
    "Reviews got the same treatment. Every review — positive or negative — received a considered English response within one business day. Two old complaints were resolved publicly, which future guests noticed and mentioned.": "Сэтгэгдлүүд ч мөн адил анхаарал авсан. Эерэг ч бай, сөрөг ч бай — сэтгэгдэл бүр ажлын нэг өдрийн дотор бодож боловсруулсан англи хариулт авч байв. Хоёр хуучин гомдлыг олон нийтэд ил шийдвэрлэсэн нь дараагийн зочдын нүдэнд өртөж, сэтгэгдэлдээ дурдагдсан.",
    "The results": "Үр дүн",
    "By mid-September, occupancy reached 58 percent, with foreign guests making up three times their previous share. Direct inquiries through Google Maps and Instagram more than doubled quarter over quarter. The owner's summary was better than any metric we track: the phone now rings in English.": "Есдүгээр сарын дунд гэхэд дүүргэлт 58 хувьд хүрч, гадаад зочдын эзлэх хувь өмнөхөөсөө гурав дахин өссөн. Google Maps, Instagram-аар ирэх шууд лавлагаа улирал тутамд хоёр дахин илүү болсон. Эзний дүгнэлт бидний хэмждэг ямар ч үзүүлэлтээс илүү байлаа: одоо утас англиар дуугардаг болсон.",
    "One honest caveat: not every property starts from the same place, and we do not promise identical numbers. What we promise is the same system — and the EPAX guarantee behind it. The free audit shows you where your property stands today; it takes 24 hours and costs nothing.": "Нэг шударга тайлбар: бүх газар ижил гарааны цэгээс эхэлдэггүй тул бид яг ижил тоо амладаггүй. Бидний амлдаг зүйл бол яг ижил систем — түүний ард байх EPAX баталгаа. Үнэгүй аудит таны газар өнөөдөр хаана байгааг харуулна; 24 цаг зарцуулагдана, төлбөргүй.",

    /* ---- blog: introducing-epax-cli ---- */
    "There is a particular kind of Instagram account we see all over Mongolian hospitality: hundreds of local likes, warm comments from friends and family, and not a single booking from abroad. Likes are not the metric. A German traveler planning next summer does not care that your cousin loved your post — she cares whether your food looks real, your gers look warm, and someone will answer her question in English.": "Монголын зочлох үйлчилгээнд хаа сайгүй таардаг нэг төрлийн Instagram хаяг бий: хэдэн зуун дотоодын лайк, найз нөхөд, гэр бүлийн халуун сэтгэгдэл — гэхдээ гаднаас ирсэн ганц ч захиалга алга. Лайк бол хэмжүүр биш. Ирэх зунаа төлөвлөж буй герман аялагчид таны үеэл постонд тань лайк дарсан нь хамаагүй — хоол тань бодитой харагдаж байна уу, гэрүүд тань дулаахан харагдаж байна уу, асуултад нь хэн нэгэн англиар хариулах уу гэдэг л хамаатай.",
    "Why generic AI content fails": "Хэвшмэл AI контент яагаад бүтдэггүй вэ",
    "We use AI heavily in our content pipeline, so we say this with confidence: content that is fully generated by AI does not win bookings. It has a sameness travelers have learned to smell — the same adjectives, the same fake enthusiasm, sometimes the wrong details entirely. Platforms increasingly suppress it, and worse, guests distrust it. A wrong AI-invented detail about your own property costs more credibility than no post at all.": "Бид контентын урсгалдаа AI-г өргөн ашигладаг учраас үүнийг итгэлтэйгээр хэлж чадна: бүхэлдээ AI-р үүсгэсэн контент захиалга авчирдаггүй. Түүнд аялагчдын хол зайнаас мэдэрдэг болсон нэгэн хэвийн байдал бий — ижил тодотголууд, ижил хуурамч урам зориг, заримдаа бүр огт буруу дэлгэрэнгүй мэдээлэл. Платформууд ийм контентыг улам бүр дарж байгаа бөгөөд бүр дор нь — зочид түүнд итгэдэггүй. Өөрийн чинь газрын тухай AI-н зохиосон нэг буруу мэдээлэл огт пост хийгээгүйгээс ч илүү итгэл алдуулна.",
    "Our pipeline": "Манай ажлын урсгал",
    "So we split the work. Real photographs come first — your food, your steppe, your staff, your mornings. Our AI drafts captions in seconds, trained on your property's voice and facts, and handles the mechanical work of formatting, hashtags, and scheduling. Then a bilingual editor rewrites every caption until it reads like a person wrote it, because one did. The result publishes weekly, in English, aimed at the travelers actually deciding where to stay, eat, and go.": "Тиймээс бид ажлыг хуваасан. Эхэнд бодит гэрэл зураг — таны хоол, таны тал нутаг, таны хамт олон, таны өглөөнүүд. Манай AI таны газрын өнгө аяс, баримтад суралцсан тайлбарын ноорогийг секундэд бэлдэж, формат, хаштаг, хуваарь гаргах механик ажлыг хариуцна. Дараа нь хоёр хэлтэй редактор тайлбар бүрийг хүний бичсэн мэт уншигдтал дахин бичдэг — учир нь үнэхээр хүн бичсэн байдаг. Үр дүн нь долоо хоног бүр, англи хэлээр, хаана хоноглох, хооллох, очихоо бодитоор шийдэж буй аялагчдад чиглэн нийтлэгддэг.",
    "What winning looks like": "Ялалт ямар харагддаг вэ",
    "We do not report vanity metrics. We track saves, shares, profile visits from target countries, and above all direct messages asking about availability — because that is the moment social media becomes revenue. When a post about a slow morning at your camp produces three availability inquiries from Seoul and Berlin, that is a working system.": "Бид өнгөц үзүүлэлт тайлагнадаггүй. Хадгалалт, хуваалцалт, зорилтот орнуудаас ирсэн профайлын зочлолт, хамгийн гол нь сул өрөө асуусан шууд мессежийг хэмждэг — учир нь яг тэр мөчид сошиал медиа орлого болж хувирдаг. Таны баазын нам гүм өглөөний тухай пост Сөүл, Берлинээс сул орон тоо асуусан гурван лавлагаа авчирвал — тэр бол ажиллаж буй систем.",
    "English social media is included in the EPAX Growth plan, together with platform presence and guest communications. The free audit will show you what your current profiles are actually saying to the world — it takes 24 hours.": "Англи хэлт сошиал медиа нь платформ дээрх байр суурь, зочидтой харилцахын хамт EPAX Өсөлт багцад багтдаг. Таны одоогийн профайлууд дэлхийд яг юу өгүүлж байгааг үнэгүй аудит харуулна — 24 цаг л зарцуулагдана.",

    /* ---- blog: introducing-epax-sdk ---- */
    "Most lost bookings do not die from a bad answer. They die from silence. A traveler messages three properties on a Tuesday evening; the first good answer usually wins, and in Mongolian hospitality the average reply still takes more than a day — if it comes at all, and if it comes in English.": "Алдагдсан захиалгын дийлэнх нь муу хариултаас болж үхдэггүй. Чимээгүй байдлаас болж үхдэг. Аялагч мягмар гаргийн орой гурван газарт мессеж бичнэ; ихэвчлэн эхний сайн хариулт ялдаг бол Монголын зочлох үйлчилгээнд дундаж хариулт өдийг хүртэл нэг хоногоос илүү хугацаа авдаг — хэрэв ер нь ирвэл, хэрэв англиар ирвэл шүү.",
    "How the desk works": "Харилцааны алба хэрхэн ажилладаг вэ",
    "Every channel your guests use — Instagram and Facebook messages, Google inquiries, booking platform questions, review responses — feeds into one queue at EPAX. The moment a message arrives, our AI classifies it: availability request, price question, directions, special request, complaint. Urgent and high-value messages jump the line automatically. The AI drafts a reply from your property's facts — room types, rates, seasons, transfer options — and a fluent-English team member reviews, adjusts, and sends it. Our working target is a reply within two business hours.": "Зочдын тань ашигладаг бүх суваг — Instagram, Facebook мессеж, Google лавлагаа, захиалгын платформын асуулт, сэтгэгдлийн хариулт — EPAX дээр нэг дараалалд цуглардаг. Мессеж ирмэгц манай AI түүнийг ангилдаг: сул өрөөний хүсэлт, үнийн асуулт, зам заавар, тусгай хүсэлт, гомдол. Яаралтай бөгөөд өндөр үнэ цэнтэй мессежүүд дарааллыг автоматаар алгасдаг. AI таны газрын баримтад — өрөөний төрөл, үнэ, улирал, трансферын сонголтод — тулгуурлан хариултын ноорог бэлдэж, чөлөөтэй англи хэлтэй багийн гишүүн хянаж, засаж, илгээдэг. Бидний ажлын зорилт — ажлын хоёр цагийн дотор хариулах.",
    "This design owes a lot to our technical advisor, the CEO of a Japanese AI company and an EPAX shareholder, who spent years building service operations in Japan. The standard he holds us to comes from Japanese hospitality: do not just answer the question, anticipate the next one. A guest asking about availability also needs to know about airport pickup — so the answer includes it before she asks.": "Энэ загварт манай техникийн зөвлөхийн — Японы хиймэл оюуны компанийн гүйцэтгэх захирал, EPAX-ийн хувьцаа эзэмшигчийн — оруулсан хувь нэмэр их. Тэрбээр Японд олон жил үйлчилгээний процесс байгуулсан хүн. Түүний биднээс шаарддаг стандарт Японы зочлох үйлчилгээнээс гаралтай: асуултад зөвхөн хариулаад зогсохгүй, дараагийн асуултыг нь урьдчилан тааж бай. Сул өрөө асууж буй зочинд нисэх буудлын тосолт бас хэрэгтэй — тиймээс хариултад асуухаас нь өмнө багтсан байдаг.",
    "Reviews are conversations too": "Сэтгэгдэл ч бас яриа",
    "The same desk handles reviews. Positive reviews get a real thank-you, not a template. Negative reviews get speed, ownership, and a concrete fix — handled well, a bad review becomes public proof that your management responds, which future guests weigh more heavily than a five-star average. We wrote up a real example of that in our case study on turning a two-star review into four stars.": "Мөн л энэ алба сэтгэгдлүүдийг хариуцдаг. Эерэг сэтгэгдэл загвар хариулт биш, жинхэнэ талархал авдаг. Сөрөг сэтгэгдэл хурд, хариуцлага, бодит засварыг авдаг — сайн зохицуулбал муу сэтгэгдэл таны менежмент хариу үйлдэл үзүүлдэгийн олон нийтэд ил нотолгоо болдог бөгөөд ирээдүйн зочид үүнийг таван одтой дунджаас ч илүү жинтэй үздэг. Үүний бодит жишээг бид хоёр одтой сэтгэгдлийг дөрвөн од болгосон кейс судалгаандаа бичсэн бий.",
    "No lead left waiting, no tourist without a reply, no booking lost to silence. Guest communications are included in the Growth and Full Ops plans — and the free audit will show you how your response times look from a guest's side today.": "Хүлээж суусан сонирхогч ч, хариугүй үлдсэн жуулчин ч, чимээгүйгээс алдсан захиалга ч байхгүй. Зочидтой харилцах нь Өсөлт болон Бүрэн үйл ажиллагаа багцад багтдаг — таны хариулах хугацаа өнөөдөр зочны талаас ямар харагддагийг үнэгүй аудит харуулна.",

    /* ---- blog: epax-for-enterprises ---- */
    "Touring is the highest-stakes corner of Mongolian tourism. Travelers plan a Mongolia trip three to six months ahead, compare operators entirely online, and commit thousands of dollars to a company they have never met. One missed inquiry is not a small loss — a single group booking is typically worth 3,000 to 6,000 dollars. For a touring company, visibility and response speed are not marketing; they are the product.": "Тур бол Монголын аялал жуулчлалын хамгийн өндөр өртөгтэй хэсэг. Аялагчид Монголын аяллаа гурваас зургаан сарын өмнө төлөвлөж, операторуудыг бүхэлд нь онлайнаар харьцуулж, хэзээ ч уулзаж байгаагүй компанид хэдэн мянган доллар итгэн үлдээдэг. Нэг алдсан лавлагаа бол жижиг алдагдал биш — нэг группийн захиалга дунджаар 11-22 сая ₮-ийн үнэ цэнтэй. Тур компанийн хувьд танигдах байдал, хариулах хурд бол маркетинг биш; бүтээгдэхүүн нь өөрөө юм.",
    "What touring companies need differently": "Тур компанид юу өөрөөр хэрэгтэй вэ",
    "Hotels sell rooms; touring companies sell trust in a plan. That means itinerary pages in clean, precise English — route, distances, what a day actually looks like, what is included. It means proof: real photos from past seasons and reviews from past travelers, answered and current. And it means fast, competent quoting, because the traveler comparing you against two other operators books whoever answers first with confidence.": "Зочид буудал өрөө заждаг бол тур компани төлөвлөгөөнд итгэх итгэлийг заждаг. Энэ нь цэвэр, нарийвчилсан англи хэлтэй аяллын маршрутын хуудас гэсэн үг — зам, зай, өдөр яг ямар өнгөрдөг, юу багтдаг. Энэ нь нотолгоо гэсэн үг: өнгөрсөн улирлуудын бодит зураг, өмнөх аялагчдын хариулттай, шинэлэг сэтгэгдэл. Мөн хурдан, чадварлаг үнийн санал гэсэн үг — учир нь таныг өөр хоёр оператортой харьцуулж буй аялагч хамгийн түрүүнд итгэлтэй хариулсан нь хэнээс ч захиалдаг.",
    "AI for itineraries, humans for accuracy": "Маршрутыг AI, нарийвчлалыг хүн",
    "This is where our AI earns its keep. It drafts English itinerary descriptions and translations in minutes, and our editors — with logistics guidance from our Japanese technical advisor, whose day job is running an AI company — verify every place name, distance, and timing, because a wrong detail in an itinerary is a refund waiting to happen. The same desk answers inquiries within two business hours and manages your reviews through the season. We also process your e-invoices, which matters when group payments arrive from three countries at once.": "Яг энд манай AI үнэ цэнээ харуулдаг. Тэрбээр англи маршрутын тайлбар, орчуулгын ноорогийг хэдхэн минутад бэлдэж, манай редакторууд — хиймэл оюуны компани удирддаг Японы техникийн зөвлөхийн маань логистикийн зөвлөмжийн дагуу — газрын нэр, зай, цаг хугацаа бүрийг нягталдаг, учир нь маршрут дахь нэг буруу мэдээлэл бол хүлээгдэж буй буцаан олголт. Мөн л энэ алба лавлагаанд ажлын хоёр цагийн дотор хариулж, улирлын турш сэтгэгдлийг тань хариуцна. Бид бас и-баримтыг тань боловсруулдаг — группийн төлбөр гурван орноос зэрэг ирэхэд энэ нь чухал.",
    "Built for seasonality": "Улирлын онцлогт зориулав",
    "We know what a Mongolian touring calendar looks like, so we priced for it. Touring plans start at 300 dollars per month, month-to-month with no lock-in, and include an off-season pause — you pay only for the months you operate. Winter costs you nothing while your summer presence keeps compounding: reviews stay answered and next season's inquiries still get replies.": "Монголын турын хуанли ямар байдгийг бид мэднэ, тиймээс үнээ түүнд тааруулсан. Турын багцууд сард 1,095,000₮-өөс эхэлдэг, сар бүрийн сунгалттай, урт гэрээгүй бөгөөд улирлын завсарлагатай — та зөвхөн ажилладаг саруудаа төлнө. Өвөл танд юу ч зарцуулагдахгүй байхад зуны орон зай тань үргэлжлэн хуримтлагдана: сэтгэгдлүүд хариултаа авсан хэвээр, дараагийн улирлын лавлагаанууд хариугаа авсан хэвээр байна.",
    "The free audit shows you what a traveler comparing operators sees when they find you — and what they see when they find your competitors. It takes 24 hours.": "Операторуудыг харьцуулж буй аялагч таныг олоход юу хардагийг — мөн өрсөлдөгчдийг тань олоход юу хардагийг — үнэгүй аудит харуулна. 24 цаг л зарцуулагдана.",

    /* ---- blog: ai-3-5-flash-in-epax ---- */
    "On a Friday evening last season, a guest at a partner ger camp posted a two-star review: the shower was cold, the directions were confusing, and nobody at the camp could explain in English what had gone wrong. Reviews like this sit unanswered on most Mongolian properties for weeks. Every future guest reads them. This is the story of what happened instead — and the playbook behind it.": "Өнгөрсөн улирлын нэгэн баасан гаргийн орой манай түнш гэр баазын зочин хоёр одтой сэтгэгдэл үлдээжээ: шүршүүр нь хүйтэн, зам заавар нь ойлгомжгүй, юу болсныг баазын хэн ч англиар тайлбарлаж чадаагүй. Ийм сэтгэгдэл Монголын ихэнх газруудад хэдэн долоо хоногоор хариугүй хэвтдэг. Ирээдүйн зочин бүр тэднийг уншдаг. Энэ бол оронд нь юу болсны — мөн түүний цаадах ажлын аргын түүх.",
    "The first hour": "Эхний нэг цаг",
    "Our monitoring flagged the review eleven minutes after it was posted. The AI drafted a response and, just as important, produced a summary for the owner: two concrete problems, one of them fixable that weekend. Our editor rewrote the draft into something a human being would actually say — a real apology, no excuses, and specifics: the boiler issue, the directions, and what would happen next. It was published the same evening, in polished English, signed by the camp's management.": "Манай хяналтын систем сэтгэгдлийг нийтлэгдсэнээс хойш арван нэгэн минутын дараа илрүүлсэн. AI хариултын ноорог бэлдэж, түүнээс дутахгүй чухал нь — эзэнд нь хураангуй гаргаж өгсөн: хоёр тодорхой асуудал, нэг нь тэр амралтын өдрөөр засагдах боломжтой. Манай редактор ноорогийг жинхэнэ хүний хэлэх үг болгон дахин бичсэн — бодит уучлалт, шалтаггүй, тодорхой зүйлстэй: халаагуурын асуудал, зам заавар, цаашид юу хийгдэх нь. Мөн орой нь өнгөлсөн англи хэлээр, баазын удирдлагын нэрийн өмнөөс нийтлэгдсэн.",
    "The follow-up": "Дараагийн алхмууд",
    "Saturday, the camp fixed the boiler timer. We rewrote the arrival directions, updated the map pin, and added a photographed landmark guide to the listing. Then we sent the guest a short, courteous message: here is what we fixed, thanks to your review. A week later, she updated her rating to four stars and added a line worth more than any advertisement: management responds fast and actually fixes things.": "Бямба гарагт бааз халаагуурын таймераа засав. Бид ирэх зам зааврыг дахин бичиж, газрын зүүг шинэчилж, бүртгэлд зурагтай газарчлах хөтөч нэмсэн. Дараа нь зочинд богино, эелдэг мессеж илгээв: таны сэтгэгдлийн ачаар бид ийм зүйлсийг зассан. Долоо хоногийн дараа тэрбээр үнэлгээгээ дөрвөн од болгож, ямар ч сурталчилгаанаас үнэтэй нэг мөр нэмжээ: удирдлага нь хурдан хариулдаг, асуудлыг үнэхээр засдаг.",
    "The playbook": "Ажлын арга",
    "Speed, ownership, proof of fix. The AI gives us the speed — flagging, drafting, summarizing within minutes. People supply the ownership, because guests can tell a template apology from a real one instantly. And the visible fix turns a complaint into public evidence that your camp is well-run. Travelers do not expect perfection; they expect a place that responds when something goes wrong.": "Хурд, хариуцлага, засварын нотолгоо. Хурдыг AI өгдөг — хэдхэн минутад илрүүлж, ноорог бэлдэж, хураангуйлдаг. Хариуцлагыг хүн өгдөг, учир нь зочид загвар уучлалтыг жинхэнээс нь агшин зуур ялгадаг. Харин нүдэнд харагдах засвар гомдлыг таны бааз сайн удирдлагатайн олон нийтэд ил нотолгоо болгон хувиргадаг. Аялагчид төгс төгөлдөр байдал хүлээдэггүй; ямар нэг зүйл буруудахад хариу үйлдэл үзүүлдэг газрыг л хүлээдэг.",
    "Review management is part of every EPAX Growth and Full Ops plan. If you have reviews sitting unanswered right now, the free audit will find them within 24 hours.": "Сэтгэгдлийн менежмент EPAX-ийн Өсөлт болон Бүрэн үйл ажиллагаа багц бүрд багтдаг. Яг одоо хариугүй хэвтэж буй сэтгэгдэлтэй бол үнэгүй аудит тэднийг 24 цагийн дотор олж илрүүлнэ.",

    /* ---- blog UI ---- */
    "The EPAX Team": "EPAX баг",
    "All": "Бүгд",
    "Company": "Компани",
    "Industry": "Салбар",
    "Case studies": "Кейс судалгаа",
    "19 May 2026": "2026.05.19",
    "28 Apr 2026": "2026.04.28",
    "2 Apr 2026": "2026.04.02",
    "12 Mar 2026": "2026.03.12",
    "19 Feb 2026": "2026.02.19",
    "27 Jan 2026": "2026.01.27",
    "8 Jan 2026": "2026.01.08",
    "18 Nov 2025": "2025.11.18"
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
