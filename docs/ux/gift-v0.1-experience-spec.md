# Gift Edition v0.1 Experience Contract

## 1. Status, purpose and authority

This document is the **approved implementation contract** for **Культурный радар Полины · Сезон 2026/27** under issue #15.

It translates the accepted product concept into a bounded mobile experience that issues #4, #5, #6 and #7 can implement without introducing new product behaviour inside code or runtime data.

Source roles:

- `docs/product/vision.md` defines the product thesis;
- `docs/product/gift-mvp.md` defines the Gift Edition intent;
- `docs/product/product-language.md` defines canonical terminology;
- `docs/domain/candidate-model.md` defines domain and data distinctions;
- `docs/ux/website-concept.md` remains the broader website concept;
- `docs/ux/gift-ticket.md` defines the accepted Open Ticket v0.5 baseline;
- this document defines the exact Gift Edition v0.1 mobile flow and presentation contract.

For Gift Edition v0.1, this document governs exact hierarchy, copy direction, navigation, evaluation mechanics and summary behaviour. Where an older example in `website-concept.md` conflicts with this contract, this contract prevails.

The contract does not assert current event dates, ticket sales or seat availability. Issue #5 must revalidate all publishable candidate facts.

## 2. Approved experience statement

> Polina opens the printed Open Ticket and enters a personal cultural season that is already underway. She sees a small curated repertoire in which an event, a city and the people to share it with form one possible experience. For each candidate, she understands why it matters, what is confirmed, what remains unknown and what Cultural Radar is following. She rates the event and city separately, reviews the completed result in `Следующий акт`, and shares a compact summary with the artistic council.

The experience communicates five ideas in this order:

1. this is Polina's personal cultural season;
2. Cultural Radar performs difficult curatorial discovery and continued observation, not ordinary listing search;
3. a meaningful proposal combines **event + city + company** without making travel mandatory;
4. the first repertoire is already prepared;
5. Polina is a co-author of the final choice, while her v0.1 ratings remain device-local until she shares them.

Success criterion:

> Within the first screen and one short continuation, Polina understands why the website exists, sees that a curated selection is ready and knows the next action.

## 3. Core separation of concerns

The interface must keep three layers separate.

### 3.1 Navigation

- `На радаре` is the repertoire screen containing all six candidate cards.
- `Следующий акт` is the completed summary screen.
- `На радаре` and `Следующий акт` are not candidate states, ratings or user decisions.

### 3.2 User evaluation

Each candidate receives two independent ratings:

- event rating `1–5`;
- city rating `1–5`, keyed by stable city identity.

There is no separate `shortlist`, `keep`, `reject`, `В следующий акт`, `Оставить на радаре`, `Не моё` or `Исключить` action in v0.1.

`Не моё` is only the human explanation of event rating `1/5`.

### 3.3 Candidate information status

Each candidate has an informational status explaining:

- what is confirmed now;
- which dates are known, if any;
- what remains unknown;
- what Cultural Radar is following next;
- whether any action is currently possible.

The candidate status does not depend on Polina's ratings.

## 4. First screen and value proposition

### 4.1 Approved hierarchy

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
освободить несколько дней
и собрать хорошую компанию.

Value explanation
Москва и Петербург дают тысячи возможностей.
Но найти действительно важное событие — значит
разбираться в театрах и постановщиках,
следить за фестивалями, гастролями,
расписаниями и началом продаж —
и не ограничивать себя одним городом.

Культурный радар находит такие возможности,
проверяет, что уже известно,
и собирает их в личный репертуар.

Formula
СОБЫТИЕ + ГОРОД + КОМПАНИЯ

Prepared-state note
ПЕРВЫЙ ОТБОР УЖЕ СОБРАН

Primary action
ОТКРЫТЬ РЕПЕРТУАР

Secondary action
КАК РАБОТАЕТ РАДАР
```

Exact line breaks may adapt to the viewport. The value proposition must not be reduced to generic gift language or to the printed ticket's two-seat mechanics.

### 4.2 Ticket continuity

The first viewport may carry `ОТКРЫТЫЙ БИЛЕТ · ПОЛИНА + 1` as a restrained service label. Detailed gift mechanics belong in a short continuation or `О подарке`, not as the hero's primary message.

The website preserves continuity with Open Ticket v0.5 through:

- project and season naming;
- condensed display, neutral text and service/mono typography roles;
- graphite, red and grey state semantics;
- `На радаре`, `Выбор открыт` and `Следующий акт` vocabulary;
- Polina's co-author role;
- the route from completed first selection to open choice.

Open Ticket v0.5 remains unchanged.

## 5. Functional cut

### 5.1 P0

- QR landing without login or installation;
- approved first-screen hierarchy and primary CTA;
- exactly six publishable, sourced candidate cards;
- mobile manual-swipe repertoire carousel;
- visible next-card fragment and `01 / 06` position indicator;
- candidate detail with cultural rationale, city rationale, known/unknown facts, current status, dates, next expected change, sources and uncertainty;
- direct previous/next navigation between candidate details;
- event rating `1–5`;
- city rating `1–5` keyed by stable city identity;
- human scale explanations for all five values;
- visible evaluation state on each repertoire card;
- automatic device-local persistence;
- progress `Оценено X из 6`;
- `Следующий акт` unlocked after all six candidates have both ratings;
- transparent summary score `eventRating + cityRating`;
- screenshot-ready summary;
- system Share contract with screenshot/manual-send fallback;
- mobile-first visual grammar aligned with Open Ticket v0.5;
- reduced-motion-safe behaviour.

### 5.2 Optional only if P0 is complete

- free-text `Комментарий художественному совету` stored device-locally;
- restrained transition between card and detail;
- generated share image rather than sharing text and URL;
- filters after the full editorial sequence remains visible.

### 5.3 Out of scope

- application code, stack selection or dependencies in issue #15;
- backend, database, authentication or shared persistence;
- CMS or admin interface;
- automated crawling or source-change detection;
- automated notification infrastructure;
- ticket checkout or travel planning;
- production image acquisition and licensing;
- current candidate fact verification or final runtime data;
- final high-fidelity design or Figma work;
- Open Ticket v0.5 redesign;
- opaque ranking or recommendation algorithms;
- purchase, booking or fulfilment states in the v0.1 user flow.

Manual editorial follow-up may fulfil the product promise to keep watching, update status and inform Polina. The interface must not claim that this process is automated.

## 6. Information architecture

```text
QR entry
└── Entry / value proposition
    ├── Primary: Открыть репертуар
    └── Secondary: Как работает радар

На радаре
├── Six-card repertoire carousel
│   └── Candidate detail
│       ├── Cultural proposition
│       ├── City / trip scale
│       ├── Known / unknown
│       ├── Current status and dates
│       ├── What Radar follows next
│       ├── Sources / uncertainty
│       ├── Event rating
│       ├── City rating
│       └── Previous / next candidate
├── Evaluation progress
└── Следующий акт
    ├── All six evaluated candidates
    ├── Transparent ranking
    ├── Current candidate statuses
    └── Share result
```

A compact navigation affordance may expose `На радаре` and evaluation progress after the hero, provided it does not obstruct reading or screenshots.

## 7. Full user flow

1. Polina scans the Open Ticket QR.
2. The page opens in a mobile browser without login.
3. The first screen greets Polina and explains the curatorial value.
4. Polina taps `Открыть репертуар`.
5. The `На радаре` screen shows the first of six large swipeable cards and a fragment of the next card.
6. Polina may first browse the complete carousel without opening details.
7. She opens any candidate in any order.
8. Candidate detail explains the artistic case, city case, trip scale, confirmed facts, unknowns, dates, current status, next expected update and sources.
9. Polina rates the event and city separately.
10. Each selected value is saved immediately in the current browser.
11. She moves directly to the previous or next candidate without returning to the repertoire screen, or returns to `На радаре` when preferred.
12. The repertoire card shows whether evaluation is absent, partial or complete and displays current values when present.
13. Progress shows `Оценено X из 6`.
14. After all six candidates have both ratings, `Следующий акт` becomes active.
15. `Следующий акт` shows all six candidates sorted by the transparent sum of event and city ratings while preserving both component ratings.
16. Polina taps `Отправить художественному совету`.
17. Where system sharing is available, the browser share sheet opens with a concise textual result and page URL.
18. Where sharing is unavailable, fails or is cancelled, the page preserves the summary and shows screenshot/manual-send instructions without claiming successful delivery.

No step may imply that ratings are already visible on another device.

## 8. Repertoire contract

Gift Edition v0.1 contains exactly six candidates:

1. `Парсифаль` — Мариинский театр, Санкт-Петербург;
2. `Дядя Ваня` — театр `Красный факел`;
3. `Пахита` — новая версия Алексея Мирошниченко, Пермь;
4. Международный Тихоокеанский театральный фестиваль — Владивосток;
5. TEART — Минск;
6. a concrete cultural proposition in Нижний Новгород, to be found and validated in the dedicated research issue.

Rules:

- six is the fixed release size, not a minimum range;
- a seventh candidate is not required in v0.1;
- the Nizhny Novgorod direction is approved, but a research ticket is not a publishable candidate;
- do not publish an empty card such as `Ищем повод поехать в Нижний Новгород`;
- if no concrete sourced proposition is found, the release dataset is incomplete;
- all six public cards require sufficient sources and current status validation from issue #5.

## 9. `На радаре` repertoire carousel

### 9.1 Behaviour

- manual swipe only;
- no autoplay;
- candidate order is editorial and stable;
- next-card fragment signals horizontal movement;
- position indicator remains visible;
- swiping may be circular: after `06 / 06`, the next swipe may return to `01 / 06`;
- circular navigation must not hide the real position;
- page-level horizontal overflow is prohibited;
- reduced-motion preferences must be respected.

### 9.2 Shared card anatomy

Every card contains:

- candidate number;
- image or controlled placeholder;
- event type;
- title;
- organisation and relevant creator;
- city;
- concise editorial proposition;
- current informational status;
- date or date-status;
- evaluation state;
- action `Открыть`.

### 9.3 Evaluation state on card

Before evaluation:

```text
ВАША ОЦЕНКА
Ещё не оценено
```

Partial evaluation:

```text
Событие  4 / 5
Город    —
```

Complete evaluation:

```text
ОЦЕНЕНО
Событие  4 / 5
Город    3 / 5
Итого    7 / 10
```

`Итого` is allowed only when both component ratings are visible nearby.

## 10. Candidate detail

Candidate detail must expose:

- title, type, organisation, creators and city;
- why the event matters;
- why the city matters;
- restrained trip-scale note;
- confirmed facts;
- unknown facts;
- current status;
- known dates or date-status;
- what Cultural Radar follows next;
- source links and the claim each source supports;
- uncertainty;
- event rating;
- city rating;
- direct previous/next candidate navigation;
- return to `На радаре`.

Navigation labels:

```text
← НА РАДАРЕ

← ПРЕДЫДУЩИЙ КАНДИДАТ
СЛЕДУЮЩИЙ КАНДИДАТ →
```

After completing the last missing rating pair, the interface may replace the ordinary next action with:

```text
ОТКРЫТЬ СЛЕДУЮЩИЙ АКТ
```

## 11. Rating contract

### 11.1 Questions

```text
Насколько хочется увидеть это событие?
[1] [2] [3] [4] [5]

Насколько хочется оказаться в этом городе?
[1] [2] [3] [4] [5]
```

### 11.2 Event scale

| Rating | Meaning |
| --- | --- |
| `1` | Не моё |
| `2` | Скорее не интересно |
| `3` | Интересно, но не приоритет |
| `4` | Очень интересно |
| `5` | Очень хочу увидеть |

Persistent endpoint labels:

```text
Не моё                         Очень хочу увидеть
```

### 11.3 City scale

| Rating | Meaning |
| --- | --- |
| `1` | Не хочется |
| `2` | Скорее не привлекает |
| `3` | Было бы интересно |
| `4` | Очень хочется |
| `5` | Очень хочу поехать |

Persistent endpoint labels:

```text
Не хочется                     Очень хочу поехать
```

All five meanings belong in the implementation contract and accessibility labels. The visual interface may show only endpoint labels plus a dynamic explanation of the selected value.

Example:

```text
Вы выбрали 2 / 5
Скорее не интересно
```

Do not use thumbs-up/down endpoints: they imply a binary choice and weaken the meaning of values `2–4`.

### 11.4 City identity

A city rating belongs to a stable city identity, not independently to each candidate card. If multiple candidates use the same city, changing the city rating updates all of them.

### 11.5 Completion

A candidate is complete when both ratings are present. A comment is optional and does not affect completion.

## 12. Progress and `Следующий акт`

### 12.1 Progress before completion

Show:

```text
ОЦЕНЕНО 4 ИЗ 6
```

The existence of the future summary may remain visible in a disabled form:

```text
СЛЕДУЮЩИЙ АКТ
Оцените ещё 2 кандидатов
```

The active summary action must not appear until all six candidates have both ratings.

### 12.2 Summary behaviour

`Следующий акт` is a summary and share screen, not a candidate state and not a manually assembled shortlist.

It shows all six candidates sorted by:

1. `eventRating + cityRating`, descending;
2. event rating, descending, when totals are equal;
3. original editorial order when both values are equal.

Example:

```text
ПАРСИФАЛЬ
Событие  5 / 5
Город    4 / 5
Итого    9 / 10
Ждём даты
```

The combined value is a transparent orientation score. It never replaces the two component ratings.

### 12.3 Editing after completion

Ratings remain editable after the summary opens. Any change immediately recalculates order and the screenshot/share result.

## 13. Candidate status and dates

### 13.1 User-facing contract

Candidate status is a required information block, not a hidden technical field.

It must answer:

- `Сейчас` — what is true now;
- `Даты` — what is known about performances;
- `Что дальше` — what Cultural Radar is following;
- `Действие` — whether anything can be done now;
- `Источники` — evidence for the current statement.

Example:

```text
СЕЙЧАС
Постановка подтверждена, даты следующих показов
ещё не объявлены.

ЧТО ДАЛЬШЕ
Следим за публикацией афиши. Когда появится
важное обновление, изменим статус и сообщим вам.
```

In v0.1, source checks and status updates may be performed manually. This is an implementation detail. The user-facing promise is that Cultural Radar continues to follow the candidate, updates meaningful information and informs Polina. The interface must not falsely describe the process as automated.

### 13.2 Human-readable statuses

Use the smallest accurate status supported by evidence:

1. `Кандидат исследования`;
2. `Официально анонсировано`;
3. `Ждём программу или подтверждение`;
4. `Ждём даты`;
5. `Даты опубликованы`;
6. `Ждём продажи`;
7. `Продажи открыты`;
8. `Подходящие места доступны`.

Not every candidate must pass through every label. Do not imply suitable seats from a generic sales-open state.

### 13.3 Date presentation

- one performance: `14 сентября`;
- two performances: `14 и 16 сентября`;
- several performances in a compact range: `14–22 сентября`;
- a longer period: `с сентября по ноябрь`;
- confirmed festival period without a detailed programme: `Фестиваль пройдёт 10–20 октября; программа ожидается`;
- no concrete dates: `Даты ожидаются`.

When a range hides important differences, detail may expand the exact dates.

### 13.4 No terminal fulfilment states in v0.1

Do not expose `Выбрано`, `Приобретено`, `Забронировано` or `Поездка запланирована` in the Gift Edition v0.1 flow.

The current gift task is to choose one preferred experience and send the completed feedback. The artistic council handles the subsequent decision outside the interface.

Future product versions may add decision and fulfilment states when a user follows or chooses multiple events. That future extension must remain separate from navigation and ratings.

## 14. Device-local persistence

### 14.1 Required behaviour

- every rating saves immediately;
- ratings restore when the page is reopened in the same browser on the same device;
- ratings remain editable;
- summary order recalculates after edits;
- sharing does not lock the ratings;
- another browser, another device or cleared browser data does not inherit the ratings.

### 14.2 Required copy after first save

> **Ваш выбор сохранён**  
> Оценки хранятся только в этом браузере на этом устройстве. Вы можете вернуться и изменить их. Художественный совет увидит результат только после того, как вы отправите `Следующий акт`.

Do not require a blocking modal before evaluation.

### 14.3 Required summary copy

> Результат пока хранится только на этом устройстве и ещё не отправлен.

Do not say `Ваш голос принят` or imply shared state.

## 15. Share contract

Primary action:

```text
ОТПРАВИТЬ ХУДОЖЕСТВЕННОМУ СОВЕТУ
```

P0 uses the system share sheet where supported. The payload contains:

- concise `Следующий акт` results;
- each candidate's total and component ratings;
- the page URL.

Example:

```text
Мой Следующий акт

1. Парсифаль — 9/10
   Событие 5 · Город 4

2. Пахита — 8/10
   Событие 4 · Город 4

Культурный радар Полины · Сезон 2026/27
```

The URL does not contain device-local ratings. Ratings must be present in shared text or in a screenshot.

If sharing is unsupported, fails or is cancelled:

- do not claim the result was sent;
- preserve the summary;
- show screenshot/manual-send guidance;
- allow retry.

Required fallback copy:

> **Результат ещё не отправлен**  
> Сделайте скриншот этого экрана и отправьте его художественному совету.

A generated share image is optional and not P0.

## 16. Visual direction

Visual formula:

> **Серьёзность большого театра × современная фестивальная редактура × язык печатного билета.**

### 16.1 Shared system

All six candidates use predictable locations for:

- event type;
- title;
- organisation and creators;
- city;
- editorial proposition;
- candidate status;
- evaluation state;
- navigation and actions.

### 16.2 Individual character

Candidate cards may vary in:

- composition;
- title scale;
- imagery or graphic treatment;
- whitespace and density;
- decorative detail appropriate to the cultural direction.

Art direction must not move essential metadata, status, ratings or controls into unpredictable places.

### 16.3 Colour semantics

- graphite — primary information and confirmed facts;
- red — current status, selected rating or primary action;
- grey — unknown, expected or inactive information.

Text and structure must carry the same meaning when colour is unavailable.

### 16.4 Derived principles

1. Editorial before transactional.
2. Poster scale with programme precision.
3. One system with several art directions.
4. Ticket semantics as information infrastructure.
5. Asymmetry with stable reading anchors.
6. Whitespace as pacing.
7. City and trip scale remain secondary to the cultural proposition.
8. Motion demonstrates, then disappears.
9. Status is visible and textual.
10. Imagery requires provenance and credit.

### 16.5 Exclusions

- ticket marketplace grids;
- travel-booking maps, hotels, prices or itineraries;
- SaaS dashboards and admin chrome;
- literal military radar, targets or sweeps;
- default velvet, gold, curtains and theatre masks;
- copied theatre/festival identities or layouts;
- decorative motion behind reading content.

### 16.6 Reference set

References were studied for principles only. Do not copy layouts, assets, logos, typography files or brand identifiers.

- Mariinsky Theatre — institutional seriousness and precise programme hierarchy;
- Perm Opera and Ballet Theatre — image-led editorial entry;
- Electrotheatre Stanislavsky — contemporary institutional voice and modular composition;
- Territory Festival — poster hierarchy and edition-specific art direction;
- Alexandrinsky Theatre — clear calendar, venue and availability information;
- Open Ticket v0.5 — internal anchor for condensed typography and graphite/red/grey semantics.

## 17. Content contract for issue #5

Each publishable candidate must provide:

- stable candidate ID and slug;
- stable city ID;
- title and event type;
- city and country;
- organisation, venue and creators where known;
- concise card proposition;
- longer `whyEvent` and `whyCity`;
- restrained trip-scale note;
- confirmed facts;
- unknown facts;
- current informational status;
- human status explanation;
- date label and exact dates or range where known;
- next expected update;
- current action posture;
- sources with type and supported claim;
- image placeholder or licensed/usable image with credit;
- editorial order `1–6`.

Nizhny Novgorod is not publishable until issue #5 identifies and sources a concrete cultural proposition.

## 18. Low-fidelity states

### 18.1 Entry

```text
┌────────────────────────────────────┐
│ КУЛЬТУРНЫЙ РАДАР · ПОЛИНА · 26/27 │
│                                    │
│ ПОЛИНА, ДОБРО ПОЖАЛОВАТЬ           │
│ В ВАШ ЛИЧНЫЙ КУЛЬТУРНЫЙ СЕЗОН      │
│                                    │
│ [value explanation]                │
│                                    │
│ СОБЫТИЕ + ГОРОД + КОМПАНИЯ         │
│ ПЕРВЫЙ ОТБОР УЖЕ СОБРАН            │
│                                    │
│ [ ОТКРЫТЬ РЕПЕРТУАР ]              │
│ Как работает радар                 │
└────────────────────────────────────┘
```

### 18.2 Repertoire card

```text
┌────────────────────────────────────┐
│ НА РАДАРЕ                    01 / 06│
│                                    │
│ ┌──────────────────────────────┐ ┌─│
│ │ [candidate image]            │ │ │
│ │ ОПЕРА · САНКТ-ПЕТЕРБУРГ      │ │ │
│ │ ПАРСИФАЛЬ                    │ │ │
│ │ Мариинский театр             │ │ │
│ │                              │ │ │
│ │ [editorial proposition]      │ │ │
│ │ ЖДЁМ ДАТЫ                    │ │ │
│ │                              │ │ │
│ │ ОЦЕНЕНО                      │ │ │
│ │ Событие 5 / 5 · Город 4 / 5 │ │ │
│ │ Итого 9 / 10                 │ │ │
│ │                              │ │ │
│ │ ОТКРЫТЬ                  →   │ │ │
│ └──────────────────────────────┘ └─│
│ ●  ○  ○  ○  ○  ○                 │
│ ОЦЕНЕНО 4 ИЗ 6                   │
└────────────────────────────────────┘
```

### 18.3 Ratings and navigation

```text
┌────────────────────────────────────┐
│ ← НА РАДАРЕ                 01 / 06│
│                                    │
│ НАСКОЛЬКО ХОЧЕТСЯ УВИДЕТЬ?         │
│ [1] [2] [3] [4] [5]                │
│ Не моё        Очень хочу увидеть   │
│ Вы выбрали 4 / 5 · Очень интересно │
│                                    │
│ НАСКОЛЬКО ХОЧЕТСЯ В ГОРОД?         │
│ [1] [2] [3] [4] [5]                │
│ Не хочется      Очень хочу поехать │
│                                    │
│ ← ПРЕДЫДУЩИЙ      СЛЕДУЮЩИЙ →      │
└────────────────────────────────────┘
```

### 18.4 Locked and active summary

```text
СЛЕДУЮЩИЙ АКТ
Оцените ещё 2 кандидатов
```

```text
СЛЕДУЮЩИЙ АКТ

1. ПАРСИФАЛЬ                 9 / 10
   Событие 5 · Город 4 · Ждём даты

2. ПАХИТА                    8 / 10
   Событие 4 · Город 4 · Продажи открыты

[ ОТПРАВИТЬ ХУДОЖЕСТВЕННОМУ СОВЕТУ ]
```

## 19. Implementation-readiness checklist

### 19.1 Issue #4 — foundation

- [ ] Static-first stack can implement the approved behaviour without backend state.
- [ ] Narrow mobile viewport supports intentional carousel movement without page overflow.
- [ ] Candidate detail supports direct previous/next navigation.
- [ ] Device-local ratings use stable candidate and city keys.
- [ ] Summary unlock requires both ratings for all six candidates.
- [ ] System Share is feature-detected.
- [ ] Reduced-motion preference is respected.
- [ ] No backend, auth, database or automated monitoring infrastructure is introduced.

### 19.2 Issue #5 — dataset

- [ ] Exactly six publishable, sourced candidates exist.
- [ ] Nizhny Novgorod is a concrete sourced candidate, not a research placeholder.
- [ ] Candidate records fill every content slot in section 17.
- [ ] Status and dates are revalidated to the level asserted.
- [ ] No unsupported date, sale or availability claim is published.
- [ ] Stable candidate and city IDs exist.
- [ ] City and event rationale remain separate.
- [ ] Sources and uncertainty remain explicit.
- [ ] Editorial order `1–6` is assigned.

### 19.3 Issue #6 — landing, repertoire and detail

- [ ] Primary CTA is `Открыть репертуар`.
- [ ] `На радаре` is a navigation screen, not a candidate action.
- [ ] Carousel is manual and shows next-card fragment, position and evaluation state.
- [ ] Detail supports previous/next candidate without returning to the carousel.
- [ ] Rating endpoints and selected-value explanations are visible.
- [ ] Candidate status explains now, dates, next update and sources.
- [ ] No page-level horizontal overflow exists at 320–430 px.
- [ ] Open Ticket state semantics remain intact.

### 19.4 Issue #7 — evaluation, summary and share

- [ ] Event rating is candidate-keyed.
- [ ] City rating is stable-city-keyed.
- [ ] No candidate-level selection action exists.
- [ ] `Не моё` is the label for event rating `1`, not a separate action.
- [ ] Card evaluation state supports absent, partial and complete ratings.
- [ ] Device-local disclosure appears after first save and in summary.
- [ ] `Следующий акт` remains inactive until all six candidates are complete.
- [ ] Summary contains all six candidates sorted by transparent sum.
- [ ] Component ratings remain visible beside the total.
- [ ] Summary remains screenshot-ready.
- [ ] Share cancellation or failure never claims successful sending.

### 19.5 Cross-issue validation

- [ ] Terms match `docs/product/product-language.md`.
- [ ] Data shape matches `docs/domain/candidate-model.md`.
- [ ] Open Ticket v0.5 remains unchanged.
- [ ] No current candidate facts were invented by this contract.
- [ ] No optional feature threatens the target delivery.

## 20. Approved decisions

The owner approved:

1. the experience statement in section 2;
2. first-screen direction and CTA `Открыть репертуар`;
3. exactly six candidates with Nizhny Novgorod as the unresolved sixth research direction;
4. no seventh candidate in v0.1;
5. navigation, ratings and scale explanations as separate layers;
6. event and city ratings as the only user evaluation controls;
7. card-level display of evaluation state and current ratings;
8. direct previous/next navigation between candidate details;
9. `Следующий акт` as a completed summary, not a shortlist state;
10. summary unlock only after all six candidates have both ratings;
11. transparent total `eventRating + cityRating`;
12. candidate status as required information with a continued observation promise;
13. no terminal selection or purchase states in v0.1;
14. device-local persistence wording;
15. system text sharing with screenshot/manual-send fallback;
16. the visual direction and reference principles;
17. this document as the implementation contract for issues #4–#7.

Issue #15 remains in Draft PR review until the documentation diff is validated and the owner explicitly decides the PR may become Ready.