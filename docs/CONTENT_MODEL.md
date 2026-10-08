# Content contracts and editorial integrity

## Collections
`projects`, `research`, `writing`, initially MDX and Astro Content Collections. Schema lives in Zod; build rejects invalid metadata. Content adapters may later read CMS but must normalize to equivalent data contracts.

## Shared fields
`id` (stable, unique), `translationKey` (stable cross-language identity), `locale` (`en`/`tr`), `slug` (URL-safe and unique within locale/type), `title`, `summary`, `draft`, `createdAt`, `updatedAt`, `seo`, `cover` (optional valid local asset), `sources` (validated URL array).

## Project
`categories[]`, `technologies[]`, `status` (`concept|building|live|archived`), `featured`, `startedAt`, `myRole`, `repositoryUrl?`, `demoId?`, `caseStudySections?`. Case study template: problem, constraints, my role, approach/alternatives, architecture, implementation, verification, results with evidence, limitations, demo/repo. Never manufacture metrics or imply team work was solely individual.

## Research
`authors[]`, `researchAreas[]`, `status` (`ongoing|preprint|submitted|accepted|published|archived`), `startedAt`, `submittedAt?`, `acceptedAt?`, `publishedAt?`, `venue?`, `doi?`, `paperUrl?`, `repositoryUrl?`. Publications need verifiable venue/DOI/link; 'submitted' only on actual submission. Keep distinct from blog opinions, notes, course projects.

## Writing
`tags[]`, `publishedAt`, `updatedAt?`, `readingTime` computed, `series?`, `draft`, `cover?`. MDX components allow figures/captions, math, sanitized code, links, callouts, architecture diagram embeds. No untrusted arbitrary JSX from remote CMS.

## Locale and rendering
`en` canonical; `tr` only where translated by owner/reviewer. Relation uses `translationKey` and content type, not translated slug equality. Missing translation: same-language index fallback or clearly labeled link to original; never silently display English under Turkish URL and claim localization. CV PDFs separately verified. No draft in search index or sitemap.

## Editorial checklist
Confirm names, affiliation, dates, roles, status, links, release claim, technical architecture and any quantitative results. Attribution to collaborators. Rights for photos/logos. For unavailable evidence, remove assertion or mark as work-in-progress honestly. No fake data in public pages.

## CMS migration contract
UI receives normalized entry + rendering function; MDX loader supplies body today, CMS adapter supplies safe structured blocks or renderable sanitized output later. Migration requires content import, redirect map, previews, RBAC and regression tests; it is not a drop-in file source change.
