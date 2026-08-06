# Gift Edition v0.1 — Polina 2026/27

## Delivery target

Present the gift on **8 August 2026**.

## Goal

Deliver a coherent mobile-first cultural-season experience opened from the printed Open Ticket QR. Polina should understand the curatorial idea, inspect six curated candidates, rate events and cities separately, leave optional comments and share the completed result.

This is a time-bounded personal gift with human-operated editorial follow-up. It is not a public marketplace, autonomous recommendation service or safety-critical system.

## Normative source for implementation

For issues #4, #5, #6 and #7, `docs/ux/gift-v0.1-experience-spec.md` is the **single normative product and interaction contract**.

Supporting document roles:

- `docs/domain/candidate-model.md` — minimal implementation shape subordinate to the experience contract;
- `docs/product/gift-mvp.md` — gift intent and scope summary;
- `docs/product/product-language.md` — terminology and copy reference;
- `docs/ux/website-concept.md` — broader background concept, not a source of additional v0.1 requirements;
- `docs/research/2026-08-05-cultural-trip/` — dated research and provenance, not runtime truth;
- `docs/ux/gift-ticket.md` — accepted Open Ticket baseline, with the owner-accepted terminology limitation recorded in issue #8.

The printed Open Ticket defines ticket quantity and companion entitlement. The website does not need to repeat, explain or validate those mechanics.

Earlier drafts, examples and speculative future models must not add features, fields or states to Gift Edition v0.1.

## Active workstreams

- #4 — application foundation, stack and deployment;
- #5 — exactly six sourced candidate records;
- #6 — landing page, repertoire and candidate details;
- #7 — ratings, comments and `Следующий акт`;
- #8 — final print reconciliation;
- #9 — production URL, QR and end-to-end release validation.

## Approved MVP

Gift Edition v0.1 includes:

- QR landing without login;
- the approved first-screen cultural-season explanation;
- exactly six sourced cultural candidates;
- mobile repertoire browsing and candidate detail;
- simple manually edited status text per candidate;
- visible source links;
- separate event and city ratings;
- optional editable comments;
- device-local saving in the current browser and device;
- `Следующий акт` after all six rating pairs are complete;
- transparent total `eventRating + cityRating`;
- complete Share, Copy and manual-selection result paths.

Candidate status for v0.1 is plain editorial text. The iteration does not require a lifecycle enum, `ActionPosture`, `watching`, `planning_possible`, `ticket_action_available`, `archived` or transition logic.

The interface does not show synthetic, test, community or artistic-council aggregate ratings. The only total is Polina's event rating plus city rating.

## Allowed simplifications

- static local candidate data;
- manual candidate and status updates;
- device-local ratings and comments;
- one mobile page with a detail layer instead of complex routing;
- controlled image placeholders where final licensed images are unavailable;
- no final brand domain if a stable production URL exists;
- restrained motion and no optional animation work before P0 is complete.

## Out of scope

- authentication or account recovery;
- shared or cross-device state;
- multiple participants or aggregate voting;
- backend, database, CMS or administration;
- automated crawling, monitoring or notifications;
- ticket purchase and travel-planning integrations;
- restating ticket quantity or companion entitlement in website copy;
- formal candidate state machines;
- public-market onboarding or platform architecture;
- native applications;
- production-scale reliability, audit or compliance work.

## Source and content integrity

Every publishable candidate must:

- be one of exactly six public records;
- have at least one primary or official source;
- separate factual description from editorial rationale;
- show an honest date/status statement;
- preserve uncertainty;
- provide claim-specific evidence for dates, sales or availability when those claims are made.

Do not invent dates, availability, ticket status, sources, URLs or image credits.

## Review boundary

A finding blocks release only when it can:

- break the QR-to-mobile gift flow;
- lose or materially misrepresent ratings or comments;
- publish unsupported event, date, sales or availability claims;
- make a required mobile interaction unusable;
- falsely describe local persistence, sharing or manual monitoring.

The following are non-blocking unless they threaten those criteria:

- enterprise hardening;
- future-platform concerns;
- speculative domain modelling;
- minor terminology or implementation preferences;
- owner-accepted limitations.

Review must not create new product requirements from background documents or early drafts.

## Release completion criteria

The iteration is complete when:

1. the printed QR opens a stable mobile page without login;
2. the personal cultural-season proposition is understandable;
3. exactly six complete, sourced candidates are visible;
4. candidate details show event, city, simple status, uncertainty and sources;
5. event and city ratings work independently;
6. comments can be edited without losing the latest input;
7. local values survive reload on the same device;
8. `Следующий акт` shows all six completed evaluations and comments;
9. Share, Copy and manual selection preserve the complete result;
10. the Open Ticket and production website contain no placeholders that block the QR-to-repertoire flow.

## Owner-decision stop conditions

Stop and request a decision only when work would:

- change the approved gift mechanics;
- add infrastructure outside the approved MVP;
- publish a disputed or unsupported fact;
- change persistence from device-local;
- threaten the 8 August deadline through optional scope;
- alter this iteration boundary.

Do not stop for speculative future-model questions that are not required by the approved experience contract.
