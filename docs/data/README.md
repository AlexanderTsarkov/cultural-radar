# Gift Edition v0.1 candidate data

## Role

This directory contains the six publishable candidate records for **Cultural Radar — Polina Gift Edition v0.1**.

The normative product contract is [`docs/ux/gift-v0.1-experience-spec.md`](../ux/gift-v0.1-experience-spec.md). The minimum data shape is defined by [`docs/domain/candidate-model.md`](../domain/candidate-model.md).

Issue #4 has not yet selected or bootstrapped the application stack. For that reason the current dataset is stored as stack-neutral JSON rather than in a framework-specific `src/` path. Issue #4 or #6 may import or relocate it without changing record identity or content semantics.

## Canonical file

- [`gift-v0.1-candidates.json`](./gift-v0.1-candidates.json) — exactly six candidate records in approved editorial order.

The dataset intentionally contains no lifecycle enum, action posture, selection state, purchase state, aggregate rating or future-platform field.

## Nizhny Novgorod owner decision

The sixth candidate is a source-backed **cultural scenario**, not an empty city placeholder and not a claim that one final performance has already been selected.

Polina rates:

- interest in waiting for a strong cultural proposition in Nizhny Novgorod;
- the city itself.

Implementation may adapt the event-rating question for this record from the generic `Насколько хочется увидеть это событие?` to:

> Насколько интересен этот культурный сценарий?

The saved value remains the ordinary candidate `eventRating` keyed by candidate ID. No additional scoring model is introduced.

## Status and freshness

`statusLabel`, `statusNote` and `nextExpectedUpdate` are manually edited display text. They are not a state machine.

Ticket inventory is volatile. Claims based on an owner seat-map check include the check date and must be rechecked before purchase. The public website should not imply that seats were reserved.

## Images

No production image is included in the initial dataset because reusable publication rights have not been established. Issue #6 should use controlled placeholders until a legally usable image and required credit are confirmed.

Seat-map screenshots supplied during issue #5 research are evidence for temporary availability judgments, not candidate artwork, and are not committed.
