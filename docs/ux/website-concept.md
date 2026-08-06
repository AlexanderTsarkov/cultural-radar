# UX Concept: Gift Website

## 1. Purpose

The website is part of the gift, not only a catalogue.

It must:

- clearly state that Polina has received two tickets;
- explain that the final event will be selected together;
- present the first curated candidate set;
- allow Polina to evaluate the event and the city separately;
- provide a comment channel for the artistic council;
- show what is known, what remains uncertain and what Cultural Radar continues to follow;
- create a recognisable theatrical/festival experience;
- remain useful during the following weeks as candidate information develops.

This document defines the broader website concept. Exact Gift Edition v0.1 behaviour is governed by `docs/ux/gift-v0.1-experience-spec.md`.

## 2. Experience principle

Formula:

> Personal theatre season × curated watchlist × collaborative decision.

The site should feel closer to a contemporary theatre or festival website than to a ticket marketplace, voting survey, travel aggregator or technical dashboard.

Gift Edition v0.1 separates:

- navigation;
- candidate information status;
- event and city ratings;
- optional user comment content through a required comment control;
- completed summary and sharing.

## 3. Visual direction

### Required qualities

- strong editorial typography;
- large poster-like headings;
- expressive event photography or controlled placeholders;
- asymmetrical but controlled grid;
- generous whitespace;
- theatre-programme and ticket details;
- clear textual status labels;
- subtle travel notation where relevant;
- excellent mobile readability;
- a shared information system with distinct art direction per candidate.

### Avoid

- generic SaaS dashboard styling;
- rows of identical marketplace cards;
- excessive gradients and glass effects;
- decorative theatre clichés;
- travel-booking visual language;
- radar screens, military symbols or neon control-room styling;
- dense research-report text on the first screen;
- copied theatre or festival identities.

Visual formula for Gift Edition v0.1:

> **Серьёзность большого театра × современная фестивальная редактура × язык печатного билета.**

## 4. First screen

The first screen prioritises product value over a repetition of the printed ticket.

Approved hierarchy:

```text
КУЛЬТУРНЫЙ РАДАР · ПОЛИНА · СЕЗОН 2026/27

ПОЛИНА, ДОБРО ПОЖАЛОВАТЬ
В ВАШ ЛИЧНЫЙ КУЛЬТУРНЫЙ СЕЗОН

Хороший спектакль, опера или балет —
не просто свободный вечер в календаре.

Иногда ради события стоит выбрать город,
освободить несколько дней
и собрать хорошую компанию.

[short curatorial-value explanation]

СОБЫТИЕ + ГОРОД + КОМПАНИЯ

ПЕРВЫЙ ОТБОР УЖЕ СОБРАН
```

Primary action:

> Открыть репертуар

Secondary action:

> Как работает радар

The detailed gift block and two-seat mechanics may follow below the first screen or live in `О подарке`.

Core phrase remains:

```text
Событие ещё не выбрано.
Впечатление уже подарено.
```

## 5. Information architecture

### Gift Edition v0.1 navigation

1. **На радаре** — the screen containing all six current candidate cards and evaluation progress.
2. **Candidate detail** — complete editorial, status, source, rating and comment view with direct previous/next candidate navigation.
3. **Следующий акт** — the completed summary and share screen, available after all six candidates have both ratings.
4. **Как работает радар / О подарке** — explanatory content.

`На радаре` and `Следующий акт` are navigation destinations, not candidate states or rating actions.

For v0.1, navigation may be implemented as one page with anchored sections plus a detail layer if this improves reliability and speed.

## 6. Candidate repertoire

Gift Edition v0.1 contains exactly six publishable, sourced candidates:

1. `Парсифаль` — Мариинский театр, Санкт-Петербург;
2. `Дядя Ваня` — театр `Красный факел`;
3. `Пахита` — новая версия Алексея Мирошниченко, Пермь;
4. Международный Тихоокеанский театральный фестиваль — Владивосток;
5. TEART — Минск;
6. a concrete cultural proposition in Нижний Новгород, to be found and validated in the dedicated research issue.

The Nizhny Novgorod direction is approved, but an unresolved research ticket is not a publishable card. The release is incomplete until the sixth concrete proposition exists.

A seventh candidate is not part of v0.1.

### Repertoire card content

A card supports fast browsing and shows:

- candidate number;
- hero image or placeholder;
- event name;
- genre or type;
- city;
- theatre, festival, company or organiser;
- concise editorial proposition;
- date or date-status;
- current candidate status;
- evaluation state;
- current event and city ratings when present;
- transparent total when both ratings are present;
- optional `Есть комментарий` marker when a local comment exists;
- action `Открыть`.

Cards do not contain a shortlist, keep, reject or `Не моё` action.

### Candidate detail

Detail shows:

- creative team and relevant context;
- longer event rationale;
- separate city rationale;
- trip scale where relevant;
- confirmed facts;
- unknown facts and uncertainty;
- current informational status;
- exact dates or date range where known;
- what Cultural Radar follows next;
- current action posture;
- official and supporting sources;
- event rating control;
- city rating control;
- required editable `Комментарий художественному совету` control;
- direct previous/next navigation;
- return to `На радаре`.

The comment control is P0. The user may leave it empty.

## 7. Repertoire carousel

The six cards form a mobile horizontal carousel.

Required:

- manual swipe;
- no autoplay;
- part of the next card visible;
- `01 / 06` position indicator;
- editorial order preserved;
- optional circular navigation after `06 / 06`;
- no page-level horizontal overflow;
- reduced-motion-safe behaviour.

Polina may browse all cards before opening any detail, open candidates in any order, or move sequentially between detail screens.

## 8. Event and city evaluation

Required questions:

```text
Насколько хочется увидеть это событие?
1  2  3  4  5

Насколько хочется оказаться в этом городе?
1  2  3  4  5
```

### Event scale

1. `Не моё`;
2. `Скорее не интересно`;
3. `Интересно, но не приоритет`;
4. `Очень интересно`;
5. `Очень хочу увидеть`.

### City scale

1. `Не хочется`;
2. `Скорее не привлекает`;
3. `Было бы интересно`;
4. `Очень хочется`;
5. `Очень хочу поехать`.

The interface should show endpoint labels and a dynamic explanation of the selected value. Thumbs-up/down should not replace the semantic scale.

`Не моё` is the event label for rating `1/5`, not a separate rejection command.

A city rating belongs to stable city identity. If multiple candidates use one city, the same rating applies to each.

A candidate is complete only when both ratings exist.

## 9. Comment interaction

Every candidate detail contains:

> Комментарий художественному совету

Requirements:

- the control is present and usable in P0;
- entering text is optional;
- comment saves only in the current browser and device;
- it can be edited or removed;
- it does not affect completion or ranking;
- every non-empty comment is preserved in every complete Web Share, clipboard-copy and manually selectable result payload;
- comment text may be visually collapsed in `Следующий акт`, but visual compression must not remove it from the transmitted or copied result;
- the UI must not claim that a locally saved comment was delivered.

## 10. Evaluation progress

Each repertoire card shows one of three derived states:

- `Ещё не оценено`;
- `Оценено частично`;
- `Оценено`.

Examples:

```text
Событие  4 / 5
Город    —
```

```text
ОЦЕНЕНО
Событие  4 / 5
Город    3 / 5
Итого    7 / 10
```

Global progress:

```text
ОЦЕНЕНО 4 ИЗ 6
```

## 11. Candidate status and availability

Candidate status is a core information block, not metadata hidden in small print.

It must show:

- what is true now;
- known dates or date-status;
- missing information;
- what Cultural Radar follows next;
- whether action is currently possible;
- supporting sources.

Recommended human-readable statuses:

1. `Кандидат исследования`;
2. `Официально анонсировано`;
3. `Ждём программу или подтверждение`;
4. `Ждём даты`;
5. `Даты опубликованы`;
6. `Ждём продажи`;
7. `Продажи открыты`;
8. `Подходящие места доступны`.

Every publishable candidate also provides one required action posture:

- `watching`;
- `planning_possible`;
- `ticket_action_available`.

The UI renders human wording rather than the internal key.

Manual checks and updates may fulfil the observation promise in v0.1. The interface must not falsely say that monitoring or notifications are automated.

### Dates

Use the most useful compact representation:

- `14 сентября`;
- `14 и 16 сентября`;
- `14–22 сентября`;
- `с сентября по ноябрь`;
- `Фестиваль пройдёт 10–20 октября; программа ожидается`;
- `Даты ожидаются`.

### Not part of v0.1 status

- `На радаре`;
- `В следующем акте`;
- `Выбрано`;
- `Билеты приобретены`.

Future product versions may add separate decision and fulfilment states for multiple chosen events.

## 12. `Следующий акт`

`Следующий акт` is the completed evaluation summary, not a shortlist state.

It becomes active only after all six candidates have both event and city ratings.

Before completion:

```text
СЛЕДУЮЩИЙ АКТ
Оцените ещё 2 кандидатов
```

The completed screen contains all six candidates sorted by:

1. event rating plus city rating, descending;
2. event rating, descending, when totals are equal;
3. original editorial order when both ratings are equal.

Component ratings remain visible beside the total. Non-empty comments may be visually collapsed or grouped to preserve readability, but every non-empty comment remains mandatory in the complete generated share/copy payload. Comments never affect ordering.

Ratings and comments remain editable after the summary opens; the result updates immediately.

## 13. Local persistence

For v0.1, browser-local storage is required.

Required behaviour:

- save each rating immediately;
- save comments after editing;
- restore ratings and comments in the same browser on the same device;
- keep all inputs editable;
- recalculate summary after rating changes;
- do not implement or imply shared persistence or cross-device restoration.

Required first-save message:

> **Ваш выбор сохранён**  
> Оценки и комментарии хранятся только в этом браузере на этом устройстве. Вы можете вернуться и изменить их. Художественный совет увидит результат только после того, как вы отправите `Следующий акт`.

## 14. Sharing

Primary summary action:

> Отправить художественному совету

P0 opens the system share sheet with one complete generated result containing:

- all six candidates;
- component ratings and totals;
- compact candidate statuses;
- every non-empty comment;
- page URL.

The same complete payload is used for Web Share, clipboard copy and manual text selection. The URL itself does not contain device-local inputs and must not replace the complete result.

If system Share is unsupported, fails or is cancelled:

- preserve the summary and complete generated text;
- do not claim successful delivery;
- provide `Копировать результат`;
- keep the complete text manually selectable if clipboard access fails;
- allow retry;
- offer multiple screenshots only as a secondary option when they cover all six candidates and comments.

A generated image is optional, not P0.

## 15. Candidate management

For v0.1, candidate management may be performed by editing a local data file and redeploying.

Each published record maintains:

- candidate content;
- city identity;
- current status;
- known and unknown facts;
- known dates and date label;
- required next expected update;
- required action posture;
- sources;
- visibility or archive state;
- editorial order.

Shortlist, final-choice and purchased fields are not required in v0.1.

## 16. Mobile requirements

Required:

- first meaning visible without excessive scrolling;
- readable type at normal zoom;
- large tap targets;
- rating and comment controls usable with one hand;
- candidate images with controlled crop;
- source links open correctly;
- intentional carousel movement without page-level horizontal overflow;
- QR landing loads over an ordinary mobile connection;
- candidate detail supports direct previous/next navigation;
- summary is screenshot-ready.

## 17. Gift Edition v0.1 acceptance checklist

- [ ] The first screen explains the curatorial gift and uses `Открыть репертуар`.
- [ ] Two gifted tickets remain explicit outside the primary hero message.
- [ ] Polina's active role is explicit.
- [ ] Exactly six publishable candidates are presented.
- [ ] Nizhny Novgorod is represented only by a concrete sourced proposition.
- [ ] `На радаре` is the repertoire screen, not a candidate decision.
- [ ] Each card shows event, city, status and evaluation state.
- [ ] Detail shows rationale, uncertainty, dates, action posture and sources.
- [ ] Event and city are rated separately.
- [ ] Scale meanings are visible and accessible.
- [ ] Every candidate detail has an editable comment control.
- [ ] Ratings and comments persist locally and remain editable.
- [ ] No candidate-level shortlist/keep/reject control exists.
- [ ] `Следующий акт` opens only after all six rating pairs are complete.
- [ ] Summary shows all six candidates with transparent totals and components.
- [ ] Every non-empty comment is included in every complete Web Share, clipboard-copy and manually selectable payload.
- [ ] Share fallback preserves the complete result and never claims successful transmission.
- [ ] The site works on a modern mobile browser.
- [ ] The design resembles a curated cultural project, not a store or dashboard.
