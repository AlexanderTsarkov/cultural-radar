# Gift Edition v0.1 Candidate Model

## 1. Authority

This document is a minimal implementation aid for issue #5 and is subordinate to `docs/ux/gift-v0.1-experience-spec.md`.

It does not define additional product behaviour. Gift Edition v0.1 needs a small typed local dataset, not a general Cultural Radar domain platform.

## 2. Required candidate data

A published candidate must contain enough information to render its card and detail honestly:

- stable candidate ID and slug;
- title and event type;
- organisation or organiser;
- city with stable city ID;
- venue when known;
- concise factual summary;
- separate event and city rationales;
- known date label or an honest statement that dates are not known;
- plain-language current status;
- what remains uncertain;
- what will be checked next, when useful;
- at least one primary or official source;
- optional image and credit;
- editorial order from 1 to 6.

The dataset contains exactly six publishable candidates.

A candidate normally represents a concrete cultural event or festival. An explicitly owner-approved candidate may instead represent a source-backed cultural scenario when the exact event is intentionally still being selected. Such a record must have a supported cultural basis, explicit unknown facts and concrete monitoring targets; it is not an empty city placeholder.

## 3. Minimal TypeScript shape

```ts
export interface CandidateSource {
  label: string;
  url: string;
  type: "primary" | "secondary";
  supports: string;
}

export type NonEmptyArray<T> = [T, ...T[]];

export interface Candidate {
  id: string;
  slug: string;
  title: string;
  eventType: string;

  organisation: {
    name: string;
    officialUrl?: string;
  };

  creatorNames?: string[];

  venue?: {
    name: string;
    officialUrl?: string;
  };

  city: {
    id: string;
    name: string;
    country: string;
  };

  dateLabel: string;

  statusLabel: string;
  statusNote: string;
  nextExpectedUpdate?: string;

  summary: string;
  whyEvent: string;
  whyCity: string;
  knownFacts: string[];
  unknownFacts: string[];

  image?: {
    src: string;
    alt: string;
    credit?: string;
  };

  sources: NonEmptyArray<CandidateSource>;
  sortOrder: 1 | 2 | 3 | 4 | 5 | 6;
}
```

`statusLabel`, `statusNote` and `nextExpectedUpdate` are manually edited display text. They are not a state machine.

Examples:

```ts
{
  statusLabel: "Ждём даты",
  statusNote: "Постановка подтверждена, но подходящие даты сезона ещё не опубликованы.",
  nextExpectedUpdate: "Проверить афишу после публикации осеннего расписания."
}
```

```ts
{
  statusLabel: "Продажи открыты",
  statusNote: "Билеты на опубликованные даты доступны на официальной странице."
}
```

Gift Edition v0.1 does not require or define:

- an availability lifecycle enum;
- `archived` or other terminal status keys;
- `ActionPosture`;
- `watching`;
- `planning_possible`;
- `ticket_action_available`;
- lifecycle transition validation;
- shortlist, decision, purchase or fulfilment fields.

## 4. City identity

City ratings are keyed by stable city identity rather than candidate ID.

Example:

```ts
{
  id: "perm-ru",
  name: "Пермь",
  country: "Россия"
}
```

If two candidates use the same city ID, they use the same city rating.

## 5. Local evaluation model

```ts
export type RatingValue = 1 | 2 | 3 | 4 | 5;

export interface LocalEvaluationState {
  eventRatings: Record<string, RatingValue | undefined>;
  cityRatings: Record<string, RatingValue | undefined>;
  comments: Record<string, string | undefined>;
}
```

Rules:

- event ratings are keyed by candidate ID;
- city ratings are keyed by city ID;
- comments are keyed by candidate ID;
- ratings and comments are stored only in the current browser and device;
- rating changes are saved immediately;
- the latest comment value is saved immediately after each edit;
- before navigation, detail close, summary generation, Share or Copy, the latest in-memory comment value is committed;
- comments may be empty, edited or removed;
- no participant identity is required.

For an explicitly approved cultural-scenario candidate, the event rating measures interest in the scenario rather than in an already selected performance. It uses the same `eventRatings` storage and completion rules.

A candidate is complete when both event and city ratings exist. A comment is optional and does not affect completion.

## 6. Summary

For a completed candidate:

```ts
combinedScore = eventRating + cityRating;
```

Range: `2–10`.

Summary order:

1. combined score descending;
2. event rating descending;
3. `sortOrder` ascending.

The interface always shows both component ratings beside the total.

The total is Polina's transparent two-part score only. The dataset must not include or display synthetic, community, artistic-council or test-data aggregate ratings in Gift Edition v0.1.

Every non-empty comment is included with its candidate in every complete Web Share, clipboard-copy and manually selectable result payload.

## 7. Source rules

Every published candidate must have a non-empty source list and at least one primary or official source.

A source records:

- a readable label;
- URL;
- whether it is primary or secondary;
- which claim it supports.

Claims about dates, sales or availability require evidence supporting that specific claim.

Secondary sources may add context but cannot replace primary evidence for publication.

A research direction without enough evidence is not one of the six published candidates. A source-backed cultural scenario may be publishable when explicitly approved by the owner and when its current basis, uncertainty and next monitoring targets are documented.

The UI exposes source links in candidate detail with readable labels such as:

- `Официальная страница`;
- `Программа`;
- `Афиша и билеты`;
- `Подробнее`.

## 8. Data-quality rules

- Do not invent dates, sales, availability, cast details, URLs or credits.
- Use `Даты ожидаются` or equivalent honest text when exact dates are unknown.
- Keep factual summary separate from editorial rationale.
- Keep event and city rationales separate.
- Keep status text separate from ratings.
- Keep navigation separate from candidate data.
- Do not publish an empty Nizhny Novgorod placeholder; the approved Nizhny Novgorod cultural scenario must remain source-backed and explicit about its unknown final event.
- Do not add fields for speculative future product behaviour during v0.1 implementation.
