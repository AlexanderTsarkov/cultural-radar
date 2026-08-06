# Product Language — Gift Edition v0.1

## 1. Role

This file is a terminology and required-copy reference for Gift Edition v0.1.

It does not define product features, candidate lifecycle states or implementation architecture. Exact behaviour is defined only by `docs/ux/gift-v0.1-experience-spec.md`.

## 2. Canonical names

### Культурный радар

The overall product and curatorial mechanism.

Approved usage:

- `Культурный радар Полины · Сезон 2026/27`;
- `Культурный радар находит такие возможности и собирает их в личный репертуар`.

Do not describe manual v0.1 follow-up as automated monitoring.

### Открытый билет

The printed gift artifact.

Approved print form:

- `Открытый билет · Полина + 1`.

Core phrase:

> Событие ещё не выбрано. Впечатление уже подарено.

`Полина + 1`, ticket quantity and companion entitlement belong to the printed artifact. They are not required website copy and must not be inferred as website acceptance criteria.

### На радаре

The repertoire screen containing all six candidates.

Approved usage:

- `Открыть репертуар`;
- `Вернуться на радар`;
- `На радаре — шесть культурных предложений`.

`На радаре` is not a candidate state, rating or keep action.

### Следующий акт

The completed summary and share screen after all six candidates have both ratings.

Approved usage:

- `Открыть Следующий акт`;
- `Ваш Следующий акт готов`;
- `Отправить Следующий акт художественному совету`.

`Следующий акт` is not a per-candidate action, shortlist or recommendation status.

## 3. First-screen language

Primary CTA:

```text
ОТКРЫТЬ РЕПЕРТУАР
```

Secondary action:

```text
КАК РАБОТАЕТ РАДАР
```

Prepared-state note:

```text
ПЕРВЫЙ ОТБОР УЖЕ СОБРАН
```

Formula:

```text
СОБЫТИЕ + ГОРОД + КОМПАНИЯ
```

## 4. Rating language

Gift Edition v0.1 uses two independent ratings.

### Событие

1. `Не моё`
2. `Скорее не интересно`
3. `Интересно, но не приоритет`
4. `Очень интересно`
5. `Очень хочу увидеть`

### Город

1. `Не хочется`
2. `Скорее не привлекает`
3. `Было бы интересно`
4. `Очень хочется`
5. `Очень хочу поехать`

`Не моё` is the explanation of event rating `1/5`, not a rejection command.

Summary presentation:

```text
Событие  5 / 5
Город    4 / 5
Итого    9 / 10
```

`Итого` is always the visible sum of Polina's event and city ratings. It is not a community, council, synthetic or algorithmic score.

Evaluation progress:

- `Ещё не оценено`;
- `Оценено частично`;
- `Оценено`;
- `Оценено X из 6`.

## 5. Comment language

Required label:

```text
Комментарий художественному совету
```

The control is present for every candidate. Entering a comment is optional.

Do not describe local saving as sending, submission or delivery.

## 6. Candidate status language

Candidate status is manually edited plain text, not a canonical enum.

Each published candidate uses:

- a short `statusLabel`;
- a clear `statusNote`;
- optional `nextExpectedUpdate` text.

Useful labels may include:

- `Ждём программу`;
- `Ждём даты`;
- `Даты опубликованы`;
- `Ждём продажи`;
- `Продажи открыты`;
- `Подходящие места доступны`.

These are editorial examples, not required lifecycle keys. Gift Edition v0.1 does not define `archived`, action-posture labels or transition rules.

Status copy should answer only what is useful now:

- what is confirmed;
- what is still unknown;
- what will be checked next;
- whether the linked source currently supports a practical action.

Do not expose internal keys in the UI.

## 7. Source-link language

Use readable labels:

- `Официальная страница`;
- `Программа`;
- `Афиша и билеты`;
- `Подробнее`.

Do not use stronger certainty than the linked evidence supports.

## 8. Device-local copy

Required first-save message:

> **Ваш выбор сохранён**  
> Оценки и комментарии хранятся только в этом браузере на этом устройстве. Вы можете вернуться и изменить их. Художественный совет увидит результат только после того, как вы отправите `Следующий акт`.

Required summary note:

> Результат пока хранится только на этом устройстве и ещё не отправлен.

## 9. Share and fallback copy

Primary share action:

```text
ОТПРАВИТЬ ХУДОЖЕСТВЕННОМУ СОВЕТУ
```

Fallback heading and instruction:

> **Результат ещё не отправлен**  
> Скопируйте полный результат и отправьте его художественному совету. Если копирование недоступно, выделите полный текст вручную.

Fallback action:

```text
КОПИРОВАТЬ РЕЗУЛЬТАТ
```

Clipboard success:

> Результат скопирован.

`Результат скопирован` confirms only copying. Do not show `Отправлено`, `Ваш голос принят` or equivalent unless transmission is actually confirmed.

Screenshots are not described as a complete-result fallback.

## 10. Voice and visual language

The product should sound:

- informed but not academic;
- selective but not elitist;
- theatrical but not ornate;
- warm in the gift layer and restrained in the service layer;
- honest about uncertainty and manual operation.

Visual direction:

- serious theatre editorial;
- modern festival programme;
- printed ticket or cultural dossier;
- graphite, red and grey;
- strong typography and generous spacing.

Avoid:

- marketplace and travel-booking language;
- SaaS dashboard language;
- military radar metaphors;
- velvet-and-gold theatre clichés;
- generic advertising claims;
- claims of automatic monitoring;
- terminology that introduces shortlist, keep, reject, purchase or lifecycle states not present in the approved MVP.
