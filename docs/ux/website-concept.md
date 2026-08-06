# UX Concept: Gift Website

## 1. Role and authority

This document preserves the broader product and visual concept of the Gift Edition website.

It is **background guidance**, not an implementation contract.

For Gift Edition v0.1:

- `docs/ux/gift-v0.1-experience-spec.md` is the single normative product and interaction contract;
- `docs/domain/candidate-model.md` defines the minimal subordinate data shape;
- issues #5, #6 and #7 define their bounded implementation work;
- this document must not introduce additional fields, states, controls or acceptance requirements.

When this concept conflicts with the normative contract or an explicit owner decision, the normative contract and owner decision prevail.

## 2. Experience principle

The website is part of the gift, not only a catalogue.

It should communicate that:

- Polina has received a personal cultural season;
- the first curated repertoire is already prepared;
- a proposal combines event, city and company without making travel mandatory;
- Polina participates in the final choice;
- research and follow-up are performed manually in Gift Edition v0.1.

Conceptual formula:

> Personal theatre season × curated repertoire × collaborative choice.

The site should feel closer to a contemporary theatre or festival publication than to a ticket marketplace, survey, travel aggregator or technical dashboard.

## 3. Visual direction

Visual formula:

> **Серьёзность большого театра × современная фестивальная редактура × язык печатного билета.**

Use:

- strong editorial typography;
- poster-like headings;
- expressive event photography or controlled placeholders;
- asymmetrical but disciplined composition;
- generous whitespace;
- clear programme and ticket details;
- restrained travel notation;
- excellent mobile readability;
- individual art direction for each candidate within one shared hierarchy;
- graphite, red and grey semantics aligned with the printed Open Ticket.

Avoid:

- generic SaaS dashboard styling;
- identical marketplace cards;
- travel-booking visual language;
- decorative theatre masks, curtains, velvet and gold as a default style;
- radar screens, military symbols or neon control-room styling;
- copied theatre or festival identities;
- motion that competes with reading.

## 4. First-screen concept

The first screen should prioritise the value of Cultural Radar rather than repeat only the printed ticket mechanics.

It should establish:

- Polina's personal cultural season;
- the difficulty and value of curatorial discovery;
- the combination of event, city and company;
- the fact that the first repertoire is ready;
- the primary action `ОТКРЫТЬ РЕПЕРТУАР`.

Exact hierarchy and copy are defined only in `docs/ux/gift-v0.1-experience-spec.md`.

## 5. Information architecture concept

The intended mobile flow contains:

1. entry and gift explanation;
2. `На радаре` repertoire;
3. candidate detail;
4. `Следующий акт` completed summary and sharing;
5. optional explanatory content such as `Как работает радар` or `О подарке`.

`На радаре` and `Следующий акт` are navigation destinations, not candidate states.

The implementation may use one mobile-first page with anchored sections and a detail layer when that is the most reliable delivery approach.

## 6. Candidate presentation concept

Gift Edition v0.1 presents exactly six sourced candidates, as defined by the normative contract and issue #5.

A repertoire card should support fast browsing and may show:

- candidate number;
- image or controlled placeholder;
- event title and type;
- organisation or relevant creator;
- city;
- concise editorial proposition;
- date label;
- plain-language status;
- evaluation progress;
- action to open the detail.

Candidate detail should explain:

- what the event is;
- why it is culturally interesting;
- why the city is interesting, or why travel is not required;
- organisation, creators and venue when known;
- date or honest date-status text;
- plain-language status and uncertainty;
- what may be checked next;
- visible source links;
- event and city ratings;
- optional comment for the artistic council;
- previous and next candidate navigation.

The v0.1 record shape is defined only by `docs/domain/candidate-model.md` and issue #5.

This broader concept does **not** define or require:

- availability lifecycle enums;
- `ActionPosture`;
- `watching`;
- `planning_possible`;
- `ticket_action_available`;
- visibility or archive state;
- `archived`;
- lifecycle transition logic;
- shortlist, selection, purchase or fulfilment fields.

## 7. Evaluation and comments concept

Polina evaluates each candidate through:

- event rating `1–5`;
- city rating `1–5`;
- an optional editable comment.

`Не моё` is the event-rating `1/5` label, not a reject command.

There is no separate shortlist, keep, reject or candidate-level `В следующий акт` action in Gift Edition v0.1.

Exact completion, persistence, comment-saving and scale behaviour are defined in the normative contract and issue #7.

## 8. Candidate status concept

Candidate status is ordinary manually edited editorial text.

It should help Polina understand:

- what is known now;
- what remains uncertain;
- whether dates are known;
- what may be checked next;
- which sources support the statement.

The implementation uses the minimal fields approved in the candidate model:

- `statusLabel`;
- `statusNote`;
- optional `nextExpectedUpdate`.

These fields are display content, not a state machine.

Manual checks, edits to the local data file and redeployment are intentional parts of Gift Edition v0.1. The interface must not claim automated monitoring or notifications.

## 9. `Следующий акт` and sharing concept

`Следующий акт` is the completed six-candidate evaluation summary.

It should remain readable, editorial and suitable for sharing without resembling an analytics dashboard.

The normative contract defines:

- when the summary unlocks;
- ordering and transparent totals;
- inclusion of ratings and comments;
- device-local persistence;
- Web Share behaviour;
- clipboard-copy and manual-selection fallback.

This document does not define an additional share, screenshot or fallback contract.

## 10. Use during implementation and review

Use this document to understand:

- the desired cultural tone;
- visual principles;
- the relationship between the printed ticket and website;
- the intended emotional and editorial character of the experience.

Do not use it to derive:

- additional data fields;
- lifecycle or workflow states;
- new user controls;
- new P0 features;
- additional acceptance criteria.

Implementation and review must use `docs/ux/gift-v0.1-experience-spec.md` and the relevant issue as the authoritative scope.
