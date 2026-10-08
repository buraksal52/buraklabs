---
name: code-review
description: Review a BurakLabs change, patch or PR for correctness, scope, maintainability, security and AI slop.
---

# Code review workflow
Read `AGENTS.md` plus feature-relevant docs; inspect actual diff and base branch.
1. Prioritize bugs, regressions, security, false claims, broken interactions or missing critical states; report concrete file/line and reproduction.
2. Assess whether Astro vs React, content adapter, type contracts, i18n and static-first boundaries are respected.
3. Anti-slop: look for needless UI ornament, repetitive cards, fabricated facts/metrics, decorative charts, fake buttons, over-engineering.
4. Verify test coverage for changed behavior; run targeted commands if possible.
5. Separate **blocking findings**, **non-blocking improvements**, and **not verified**. Note if no issues found.
**Do not** automatically rewrite code when the task is review-only. Avoid purely subjective objections without a concrete standard or usability impact.
