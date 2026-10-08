# Implementation plan and acceptance criteria

## Phase 0 — Content inventory & approved design
Confirm real project summaries, owner role, repos, research statuses, CV data, language coverage, media rights. Build one final home and case-study visual prototype in desktop/mobile, light/dark, reduced-motion; obtain approval. **Exit:** content evidence inventory + signed-off visual direction; no fake placeholders in public preview.

## Phase 1 — Foundation
Astro/TS, Tailwind, static Pages config, CSS token themes, semantic shell, EN/TR routing, SEO base, CI, strict lint/typecheck. **Exit:** accessible skeleton and preview deploy; theme and language toggles functional; no hydration for content pages.

## Phase 2 — Content platform
Typed Astro collections, Zod schemas, adapter interface, MDX rendering, project/research/writing templates, web/PDF CV. **Exit:** one fully verified entry each in both languages where available; draft exclusion, status validation and URLs tested.

## Phase 3 — Creative studio expression
Distinctive home hero static fallback, featured work, mixed layouts, purposeful motion. **Exit:** mobile/desktop screenshots reviewed; reduced-motion equivalent; no LCP regression beyond budget.

## Phase 4 — Interactive capabilities
Filters, Pagefind, DemoHost for three demo types, two actually working demos, GitHub snapshots and fallback. **Exit:** keyboard/E2E tests; disconnected GitHub and blocked iframe fallback; search indexes correct locale.

## Phase 5 — Production hardening
Cross-browser/mobile review, a11y, Lighthouse measurements, broken-link scan, CSP and secret scan, verified SEO/hreflang, custom domain, release checklist. **Exit:** all ten MVP features functioning and public information owner approved.

## Task template
`Goal / User outcome / Files affected / Docs and skills to read / Data dependencies / Risks / Test plan / Acceptance criteria / Evidence`.

## De-scope rule
If time becomes constrained, reduce animations or demo sophistication, not research truthfulness, route correctness, core accessibility or content validation. Do not declare deployment complete without live verification.
