# Gift Edition v0.1 Experience Contract

## 1. Status and purpose

This document is the proposed implementation contract for **Культурный радар Полины · Сезон 2026/27** under issue #15.

It translates the accepted product concept into a bounded mobile experience that issues #4, #5, #6 and #7 can implement without inventing product behaviour inside code or runtime data.

This document does not approve itself. Sections marked **Owner approval required** remain proposed until the owner approves the Draft PR.

Source roles:

- `docs/product/vision.md` defines the product thesis;
- `docs/product/gift-mvp.md` defines the gift release intent;
- `docs/product/product-language.md` defines canonical terminology;
- `docs/domain/candidate-model.md` defines lifecycle and entity distinctions;
- `docs/ux/website-concept.md` remains the broader website concept;
- `docs/ux/gift-ticket.md` defines the accepted Open Ticket v0.5 baseline;
- this document defines the exact Gift Edition v0.1 mobile flow and presentation contract.

No current event dates, sales states or seat availability are asserted here. All candidate examples are structural placeholders for issue #5.

## 2. Approved-experience statement

**Proposed statement — Owner approval required**

> Polina opens the printed Open Ticket and enters a personal cultural season that has already begun. She sees a small curated repertoire of events, cities and possible shared experiences; understands why each candidate matters, what is confirmed and what is still being monitored; rates the event and city separately; decides what should enter the next act; and sends a compact result to the artistic council.

The experience must communicate five ideas in this order:

1. this is Polina's personal cultural season;
2. Cultural Radar performs difficult curatorial discovery and monitoring, not ordinary listing search;
3. a meaningful proposal combines **event + city + company** without making travel mandatory;
4. the first repertoire is already prepared;
5. Polina is a co-author of the choice, while her v0.1 input remains device-local until she shares it.

Success criterion:

> Within the first screen and one short continuation, Polina understands why the website exists, sees that a curated selection is ready and knows the next action.

## 3. First screen and value proposition

### 3.1 Hierarchy

The first screen must prioritise the product value over a repetition of the printed ticket.

Recommended hierarchy:

```text
Kicker
КУЛЬТУРНЫЙ РАДАР · ПОЛИНА · СЕЗОН 2026/27

Headline
ПОЛИНА, ДОБРО ПОЖАЛОВАТЬ
В ВАШ ЛИЧНЫЙ КУЛЬТУРНЫЙ СЕЗОН

Opening thought
Хороший спектакль, опера или балет —
не просто свободный вечер в календаре.

Иногда ради события стоит выбрать город,
освободить два или три дня
и собрать хорошую компанию.

Value explanation
Москва и Петербург дают тысячи возможностей.
Но найти действительно важное событие — значит
разбираться в театрах и постановщиках,
следить за фестивалями, гастролями,
расписаниями и началом продаж —
и не ограничивать себя одним городом.

Культурный радар собирает этот поиск
в одном личном репертуаре.

Formula
СОБЫТИЕ + ГОРОД + КОМПАНИЯ

Prepared-state note
ПЕРВЫЙ ОТБОР УЖЕ СОБРАН

Primary action
УВИДЕТЬ ПРЕДЛАГАЕМЫЙ РЕПЕРТУАР

Secondary action
КАК РАБОТАЕТ РАДАР
```

The exact line breaks may change by viewport. The meaning of the value explanation must not be reduced to generic gift copy or to the ticket's two-seat mechanics.

### 3.2 Ticket continuity

The first viewport may carry `ОТКРЫТЫЙ БИЛЕТ · ПОЛИНА + 1` as a restrained service label, but the detailed two-seat explanation belongs in the short continuation or `О подарке`, not as the hero's main message.

The website must preserve continuity with Open Ticket v0.5 through:

- project and season naming;
- condensed display, neutral text and service/mono typography roles;
- graphite, red and grey state semantics;
- `На радаре`, `Выбор открыт` and `Следующий акт` vocabulary;
- Polina's co-author role;
- the route from completed first selection to open choice.

The Open Ticket copy and composition remain unchanged in issue #15.

## 4. Functional cut

### 4.1 P0

- QR landing without login or installation;
- first-screen hierarchy and value proposition defined above;
- one primary path into `На радаре`;
- 6–7 deliberately different candidate scenarios;
- mobile horizontal swipe carousel with visible next-card fragment and position indicator;
- candidate detail containing cultural rationale, city rationale, known/unknown facts, lifecycle, next step, urgency, sources and uncertainty;
- event rating `1–5`;
- city rating `1–5` keyed conceptually by stable city identity;
- decision: `В следующий акт`, `Оставить на радаре`, `Не моё`;
- honest device-local persistence disclosure;
- editable choices on the same device;
- visible monitoring explanation;
- screenshot-ready `Следующий акт` summary;
- Web Share API contract with screenshot/manual-send fallback;
- mobile-first visual grammar aligned with Open Ticket v0.5;
- low-fidelity states and implementation-readiness checklist in this document.

### 4.2 Optional only if P0 is complete

- free-text `Комментарий художественному совету` stored device-locally;
- one-time carousel motion hint;
- restrained transitions between card and detail;
- generated share image rather than sharing text/URL;
- filters or sorting after the complete editorial sequence remains visible.

### 4.3 Out of scope

- application code, stack selection or dependencies;
- backend, database, authentication or shared persistence;
- CMS or admin interface;
- automated crawling, monitoring or notifications;
- ticket checkout or travel planning;
- production image acquisition and licensing;
- current candidate fact verification or final runtime dataset;
- final high-fidelity design or Figma work;
- Open Ticket v0.5 redesign;
- complex ranking, recommendation or aggregate-voting algorithm.

## 5. Mobile information architecture

The v0.1 experience may be one mobile-first page with anchored sections plus a detail layer. Separate routes are not required.

```text
QR entry
└── Entry / value proposition
    ├── Primary: На радаре
    └── Secondary: Как работает радар

На радаре
├── Candidate carousel
│   └── Candidate detail
│       ├── Cultural proposition
│       ├── City / trip scale
│       ├── Known / unknown
│       ├── Monitoring status
│       ├── Sources / uncertainty
│       └── Ratings + decision
├── Monitoring explanation
└── Следующий акт
    ├── Shortlisted
    ├── Kept on radar
    ├── Not for me
    ├── Action now / waiting
    └── Share result
```

Persistent navigation is not required. A compact sticky affordance may expose `На радаре` and `Следующий акт` after the hero, provided it does not obstruct screenshots or reading.

## 6. Full user flow

1. Polina scans the Open Ticket QR.
2. The page opens directly in a mobile browser without login.
3. The first screen greets Polina and explains the curatorial value.
4. Polina taps `Увидеть предлагаемый репертуар`.
5. The first candidate is shown as a large swipeable card; part of the next card is visible.
6. Polina swipes manually or opens the candidate detail.
7. The detail explains the artistic case, city case, trip scale, confirmed facts, unknowns, lifecycle state, next expected change, urgency and sources.
8. Polina rates the event and city separately.
9. Polina chooses one of three decisions and may revise it later.
10. The interface confirms that the choice is saved only in this browser on this device.
11. Polina returns to the carousel and continues through the collection.
12. At any point she may open `Как работает радар` or the lifecycle explainer from a status label.
13. `Следующий акт` summarises all decisions and separates action-ready candidates from monitored candidates.
14. Polina taps `Отправить художественному совету`.
15. Where Web Share is available, the browser share sheet opens with a concise textual result and page URL.
16. Where Web Share is unavailable or cancelled, the page shows screenshot/manual-send instructions without claiming that anything was transmitted.

No step may imply that votes are already visible on another device.

## 7. Low-fidelity wireframes

These wireframes define hierarchy and states, not visual polish or exact dimensions.

### 7.1 Entry / value screen

```text
┌────────────────────────────────────┐
│ КУЛЬТУРНЫЙ РАДАР   ПОЛИНА  2026/27│
│                                    │
│ ПОЛИНА,                            │
│ ДОБРО ПОЖАЛОВАТЬ                   │
│ В ВАШ ЛИЧНЫЙ                       │
│ КУЛЬТУРНЫЙ СЕЗОН                   │
│                                    │
│ Хороший спектакль, опера или       │
│ балет — не просто свободный вечер. │
│                                    │
│ Иногда ради события стоит выбрать  │
│ город, два или три дня и компанию. │
│                                    │
│ [short value explanation continues]│
│                                    │
│ СОБЫТИЕ + ГОРОД + КОМПАНИЯ         │
│                                    │
│ ПЕРВЫЙ ОТБОР УЖЕ СОБРАН            │
│ ┌────────────────────────────────┐ │
│ │ УВИДЕТЬ ПРЕДЛАГАЕМЫЙ РЕПЕРТУАР│ │
│ └────────────────────────────────┘ │
│           Как работает радар       │
└────────────────────────────────────┘
```

### 7.2 `На радаре` carousel

```text
┌────────────────────────────────────┐
│ НА РАДАРЕ                    01 / 06│
│ Шесть разных причин выбрать        │
│ следующий культурный опыт.         │
│                                    │
│ ┌──────────────────────────────┐ ┌─│
│ │ [candidate art / image]      │ │ │
│ │                              │ │ │
│ │ ОПЕРА · САНКТ-ПЕТЕРБУРГ      │ │ │
│ │ ПАРСИФАЛЬ                    │ │ │
│ │ Мариинский театр             │ │ │
│ │                              │ │ │
│ │ Редакционная proposition     │ │ │
│ │ в 2–3 коротких строках.      │ │ │
│ │                              │ │ │
│ │ [ЖДЁМ ...]  Следим дальше    │ │ │
│ │                              │ │ │
│ │ ОТКРЫТЬ КАНДИДАТА        →   │ │ │
│ └──────────────────────────────┘ └─│
│     ●  ○  ○  ○  ○  ○              │
│                                    │
│                    Следующий акт 0  │
└────────────────────────────────────┘
```

The next-card fragment is an intentional carousel affordance, not page-level horizontal overflow.

### 7.3 Candidate detail — cultural and city case

```text
┌────────────────────────────────────┐
│ ← НА РАДАРЕ                 01 / 06│
│ [status label]                     │
│                                    │
│ ПАРСИФАЛЬ                          │
│ Опера · Мариинский театр           │
│ Санкт-Петербург                    │
│                                    │
│ ПОЧЕМУ ЭТО ИНТЕРЕСНО               │
│ Editorial rationale...             │
│                                    │
│ СОЗДАТЕЛИ И КОНТЕКСТ               │
│ Theatre / director / conductor /   │
│ significant creators when known.   │
│                                    │
│ ПОЧЕМУ ГОРОД                       │
│ City rationale...                  │
│                                    │
│ МАСШТАБ ПОЕЗДКИ                    │
│ 2–3 дня · без маршрута и брони     │
│                                    │
│ ЧТО ИЗВЕСТНО                       │
│ • confirmed fact                   │
│ • confirmed fact                   │
│                                    │
│ ЧЕГО ПОКА НЕ ЗНАЕМ                 │
│ • date / programme / sale          │
└────────────────────────────────────┘
```

### 7.4 Candidate detail — lifecycle, sources and uncertainty

```text
┌────────────────────────────────────┐
│ СЕЙЧАС                             │
│ [CURRENT STATUS IN RED]            │
│ Human-readable explanation.        │
│                                    │
│ СЛЕДУЮЩИЙ ОЖИДАЕМЫЙ ШАГ            │
│ Programme / dates / sales / check. │
│                                    │
│ СРОЧНОСТЬ                          │
│ Наблюдаем / можно решать /         │
│ требуется действие сейчас          │
│                                    │
│ ИСТОЧНИКИ                          │
│ 1. Official source        ↗        │
│ 2. Supporting source      ↗        │
│                                    │
│ УВЕРЕННОСТЬ                        │
│ Confirmed / partial / research gap │
└────────────────────────────────────┘
```

Examples in implementation mocks must be labelled `Пример статуса` or use clearly fictional placeholders until issue #5 supplies revalidated records.

### 7.5 Ratings and decision controls

```text
┌────────────────────────────────────┐
│ ВАША РЕАКЦИЯ                       │
│                                    │
│ Насколько хочется увидеть событие? │
│ [1] [2] [3] [4] [5]                │
│                                    │
│ Насколько хочется оказаться        │
│ в этом городе?                     │
│ [1] [2] [3] [4] [5]                │
│                                    │
│ РЕШЕНИЕ                            │
│ ┌────────────────────────────────┐ │
│ │ В СЛЕДУЮЩИЙ АКТ               │ │
│ └────────────────────────────────┘ │
│ [Оставить на радаре] [Не моё]      │
│                                    │
│ Ваш выбор хранится только в этом   │
│ браузере на этом устройстве.       │
│ Он не отправляется автоматически.  │
│                                    │
│ [optional local comment field]     │
└────────────────────────────────────┘
```

Selecting a new decision replaces the previous decision. Ratings and decisions remain editable.

### 7.6 Monitoring explanation

```text
┌────────────────────────────────────┐
│ КАК РАБОТАЕТ РАДАР                 │
│                                    │
│ ПОДТВЕРЖДЕНИЕ И ДОСТУПНОСТЬ        │
│ ● Обнаружено                       │
│ ● Официально объявлено             │
│ ● Ждём программу или даты          │
│ ● Даты опубликованы                │
│ ● Ждём продажи                     │
│ ● Продажи открыты                  │
│ ● Подходящие места доступны        │
│                                    │
│ ВАШ ВЫБОР                          │
│ ● На радаре                        │
│ ● В следующий акт                  │
│ ● Выбрано                          │
│ ● Приобретено                      │
│                                    │
│ В Gift Edition проверка источников │
│ выполняется вручную. Автоматические│
│ уведомления — будущая возможность. │
└────────────────────────────────────┘
```

### 7.7 `Следующий акт` — screenshot-ready summary

```text
┌────────────────────────────────────┐
│ КУЛЬТУРНЫЙ РАДАР ПОЛИНЫ            │
│ СЛЕДУЮЩИЙ АКТ                      │
│                                    │
│ В СЛЕДУЮЩИЙ АКТ · 2                │
│ 01 ПАРСИФАЛЬ                       │
│    Событие 5/5 · Город 4/5         │
│    [ЖДЁМ ...]                      │
│ 03 ПАХИТА                          │
│    Событие 4/5 · Город 5/5         │
│    [МОЖНО ДЕЙСТВОВАТЬ]             │
│                                    │
│ ОСТАВИТЬ НА РАДАРЕ · 2             │
│ ...                                │
│                                    │
│ НЕ МОЁ · 1                         │
│ ...                                │
│                                    │
│ МОЖНО ДЕЙСТВОВАТЬ СЕЙЧАС           │
│ • candidate                        │
│                                    │
│ ЖДЁМ ПРОГРАММУ / ДАТЫ / ПРОДАЖУ    │
│ • candidate                        │
│                                    │
│ ┌────────────────────────────────┐ │
│ │ ОТПРАВИТЬ ХУДОЖЕСТВЕННОМУ     │ │
│ │ СОВЕТУ                         │ │
│ └────────────────────────────────┘ │
│ Выбор хранится только на устройстве│
└────────────────────────────────────┘
```

No combined score is required in P0. Separate event and city ratings remain visible.

### 7.8 Share fallback

```text
┌────────────────────────────────────┐
│ ИТОГ НЕ БЫЛ ОТПРАВЛЕН              │
│                                    │
│ На этом устройстве системная       │
│ отправка недоступна или отменена.  │
│                                    │
│ Сделайте скриншот экрана           │
│ «Следующий акт» и отправьте его     │
│ вручную художественному совету.     │
│                                    │
│ [ВЕРНУТЬСЯ К ИТОГУ]                │
└────────────────────────────────────┘
```

## 8. Candidate carousel contract

### 8.1 Interaction

- 6–7 cards in a deliberately ordered editorial sequence;
- horizontal manual swipe on mobile;
- card width approximately 84–90% of the content viewport so the next card remains visible;
- scroll snapping to one card at a time;
- visible `01 / 06` or `01 / 07` indicator plus accessible position announcement;
- no continuous autoplay;
- one optional one-time movement hint after load, stopping after any user interaction;
- no motion hint when reduced motion is requested;
- keyboard and button navigation available as progressive enhancement on larger screens.

### 8.2 Shared card anatomy

Every card shares these semantic slots:

1. candidate number and collection position;
2. art area;
3. event type;
4. title;
5. city;
6. organisation and significant creator when useful;
7. concise editorial proposition;
8. lifecycle label;
9. action posture: `действовать`, `решать`, or `наблюдать`;
10. detail action;
11. persisted decision summary after Polina has responded.

The art area, crop, typography scale, text/image balance and composition may vary by candidate. The information order, status placement and primary interaction must remain predictable.

## 9. Candidate-detail anatomy

Required content order:

1. identity: event, production or festival;
2. organisation, theatre, company and significant creators;
3. concise editorial summary;
4. `Почему это художественно интересно`;
5. `Почему интересен город` or why no trip is needed;
6. restrained trip scale: approximate duration/commitment, not itinerary, price or booking;
7. `Что подтверждено`;
8. `Чего пока не знаем`;
9. current availability status;
10. next expected change or manual check;
11. urgency posture;
12. official and supporting sources, each tied to the claim it supports;
13. uncertainty or risk note;
14. event rating;
15. city rating;
16. three-state decision;
17. device-local persistence disclosure;
18. optional local comment.

`Date` is not a mandatory visual slot when the candidate is honestly waiting for a programme or dates. A human-readable schedule/status label is mandatory.

## 10. Participation and persistence contract

### 10.1 Ratings

- Event rating belongs to a candidate.
- City rating belongs conceptually to stable `city.id` and must be reused across candidates in the same city.
- Ratings use integers `1–5`.
- Unset is distinct from `1`.
- The user can change or clear a rating.
- The UI must not fabricate averages or other participants.

### 10.2 Decision

Exactly one current decision per candidate:

- `В следующий акт`;
- `Оставить на радаре`;
- `Не моё`.

Changing the decision replaces the previous value. `В следующий акт` is a selection dimension, not an availability lifecycle stage.

### 10.3 Required disclosure

Recommended copy:

> Ваш выбор хранится только в этом браузере на этом устройстве. Он не отправляется автоматически и не виден художественному совету. Когда закончите просмотр, откройте «Следующий акт» и отправьте итог.

Secondary note may explain:

> В приватном режиме или после очистки данных браузера выбор может исчезнуть.

The implementation may choose the specific browser-storage mechanism in #4/#7. This document does not choose the stack.

## 11. `Следующий акт` and sharing contract

### 11.1 Summary content

The view must include:

- candidates moved to `В следующий акт`;
- event and city ratings for each;
- candidates left on the radar;
- rejected candidates;
- action-ready candidates;
- candidates waiting for a programme, dates or sales;
- a visible reminder that the result is local until shared.

The default ordering is editorial collection order within each decision group. P0 does not require a combined score or automatic winner.

### 11.2 Screenshot readiness

- summary fits a narrow phone width without horizontal scrolling;
- candidate rows remain legible in a screenshot;
- sticky navigation and transient controls must not cover the summary;
- critical meaning does not rely on animation or colour alone;
- the screenshot includes project/season identity and the persistence caveat;
- long source lists and full descriptions remain outside the screenshot summary.

### 11.3 Web Share behaviour

Primary action label:

> Отправить художественному совету

Where the Web Share API is available, share:

- title: `Культурный радар Полины · Следующий акт`;
- concise text listing shortlisted and monitored candidates with separate ratings;
- the current page URL.

P0 does not require generating or sharing an image file.

If the browser does not support sharing, the share call fails, or Polina cancels it:

- do not claim that the result was sent;
- preserve the summary on screen;
- show screenshot/manual-send guidance;
- allow retry.

## 12. Monitoring explanation contract

### 12.1 Two-track model

The interface must not collapse all states into one linear progress bar.

**Track A — confirmation and availability**

1. `Обнаружено` / `research_candidate`;
2. `Официально объявлено` / `officially_announced`;
3. `Ждём программу или даты` / `waiting_for_dates`;
4. `Даты опубликованы` / `dates_published`;
5. `Ждём продажи` / `waiting_for_sales`;
6. `Продажи открыты` / `sales_open`;
7. `Подходящие места доступны` / `suitable_seats_available`.

**Track B — editorial and user decision**

1. `На радаре` / `on_radar`;
2. `В следующий акт` / `shortlisted`;
3. `Выбрано` / `selected`;
4. `Приобретено` / `purchased`.

A candidate can be `waiting_for_dates` and simultaneously `В следующий акт`, or `sales_open` and still `На радаре`.

### 12.2 Required explanatory copy

> Не всё важное уже стоит в опубликованной афише. У одних кандидатов есть точные даты и билеты; у других подтверждена постановка или фестиваль, но программа, расписание или продажи появятся позже. Культурный радар сохраняет кандидата, показывает, что уже известно, и помогает не пропустить следующий значимый шаг.

Manual v0.1 disclosure:

> В Gift Edition источники проверяются вручную. Автоматическое наблюдение и уведомления — будущая возможность, а не функция этой версии.

### 12.3 State presentation

Each candidate must show:

- current state in text;
- one-sentence evidence/status note;
- what is unknown;
- next expected change;
- urgency posture;
- source link or links.

Colour semantics:

- graphite — established facts and completed steps;
- red — current state, current decision or action requiring attention;
- grey — future or inactive steps.

Text and structure must carry the meaning when colour is unavailable.

## 13. Visual reference review

Review date: 2026-08-06. References were studied for principles only. Layouts, assets, typography files, logos and brand identifiers must not be copied.

| Reference | Useful principle | Do not copy |
| --- | --- | --- |
| Mariinsky Theatre — `https://www.mariinsky.ru/` | Institutional seriousness; exact date/time/venue/cast hierarchy; explicit purchase/no-ticket states; programme density can still remain scannable. | Brand, visual density, layout or ticket-commerce behaviour. |
| Perm Opera and Ballet Theatre — `https://permopera.ru/` | Image-led editorial entry; theatre journal and programme coexist; events are presented as cultural stories rather than inventory alone. | Photography, campaign compositions or identity. |
| Electrotheatre Stanislavsky — `https://electrotheatre.ru/` | Contemporary institution voice; modular event zones; willingness to use unconventional composition while keeping event metadata explicit. | Naming system, visual motifs or experimental complexity that harms mobile reading. |
| Territory Festival — `https://territoryfest.com/` | Festival-specific art direction, poster-like hierarchy and sparse campaign navigation; each edition can have a distinct visual voice. | Campaign graphics, logo or edition layouts. |
| Alexandrinsky Theatre — `https://alexandrinsky.ru/` | Clear stage/venue distinction, calendar-first operational information and explicit sold/buy states. | Institutional ornament, page structure or marketplace-like repetition. |
| Open Ticket v0.5 — `docs/ux/gift-ticket.md` | Internal anchor: condensed poster typography, service notation, route logic and graphite/red/grey semantics. | No redesign or additional ticket claims inside #15. |

### 13.1 Derived design principles

Visual formula:

> **Серьёзность большого театра × современная фестивальная редактура × язык печатного билета.**

Principles:

1. **Editorial before transactional.** Lead with why the candidate matters; show purchase action only when lifecycle evidence supports it.
2. **Poster scale, programme precision.** Use large expressive titles with exact service metadata beneath.
3. **One system, several art directions.** Candidate cards may vary visually, but use the same semantic slots and controls.
4. **Ticket semantics as infrastructure.** Graphite, red, grey, serial notation and stage labels communicate state rather than decorate.
5. **Asymmetry with reading anchors.** Art may break the grid; title, city, status and action remain in predictable positions.
6. **Whitespace is pacing.** Do not compress the experience into a marketplace grid.
7. **Travel stays secondary.** City and trip scale are editorial dimensions, not booking widgets.
8. **Motion demonstrates, then disappears.** No autoplay; motion never competes with reading.
9. **Status is visible and textual.** Never hide lifecycle or uncertainty in fine print or colour alone.
10. **Imagery requires provenance.** Use neutral placeholders in implementation until issue #5/#6 provides legally usable images and credits.

### 13.2 Explicit visual exclusions

- SaaS dashboard cards, charts or admin chrome;
- ticket marketplace grids and repeated buy buttons;
- travel-booking maps, prices, hotels or itineraries;
- velvet, gold, curtains and theatre masks as the default language;
- copied theatre/festival brands or layouts;
- military radar, targets, sweeps or neon control-room visuals;
- decorative motion behind reading content.

## 14. Candidate collection roles and diversity matrix

This matrix defines editorial roles, not current facts or final dataset records.

| Direction | Collection role | Distinct scenario | Presentation archetype | Lifecycle example for design only |
| --- | --- | --- | --- | --- |
| `Парсифаль` · Мариинский театр · Санкт-Петербург | Monumental canonical opera and high-commitment artistic event | Major institution; long-form work; event-first choice | Dark, spatial, programme-precise; creators and duration prominent | Clearly labelled placeholder such as `Ждём подтверждённый следующий шаг` |
| `Дядя Ваня` · `Красный факел` · Андрей Прикотенко · Санкт-Петербург context | Director-led drama encountered through a temporary festival or touring context | Production/company/host context must be explained separately | Editorial portrait/rehearsal language; director and visiting context prominent | Placeholder only; no invented date or festival status |
| `Пахита` · Алексей Мирошниченко · Пермь | New choreographic version in a strong regional ballet centre | Creator-led reinterpretation plus city proposition | Light/kinetic composition; choreography and Perm identity prominent | Placeholder only |
| International Pacific Theatre Festival · Владивосток | Destination-led festival where programme and city form one proposal | Long-distance trip; programme may mature in stages | Festival poster logic; city scale and programme uncertainty prominent | `Ждём программу или даты` as an example only when #5 supports it |
| TEART · Минск | International-theatre monitoring scenario | Cross-border context; festival programme and logistics require separate clarity | Typographic festival card; uncertainty and source provenance prominent | Placeholder only |
| Нижний Новгород · targeted research gap | City-first search for a concrete strong cultural reason to go | Demonstrates that the radar can identify a city opportunity, not merely follow known brands | Must not appear as a production card until a sourced proposition exists | `Research gap — not publishable` |
| Optional seventh: local/no-trip event | Balancing scenario proving travel is not mandatory | Rare Moscow or home-city event worth protecting time for | Dense event-first card with `поездка не требуется` | Candidate selected and verified only in #5 |

### 14.1 Collection rules

- The release needs at least six **publishable, sourced** candidates; a research gap is not a publishable card.
- Nizhny Novgorod remains a targeted search until issue #5 finds a concrete supported proposition.
- If Nizhny Novgorod remains unresolved, issue #5 must provide another distinct sourced sixth candidate rather than publishing a placeholder.
- A seventh candidate is justified only if it adds a missing scenario, preferably a strong local/no-trip case.
- The order should create contrast: institution, director-led drama, ballet reinterpretation, destination festival, international festival, local/no-trip or newly sourced city case.

## 15. Content contracts for issue #5

Issue #5 must provide records that can populate the card and detail slots without inventing content in #6.

Required presentation-ready fields or derivable equivalents:

- stable candidate and city IDs;
- event/production/festival title and type;
- city and country;
- organisation, venue and relevant creators where known;
- concise card proposition;
- longer `whyEvent` and `whyCity`;
- restrained trip-scale note;
- confirmed facts;
- unknown facts or uncertainty;
- availability status and human status note;
- next expected update;
- urgency/action posture;
- sources with type and supported claim;
- image placeholder or usable image with credit;
- editorial role/order in the initial collection.

The runtime data must preserve availability and selection as separate dimensions.

## 16. Implementation-readiness checklist

### 16.1 Issue #4 — foundation

- [ ] Can choose a static-first stack without deciding product behaviour.
- [ ] Supports narrow mobile viewport and intentional horizontal carousel without page overflow.
- [ ] Supports a detail layer or route without requiring complex routing.
- [ ] Provides a device-local storage abstraction without implying shared persistence.
- [ ] Supports Web Share feature detection and fallback.
- [ ] Respects reduced-motion preference.
- [ ] Leaves typography family selection and image loading within performance budget.
- [ ] Does not add backend, auth, database or monitoring infrastructure.

### 16.2 Issue #5 — candidate dataset

- [ ] At least six publishable, sourced candidates exist.
- [ ] Nizhny Novgorod is either a concrete sourced candidate or remains absent from the public collection.
- [ ] Candidate records fill all card/detail slots listed in section 15.
- [ ] Current lifecycle stage is revalidated at the level asserted.
- [ ] No unsupported dates, sales or availability are published.
- [ ] Stable candidate and city IDs are present.
- [ ] City and event rationale remain separate.
- [ ] Source claims and uncertainty are explicit.
- [ ] Collection role and order are assigned.

### 16.3 Issue #6 — landing and catalogue

- [ ] First-screen copy preserves section 3 meaning and CTA.
- [ ] Printed ticket mechanics remain secondary to product value.
- [ ] Carousel uses manual swipe, next-card fragment and position indicator.
- [ ] Cards vary artistically but preserve shared anatomy.
- [ ] Detail exposes known/unknown, lifecycle, urgency, sources and uncertainty.
- [ ] Monitoring explanation uses the two-track model.
- [ ] No page-level horizontal overflow exists at 320–430 px.
- [ ] Visual system preserves Open Ticket state semantics without redesigning it.

### 16.4 Issue #7 — participation and `Следующий акт`

- [ ] Event rating is candidate-keyed.
- [ ] City rating is stable-city-keyed.
- [ ] Three-state decision is exclusive and editable.
- [ ] Device-local disclosure appears before or at first save and in the summary.
- [ ] No false shared or multi-user state is shown.
- [ ] `Следующий акт` shows shortlisted, kept and rejected groups.
- [ ] Action-ready and waiting candidates are separated.
- [ ] Summary is screenshot-ready.
- [ ] Web Share is feature-detected.
- [ ] Cancel/failure/unsupported states do not claim successful sending.

### 16.5 Cross-issue validation

- [ ] Product terms match `docs/product/product-language.md`.
- [ ] Availability and selection remain separate as required by `candidate-model.md`.
- [ ] Open Ticket v0.5 remains unchanged.
- [ ] No current candidate facts were introduced by the UX specification.
- [ ] No optional feature threatens the 8 August 2026 delivery target.

## 17. Owner approval gates

The Draft PR should not be marked Ready until the owner decides:

1. approve or revise the experience statement in section 2;
2. approve the first-screen copy direction and exact primary CTA;
3. approve a 6-card minimum with a seventh only for a distinct scenario;
4. approve the local/no-trip role as the preferred seventh balancing scenario;
5. approve card-level browsing with ratings primarily in candidate detail rather than on the compact carousel card;
6. approve the two-track monitoring model;
7. approve no combined score in P0;
8. approve Web Share text/URL as P0 and generated share image as optional;
9. approve the device-local disclosure wording;
10. approve the external reference set and derived visual principles;
11. approve this document as the implementation contract for #4–#7.

## 18. Validation plan for this specification

Before owner approval:

- compare terminology with `product-language.md`;
- compare lifecycle semantics with `candidate-model.md`;
- compare visual/state semantics with Open Ticket v0.5;
- verify every issue #15 acceptance criterion is represented;
- verify issue #4–#7 can act without introducing new product decisions;
- verify examples contain no unmarked current dates, sales or availability claims;
- verify the branch contains documentation changes only;
- perform an owner walkthrough from QR entry to screenshot/manual share fallback.
