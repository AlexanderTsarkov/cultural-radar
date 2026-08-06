# Product Language

## 1. Purpose

This document fixes the current naming system for Cultural Radar and prevents individual names from competing with each other.

Each term describes a different layer of the product.

For Gift Edition v0.1, exact interaction behaviour is defined by `docs/ux/gift-v0.1-experience-spec.md`.

## 2. Canonical names

### Культурный радар

**Level:** product and overall mechanism.

Meaning:

- discovers relevant cultural signals;
- expands the user's field of view beyond familiar listings;
- keeps potential events under observation;
- helps distinguish valuable signals from general noise;
- follows a candidate until dates and tickets become actionable;
- updates meaningful status information and informs the user.

Canonical usage:

- «Культурный радар находит события заранее»;
- «Культурный радар продолжает следить за кандидатом»;
- «Культурный радар Полины · Сезон 2026/27».

Do not reduce the product to travel. A city is one dimension of the radar, not a mandatory destination.

Do not claim that observation or notification is automated unless automation actually exists. Manual editorial follow-up may fulfil the same user-facing promise in Gift Edition v0.1.

### Свой репертуар

**Level:** personal collection.

Meaning:

- the user's current curated cultural candidates;
- events, productions, festivals and possible trips that matter specifically to this person;
- a collection that may contain candidates without exact dates.

Canonical usage:

- «Открыть репертуар»;
- «В вашем репертуаре шесть кандидатов»;
- «Репертуар сезона 2026/27».

### На радаре

**Level:** current repertoire screen and observed candidate collection.

Meaning in Gift Edition v0.1:

- the screen containing all six current candidate cards;
- the place where Polina browses the repertoire and sees evaluation progress;
- the collection remains visible whether a candidate is unrated, partially rated or fully rated.

Canonical usage:

- «Сейчас на радаре»;
- «Вернуться на радар»;
- «На радаре — шесть культурных предложений».

Do not use `На радаре` as:

- a rating;
- a separate user decision;
- an action equivalent to keeping or shortlisting a candidate;
- a replacement for the candidate's informational status.

Future product versions may use related observation terminology in broader repertoire management, but Gift Edition v0.1 has no candidate-level `on_radar` selection state.

### Следующий акт

**Level:** completed evaluation summary and share stage.

Meaning in Gift Edition v0.1:

- becomes active after all six candidates have both event and city ratings;
- shows every candidate, not only a shortlist;
- orders candidates by the transparent sum of the two ratings;
- preserves separate event and city values;
- provides a complete share-ready result for the artistic council.

Canonical usage:

- «Открыть Следующий акт»;
- «Ваш Следующий акт готов»;
- «Отправить Следующий акт художественному совету».

Do not use `Следующий акт` as:

- a candidate status;
- a per-card button or decision;
- a synonym for `shortlisted`;
- a hidden algorithmic recommendation.

It remains a metaphor for the next meaningful cultural experience, but in v0.1 its concrete interface role is the completed summary.

### Открытый билет

**Level:** physical or digital gift artifact.

Meaning:

- two tickets are gifted before the final event is selected;
- the recipient participates in the selection;
- the artifact opens access to the current personal repertoire.

Canonical usage:

- «Открытый билет для Полины + 1»;
- «Открыть текущий репертуар по QR-коду».

Core phrase:

> Событие ещё не выбрано. Впечатление уже подарено.

## 3. Gift Edition naming

Full name:

> **Культурный радар Полины · Сезон 2026/27**

Short forms allowed in the interface:

- «Радар Полины»;
- «Сезон Полины»;
- «Личный сезон 2026/27» when the owner is already clear from context.

Physical artifact:

> **Открытый билет · Полина + 1**

## 4. Descriptor and messages

Primary descriptor:

> Персональный репертуар культурных событий и поездок.

Product explanation:

> Культурный радар помогает находить достойные события заранее, собирать свой репертуар и не пропускать момент, когда появляются программа, даты и билеты.

Gift explanation:

> Мы собрали события и города, которые могут стать следующим большим впечатлением. Оценивай отдельно событие и город, а затем отправь свой Следующий акт художественному совету.

Primary gift statement:

> Два билета — для Полины и спутника по её выбору.

Company statement:

> Мы покупаем билеты себе на тот же показ и присоединяемся.

## 5. Evaluation language

Gift Edition v0.1 has two independent ratings:

- `Событие` — how much Polina wants to see the event;
- `Город` — how much Polina wants to be in or travel to the city.

Event scale:

1. `Не моё`;
2. `Скорее не интересно`;
3. `Интересно, но не приоритет`;
4. `Очень интересно`;
5. `Очень хочу увидеть`.

City scale:

1. `Не хочется`;
2. `Скорее не привлекает`;
3. `Было бы интересно`;
4. `Очень хочется`;
5. `Очень хочу поехать`.

`Не моё` is an explanation of event rating `1/5`, not a candidate action or rejection state.

Completion language:

- `Ещё не оценено`;
- `Оценено частично`;
- `Оценено`;
- `Оценено X из 6`.

Summary language:

```text
Событие  5 / 5
Город    4 / 5
Итого    9 / 10
```

`Итого` is always the visible, transparent sum of the two ratings. It does not replace them.

## 6. Voice and tone

The product should sound:

- informed but not academic;
- selective but not elitist;
- theatrical but not ornate;
- warm in the gift edition, restrained in the product layer;
- honest about incomplete information;
- interested in cities without turning into a travel agency;
- confident about continued observation without falsely claiming automation.

Avoid:

- generic advertising language;
- «лучшие события для всех»;
- excessive sentimentality;
- imitation of a ticket marketplace;
- military radar terminology;
- claims that unconfirmed events are guaranteed;
- language that implies travel is mandatory;
- language that implies device-local ratings were already transmitted.

## 7. Interface verbs

Preferred verbs:

- открыть;
- найти;
- заметить;
- сохранить;
- наблюдать;
- следить;
- обновить;
- сообщить;
- оценить;
- обсудить;
- дождаться;
- выбрать;
- отправить;
- поехать;
- купить.

Avoid overusing:

- сканировать;
- детектировать;
- захватывать сигнал;
- обрабатывать цель;
- конвертировать пользователя.

The radar is a metaphor, not an air-defence control panel.

## 8. Candidate status language

Candidate status describes evidence and availability, not navigation or user evaluation.

Recommended human-readable statuses:

1. **Кандидат исследования** — found in research and requires additional confirmation.
2. **Официально анонсировано** — confirmed by a primary source.
3. **Ждём программу или подтверждение** — the direction is known, but programme or concrete proposition is incomplete.
4. **Ждём даты** — the event is known, but exact performance dates are absent.
5. **Даты опубликованы** — concrete performances are known.
6. **Ждём продажи** — dates are known, but tickets are not available yet.
7. **Продажи открыты** — public ticket sales have started.
8. **Подходящие места доступны** — the required number and quality of seats appear purchasable.

Each candidate should also state:

- what is true now;
- which dates are known;
- what remains unknown;
- what Cultural Radar follows next;
- what action is possible now.

The following are not v0.1 candidate statuses:

- `На радаре`;
- `В следующем акте`;
- `Не моё`;
- `Выбрано`;
- `Билеты приобретены`.

Future versions may add decision and fulfilment states for users following multiple selected events. Those states must remain separate from navigation, ratings and availability.

## 9. Device-local and share language

Required first-save message:

> **Ваш выбор сохранён**  
> Оценки и комментарии хранятся только в этом браузере на этом устройстве. Вы можете вернуться и изменить их. Художественный совет увидит результат только после того, как вы отправите `Следующий акт`.

Required summary note:

> Результат пока хранится только на этом устройстве и ещё не отправлен.

Required fallback heading and instruction:

> **Результат ещё не отправлен**  
> Скопируйте полный результат и отправьте его художественному совету. Если копирование недоступно, выделите полный текст вручную.

Fallback action:

```text
КОПИРОВАТЬ РЕЗУЛЬТАТ
```

Success message after clipboard copy:

> Результат скопирован.

`Результат скопирован` confirms only a clipboard operation. It must not be replaced by `Отправлено` or any equivalent unless transmission can actually be confirmed.

Clipboard copy and manual text selection are the complete-result fallback paths. Screenshots may be used for personal convenience, but must not be presented as a substitute for the complete comment-preserving text payload.

Avoid `Ваш голос принят`, `Отправлено` or any equivalent unless transmission can actually be confirmed.

## 10. Naming decisions not yet final

The following may change after Gift Edition v0.1:

- public product descriptor;
- English brand rendering;
- final domain name;
- public-market terminology for long-term repertoire management;
- future decision and fulfilment states;
- exact notification channels.

The Russian hierarchy and Gift Edition meanings above are accepted for the current project phase.
