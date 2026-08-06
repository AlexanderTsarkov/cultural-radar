# Gift Edition v0.1 — Polina 2026/27

## Delivery target

Present the gift on **8 August 2026**.

## Goal

Deliver a coherent mobile-first gift experience opened from the printed Open Ticket QR. Polina must understand the two-ticket gift, inspect the curated candidates, evaluate events and cities separately, leave feedback and see how candidates progress toward a real date and available ticket.

## Active workstreams

- #4 — application foundation, stack and deployment;
- #5 — initial typed candidate dataset;
- #6 — landing page and candidate catalogue;
- #7 — ratings, comments and `Следующий акт`;
- #8 — accepted Open Ticket candidate and final print reconciliation;
- #9 — release, production URL, QR and end-to-end validation.

## Accepted inputs

- accepted product, UX, domain and release documentation under `docs/`;
- Open Ticket candidate **v0.5** in `docs/ux/gift-ticket.md`, subject to controlled final reconciliation in #8;
- dated research snapshot `docs/research/2026-08-05-cultural-trip/` as source material and provenance, not current runtime truth;
- lifecycle model and stable identifiers in `docs/domain/candidate-model.md`;
- owner-approved decisions recorded in the active issues.

## In scope

- a static-first, mobile-web Gift Edition;
- a concise gift explanation and candidate catalogue;
- exactly six strong candidates in a separate typed runtime dataset;
- separate event and city ratings;
- an editable comment control for the artistic council, with optional comment entry;
- `Следующий акт` as the completed summary and share interaction after all six rating pairs are complete;
- honest availability lifecycle presentation;
- public deployment, stable URL, final QR and print-flow validation;
- deliberate deadline-driven simplifications documented in the relevant issue or release report.

## Out of scope

- general-market onboarding or a permanent product platform;
- authentication, account recovery or public social features;
- production-grade database, CMS or administration;
- automated crawling, monitoring or notifications;
- ticket purchasing integrations;
- native mobile applications;
- broad reorganisation of existing documentation.

## Allowed v0.1 simplifications

- typed local data rather than a database;
- device-local ratings and comments, stated honestly in the UI;
- device-local completion and `Следующий акт` summary state;
- manual candidate and availability updates;
- one mobile-first page with expandable sections rather than complete routing;
- a six-candidate set and restrained animation;
- no final brand domain if a stable production URL is available.

## Interaction boundary

Gift Edition v0.1 does not use per-candidate shortlist, keep or reject states.

- `На радаре` is the repertoire navigation screen.
- `Следующий акт` is the completed summary and share screen.
- `Не моё` is the semantic label for event rating `1/5`, not a separate action.
- A candidate is complete when both event and city ratings exist.
- A comment is optional and does not affect completion or ranking.

Exact interaction behaviour is defined by `docs/ux/gift-v0.1-experience-spec.md` and implemented by issue #7.

## Source and data integrity

Canonical documentation, dated research snapshots, runtime data, current availability facts and hypotheses are separate layers.

A candidate may remain valid at an early lifecycle stage without a concrete performance date or ticket page. Revalidate the stage actually claimed: official announcements can support early stages; published dates, sales and suitable-ticket availability require current corresponding evidence.

Do not invent or infer unsupported dates, sales, availability, prices, URLs, sources or credits. Preserve uncertainty and provenance. Do not treat `turn...` markers as public sources. Do not silently rewrite the dated snapshot when facts change.

Every publishable candidate must provide the status information required by the approved contract, including the next expected update and current action posture.

## Release completion criteria

The iteration is complete when:

1. the printed QR opens a stable public mobile page without login;
2. the gift and `Полина + 1` proposition are immediately understandable;
3. exactly six complete, sourced candidates are visible;
4. event and city ratings, comments and `Следующий акт` work as documented;
5. availability stages, action posture and persistence limitations are truthful;
6. critical source links, mobile layout and the printed QR flow are validated;
7. the Open Ticket and website are reconciled and contain no production placeholders;
8. known limitations and deferred work are recorded in the release report.

## Owner-decision stop conditions

Stop and request an owner decision when work would:

- broaden Gift Edition v0.1 or add excluded infrastructure;
- change accepted gift mechanics, product language or the Open Ticket candidate outside the authorized issue;
- publish a disputed or unsupported candidate fact;
- choose a material persistence, deployment or architecture direction not authorized by #4;
- threaten the 8 August delivery target through optional scope;
- require changing this iteration boundary.

## Transition after the gift release

After presentation, post the release report to #1. Do not automatically carry deferred features into implementation. The owner must select and authorize the next iteration, which may address shared persistence, administration, richer content, status history, targeted monitoring and broader product validation.
