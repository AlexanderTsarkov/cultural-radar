# Gift Edition v0.1 Experience Contract

## 1. Status, purpose and authority

This document is the **approved implementation contract** for **Культурный радар Полины · Сезон 2026/27** under issue #15.

It translates the accepted product concept into a bounded mobile experience that issues #4, #5, #6 and #7 can implement without introducing new product behaviour inside code or runtime data.

Source roles:

- `docs/product/vision.md` defines the product thesis;
- `docs/product/gift-mvp.md` defines the Gift Edition intent and release boundary;
- `ITERATION.md` defines the current delivery target and active P0 workstreams;
- `docs/product/product-language.md` defines canonical terminology;
- `docs/domain/candidate-model.md` defines domain and data distinctions;
- `docs/ux/website-concept.md` remains the broader website concept;
- `docs/ux/gift-ticket.md` defines the accepted Open Ticket v0.5 baseline;
- this document defines the exact Gift Edition v0.1 mobile flow and presentation contract.

For Gift Edition v0.1, this document governs exact hierarchy, copy direction, navigation, evaluation mechanics, comments, summary behaviour and share behaviour. Where an older example in `website-concept.md` conflicts with this contract, this contract prevails.

The contract does not assert current event dates, ticket sales or seat availability. Issue #5 must revalidate all publishable candidate facts.

## 2. Approved experience statement

> Polina opens the printed Open Ticket and enters a personal cultural season that is already underway. She sees a small curated repertoire in which an event, a city and the people to share it with form one possible experience. For each candidate, she understands why it matters, what is confirmed, what remains unknown and what Cultural Radar is following. She rates the event and city separately, may leave a comment for the artistic council, reviews the completed result in `Следующий акт`, and shares a compact summary.

The experience communicates five ideas in this order:

1. this is Polina's personal cultural season;
2. Cultural Radar performs difficult curatorial discovery and continued observation, not ordinary listing search;
3. a meaningful proposal combines **event + city + company** without making travel mandatory;
4. the first repertoire is already prepared;
5. Polina is a co-author of the final choice, while her v0.1 ratings and comments remain device-local until she shares them.

Success criterion:

> Within the first screen and one short continuation, Polina understands why the website exists, sees that a curated selection is ready and knows the next action.

## 3. Core separation of concerns

The interface must keep four layers separate.

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

### 3.3 User comment

Each candidate detail contains an editable control labelled:

```text
Комментарий художественному совету
```

The control is required in P0. Entering a comment is optional.

A comment:

- is stored device-locally;
- may be changed or removed;
- does not affect rating completion;
- does not affect ordering in `Следующий акт`;
- may be included in the shared result when non-empty.

### 3.4 Candidate information status

Each candidate has an informational status explaining:

- what is confirmed now;
- which dates are known, if any;
- what remains unknown;
- what Cultural Radar is following next;
- whether any practical action is currently possible.

The candidate status does not depend on Polina's ratings or comment.

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
- candidate detail with cultural rationale, city rationale, known/unknown facts, current status, dates, next expected change, action posture, sources and uncertainty;
- direct previous/next navigation between candidate details;
- event rating `1–5`;
- city rating `1–5` keyed by stable city identity;
- human scale explanations for all five values;
- editable `Комментарий художественному совету` control for every candidate;
- device-local comment persistence, editing and removal;
- visible evaluation state on each repertoire card;
- automatic device-local rating persistence;
- progress `Оценено X из 6`;
- `Следующий акт` unlocked after all six candidates have both ratings;
- transparent summary score `eventRating + cityRating`;
- screenshot-ready summary;
- non-empty comments included in the share result when practical;
- system Share contract with screenshot/manual-send fallback;
- mobile-first visual grammar aligned with Open Ticket v0.5;
- reduced-motion-safe behaviour.

### 5.2 Optional only if P0 is complete

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

## 6. Mobile information architecture

The experience may use one mobile-first page with anchored sections plus a candidate detail layer. Separate routes are not required.

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
│       ├── Status, dates and action posture
│       ├── Sources / uncertainty
│       ├── Event rating
│       ├── City rating
│       ├── Comment for artistic council
│       └── Previous / next candidate
├── Monitoring explanation
└── Следующий акт
    ├── All six completed evaluations
    ├── Transparent totals and components
    ├── Candidate statuses
    ├── Non-empty comments where useful
    └── Share result
```

Persistent navigation is not required. A compact sticky affordance may expose `На радаре`, progress and the locked or active `Следующий акт`, provided it does not obstruct screenshots or reading.

## 7. Full user flow

1. Polina scans the Open Ticket QR.
2. The page opens directly in a mobile browser without login.
3. The first screen greets Polina and explains the curatorial value.
4. Polina taps `Открыть репертуар`.
5. The first candidate is shown as a large swipeable card; part of the next card is visible.
6. Polina may browse the complete carousel before opening any candidate.
7. She opens any candidate detail.
8. The detail explains the artistic case, city case, trip scale, confirmed facts, unknowns, status, dates, next expected update, action posture and sources.
9. Polina rates the event and city separately.
10. She may enter or edit `Комментарий художественному совету`.
11. Ratings and comment save only in the current browser on the current device.
12. Polina moves directly to the previous or next candidate without returning to the carousel, or returns to `На радаре` at any point.
13. The repertoire card shows whether evaluation is absent, partial or complete and displays current scores when present.
14. At any point she may open `Как работает радар` or the status explanation.
15. `Следующий акт` remains inactive until all six candidates have both ratings.
16. After completion, `Следующий акт` displays all six candidates sorted by the transparent score.
17. Polina may return and revise any rating or comment; the summary updates immediately.
18. Polina taps `Отправить художественному совету`.
19. Where system Share is available, the browser share sheet opens with the result and page URL.
20. Where Share is unavailable, fails or is cancelled, the page shows screenshot/manual-send instructions without claiming transmission.

No step may imply that ratings or comments are already visible on another device.

## 8. Candidate collection

Gift Edition v0.1 contains exactly six candidate directions:

1. `Парсифаль` — Мариинский театр, Санкт-Петербург;
2. `Дядя Ваня` — театр `Красный факел`;
3. `Пахита` — новая версия Алексея Мирошниченко, Пермь;
4. Международный Тихоокеанский театральный фестиваль — Владивосток;
5. TEART — Минск;
6. a concrete cultural proposition in Нижний Новгород, to be found and validated in the dedicated research issue.

Rules:

- the Nizhny Novgorod direction is approved, but a research ticket is not a publishable candidate;
- do not publish an empty card such as `Ищем повод поехать в Нижний Новгород`;
- if no concrete sourced proposition is found, the release dataset is incomplete;
- all six public cards require sufficient sources and current status validation from issue #5;
- a seventh candidate is not part of v0.1.

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

A non-empty comment may be indicated with a restrained `Есть комментарий` marker, but comment text does not need to appear on the compact card.

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
- current action posture;
- source links and the claim each source supports;
- uncertainty;
- event rating;
- city rating;
- editable comment control;
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

## 12. Comment contract

### 12.1 Required control

Every candidate detail contains:

```text
КОММЕНТАРИЙ ХУДОЖЕСТВЕННОМУ СОВЕТУ
[editable multiline input]
```

The control must be usable on mobile and must not be hidden behind an optional feature flag.

### 12.2 Behaviour

- empty comment is allowed;
- save locally after input change, using a reasonable debounce if needed;
- restore in the same browser and device;
- allow editing and complete removal;
- do not require a comment before moving to the next candidate;
- do not include empty or whitespace-only comments in the share result;
- do not imply that a saved local comment has been delivered.

Suggested helper copy:

> Необязательно. Комментарий сохранится на этом устройстве и попадёт в итог только при отправке `Следующего акта`.

## 13. Progress and `Следующий акт`

### 13.1 Progress before completion

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

### 13.2 Summary behaviour

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

A non-empty comment may appear beneath the corresponding candidate or in a compact comments section. Comments never affect ordering.

### 13.3 Editing after completion

Ratings and comments remain editable after the summary opens. Any rating change immediately recalculates order and the screenshot/share result. Comment changes update the share result without changing order.

## 14. Candidate status and dates

### 14.1 User-facing contract

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

ДЕЙСТВИЕ
Пока наблюдаем — практического шага не требуется.
```

In v0.1, source checks and status updates may be performed manually. This is an implementation detail. The user-facing promise is that Cultural Radar continues to follow the candidate, updates meaningful information and informs Polina. The interface must not falsely describe the process as automated.

### 14.2 Human-readable statuses

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

### 14.3 Required action posture

Every publishable candidate provides exactly one action posture:

- `watching` — no practical action is available yet;
- `planning_possible` — dates or a useful period are known and planning can begin;
- `ticket_action_available` — evidence supports a ticket-related action.

The UI renders a human explanation rather than exposing the internal key.

Action posture is required candidate data. It must not be omitted and must not be inferred from a missing field.

### 14.4 Date presentation

- one performance: `14 сентября`;
- two performances: `14 и 16 сентября`;
- several performances in a compact range: `14–22 сентября`;
- a longer period: `с сентября по ноябрь`;
- confirmed festival period without a detailed programme: `Фестиваль пройдёт 10–20 октября; программа ожидается`;
- no concrete dates: `Даты ожидаются`.

When a range hides important differences, detail may expand the exact dates.

### 14.5 No terminal fulfilment states in v0.1

Do not expose `Выбрано`, `Приобретено`, `Забронировано` or `Поездка запланирована` in the Gift Edition v0.1 flow.

The current gift task is to choose one preferred experience and send the completed feedback. The artistic council handles the subsequent decision outside the interface.

Future product versions may add decision and fulfilment states when a user follows or chooses multiple events. That future extension must remain separate from navigation and ratings.

## 15. Device-local persistence

### 15.1 Required behaviour

- every rating saves immediately;
- comments save locally after editing;
- ratings and comments restore when the page is reopened in the same browser on the same device;
- ratings and comments remain editable;
- summary order recalculates after rating edits;
- sharing does not lock any input;
- another browser, another device or cleared browser data does not inherit the inputs.

### 15.2 Required copy after first save

> **Ваш выбор сохранён**  
> Оценки и комментарии хранятся только в этом браузере на этом устройстве. Вы можете вернуться и изменить их. Художественный совет увидит результат только после того, как вы отправите `Следующий акт`.

Do not require a blocking modal before evaluation.

### 15.3 Required summary copy

> Результат пока хранится только на этом устройстве и ещё не отправлен.

Do not say `Ваш голос принят`, `Комментарий отправлен` or imply shared state.

## 16. Share contract

Primary action:

```text
ОТПРАВИТЬ ХУДОЖЕСТВЕННОМУ СОВЕТУ
```

P0 uses the system share sheet where supported. The payload contains:

- concise `Следующий акт` results;
- each candidate's total and component ratings;
- non-empty candidate comments when the payload remains readable;
- the page URL.

Example:

```text
Мой Следующий акт

1. Парсифаль — 9/10
   Событие 5 · Город 4
   Комментарий: Очень интересно, но важны даты.

2. Пахита — 8/10
   Событие 4 · Город 4

Культурный радар Полины · Сезон 2026/27
```

The URL does not contain device-local ratings or comments. They must be present in shared text or in a screenshot.

If sharing is unsupported, fails or is cancelled:

- do not claim the result was sent;
- preserve the summary;
- show screenshot/manual-send guidance;
- allow retry.

Required fallback copy:

> **Результат ещё не отправлен**  
> Сделайте скриншот этого экрана и отправьте его художественному совету.

A generated share image is optional and not P0.

## 17. Visual direction

Visual formula:

> **Серьёзность большого театра × современная фестивальная редактура × язык печатного билета.**

### 17.1 Shared system

All six candidates use predictable locations for:

- event type;
- title;
- organisation and creators;
- city;
- editorial proposition;
- candidate status;
- evaluation state;
- navigation and actions.

### 17.2 Individual character

Candidate cards may vary in:

- composition;
- title scale;
- imagery or graphic treatment;
- whitespace and density;
- decorative detail appropriate to the cultural direction.

Art direction must not move essential metadata, status, ratings or controls into unpredictable places.

### 17.3 Colour semantics

- graphite — primary information and confirmed facts;
- red — current status, selected rating or primary action;
- grey — unknown, expected or inactive information.

Text and structure must carry the same meaning when colour is unavailable.

### 17.4 Derived principles

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

### 17.5 Exclusions

- ticket marketplace grids;
- travel-booking maps, hotels, prices or itineraries;
- SaaS dashboards and admin chrome;
- literal military radar, targets or sweeps;
- default velvet, gold, curtains and theatre masks;
- copied theatre/festival identities or layouts;
- decorative motion behind reading content.

### 17.6 Reference set

References were studied for principles only. Do not copy layouts, assets, logos, typography files or brand identifiers.

- Mariinsky Theatre — institutional seriousness and precise programme hierarchy;
- Perm Opera and Ballet Theatre — image-led editorial entry;
- Electrotheatre Stanislavsky — contemporary institutional voice and modular composition;
- Territory Festival — poster hierarchy and edition-specific art direction;
- Alexandrinsky Theatre — clear calendar, venue and availability information;
- Open Ticket v0.5 — internal anchor for condensed typography and graphite/red/grey semantics.

## 18. Content contract for issue #5

Each publishable candidate must provide:

- stable candidate ID and slug;
- stable city ID;
- title and event type;
- city and country;
- organisation, venue and creators where known;
- concise card proposition;
- longer `whyEvent` and `whyCity`;
- restrained trip-scale note;
- confirmed facts as an array, which may be empty only when the candidate would still be publishable and the status note explains why;
- unknown facts as an array, using an empty array when nothing material is unknown;
- current informational status;
- human status explanation;
- date label and exact dates or range where known;
- required next expected update;
- required action posture;
- sources with type and supported claim;
- image placeholder or licensed/usable image with credit;
- editorial order `1–6`.

Nizhny Novgorod is not publishable until issue #5 identifies and sources a concrete cultural proposition.

## 19. Low-fidelity states

### 19.1 Entry

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

### 19.2 Repertoire card

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
│ │ Есть комментарий             │ │ │
│ │                              │ │ │
│ │ ОТКРЫТЬ                  →   │ │ │
│ └──────────────────────────────┘ └─│
│ ●  ○  ○  ○  ○  ○                 │
│ ОЦЕНЕНО 4 ИЗ 6                   │
└────────────────────────────────────┘
```

### 19.3 Ratings, comment and navigation

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
│ КОММЕНТАРИЙ ХУДОЖЕСТВЕННОМУ СОВЕТУ│
│ [необязательное текстовое поле]    │
│                                    │
│ ← ПРЕДЫДУЩИЙ      СЛЕДУЮЩИЙ →      │
└────────────────────────────────────┘
```

### 19.4 Locked and active summary

```text
СЛЕДУЮЩИЙ АКТ
Оцените ещё 2 кандидатов
```

```text
СЛЕДУЮЩИЙ АКТ

1. ПАРСИФАЛЬ                 9 / 10
   Событие 5 · Город 4 · Ждём даты
   «Очень интересно, но важны даты»

2. ПАХИТА                    8 / 10
   Событие 4 · Город 4 · Продажи открыты

[ ОТПРАВИТЬ ХУДОЖЕСТВЕННОМУ СОВЕТУ ]
```

## 20. Implementation-readiness checklist

### 20.1 Issue #4 — foundation

- [ ] Static-first stack can implement the approved behaviour without backend state.
- [ ] Narrow mobile viewport supports intentional carousel movement without page overflow.
- [ ] Candidate detail supports direct previous/next navigation.
- [ ] Device-local ratings use stable candidate and city keys.
- [ ] Device-local comments use stable candidate keys.
- [ ] Summary unlock requires both ratings for all six candidates.
- [ ] System Share is feature-detected.
- [ ] Reduced-motion preference is respected.
- [ ] No backend, auth, database or automated monitoring infrastructure is introduced.

### 20.2 Issue #5 — dataset

- [ ] Exactly six publishable, sourced candidates exist.
- [ ] Nizhny Novgorod is a concrete sourced candidate, not a research placeholder.
- [ ] Candidate records fill every content slot in section 18.
- [ ] `nextExpectedUpdate`, `actionPosture`, `knownFacts` and `unknownFacts` are present for every candidate.
- [ ] Status and dates are revalidated to the level asserted.
- [ ] No unsupported date, sale or availability claim is published.
- [ ] Stable candidate and city IDs exist.
- [ ] City and event rationale remain separate.
- [ ] Sources and uncertainty remain explicit.
- [ ] Editorial order `1–6` is assigned.

### 20.3 Issue #6 — landing, repertoire and detail

- [ ] Primary CTA is `Открыть репертуар`.
- [ ] `На радаре` is a navigation screen, not a candidate action.
- [ ] Carousel is manual and shows next-card fragment, position and evaluation state.
- [ ] Detail supports previous/next candidate without returning to the carousel.
- [ ] Rating endpoints and selected-value explanations are visible.
- [ ] Comment control is present and usable in every candidate detail.
- [ ] Candidate status explains now, dates, next update, action posture and sources.
- [ ] No page-level horizontal overflow exists at 320–430 px.
- [ ] Open Ticket state semantics remain intact.

### 20.4 Issue #7 — evaluation, comments, summary and share

- [ ] Event rating is candidate-keyed.
- [ ] City rating is stable-city-keyed.
- [ ] No candidate-level selection action exists.
- [ ] `Не моё` is the label for event rating `1`, not a separate action.
- [ ] Card evaluation state supports absent, partial and complete ratings.
- [ ] Every candidate has an editable comment control.
- [ ] Comment may be saved, restored, edited and removed locally.
- [ ] Comment does not affect rating completion or sorting.
- [ ] Device-local disclosure covers ratings and comments.
- [ ] `Следующий акт` remains inactive until all six candidates are complete.
- [ ] Summary contains all six candidates sorted by transparent sum.
- [ ] Component ratings remain visible beside the total.
- [ ] Non-empty comments can be represented in the summary/share result.
- [ ] Summary remains screenshot-ready.
- [ ] Share cancellation or failure never claims successful sending.

### 20.5 Cross-issue validation

- [ ] Terms match `docs/product/product-language.md`.
- [ ] Data shape matches `docs/domain/candidate-model.md`.
- [ ] `ITERATION.md`, `gift-mvp.md` and issue #7 still have their comment requirement satisfied.
- [ ] Open Ticket v0.5 remains unchanged.
- [ ] No current candidate facts were invented by this contract.
- [ ] No optional feature threatens the target delivery.

## 21. Approved decisions

The owner approved:

1. the experience statement in section 2;
2. first-screen direction and CTA `Открыть репертуар`;
3. exactly six candidates with Nizhny Novgorod as the unresolved sixth research direction;
4. no seventh candidate in v0.1;
5. navigation, ratings and scale explanations as separate layers;
6. event and city ratings as the only candidate scoring controls;
7. `Не моё` as the explanation of event rating `1/5`;
8. card-level display of evaluation state and current ratings;
9. direct previous/next navigation between candidate details;
10. `Следующий акт` as a completed summary, not a shortlist state;
11. summary unlock only after all six candidates have both ratings;
12. transparent total `eventRating + cityRating`;
13. candidate status as required information with a continued observation promise;
14. required per-candidate action posture data;
15. no terminal selection or purchase states in v0.1;
16. required P0 comment control with optional user input;
17. device-local persistence wording for ratings and comments;
18. system text sharing with screenshot/manual-send fallback;
19. the visual direction and reference principles;
20. this document as the implementation contract for issues #4–#7.

Issue #15 remains in Draft PR review until the documentation diff is validated and the owner explicitly decides the PR may become Ready.
