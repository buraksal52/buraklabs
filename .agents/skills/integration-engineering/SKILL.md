---
name: integration-engineering
description: Work on GitHub metadata sync, Pagefind search, Cloudflare Pages deployment and external integrations.
---

# Integration engineering workflow
Read `docs/INTEGRATIONS.md`, `docs/ARCHITECTURE.md`, `docs/QUALITY.md`.
1. Define typed contract, refresh schedule, failure and staleness semantics before fetching.
2. GitHub: choose allowlisted public repos; validate API data; sanitize exposed JSON; CI secret only; preserve last successful snapshot and don't fail page builds on API outage.
3. Pagefind: run after Astro static build; honor `lang`, draft/privacy exclusions, search UI lazy loading, empty state and keyboard behavior.
4. Cloudflare: distinguish preview from production; note Node/pnpm pinning and DNS custom-domain steps, never assert production live without checking.
5. Add tests for no-network, malformed response, rate limit, iframe policy, missing index, stale snapshot.
6. Report measured results, logs, limitations, docs changes.
**Reject:** secrets in frontend, visitor-side GitHub polling, fragile write-commit-deploy loops.
