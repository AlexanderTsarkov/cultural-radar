# AI Agent Operating Policy

## Purpose

This file defines the compact, stable operating policy for Codex, Cursor, Claude, ChatGPT and similar agents working in this repository. It is not a product specification, roadmap or task description.

## Sources of truth

Use this order unless an explicit owner decision states otherwise:

1. the explicit owner instruction for the current task;
2. `ITERATION.md` for the active release boundary;
3. accepted product, UX, domain and release documentation under `docs/`;
4. the relevant GitHub issue and owner-approved task decisions;
5. the current implementation and runtime dataset for what the product actually ships;
6. dated research snapshots as historical source material;
7. hypotheses and monitoring candidates as unaccepted possibilities.

If authoritative sources conflict, stop and report the conflict. Do not silently choose a preferred interpretation.

Keep these categories distinct:

- **Canonical documentation** describes accepted product and UX intent.
- **Dated research snapshots** preserve what was known at a stated date; they are not current runtime truth.
- **Runtime datasets** contain the currently implemented candidate records and statuses.
- **Current availability facts** are time-sensitive claims that require lifecycle-stage revalidation against appropriate sources.
- **Hypotheses and monitoring candidates** remain uncertain until explicitly accepted and supported.

## Start-of-task discipline

Before editing:

1. inspect the repository, current branch, working tree and relevant open PRs;
2. read this file, `ITERATION.md`, the relevant issue and affected documentation;
3. state the task goal, non-goals, plan and validation plan for non-trivial work;
4. inspect existing structures before creating or replacing anything;
5. confirm that the work fits the issue and active iteration.

Use existing structures before creating parallel ones. Keep changes small, bounded and reviewable. Do not mix unrelated implementation, refactoring or documentation work.

## Source and data integrity

- Never invent event dates, performances, ticket sales, seat availability, prices, URLs, credits, sources or provenance claims.
- Do not treat `turn...` markers as resolvable public sources.
- Preserve source provenance and uncertainty classifications.
- Do not convert research conclusions, editorial ideas or historical snapshots into current product truth without explicit acceptance.
- Revalidate only the lifecycle stage being claimed. A research candidate does not need a published date or ticket page; an official season announcement may support `officially_announced` or `waiting_for_dates`, while claims such as `sales_open` or ticket availability require current supporting evidence.
- Do not publish stale availability claims. When current verification is unavailable, retain an honest uncertainty or earlier lifecycle status.
- Do not change the accepted Open Ticket candidate outside issue #8 or an explicitly linked reconciliation task.

## Scope control

Implement only the approved task. Do not silently broaden Gift Edition v0.1 into a general-market product.

Without an approved issue, do not add authentication, database infrastructure, crawling, monitoring automation, a CMS, application frameworks or other major product infrastructure.

Stop and request an owner decision when work requires a new product decision, changes the iteration boundary, contradicts accepted documentation, introduces a broad refactor, or would make a difficult-to-reverse assumption.

## Secrets and local workspace

Never commit credentials, tokens, private keys, local environment values, raw private data or unsanitised artifacts. Commit `.env.example` only when it contains safe placeholders.

`_working/` is a disposable, ignored local workspace for drafts, exports and temporary comparisons. It is non-canonical. Anything that must survive deletion of `_working/` belongs in an approved repository path.

## Branch and review workflow

- One bounded issue → one branch → one Draft PR.
- Follow-up changes for the same issue remain in that branch and PR.
- The project owner and ChatGPT perform the initial review.
- A PR may be marked **Ready for review** only after explicit owner agreement.
- The Ready transition triggers the integrated Codex review.
- Do not merge, force-push, rewrite shared history, close issues or delete branches without explicit owner instruction.

## Final report

At task completion report:

- what changed and which files changed;
- validation performed and its result;
- assumptions, conflicts or unresolved questions;
- scope intentionally not changed;
- branch and Draft PR;
- recommended next action.

Keep this file compact. Active release details belong in `ITERATION.md`; implementation mechanics belong in `CLAUDE.md`.