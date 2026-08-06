# UX specification: Открытый билет

## 1. Current status

Candidate **v0.5** was accepted on 2026-08-06 as a real gift-ticket candidate.

It is not production-final. The composition, copy and colour system are frozen as the working baseline, but the implemented website, final content, stable production URL, final QR code and print tests may require a controlled final revision.

## 2. Purpose

**Открытый билет** is the physical entry point into the Cultural Radar Gift Edition.

The recipient should first read it as a real contemporary cultural ticket. While reading, the object reveals that:

- the cultural event is still open;
- a researched candidate repertoire already exists;
- the first curatorial selection has already been completed;
- Polina enters the process as co-author of the next act;
- the QR opens the current selection stage rather than an empty form.

Core phrase:

```text
Событие ещё не выбрано.
Впечатление уже подарено.
```

## 3. Gift mechanics

The ticket represents:

- two seats at one selected event;
- one seat for Polina;
- one seat for a companion of her choice;
- Polina's participation in choosing the event and city;
- a shared next act with the donors, who arrange their own seats.

The ticket intentionally does not over-explain the donors' ticket purchase or travel costs. Travel is not presented as a paid part of the gift.

## 4. Physical format

- one double-sided horizontal ticket;
- exact size: **210 × 100 mm**;
- main content zone: **150 mm**;
- QR/control zone: **60 mm**;
- straight corners;
- visual perforation line, not a detachable requirement;
- safe margin: approximately 7–8 mm;
- tolerate normal home-duplex registration error;
- QR target size: approximately 30 mm;
- A4 landscape imposition at 100% with crop marks;
- separate exact-size two-page PDF for professional printing.

The ticket is issued as **ПОЛИНА + 1**, not as two separate pieces.

## 5. Visual system

Working formula:

> 75% festival ticket · 20% curatorial catalogue · 5% route document

The route layer is expressed through:

- one progress line;
- three stations;
- serial and technical notation;
- restrained service typography;
- the QR as the entry to the current stage.

Do not use:

- literal trains, rails or stations;
- RZD or airline branding;
- theatrical masks, curtains or gold ornament;
- generic certificate decoration;
- military-radar graphics;
- direct imitation of a real transport ticket.

## 6. Typography

The candidate uses one coherent Cyrillic-capable system:

- **Noto Sans Condensed ExtraBold** — festival/poster headings;
- **Noto Sans** — content and ticket information;
- **Noto Sans Mono** — serial number, route stages and technical labels.

All used styles were verified against the actual Russian copy, including `Ё/ё`.

Font binaries are not stored in the repository. The exported PDFs embed the required subsets.

## 7. Colour semantics

```text
PAPER    white, no background flood
GRAPHITE #171717
CURRENT  #E23B24
FUTURE   #9A9A9A
```

Semantic rule:

- graphite — completed and primary information;
- red — open/current stage and invitation to act;
- grey/dashed — future stage;
- QR — black on white with a full quiet zone.

Red is not a direct RZD quotation. It works simultaneously as festival-poster colour, route signal and current-state marker.

## 8. Front-side hierarchy and copy

### Service line

```text
КУЛЬТУРНЫЙ РАДАР
ПОЛИНА · СЕЗОН 2026/27
CR-POLINA-2026-01
```

### Main title

```text
ОТКРЫТЫЙ
БИЛЕТ
```

`ОТКРЫТЫЙ` is red; `БИЛЕТ` is graphite.

### Recipient

```text
ЗРИТЕЛИ
ПОЛИНА
+ 1
```

### Main statement

```text
Событие ещё не выбрано.
Впечатление уже подарено.
```

### Ticket fields

```text
СОБЫТИЕ
Одно из тех, ради которых стоит поехать —
или остаться в городе

МЕСТО ДЕЙСТВИЯ
Москва, Санкт-Петербург или другой
город, выбранный не случайно

ПЕРИОД
Конец сентября 2026 —
начало мая 2027

МЕСТА
2 рядом

СТАТУС
Ищем то, ради чего стоит ехать.
Пока неясно куда — но уже ясно зачем.

РОЛЬ ВЛАДЕЛЬЦА
Соавтор следующего акта
```

### QR/control zone

```text
НА
РАДАРЕ

Кандидаты уже собраны.

Открыть отбор,
оценить события и города
и войти в совет.

[QR]

culturalradar.ru

Радар уже работает.
Открывайте.

CURATED SELECTION · ACT II OPEN
```

The actual QR remains a placeholder until issue #9 provides the stable production URL and final QR asset.

### Route/progress band

The three stations use one consistent layout: title above the line, state/action below the line, node on the line.

```text
01  ПЕРВЫЙ ОТБОР
    ЗАВЕРШЁН

02  ВЫБОР ОТКРЫТ
    ВХОД ПО QR

03  СЛЕДУЮЩИЙ АКТ
    ВПЕРЕДИ
```

Station 01 is placed under the `РОЛЬ ВЛАДЕЛЬЦА` area so the reading sequence becomes:

> Полина — соавтор · первый отбор завершён · выбор открыт · следующий акт впереди.

## 9. Back-side copy

### Header

```text
ПОДАРОК В АКТИВНОЙ ПОСТАНОВКЕ
```

### Gift definition

```text
Этот открытый билет даёт Полине два места
на одном из событий персонального репертуара
сезона 2026/27.

Одно место — для Полины.

Второе — для спутника по её выбору.
```

### Completed first act

```text
ПЕРВЫЙ АКТ УЖЕ СОСТОЯЛСЯ

Мы вышли за пределы текущей афиши
одного города, посмотрели будущие сезоны
и собрали сильных кандидатов
из разных культурных центров.

У каждого есть свои основания
оказаться на радаре.
```

### Co-author action

```text
ТЕПЕРЬ В ДЕЙСТВИЕ ВСТУПАЕТ СОАВТОР

01  Оценить отдельно событие и город
02  Оставить комментарий
03  Сохранить кандидата на радаре
04  Перевести его в следующий акт
```

### Core dramaturgy

```text
СОБЫТИЕ — КУЛЬМИНАЦИЯ,
НО НЕ ВЕСЬ СЮЖЕТ

Следующий акт складывается из города, даты,
дороги, ожидания, атмосферы
и разговора после.
```

### Acts strip

```text
ДЕЙСТВИЕ II
ОБСУЖДЕНИЕ
События, города, даты и возможные сценарии.

ДЕЙСТВИЕ III
СОВПАДЕНИЕ
Сходятся афиша и календари.
Находятся четыре хороших места.

СЛЕДУЮЩИЙ АКТ
ДАЛЬШЕ — ВМЕСТЕ
Выбор сделан. Билеты приобретены.
```

### Small print

```text
ПРИМЕЧАНИЕ ХУДОЖЕСТВЕННОГО СОВЕТА

Результаты голосования учитываются художественным советом
наряду с афишей, наличием билетов
и суровой реальностью календарей.
```

## 10. Website contract

The ticket and the implemented Gift Edition website must reconcile on:

- project and season naming;
- typography roles;
- accent colour and progress-state semantics;
- `На радаре`, `Выбор открыт` and `Следующий акт` vocabulary;
- two-seat proposition;
- the co-author role;
- the exact URL and QR landing destination;
- the candidate content available at gift time.

The ticket may be revised after website implementation if the site makes any ticket statement inaccurate or creates a visible mismatch in the shared visual system.

## 11. Remaining acceptance gates

- [x] One-ticket `Полина + 1` gift is unambiguous.
- [x] Recipient participation is clear.
- [x] Travel is not presented as a paid part of the gift.
- [x] Candidate front and back are readable in the exact-size render.
- [x] Editable source, exact PDF, A4 PDF and preview assets exist as candidate artifacts.
- [ ] Website visual system is implemented and reconciled.
- [ ] Stable production URL is frozen.
- [ ] Final QR replaces the placeholder.
- [ ] Short fallback URL is confirmed.
- [ ] No production placeholder remains.
- [ ] Physical duplex print is reviewed.
- [ ] Printed QR scans successfully on at least two phones.
