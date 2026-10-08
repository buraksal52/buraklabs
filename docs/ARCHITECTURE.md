# Architecture specification

## Decisions
- Astro + TypeScript static generation; Tailwind CSS and semantic design tokens; React islands only when interaction justifies hydration; Motion optional for purposeful animation.
- Astro content collections with Zod validation; MDX local first; domain models and query functions hide content loader details for potential CMS migration.
- Bilingual route tree, Pagefind post-build indexing, GitHub API fetched by scheduled CI and stored as validated snapshot, Cloudflare Pages deploys from `main`.
- No runtime server, database, auth, or production GitHub API dependency for the main site. Heavy demos isolated on distinct deployment/origin.

## Data flow
`MDX + dictionaries + validated GitHub snapshot -> loaders/Zod -> queries + view models -> Astro build -> HTML/CSS + selected React bundles -> Pagefind index -> Cloudflare Pages`.

## Folder contract (to create during implementation)
`src/components/{ui,layout,studio,projects,research,writing,demos,search,mdx}`; `src/content/{projects,research,writing}`; `src/features/{content,github,search,demos,preferences}`; `src/{i18n,data,layouts,pages,styles,assets}`; `scripts/{sync-github,validate-content}.ts`; `tests/{unit,e2e}`; `.github/workflows`.

## Rendering
- Default `.astro` for headers, layout, content, cards, article navigation and GitHub metrics.
- React for project explorer, search dialog and native demo; hydrate `client:visible` when appropriate. Heavy demo: explicit click-to-load. Don't hydrate global navigation solely for a hover effect.
- Build-time `getStaticPaths()` or equivalent for dynamic slugs; 404 for unknown entries. Route links derive from locale/slug mapping.

## Data contracts and boundaries
- `ContentRepository`: `getProjects(locale)`, `getProject(locale,slug)`, `getResearch(locale)`, `getArticles(locale)` returns typed *normalized summaries* plus a content rendering handle; avoid assuming MDX AST can travel through JSON/CMS.
- Keep date, status, identity, locale, tags, external links and demo configuration typed. Validate external URLs.
- Source adapters own rendering specifics; UI never imports `glob()` or raw content files directly.
- `GitHubSnapshot` is optional enrichment; no case study depends on it for its title, status or outcome.

## Release path
`PR -> CI (check + test + build + E2E) -> Cloudflare Preview -> review -> main -> production`. Build (`pnpm build`) should invoke `astro build && pagefind --site dist` after dependencies configured. Node and pnpm pinned in project files, not based on ephemeral platform defaults.

## Architectural guardrails
No mandatory Three.js/WebGL bundle on all pages. No runtime fetch to GitHub in visitor browser. No CMS chosen before authoring friction proves its value. No premature microservices, monorepo, state library, auth or analytics dashboard.
