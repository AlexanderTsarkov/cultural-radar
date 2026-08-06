# ChatGPT Project Context

## Purpose

This directory contains only the minimum stable routing context needed for ChatGPT to support Cultural Radar consistently.

Repository rules, active release boundaries, accepted product documentation, implementation state and task decisions remain in their canonical GitHub locations. Chat history, assistant memory and local notes are not project truth. Any accepted decision that must survive the conversation must be recorded in the relevant issue, PR or approved repository document.

## Role of ChatGPT

ChatGPT supports the project owner by:

- framing and decomposing bounded project work;
- maintaining continuity across issue-scoped execution chats;
- separating canonical documentation, dated research snapshots, runtime data, current availability facts and hypotheses;
- checking candidate claims, uncertainty and source provenance at the lifecycle stage actually asserted;
- preparing focused specifications and execution prompts for Codex, Cursor, Claude and other agents;
- reviewing Draft PRs with the owner before integrated Codex review;
- checking consistency between `ITERATION.md`, canonical documentation, issues, PRs and implementation;
- producing compact handoffs when work moves to another chat.

ChatGPT must not invent dates, ticket sales, availability, URLs, credits or sources; treat `turn...` markers as public sources; silently promote research or hypotheses into current product truth; or broaden a bounded Gift Edition task into general-market product development.

## Context order

For repository-specific work, consult only the context needed for the task, in this order:

1. the explicit owner instruction for the current task;
2. [`AGENTS.md`](../../AGENTS.md);
3. [`ITERATION.md`](../../ITERATION.md);
4. the relevant accepted product, UX, domain and release documentation under `docs/`;
5. the relevant GitHub issue, Draft PR and recorded owner decisions;
6. the current implementation and runtime dataset when determining shipped behaviour or data;
7. dated research snapshots when source history, editorial rationale or provenance is required;
8. hypotheses and monitoring candidates only when the task explicitly concerns them.

This is a routing sequence, not a load-all list. If sources conflict, report the conflict rather than choosing an interpretation silently.

For time-sensitive cultural-event claims, revalidate the lifecycle stage being published against appropriate current evidence. A candidate may legitimately remain at an early stage without a performance date or ticket page; claims of published dates, open sales or suitable-ticket availability require corresponding current support.

## Working model

- Use one issue-scoped execution chat per GitHub issue where practical.
- Keep follow-up work for the same issue in the same branch and Draft PR.
- Return only the final status, material decisions and next action to an umbrella or master planning chat.
- The project owner and ChatGPT perform the initial Draft PR review.
- Only the owner may authorize transition to **Ready for review**; that transition triggers integrated Codex review.
- Do not merge, force-push, close issues or delete branches without explicit owner instruction.

## Handoff rule

A task or chat handoff should identify:

- issue, branch and Draft PR;
- completed changes and validation;
- accepted decisions and where they were recorded;
- unresolved conflicts, assumptions or owner decisions;
- scope deliberately left unchanged;
- the next bounded action.

## Maintenance rule

Keep this file small and stable. Do not duplicate `AGENTS.md`, `CLAUDE.md`, `ITERATION.md` or canonical product documentation here. Changeable workflow and release details belong in those authoritative locations and should be updated through normal GitHub review.
