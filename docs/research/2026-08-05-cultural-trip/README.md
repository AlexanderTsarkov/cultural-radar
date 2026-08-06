# Research source: cultural trip shortlist, 2026-08-05

## Role in the project

This directory preserves the first deep-research report that established the initial candidate field for **Cultural Radar — Polina Gift Edition 2026/27**.

It is a **dated research source snapshot**, not the runtime dataset used by the website and not a permanent statement of current ticket availability.

The report serves four explicit roles:

1. **Evidence base for issue #5** — selecting and normalising the strongest 6–12 initial candidates.
2. **Editorial source for issue #6** — candidate summaries, `whyEvent`, `whyCity`, uncertainty and source context.
3. **Baseline for later monitoring** — a record of what was known, confirmed, speculative or unavailable on 2026-08-05.
4. **Decision provenance** — an auditable explanation of why particular events and cities entered, remained outside or were excluded from the first repertoire.

## Source status

- Research date: **2026-08-05**.
- Imported into the repository: **2026-08-06**.
- Source artifact: user-provided deep-research Markdown report.
- The wording and conclusions are preserved as the research output; the report is split into three files only to keep repository review manageable.
- Embedded `turn...` citation markers refer to the original research session. They preserve provenance but are not standalone public URLs.
- Dates, sales status, seat availability, programmes and official announcements are time-sensitive and must be revalidated before publication or purchase.

## Files

1. [`01-summary-and-main-shortlist.md`](./01-summary-and-main-shortlist.md) — research framing, classification system and main shortlist.
2. [`02-monitoring-candidates-and-reserve.md`](./02-monitoring-candidates-and-reserve.md) — candidates for monitoring, reserve and consciously excluded options.
3. [`03-final-selection-and-monitoring-plan.md`](./03-final-selection-and-monitoring-plan.md) — recommended choices, practical ranking, monitoring cadence and certificate guidance.

Together these three files constitute the imported report.

## Relationship to application data

The application must not consume this Markdown report directly.

Issue #5 must derive a separate, typed implementation dataset from it. That dataset should:

- contain only the selected release candidates;
- use stable candidate and city IDs from `docs/domain/candidate-model.md`;
- separate factual claims from editorial rationale;
- retain source and uncertainty fields;
- use availability values reviewed against current official information;
- remain replaceable without rewriting the archived research snapshot.

The expected flow is:

```text
research snapshot
        ↓ editorial selection and fact revalidation (#5)
typed candidate dataset
        ↓ presentation (#6)
ratings, comments and Следующий акт (#7)
        ↓ release validation (#9)
```

## Change policy

Do not silently update this dated snapshot when facts change.

Corrections to an import error may be committed with an explicit note. New research, changed availability or later programmes should be stored as a new dated snapshot or as monitored updates linked from the implementation dataset.
