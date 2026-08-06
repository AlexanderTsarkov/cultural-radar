# Domain Model: Cultural Candidate

## 1. Purpose

This document defines the minimum domain model required for Gift Edition v0.1 while preserving distinctions needed by a future Cultural Radar product.

The model must support incomplete cultural information. A candidate may exist before there is a concrete date, venue or ticket page.

Exact Gift Edition interaction behaviour is defined by `docs/ux/gift-v0.1-experience-spec.md`.

## 2. Core entities

### Candidate

A candidate is an item included in a particular personal repertoire.

It answers:

- why this item is relevant to this user or group;
- what is currently known;
- what remains uncertain;
- what Cultural Radar should follow next;
- whether any practical action is currently possible;
- which evidence supports the current statement.

A candidate is not always the same as a production or a scheduled performance. It is the editorial and user-specific observation object.

### Production

A distinct artistic work or staging, for example:

- a specific production of an opera;
- a ballet by a particular choreographer;
- a theatre performance by a specific company;
- a festival programme or concert concept.

A production may exist without a current scheduled performance.

### Event

A concrete occurrence of a production or cultural programme:

- date and time;
- city;
- venue;
- cast or programme, if applicable;
- ticket availability.

One production may have multiple events in different cities or dates.

### Organisation

A theatre, company, festival, orchestra, promoter or other organiser connected to the production or event.

### Venue

A specific performance location or hall.

A venue is distinct from the organisation. A visiting company may perform at another organisation's venue.

### City

A destination or home city evaluated independently from the event.

The city may carry:

- editorial description;
- travel value;
- practical travel notes;
- user rating;
- multiple candidate events.

### Source

A page or publication supporting a factual claim.

Examples:

- official theatre announcement;
- festival programme;
- official ticket page;
- season press release;
- primary social-media announcement;
- secondary discovery source.

A source records which claim it supports and whether it is primary or secondary.

### Availability status

The current evidence and operational stage of the candidate: discovery, announcement, programme, dates, sales or suitable seats.

### Action posture

The practical consequence of the current candidate information:

- `watching` — no practical action is available yet; Cultural Radar continues to follow the candidate;
- `planning_possible` — dates or a sufficiently concrete period are known and planning can begin, but ticket action is not yet available or not yet appropriate;
- `ticket_action_available` — current evidence supports a ticket-related action.

Action posture concerns the real-world candidate situation. It is not a rating, navigation state or final selection.

### Event rating

Polina's `1–5` assessment of how much she wants to see a specific candidate.

### City rating

Polina's `1–5` assessment of how much she wants to be in or travel to a stable city identity.

### Evaluation progress

A derived presentation state indicating whether a candidate has neither rating, one rating or both ratings.

### Comment

An optional note for the artistic council connected to a candidate.

The comment value is optional, but the comment control is a required Gift Edition v0.1 interaction.

## 3. Availability lifecycle

Canonical v0.1 states:

```text
research_candidate
officially_announced
waiting_for_programme_or_confirmation
waiting_for_dates
dates_published
waiting_for_sales
sales_open
suitable_seats_available
archived
```

Human labels are defined in `docs/product/product-language.md`.

### State semantics

#### `research_candidate`

The item was discovered in research but requires additional confirmation. It is not automatically publishable.

#### `officially_announced`

A primary source confirms the production, festival or relevant programme.

#### `waiting_for_programme_or_confirmation`

A festival, city direction or other cultural proposition is known, but the programme or concrete publishable candidate remains incomplete.

#### `waiting_for_dates`

The cultural event is sufficiently confirmed, but a concrete suitable date is not yet published.

#### `dates_published`

At least one concrete event date in the target period is known.

#### `waiting_for_sales`

A suitable date exists, but tickets are not yet on sale.

#### `sales_open`

Tickets are publicly available. This does not mean that the required suitable seats exist.

#### `suitable_seats_available`

The required quantity and quality of seats appear purchasable.

For the Polina Gift Edition, the operational target is four seats: two gifted seats and two seats for the donors.

#### `archived`

The candidate is no longer active, became impossible or moved to historical records.

## 4. Important modelling rules

### 4.1 Availability is not navigation

`На радаре` and `Следующий акт` are interface destinations in Gift Edition v0.1. They are not values of `availabilityStatus`.

### 4.2 Availability is not evaluation

Event and city ratings never alter candidate availability or action posture.

A candidate may be:

- `waiting_for_dates` with ratings `5/5` and `4/5`;
- `sales_open` but still unrated;
- `suitable_seats_available` with low user interest.

### 4.3 No selection state in Gift Edition v0.1

Gift Edition v0.1 does not store per-candidate `shortlisted`, `keep`, `reject`, `selected` or `purchased` states.

`Следующий акт` contains all six completed evaluations. It is not a shortlist Boolean.

Future product versions may add separate decision and fulfilment dimensions when users choose or manage multiple events. Those future dimensions must not be folded into `availabilityStatus`, ratings or navigation.

### 4.4 Required publishable-candidate information

Every publishable candidate must provide all fields needed by the status contract:

- current status;
- human status explanation;
- known facts;
- unknown facts, using an empty array when nothing material is currently unknown;
- next expected update;
- action posture;
- supporting sources.

These fields are required even when the answer is `none known`, `not applicable` or an empty list. Absence of a field must not be used to represent an explicit empty state.

Supporting sources are the exception to the empty-list rule: a publishable candidate must always have at least one source.

## 5. Gift Edition v0.1 representation

For delivery speed, v0.1 may use a flattened local structure.

Recommended TypeScript shape:

```ts
export type AvailabilityStatus =
  | "research_candidate"
  | "officially_announced"
  | "waiting_for_programme_or_confirmation"
  | "waiting_for_dates"
  | "dates_published"
  | "waiting_for_sales"
  | "sales_open"
  | "suitable_seats_available"
  | "archived";

export type ActionPosture =
  | "watching"
  | "planning_possible"
  | "ticket_action_available";

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

  production?: {
    title: string;
    creators?: string[];
    description?: string;
  };

  organisation: {
    name: string;
    type?: string;
    officialUrl?: string;
  };

  venue?: {
    name: string;
    officialUrl?: string;
  };

  city: {
    id: string;
    name: string;
    country: string;
    editorialNote?: string;
    travelNoteFromMoscow?: string;
  };

  schedule: {
    dateLabel: string;
    startDate?: string;
    endDate?: string;
    exactDates?: string[];
  };

  availabilityStatus: AvailabilityStatus;
  statusNote: string;
  nextExpectedUpdate: string;
  actionPosture: ActionPosture;

  summary: string;
  whyEvent: string;
  whyCity: string;
  knownFacts: string[];
  unknownFacts: string[];
  risks?: string[];

  image?: {
    src: string;
    alt: string;
    credit?: string;
  };

  sources: NonEmptyArray<CandidateSource>;

  tags?: string[];
  sortOrder: 1 | 2 | 3 | 4 | 5 | 6;
}
```

## 6. City identity

Cities must use stable identifiers.

Example:

```ts
{
  id: "perm-ru",
  name: "Пермь",
  country: "Россия"
}
```

The same city rating applies across all candidates linked to that city.

In v0.1 the city object may be duplicated inside a static candidate file for convenience, but application state must derive city identity from `city.id`.

## 7. Local evaluation model

### 7.1 Rating value

```ts
export type RatingValue = 1 | 2 | 3 | 4 | 5;
```

### 7.2 Event rating

```ts
export interface EventRating {
  candidateId: string;
  value: RatingValue;
  updatedAt?: string;
}
```

Event scale:

- `1` — `Не моё`;
- `2` — `Скорее не интересно`;
- `3` — `Интересно, но не приоритет`;
- `4` — `Очень интересно`;
- `5` — `Очень хочу увидеть`.

### 7.3 City rating

```ts
export interface CityRating {
  cityId: string;
  value: RatingValue;
  updatedAt?: string;
}
```

City scale:

- `1` — `Не хочется`;
- `2` — `Скорее не привлекает`;
- `3` — `Было бы интересно`;
- `4` — `Очень хочется`;
- `5` — `Очень хочу поехать`.

### 7.4 Candidate comment

```ts
export interface CandidateComment {
  candidateId: string;
  body: string;
  updatedAt?: string;
}
```

The interface provides an editable `Комментарий художественному совету` control for every candidate.

The user may leave it empty. Empty or whitespace-only text should be treated as no saved comment.

### 7.5 No decision field

Do not add a Gift Edition v0.1 field such as:

```ts
// Not part of v0.1
decision: "shortlist" | "keep" | "reject";
```

Low interest is represented by the rating itself. `Не моё` is the label for event rating `1`, not a rejection command.

### 7.6 Evaluation progress

Progress is derived, not independently authoritative:

```ts
export type EvaluationProgress =
  | "not_started"
  | "partial"
  | "complete";

export function getEvaluationProgress(
  eventRating?: RatingValue,
  cityRating?: RatingValue,
): EvaluationProgress {
  if (eventRating && cityRating) return "complete";
  if (eventRating || cityRating) return "partial";
  return "not_started";
}
```

A candidate is complete only when both ratings exist. A comment does not affect completion.

### 7.7 Storage

For the local-only prototype, ratings and comments may be stored in `localStorage` or an equivalent browser-local abstraction.

Requirements:

- stable candidate and city keys;
- immediate save after rating selection or comment change;
- restoration in the same browser and device;
- editable and removable comments;
- editable ratings;
- no implication of shared persistence;
- no participant identity required for v0.1.

A possible local state shape is:

```ts
export interface LocalEvaluationState {
  eventRatings: Record<string, RatingValue | undefined>;
  cityRatings: Record<string, RatingValue | undefined>;
  comments: Record<string, string | undefined>;
}
```

## 8. Summary score

For Gift Edition v0.1:

```ts
combinedScore = eventRating + cityRating;
```

The possible range is `2–10`.

The score is used only after both ratings exist and must always be displayed with its components.

Summary order:

1. combined score descending;
2. event rating descending;
3. original `sortOrder` ascending.

The combined score is transparent orientation, not an opaque recommendation algorithm and not an automatic final decision.

Non-empty candidate comments may be included with the corresponding candidate in the shared summary. Comments do not affect ordering.

## 9. Source requirements

Every published candidate must contain at least one source and must expose its source links in candidate detail.

Publication rules:

- `sources` is a non-empty collection;
- at least one primary source is required for a public Gift Edition candidate;
- `officially_announced` and all later factual lifecycle stages must be supported by a primary source;
- dates, sales and suitable-seat claims require a source that supports that specific claim;
- a secondary discovery source may add context, but it does not replace primary evidence for publication;
- a candidate without sufficient primary evidence remains `research_candidate` and is not one of the six public cards.

The detail view should present external links as useful paths for further reading, not only as internal evidence metadata. A source label should tell Polina what she can learn there, for example:

- official event or production page;
- programme and dates;
- official ticket page;
- interview, review or editorial context.

Required source fields:

- label;
- URL;
- source type;
- supported claim.

The UI must not infer stronger certainty than the sources support.

Optional future fields:

- last checked time;
- content fingerprint;
- monitoring method;
- detected change;
- confidence;
- source availability.

The absence of automated monitoring infrastructure does not change the user-facing candidate status contract. Manual editorial checks may update the same fields.

## 10. Date representation

The model supports:

- one concrete performance in `exactDates`;
- two concrete performances;
- several exact dates plus a compact `dateLabel` range;
- a longer `startDate`–`endDate` period;
- a confirmed festival period with an incomplete programme;
- a human `dateLabel` such as `Даты ожидаются` when exact dates are absent.

Do not invent exact dates to satisfy the schema.

## 11. Derived presentation values

The UI may derive:

- evaluation progress per candidate;
- count of complete candidates;
- event rating;
- city rating;
- transparent combined score;
- summary order;
- number of candidates in a city;
- progress through availability stages.

Action posture is explicit candidate data, not an optional inference. Implementations may validate consistency between `availabilityStatus` and `actionPosture`, but must not omit the field.

Do not derive or display shortlist votes in Gift Edition v0.1.

## 12. Data quality rules

- Do not invent exact dates.
- Do not present a secondary source as official.
- Preserve uncertainty in `statusNote` and `unknownFacts`.
- Record city and venue separately.
- Record organisation and production separately where known.
- Do not treat ticket availability as equivalent to suitable-seat availability.
- Keep editorial rationale separate from factual description.
- Use stable IDs and slugs.
- Include image credit when required by the source.
- Keep candidate status separate from ratings.
- Keep navigation separate from domain state.
- Keep comments separate from rating completion and ranking.
- Require a non-empty source list and at least one primary source before publication.
- Do not publish the Nizhny Novgorod research direction until it becomes a concrete sourced proposition.

## 13. Future decision and fulfilment model

A later product may let a user follow or choose multiple events simultaneously. That future model may require independent fields such as:

```ts
export type DecisionStatus =
  | "considering"
  | "selected";

export type FulfilmentStatus =
  | "not_started"
  | "planning"
  | "purchased"
  | "completed";
```

These names and states are illustrative, not approved current schema.

Future decision and fulfilment must remain separate from:

- availability status;
- event and city ratings;
- `На радаре` navigation;
- `Следующий акт` summary.

## 14. Deferred model areas

Gift Edition v0.1 does not need to finalise:

- production deduplication across organisations;
- cast-specific event identity;
- complex festival programme hierarchy;
- seat inventory tracking;
- automated source-change history;
- notification subscriptions and channels;
- user authentication and permissions;
- public/private repertoire ownership;
- commercial ticket-provider integration;
- multi-event decision and fulfilment workflows.
