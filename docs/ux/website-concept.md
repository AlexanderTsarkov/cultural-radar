# UX Concept: Gift Website

## 1. Purpose

The website is part of the gift, not only a catalogue.

It must:

- clearly state that Polina has received two tickets;
- explain that the final event will be selected together;
- present the first curated candidate set;
- allow Polina to evaluate the event and the city separately;
- show how uncertain candidates become real dates and available tickets;
- create a recognisable theatrical/festival experience;
- remain useful during the following weeks as the repertoire develops.

## 2. Experience principle

Formula:

> Personal theatre season × curated watchlist × collaborative decision.

The site should feel closer to a contemporary theatre or festival website than to a ticket marketplace, voting survey, travel aggregator or technical dashboard.

## 3. Visual direction

### Required qualities

- strong editorial typography;
- large poster-like headings;
- expressive event photography;
- asymmetrical but controlled grid;
- generous whitespace;
- theatre-programme and ticket details;
- clear status labels;
- subtle travel notation where relevant;
- excellent mobile readability.

### Avoid

- generic SaaS dashboard styling;
- rows of identical marketplace cards;
- excessive gradients and glass effects;
- decorative theatre clichés;
- travel-booking visual language;
- radar screens, military symbols or neon control-room styling;
- dense research-report text on the first screen.

## 4. First screen

### Primary hierarchy

```text
КУЛЬТУРНЫЙ РАДАР

ЛИЧНЫЙ СЕЗОН ПОЛИНЫ
2026/27

Подарок, в выборе которого можно участвовать.
```

Suggested explanation:

```text
Мы собрали спектакли, балеты, оперы, концерты,
фестивали и культурные поездки, которые могут стать
следующим большим впечатлением.

Оценивай отдельно события и города,
оставляй комментарии и помогай формировать
финальный выбор.
```

Gift block:

```text
В ПОДАРОК
2 билета — для Полины и спутника по её выбору.

МЫ
покупаем билеты себе на тот же показ
и присоединяемся.
```

Core phrase:

```text
Событие ещё не выбрано.
Впечатление уже подарено.
```

Primary action:

> Открыть текущий репертуар

Secondary action:

> Как работает подарок

## 5. Information architecture

### Public navigation

1. **На радаре** — all current candidates.
2. **Следующий акт** — shortlist and aggregate view.
3. **Города** — optional for v0.1, required later.
4. **О подарке** — mechanics, terms and current stage.

### Editorial/admin navigation

5. **Редакция** — candidate management; may be absent in v0.1.

For the Saturday prototype, navigation may be implemented as one page with anchored sections if this improves reliability and speed.

## 6. Candidate catalogue

The initial catalogue should contain the strongest subset from the research, preferably 6–12 candidates.

A candidate card must provide enough information for an initial judgement without forcing the user to open a separate page.

### Card content

- candidate number;
- hero image;
- event name;
- genre;
- city;
- theatre, festival, company or organiser;
- venue, if known;
- date or date-status;
- concise description;
- **Почему событие**;
- **Почему город** or **Почему можно остаться дома**;
- availability status;
- official source;
- event rating control;
- city rating control;
- decision reaction;
- comment field or link to comments.

### Expanded content

A detail page, modal or expanded card may additionally show:

- creative team;
- performers;
- longer editorial note;
- risks and uncertainty;
- additional sources;
- trailer or media;
- related candidates in the same city;
- vote summary.

## 7. Separate event and city evaluation

The city and event are independent product dimensions.

Required questions:

```text
Насколько хочется увидеть это событие?
1  2  3  4  5

Насколько хочется оказаться в этом городе?
1  2  3  4  5
```

Quick decision:

- **В следующий акт**;
- **Оставить на радаре**;
- **Не моё**.

Comment label:

> Комментарий художественному совету

A city rating should conceptually belong to the city, not be duplicated for every event. For the v0.1 interface it may appear inside each candidate card, but the data model should preserve city identity.

## 8. Candidate availability

Availability is a core feature, not metadata hidden in small print.

The interface must clearly show the current step:

1. Кандидат исследования.
2. Официально анонсировано.
3. Ждём даты.
4. Даты опубликованы.
5. Ждём продажи.
6. Продажи открыты.
7. Подходящие места доступны.
8. В следующем акте.
9. Выбрано.
10. Билеты приобретены.

A compact progress line or stage badge may be used. The current state, missing information and next expected change should be visible.

Example:

```text
ЖДЁМ ДАТЫ
Постановка подтверждена, расписание сезона ещё не опубликовано.
Следующая проверка: сентябрь 2026.
```

## 9. Следующий акт

This section represents the current shortlist based on all available opinions.

### Views

- общий рейтинг;
- лучшие события;
- лучшие города;
- больше всего решений «В следующий акт»;
- уже можно покупать;
- ждём даты;
- финалисты.

For v0.1, one combined shortlist is sufficient.

### Score display

Ratings must remain transparent:

```text
Событие: 4.8
Город: 4.2
Общий ориентир: 4.5
В следующий акт: 3 голоса
```

The score informs the choice but does not determine it automatically.

Recommended note:

> Результаты голосования учитываются художественным советом вместе с афишей, календарями и наличием четырёх хороших мест.

## 10. Comments

Comments should support practical cultural decision-making, for example:

- «В этот город давно хотела»;
- «Этого режиссёра уже видела»;
- «Оперу рассматриваю, но не Вагнера»;
- «На эту дату точно не смогу».

The site does not need a general chat. Comments belong to candidates or cities.

For v0.1, local browser storage is acceptable if the interface clearly does not claim shared persistence.

## 11. Candidate management

The owner must eventually be able to:

- add a candidate;
- edit content;
- connect an existing or new city;
- change availability status;
- add official sources;
- mark a candidate as shortlisted;
- hide or archive a candidate;
- mark the final choice;
- record that tickets were purchased.

For Saturday, candidate management may be performed by editing a local data file and redeploying.

## 12. Homepage state model

The gift website may evolve through these stages:

1. **Формируется репертуар** — initial candidates published.
2. **Идёт обсуждение** — votes and comments collected.
3. **Следующий акт** — finalists selected.
4. **Ждём даты или продажи** — candidate monitoring.
5. **Выбор сделан** — final event selected.
6. **Билеты приобретены** — concrete date and venue shown.
7. **После события** — archive, photos and impressions.

The same printed QR code remains useful throughout these stages.

## 13. Mobile requirements

The primary gift flow is mobile-first.

Required:

- first meaning visible without excessive scrolling;
- readable type at normal zoom;
- large tap targets;
- rating controls usable with one hand;
- candidate images with controlled crop;
- source links open correctly;
- no horizontal scrolling;
- QR landing loads over ordinary mobile connection;
- the ticket statement and candidate catalogue remain usable on a narrow screen.

## 14. Saturday acceptance checklist

- [ ] The first screen clearly explains the gift.
- [ ] Two tickets are explicitly stated.
- [ ] Polina's active role is explicit.
- [ ] At least 6 candidates are presented.
- [ ] Each candidate has event, city, source and availability information.
- [ ] Event and city can be rated separately.
- [ ] Comments are visible or demonstrably usable.
- [ ] The shortlist concept is visible.
- [ ] The current project stage is visible.
- [ ] The site works on a modern mobile browser.
- [ ] The design resembles a curated cultural project, not a store or dashboard.
