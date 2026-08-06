# Gift Edition v0.1 Experience Contract

## 1. Authority and scope

This document is the **single normative product and interaction contract** for implementation issues #4, #5, #6 and #7 of **Культурный радар Полины · Сезон 2026/27**.

For those issues:

- implement only behaviour stated here or explicitly approved by the owner in the relevant issue;
- `ITERATION.md` defines the deadline and review boundary;
- `docs/domain/candidate-model.md` provides a minimal implementation shape subordinate to this contract;
- `docs/product/gift-mvp.md`, `docs/product/product-language.md` and `docs/ux/website-concept.md` provide context and language guidance but do not add features or states;
- dated research files are source material, not runtime truth.

Earlier drafts, examples or speculative future-product models must not introduce additional Gift Edition v0.1 requirements.

The contract is intentionally bounded. This is a two-day personal gift website for one known recipient with human-operated research and follow-up. It is not a marketplace, autonomous recommendation system or safety-critical platform.

A review finding blocks release only when it can:

- break the QR-to-mobile gift flow;
- lose or materially misrepresent Polina's ratings or comments;
- publish an unsupported factual claim;
- make a required mobile interaction unusable;
- falsely describe local storage, sharing or manual monitoring.

Enterprise hardening, future-platform architecture and unapproved state machines are outside this review boundary.

## 2. Approved experience

Polina opens the printed Open Ticket and enters a personal cultural season already underway. She sees six manually curated cultural proposals, understands why each event and city may matter, sees what is known and still uncertain, rates the event and city separately, may leave a comment, and shares the completed `Следующий акт` with the artistic council.

The website must communicate:

1. this is Polina's personal cultural season;
2. the first curated repertoire is already prepared;
3. each proposal combines **event + city + company**, without making travel mandatory;
4. research and status updates are performed manually for v0.1;
5. Polina participates in the final choice.

## 3. First screen

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

Москва и Петербург дают тысячи возможностей.
Но найти действительно важное событие — значит
разбираться в театрах и постановщиках,
следить за фестивалями, гастролями,
расписаниями и началом продаж —
и не ограничивать себя одним городом.

Культурный радар находит такие возможности,
проверяет, что уже известно,
и собирает их в личный репертуар.

СОБЫТИЕ + ГОРОД + КОМПАНИЯ

ПЕРВЫЙ ОТБОР УЖЕ СОБРАН

ОТКРЫТЬ РЕПЕРТУАР

КАК РАБОТАЕТ РАДАР
```

Exact line breaks may adapt to the viewport. The primary action is `ОТКРЫТЬ РЕПЕРТУАР`.

The restrained service label `ОТКРЫТЫЙ БИЛЕТ · ПОЛИНА + 1` may be shown. Detailed ticket mechanics must not displace the cultural value proposition.

## 4. Repertoire

`На радаре` is the repertoire screen. It contains exactly six candidate cards:

1. `Парсифаль` — Мариинский театр, Санкт-Петербург;
2. `Дядя Ваня` — театр `Красный факел`;
3. `Пахита` — новая версия Алексея Мирошниченко, Пермь;
4. Международный Тихоокеанский театральный фестиваль — Владивосток;
5. TEART — Минск;
6. one concrete, sourced cultural proposition in Нижний Новгород.

There is no seventh candidate in v0.1. A research direction without a concrete sourced proposition is not publishable.

The repertoire may be presented as a manual-swipe mobile carousel with:

- no autoplay;
- a visible next-card fragment;
- position `01 / 06`;
- stable editorial order;
- no page-level horizontal overflow.

Each card shows:

- candidate number;
- image or controlled placeholder;
- event type and title;
- organisation or relevant creator;
- city;
- short editorial proposition;
- a simple current status label;
- date label or `Даты ожидаются`;
- evaluation progress;
- action `Открыть`.

## 5. Candidate detail

Each candidate detail contains only the information needed for the gift decision:

- what the event is;
- why it is culturally interesting;
- why the city is interesting, or why travel is not required;
- organisation, creator and venue when known;
- known dates or a clear statement that dates are not known;
- a plain-language current status;
- what is confirmed;
- what remains uncertain;
- what the editors expect to check next;
- visible external source links;
- event rating;
- city rating;
- optional comment;
- previous and next candidate navigation.

Status is editorial text, not a product state machine. A candidate record needs:

- `statusLabel` — short text such as `Ждём даты` or `Продажи открыты`;
- `statusNote` — one or two honest explanatory sentences;
- `nextExpectedUpdate` — what will be checked next, when useful.

Gift Edition v0.1 does **not** require `ActionPosture`, `watching`, `planning_possible`, `ticket_action_available`, `archived`, lifecycle transitions or other unapproved status enums.

Every published candidate must have at least one primary or official external source. Claims about dates, sales or availability require a source supporting that claim. Source links are shown in the detail with clear labels such as `Официальная страница`, `Программа`, `Афиша и билеты` or `Подробнее`.

## 6. Ratings and comments

Each candidate receives two independent ratings from `1` to `5`:

### Event

1. `Не моё`
2. `Скорее не интересно`
3. `Интересно, но не приоритет`
4. `Очень интересно`
5. `Очень хочу увидеть`

### City

1. `Не хочется`
2. `Скорее не привлекает`
3. `Было бы интересно`
4. `Очень хочется`
5. `Очень хочу поехать`

`Не моё` is the label for event rating `1/5`, not a reject action.

There are no per-candidate `shortlist`, `keep`, `reject`, `В следующий акт` or `Оставить на радаре` actions.

Each detail contains:

```text
Комментарий художественному совету
```

The control is required; entering a comment is optional. A comment may be edited or removed and does not affect completion or ordering.

A candidate is complete only when both ratings exist. Cards show:

- `Ещё не оценено`;
- partial component values;
- or `Оценено` with both values and total.

Progress is shown as `Оценено X из 6`.

## 7. Local persistence

Ratings and comments are stored only in the current browser on the current device.

Required behaviour:

- save rating changes immediately;
- update and save the latest comment value immediately after each edit;
- before navigation, detail close, summary generation, Share or Copy, commit the latest in-memory comment value;
- restore values after reload in the same browser and device;
- allow all values to be revised;
- do not imply server storage, participant accounts or cross-device restoration.

Required disclosure:

> **Ваш выбор сохранён**  
> Оценки и комментарии хранятся только в этом браузере на этом устройстве. Вы можете вернуться и изменить их. Художественный совет увидит результат только после того, как вы отправите `Следующий акт`.

## 8. Следующий акт

`Следующий акт` is the completed summary and share screen. It is not a candidate status or shortlist.

It remains inactive until all six candidates have both ratings.

The screen contains all six candidates. For each candidate it shows:

- event rating;
- city rating;
- transparent total `eventRating + cityRating`;
- compact current status;
- each non-empty comment.

Order:

1. total descending;
2. event rating descending;
3. original editorial order.

The total is only a transparent orientation score. It is not a synthetic community rating, artistic-council rating, recommendation algorithm or final decision.

## 9. Share and fallback

The application generates one complete text result containing:

- all six candidates;
- both component ratings;
- total score;
- compact status;
- every non-empty comment;
- page URL as additional context.

Where supported, system Share opens with the complete result.

If Share is unavailable, fails or is cancelled:

- do not claim successful sending;
- keep the complete text visible and selectable;
- provide `КОПИРОВАТЬ РЕЗУЛЬТАТ`;
- after successful copy show `Результат скопирован`;
- if clipboard access fails, manual text selection remains available.

Clipboard copy and manual text selection are the complete-result fallback paths. Screenshots may be used personally but are not presented as a substitute for the complete text payload.

Required fallback copy:

> **Результат ещё не отправлен**  
> Скопируйте полный результат и отправьте его художественному совету. Если копирование недоступно, выделите полный текст вручную.

## 10. Visual direction

The visual language is:

- serious theatre editorial;
- modern festival programme;
- printed ticket or cultural dossier;
- graphite, red and grey state semantics;
- strong typography and generous spacing;
- mobile-first and readable.

Avoid:

- marketplace or travel-booking UI;
- SaaS dashboards;
- military radar graphics;
- velvet-and-gold theatre clichés;
- autoplay or decorative motion that obstructs reading.

## 11. P0 acceptance criteria

Gift Edition v0.1 is ready when:

1. the printed QR opens a stable mobile page without login;
2. the first screen explains the gift and opens the repertoire;
3. exactly six complete, sourced candidates are visible;
4. each detail presents event, city, plain-language status, uncertainty and sources;
5. event and city ratings work independently;
6. comments can be entered, revised and removed without losing the latest edit;
7. ratings and comments survive reload in the same browser and device;
8. `Следующий акт` unlocks only after all six rating pairs are complete;
9. the summary shows all six candidates, both ratings, transparent totals and all non-empty comments;
10. Share, Copy and manual selection preserve the complete result;
11. unsupported dates, sales or availability are not presented as facts;
12. required controls work in an ordinary modern mobile browser.

## 12. Explicit non-goals

Gift Edition v0.1 does not require:

- authentication or user accounts;
- backend or shared persistence;
- multiple participants or aggregate voting;
- synthetic ratings or test-data ratings in the user interface;
- automated crawling, monitoring or notifications;
- CMS or administration;
- formal candidate lifecycle or action-posture state machines;
- ticket checkout or travel planning;
- public marketplace architecture;
- production-scale reliability or compliance programmes;
- final Figma or high-fidelity design.

Manual editorial research, validation, status updates and communication are intentional parts of this release.
