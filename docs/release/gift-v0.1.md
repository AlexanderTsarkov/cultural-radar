# Release Plan: Gift Edition v0.1

## 1. Release identity

- **Product:** Культурный радар
- **Edition:** Культурный радар Полины · Сезон 2026/27
- **Artifact:** Открытый билет
- **Target presentation:** 8 August 2026
- **Release tag:** `v0.1.0-polinas-season`

## 2. Authority

This is an operational release checklist. It does not add product requirements.

The single normative product and interaction contract is `docs/ux/gift-v0.1-experience-spec.md`.

## 3. Release objective

Deliver a coherent personal gift consisting of:

- the printed Open Ticket;
- a stable mobile website;
- exactly six sourced cultural candidates;
- Polina's ratings and optional comments;
- a complete `Следующий акт` result;
- human-operated editorial follow-up after the gift.

## 4. P0 deliverables

### Foundation

- [ ] Repository can be cloned and started from documented commands.
- [ ] No secrets are committed.
- [ ] Production build succeeds.
- [ ] Stable production URL exists.

### Content

- [ ] Exactly six complete candidate records exist.
- [ ] Each candidate has at least one primary or official source.
- [ ] Date, sales and availability claims have claim-specific evidence.
- [ ] Each candidate has understandable `statusLabel` and `statusNote` text.
- [ ] Uncertainty is stated honestly.
- [ ] Images have usable sources and credits, or controlled placeholders are used.

### Website

- [ ] Mobile-first landing page communicates the gift.
- [ ] Primary CTA opens the repertoire.
- [ ] Six candidate cards and details work.
- [ ] Event and city ratings work independently.
- [ ] Comments can be entered, edited and removed.
- [ ] Ratings and comments persist in the same browser and device.
- [ ] `Следующий акт` unlocks after all six rating pairs are complete.
- [ ] Summary shows all six candidates, both ratings, transparent totals and all non-empty comments.
- [ ] System Share uses the complete result where supported.
- [ ] Clipboard copy and manual selection preserve the complete result when Share is unavailable, fails or is cancelled.
- [ ] External source links open correctly.

### Open Ticket

- [ ] Front and back copy are approved.
- [ ] Production URL is final.
- [ ] QR is generated and tested from the physical print.
- [ ] Short URL is printed as fallback.
- [ ] Print-ready artifact contains no blocking placeholders.

### Quality

- [ ] Mobile smoke test passes.
- [ ] Desktop smoke test passes.
- [ ] QR-to-site flow passes.
- [ ] All required controls are usable in a modern mobile browser.
- [ ] No unsupported factual claims are visible.
- [ ] No user input is lost during normal navigation, summary generation or sharing.

## 5. Execution order

### Phase 1 — Foundation

1. Choose the implementation stack.
2. Bootstrap the application.
3. Confirm local start and production build.

### Phase 2 — Candidate data

1. Prepare exactly six records.
2. Add simple status text and source links.
3. Validate factual claims and images.

### Phase 3 — Core interface

1. Implement first screen and gift explanation.
2. Implement repertoire cards and details.
3. Implement sources and plain-language status presentation.

### Phase 4 — Participation

1. Implement event and city ratings.
2. Implement comments.
3. Implement device-local persistence.
4. Implement `Следующий акт`.
5. Implement complete Share, Copy and manual-selection result paths.

### Phase 5 — Release

1. Deploy.
2. Freeze production URL.
3. Generate and test QR.
4. Produce print artifact.
5. Run P0 acceptance checks.
6. Fix only release-blocking defects.

## 6. Fixed decisions

### Candidate count

Gift Edition v0.1 contains exactly six published candidates. There is no seventh public card.

### Persistence

Ratings and comments are stored only in the current browser and device. There is no authentication, server persistence, multi-user aggregation or cross-device restoration.

### Status

Candidate status is manually edited plain text:

- `statusLabel`;
- `statusNote`;
- optional `nextExpectedUpdate`.

The release does not require a lifecycle enum, action posture or transition engine.

### Scoring

The only total is:

```text
eventRating + cityRating
```

Both components remain visible. There are no synthetic, test, community or council aggregate ratings in the interface.

### Fallback

Clipboard copy and manual text selection are the complete-result fallback paths. Screenshots are not presented as a substitute for the complete comment-preserving payload.

## 7. Definition of Done

The release is done when:

1. the printed QR opens a stable mobile page without login;
2. the gift proposition is understandable;
3. exactly six complete sourced candidates are visible;
4. candidate details show event, city, simple status, uncertainty and sources;
5. ratings and comments work and survive reload on the same device;
6. `Следующий акт` displays the complete six-candidate result;
7. Share, Copy and manual selection preserve all ratings and non-empty comments;
8. the Open Ticket contains the tested production QR;
9. known non-blocking limitations are recorded.

## 8. Non-blocking imperfections

The following do not block the personal Gift Edition when the P0 flow works:

- no authentication;
- no backend or CMS;
- no automatic monitoring;
- manual status updates;
- no final brand domain;
- controlled image placeholders;
- simplified animation;
- no broader city catalogue;
- no production-scale architecture.

## 9. Release blockers

Block release only for defects that can:

- break the QR-to-mobile flow;
- make a required interaction unusable;
- lose or materially misrepresent ratings or comments;
- publish unsupported facts;
- falsely claim server storage, successful transmission or automated monitoring.

Do not delay the gift for speculative future-platform concerns or background-document modelling differences.
