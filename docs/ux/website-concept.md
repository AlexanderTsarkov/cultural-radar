# UX Concept: Gift Website

## 1. Purpose

The website is part of the gift, not only a catalogue.

It must:

- clearly state that Polina has received two tickets;
- explain that the final event will be selected together;
- present the first curated candidate set;
- allow Polina to evaluate the event and the city separately;
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
2. **Candidate detail** — complete editorial, status, source and rating view with direct previous/next candidate navigation.
3. **Следующий акт** — the completed summary and share screen, available after all six candidates have both ratings.
4. **Как работает радар / О подарке** — explanatory content.

`На радаре` and `Следующий акт` are navigation destinations, not candidate states or rating actions.

For the v0.1 prototype, navigation may be implemented as one page with anchored sections plus a detail layer if this improves reliability and speed.

### Future navigation

- **Города** may become a separate view later.
- Editorial/admin navigation is deferred.

## 6. Candidate repertoire

Gift Edition v0.1 contains exactly six publishable, sourced candidates:

1. `Парсифаль` — Мариинский театр, Санкт-Петербург;
2. `Дядя Ваня` — театр `Красный факел`;
3. `Пахита` — новая версия Алексея Мирошниченко, Пермь;
4. Международный Тихоокеанский театральный фестиваль — Владивосток;
5. TEART — Минск;
6. a concrete cultural proposition in Нижний Новгород, to be found and validated in the dedicated research issue.

The Nizhny Novgorod direction is approved, but an unresolved research ticket is not a publishable card. The release is incomplete until the sixth concrete proposition exists.

A seventh candidate is not required in v0.1.

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
- official and supporting sources;
- event rating control;
- city rating control;
- optional comment;
- direct previous/next navigation;
- return to `На радаре`.

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

## 8. Separate event and city evaluation

The city and event are independent product dimensions.

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

Optional comment label:

> Комментарий художественному совету

A comment does not affect evaluation completion or ranking.

## 9. Evaluation progress

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

A candidate is complete only when both ratings exist.

## 10. Candidate status and availability

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

Example:

```text
ЖДЁМ ДАТЫ
Постановка подтверждена, расписание следующих
показов ещё не опубликовано.

ЧТО ДАЛЬШЕ
Следим за публикацией афиши. Когда появится
важное обновление, изменим статус и сообщим вам.
```

Manual checks and updates may fulfil this promise in v0.1. The interface must not falsely say that monitoring or notifications are automated.

### Dates

Use the most useful compact representation:

- `14 сентября`;
- `14 и 16 сентября`;
- `14–22 сентября`;
- `с сентября по ноябрь`;
- `Фестиваль пройдёт 10–20 октября; программа ожидается`;
- `Даты ожидаются`.

Expand exact dates in detail when a range hides meaningful differences.

### Not part of v0.1 status

- `На радаре`;
- `В следующем акте`;
- `Выбрано`;
- `Билеты приобретены`.

Future product versions may add separate decision and fulfilment states for multiple chosen events.

## 11. `Следующий акт`

`Следующий акт` is the completed evaluation summary, not a shortlist state.

### Unlock rule

It becomes active only after all six candidates have both event and city ratings.

Before completion, the interface may show:

```text
СЛЕДУЮЩИЙ АКТ
Оцените ещё 2 кандидатов
```

### Summary contents

The screen contains all six candidates sorted by:

1. event rating plus city rating, descending;
2. event rating, descending, when totals are equal;
3. original editorial order when both ratings are equal.

Example:

```text
ПАРСИФАЛЬ
Событие: 5 / 5
Город:   4 / 5
Итого:   9 / 10
Статус:  Ждём даты
```

The transparent total supports orientation but does not make the final decision automatically. Component ratings remain visible.

Ratings remain editable after the summary opens; order and shared output update immediately.

Recommended note:

> Результаты учитываются художественным советом вместе с афишей, календарями и наличием четырёх хороших мест.

## 12. Local persistence

For v0.1, browser-local storage is acceptable.

Required behaviour:

- save each rating immediately;
- restore it in the same browser on the same device;
- keep ratings editable;
- recalculate summary after changes;
- do not imply shared persistence.

Required first-save message:

> **Ваш выбор сохранён**  
> Оценки хранятся только в этом браузере на этом устройстве. Вы можете вернуться и изменить их. Художественный совет увидит результат только после того, как вы отправите `Следующий акт`.

Required summary note:

> Результат пока хранится только на этом устройстве и ещё не отправлен.

## 13. Sharing

Primary summary action:

> Отправить художественному совету

P0 opens the system share sheet with:

- concise summary text;
- component ratings and totals;
- page URL.

The URL itself does not contain device-local ratings.

If sharing is unsupported, fails or is cancelled:

- preserve the summary;
- do not claim successful delivery;
- offer screenshot/manual-send instructions;
- allow retry.

Fallback:

> **Результат ещё не отправлен**  
> Сделайте скриншот этого экрана и отправьте его художественному совету.

A generated image is optional, not P0.

## 14. Candidate management

For v0.1, candidate management may be performed by editing a local data file and redeploying.

The owner must be able to maintain:

- candidate content;
- city identity;
- current status;
- known dates and date label;
- next expected update;
- sources;
- visibility or archive state;
- editorial order.

Shortlist, final-choice and purchased fields are not required in v0.1.

A future product may add separate decision and fulfilment management without changing the meaning of ratings or navigation.

## 15. Future website evolution

The same QR code may remain useful after Gift Edition v0.1.

Possible future phases include:

1. repertoire changes and new candidates;
2. automatic source monitoring;
3. explicit notification channels;
4. multiple selected events;
5. planning or purchase tracking;
6. completed-event archive, photos and impressions.

These are directions, not current commitments.

## 16. Mobile requirements

Required:

- first meaning visible without excessive scrolling;
- readable type at normal zoom;
- large tap targets;
- rating controls usable with one hand;
- candidate images with controlled crop;
- source links open correctly;
- intentional carousel movement without page-level horizontal overflow;
- QR landing loads over an ordinary mobile connection;
- card status and evaluation state remain legible;
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
- [ ] Detail shows rationale, uncertainty, dates and sources.
- [ ] Event and city are rated separately.
- [ ] Scale meanings are visible and accessible.
- [ ] No candidate-level shortlist/keep/reject control exists.
- [ ] Direct previous/next detail navigation works.
- [ ] `Следующий акт` opens only after six complete evaluations.
- [ ] Summary displays all six candidates and transparent totals.
- [ ] Device-local storage is disclosed honestly.
- [ ] Share failure or cancellation never claims successful delivery.
- [ ] The design resembles a curated cultural project, not a store or dashboard.
- [ ] The site works on a modern mobile browser.