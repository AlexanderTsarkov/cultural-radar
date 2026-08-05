# Domain Model: Cultural Candidate

## 1. Purpose

This document defines the minimum domain model required for the Gift MVP while preserving the distinctions needed by a future Cultural Radar product.

The model must support incomplete cultural information. A candidate may exist before there is a concrete date, venue or ticket page.

## 2. Core entities

### Candidate

A candidate is an item included in a particular personal repertoire.

It answers:

- why this item is relevant to this user or group;
- what is currently known;
- what remains uncertain;
- what should be monitored next;
- whether it belongs in the shortlist.

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
- user ratings;
- comments;
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

A source should record which claim it supports and whether it is primary or secondary.

### Availability state

The current operational stage of the candidate from discovery to purchase.

### Vote

A participant's assessment of an event or city.

### Comment

A participant's note connected to a candidate or city.

## 3. Candidate lifecycle

Canonical states:

```text
research_candidate
officially_announced
waiting_for_dates
dates_published
waiting_for_sales
sales_open
suitable_seats_available
shortlisted
selected
purchased
archived
```

Human labels are defined in `docs/product/product-language.md`.

### State semantics

#### `research_candidate`

The item was discovered in research but requires additional confirmation or observation.

#### `officially_announced`

A primary source confirms the production, festival or relevant programme.

#### `waiting_for_dates`

The cultural event is confirmed, but a concrete suitable date is not yet published.

#### `dates_published`

At least one concrete event date in the target period is known.

#### `waiting_for_sales`

A suitable date exists, but tickets are not yet on sale.

#### `sales_open`

Tickets are publicly available. This does not yet mean that four suitable seats exist.

#### `suitable_seats_available`

The required quantity and quality of seats appear purchasable.

For the Polina Gift Edition, the operational target is four seats: two gifted seats and two seats purchased by the donors.

#### `shortlisted`

The candidate has entered **Следующий акт**. This is an editorial/user decision and may coexist conceptually with another availability stage.

For the MVP, this may be represented as a separate Boolean flag rather than as a single lifecycle state.

#### `selected`

The group has chosen this candidate.

#### `purchased`

The required tickets have been acquired.

#### `archived`

The candidate is no longer active or the completed experience has moved to history.

## 4. Important modelling rule

Availability and editorial selection are separate dimensions.

A candidate can be:

- `waiting_for_dates` and shortlisted;
- `sales_open` but not shortlisted;
- `selected` before purchase;
- archived because the event became impossible.

Therefore the future model should use:

- `availabilityStatus`;
- `selectionStatus`;
- optional `archiveReason`.

## 5. Gift MVP representation

For delivery speed, v0.1 may use a flattened local structure.

Recommended TypeScript shape:

```ts
export type AvailabilityStatus =
  | "research_candidate"
  | "officially_announced"
  | "waiting_for_dates"
  | "dates_published"
  | "waiting_for_sales"
  | "sales_open"
  | "suitable_seats_available"
  | "selected"
  | "purchased"
  | "archived";

export type SelectionStatus =
  | "on_radar"
  | "shortlisted"
  | "rejected"
  | "selected";

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
  selectionStatus: SelectionStatus;
  statusNote: string;
  nextExpectedUpdate?: string;

  summary: string;
  whyEvent: string;
  whyCity: string;
  risks?: string[];

  image?: {
    src: string;
    alt: string;
    credit?: string;
  };

  sources: Array<{
    label: string;
    url: string;
    type: "primary" | "secondary";
    supports?: string;
  }>;

  tags?: string[];
  featured?: boolean;
  sortOrder?: number;
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

The same city rating should apply across all candidates linked to that city.

In v0.1 the city object may be duplicated inside a static candidate file for convenience, but the application layer should derive city identity from `city.id`.

## 7. Votes

Conceptual vote model:

```ts
export interface Vote {
  id: string;
  participantId: string;
  candidateId: string;
  eventRating?: 1 | 2 | 3 | 4 | 5;
  decision?: "shortlist" | "keep" | "reject";
  createdAt: string;
  updatedAt: string;
}
```

City rating is separate:

```ts
export interface CityVote {
  id: string;
  participantId: string;
  cityId: string;
  cityRating: 1 | 2 | 3 | 4 | 5;
  createdAt: string;
  updatedAt: string;
}
```

This prevents a user from accidentally rating the same city multiple times through different event cards.

For the local-only prototype, votes may be stored in `localStorage` using anonymous participant identity.

## 8. Comments

Conceptual comment model:

```ts
export interface Comment {
  id: string;
  participantId: string;
  candidateId?: string;
  cityId?: string;
  body: string;
  createdAt: string;
  updatedAt?: string;
}
```

Exactly one of `candidateId` or `cityId` should normally be present.

## 9. Source requirements

Every published candidate should contain at least one official or otherwise primary source whenever available.

The UI must not infer stronger certainty than the sources support.

Required source fields:

- label;
- URL;
- source type;
- supported claim.

Optional future fields:

- last checked time;
- content fingerprint;
- monitoring method;
- detected change;
- confidence;
- source availability.

## 10. Derived presentation values

The UI may derive:

- average event rating;
- average city rating;
- combined orientation score;
- number of shortlist votes;
- number of comments;
- number of candidates in a city;
- progress through availability stages;
- whether action is currently required.

The combined score should remain transparent and must not replace separate event and city ratings.

## 11. Data quality rules

- Do not invent exact dates.
- Do not present a secondary source as official.
- Preserve uncertainty in `statusNote`.
- Record city and venue separately.
- Record organisation and production separately where known.
- Do not treat ticket availability as equivalent to suitable seat availability.
- Keep editorial rationale separate from factual description.
- Use stable IDs and slugs.
- Include image credit when required by the source.

## 12. Deferred model areas

The Gift MVP does not need to finalise:

- production deduplication across organisations;
- cast-specific event identity;
- complex festival programme hierarchy;
- seat inventory tracking;
- automated source-change history;
- notification subscriptions;
- user authentication and permissions;
- public/private repertoire ownership;
- commercial ticket-provider integration.
