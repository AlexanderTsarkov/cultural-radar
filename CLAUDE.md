# Local AI Execution Overlay

`AGENTS.md` contains the shared policy. This file adds mechanics for agents working in a local checkout and must not be treated as a duplicate source of product policy.

## Required context

Before meaningful work:

1. inspect the current branch and working tree;
2. read `AGENTS.md`;
3. read `ITERATION.md`;
4. read the relevant GitHub issue;
5. inspect affected canonical documents, data and implementation files.

## Local preflight

Run before switching branches or editing:

```bash
pwd
git status --short
git branch --show-current
git remote -v
```

If the working tree is dirty, stop and report it. Do not silently stash, clean, discard or carry unrelated work.

For a new issue, start from an updated clean `main`:

```bash
git fetch origin
git switch main
git pull --ff-only origin main
git status --short
git switch -c agent/<issue>-<short-description>
```

For follow-up work on an existing Draft PR, continue its branch only after confirming the branch and tree are correct.

## Planning

For non-trivial work, report before implementation:

- task goal;
- explicit non-goals;
- files and structures to inspect;
- proposed steps;
- validation plan;
- any owner decision required.

Do not begin broad work while a material product, data or architecture decision remains unresolved.

## Editing and review

- Inspect before edit.
- Extend existing structures rather than creating parallel ones.
- Modify only files required by the issue.
- Keep `_working/` local and untracked.
- Never commit secrets or private local artifacts.

Before each commit, inspect all pending working-tree and staged changes:

```bash
git status --short
git diff --name-only
git diff --check
git diff
git diff --cached --name-only
git diff --cached --check
git diff --cached
```

Before PR creation and again before final handoff, inspect the complete committed issue diff:

```bash
git diff --name-only origin/main...HEAD
git diff --check origin/main...HEAD
git diff origin/main...HEAD
```

Stop if unrelated or unauthorized changes appear in any layer.

## Validation

Use validation appropriate to the change.

Documentation changes must verify:

- links and repository paths;
- internal consistency and source-of-truth roles;
- no invented or silently promoted facts;
- no unrelated files in the branch diff.

Data changes must additionally validate required fields, stable IDs, source provenance, uncertainty and lifecycle-stage claims.

Application changes must run the repository-defined formatter, static checks, tests, build and focused manual checks.

<!-- STACK_VALIDATION_HOOKS: issue #4 must replace or extend this section with the selected stack's exact commands. -->

## Final report

Report:

- branch and base branch;
- issue and Draft PR link;
- changed files;
- validation performed and results;
- assumptions, conflicts and open questions;
- confirmation that secrets and `_working/` artifacts were excluded;
- scope intentionally left unchanged;
- recommended next action.

Do not mark a PR Ready, merge it, close the issue or delete the branch without explicit owner instruction.