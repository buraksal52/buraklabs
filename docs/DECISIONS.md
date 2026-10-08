# Architecture decision records (condensed)

| ID | Decision | Status | Rationale |
|---|---|---|---|
| ADR-001 | Astro SSG + TypeScript + selective React islands | Accepted | Content-heavy platform with focused interactions |
| ADR-002 | MDX content now, schema-driven adapter boundary for future CMS | Accepted | Low operating cost; migration without coupling UI to file formats |
| ADR-003 | EN default `/`, Turkish `/tr` | Accepted | Global presentation + bilingual access |
| ADR-004 | Pagefind static search | Accepted | No hosted search backend |
| ADR-005 | GitHub scheduled validated snapshot (not browser live API) | Accepted | Reliability + rate limits |
| ADR-006 | Hybrid demo registry with isolation and fallbacks | Accepted | Different product shapes and security properties |
| ADR-007 | Light/dark/system; Warm Neutral initial theme tokens | Accepted, palette adjustable | User-approved direction, explicitly reversible |
| ADR-008 | Creative Studio, experimental hero and mixed editorial content layout | Accepted | Distinctive presentation without sacrificing content |
| ADR-009 | Cloudflare Pages static deploy; no database/auth/CMS runtime for v1 | Accepted | Simple infrastructure |
| ADR-010 | Single repo for BurakLabs; products stay independent | Accepted | Minimize coordination complexity |

## Changing decisions
Record new ADR: context, considered alternatives, selected option, consequences, migration steps, approver/date. Explicit user approval supersedes older specification; update affected docs together. **Pending decisions:** exact hero mechanism and 3D implementation, licensing/selection of display font, project content/evidence, approved actual CV details, publishable research list and links, whether to expose social profiles.
