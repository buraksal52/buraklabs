---
name: astro-engineering
description: Implement or refactor Astro, TypeScript, React islands, routing, rendering and reusable components.
---

# Astro engineering workflow
Read `docs/ARCHITECTURE.md`, `docs/COMPONENTS.md`, and `docs/QUALITY.md`.
1. Identify static vs interactive behavior. Use Astro for markup; React only for stateful user interactions.
2. Define typed props and state ownership; avoid `any`, shared mutable globals and premature abstractions.
3. Choose correct hydration: never ship a large hero bundle on every page; heavy demos click-to-load.
4. Preserve semantic HTML, SEO, locale routing, keyboard and error states.
5. Add focused tests for changed logic; execute available typecheck, lint, unit, build, and E2E tests.
6. Summarize diff, trade-offs and bundle cost with measured evidence; never claim build passes without running it.
**Reject:** unnecessary API/database, duplicative components, client-side fetch for server-known content, unbounded dependencies.
