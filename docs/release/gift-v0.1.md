# Release Plan: Gift Edition v0.1

## 1. Release identity

- **Product:** Культурный радар
- **Edition:** Культурный радар Полины · Сезон 2026/27
- **Artifact:** Открытый билет
- **Target presentation:** Saturday, 8 August 2026
- **Release tag:** `v0.1.0-polinas-season`

## 2. Release objective

Deliver a coherent and usable first presentation of the gift.

The release is successful when the printed ticket and the website together communicate:

- two tickets are gifted;
- Polina participates in the choice;
- a curated candidate set already exists;
- events and cities are evaluated separately;
- candidates have visible schedule/ticket states;
- the project will continue to develop after the birthday.

## 3. P0 deliverables

### Project foundation

- [ ] Product and Gift MVP documentation merged.
- [ ] Implementation issues created.
- [ ] Repository can be cloned and started from documented commands.
- [ ] No secrets committed.

### Content

- [ ] Exactly six complete, publishable candidate records prepared.
- [ ] Every candidate has at least one primary external source.
- [ ] Every material date, sales or availability claim is supported by an appropriate source.
- [ ] Images have usable sources and credits.
- [ ] Availability statuses reviewed.

### Website

- [ ] Mobile-first landing page.
- [ ] Gift proposition clearly visible.
- [ ] Candidate catalogue.
- [ ] Expanded candidate information.
- [ ] Separate event and city rating UI.
- [ ] Comment UI with device-local persistence.
- [ ] Следующий акт view.
- [ ] Availability status presentation.
- [ ] Public deployment.

### Open Ticket

- [ ] Front copy approved.
- [ ] Back copy approved.
- [ ] Visual direction aligned with website.
- [ ] Final production URL known.
- [ ] QR generated.
- [ ] QR tested from physical print.
- [ ] Print-ready file produced.

### Quality

- [ ] Mobile smoke test.
- [ ] Desktop smoke test.
- [ ] All source links checked.
- [ ] No placeholder text visible unless intentionally labelled.
- [ ] No unsupported factual claims.
- [ ] Basic accessibility check.
- [ ] Final gift flow tested from QR to candidate interaction.

## 4. Recommended execution order

### Phase 1 — Foundation

1. Merge project documentation.
2. Choose implementation stack.
3. Create implementation tickets.
4. Bootstrap web application.

### Phase 2 — Content model

1. Extract the strongest candidates from the research.
2. Normalise event, city and source fields.
3. Add initial images.
4. Validate availability states.

### Phase 3 — Core interface

1. Implement design tokens and typography.
2. Implement the first screen and gift explanation.
3. Implement candidate cards.
4. Implement candidate expansion or detail pages.
5. Implement availability status.

### Phase 4 — Participation

1. Implement event rating.
2. Implement city rating.
3. Implement comments.
4. Implement Следующий акт.
5. Add device-local persistence for ratings and comments.
6. Add system Share with a complete copyable-text fallback.

### Phase 5 — Release

1. Deploy the website.
2. Freeze the production URL.
3. Generate the ticket QR code.
4. Produce and test the print artifact.
5. Run acceptance tests.
6. Fix only P0 defects.

## 5. Decision gates

### Gate A: persistence

Gift Edition v0.1 uses device-local persistence only.

Required:

- ratings and comments are stored in the current browser on the current device;
- state restores after reload in that browser;
- no authentication, server persistence, multi-user aggregation or cross-device restoration is introduced;
- the interface discloses the limitation honestly.

Shared persistence is deferred to a later owner-authorised iteration. It is not an optional v0.1 upgrade path.

### Gate B: candidate count

Do not delay the release to publish the entire research report.

Required for Gift Edition v0.1:

- exactly six strong, complete, sourced candidates;
- no seventh card;
- remaining research directions may be added only in a later iteration authorized by the owner.

### Gate C: page structure

Separate routes are optional.

Fallback:

- one mobile-first page;
- anchored sections;
- expandable candidate cards;
- no fragile routing dependency.

### Gate D: admin interface

Admin UI is not required for v0.1.

Fallback:

- typed local data file;
- manual edit and redeploy.

## 6. Definition of Done

### Website

- production URL responds successfully;
- page loads on a mobile connection;
- primary gift meaning is understandable within the first screen and initial scroll;
- exactly six candidates are complete, sourced and publishable;
- ratings are interactable;
- the user can enter a comment;
- ratings and comments restore only in the same browser and device;
- availability status is visible;
- official and supporting external sources open;
- the full summary can be transferred through system Share or copied as complete text;
- no critical layout break exists on mobile.

### Ticket

- print is physically readable;
- gift contains two tickets unambiguously;
- QR opens the production URL;
- short URL is printed as fallback;
- ticket uses the approved product language;
- front and back contain no unresolved placeholders.

### Project

- known limitations are documented;
- no secrets are present in the repository;
- unfinished P1 work is captured in issues;
- release status is recorded in umbrella issue #1.

## 7. Non-blocking imperfections

The following do not block v0.1 if the gift remains clear and usable:

- no full authentication;
- local-only votes;
- local-only comments;
- no admin UI;
- incomplete city catalogue;
- no automated monitoring;
- simplified animations;
- manual status updates;
- no final brand domain.

The six-candidate count, source requirements and device-local persistence model are release invariants, not optional simplifications.

## 8. Release risks

### Content overload

Risk: importing the entire research report creates unreadable cards.

Control: use concise editorial summaries and retain source links for depth.

### Visual overreach

Risk: time is spent on decorative experimentation while the gift flow remains incomplete.

Control: one strong visual system, limited components, mobile-first review.

### Persistence scope creep

Risk: authentication, database or shared-state work consumes the release window and contradicts the approved local-only disclosure.

Control: device-local persistence is the only v0.1 path; shared persistence is deferred.

### QR dependency

Risk: the ticket is printed before the final URL is stable.

Control: deploy first, freeze URL, then generate and print QR.

### Incorrect availability claims

Risk: future programmes change or research data becomes stale.

Control: visible status note, official sources and final manual review.

## 9. Post-release work

The first post-gift iteration should prioritise:

1. shared participant persistence;
2. admin candidate editing;
3. robust shortlist aggregation;
4. richer city pages;
5. candidate status history;
6. targeted monitoring of selected candidates;
7. notification experiments.

## 10. Release report

After presentation, add a report to issue #1 containing:

- URL;
- printed ticket version;
- implemented features;
- deferred features;
- defects discovered during presentation;
- Polina's initial reaction;
- observed usage and feedback;
- recommended v0.2 scope.
