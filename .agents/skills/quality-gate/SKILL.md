---
name: quality-gate
description: Validate a completed feature, pull request, release, accessibility, SEO, visual polish and performance.
---

# Quality gate workflow
Read `docs/QUALITY.md`, `docs/DESIGN_SYSTEM.md`.
1. Scope release route and affected features; read code/diff and actual content.
2. Run available static checks, lint, unit, build, E2E; distinguish unavailable scripts from passing.
3. Inspect 360/768/1440, light/dark, EN/TR, keyboard, reduced motion, loading/empty/error and missing GitHub/demo cases.
4. Verify real claims/links/credits, status labels, local PDF, canonical/hreflang and search draft filtering.
5. Compare Lighthouse metrics to budget only when measured in stated test conditions; check no secrets or unlicensed assets.
6. Return concise PASS/FAIL/NOT RUN matrix; list reproducible blockers and suggested minimal fixes.
**Never:** rubber-stamp without evidence or invent QA results.
