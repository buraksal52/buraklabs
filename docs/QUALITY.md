# Definition of Done and quality gates

## Commands (after code scaffold)
`pnpm check` (Astro/TS), `pnpm lint`, `pnpm test`, `pnpm build`, `pnpm test:e2e`. Do not report checks as passed until scripts exist and have run. `python3 scripts/validate_playbook.py` is available now to validate only the playbook.

## Mandatory test matrix
- Responsive: 360/768/1440; light/dark/system; English/Turkish; mouse/keyboard/touch; reduced motion.
- Global search: published docs indexed, untranslated items not spoofed, locale split, `⌘K`/Ctrl+K, escape and focus return.
- Project filters: combinations, URL persistence, empty state, back/forward.
- Case studies: no fictional data, real links/cover/attribution, working anchors and demo fallback.
- Research: exact documented status and evidence, publication metadata verified.
- GitHub API absent/stale: static HTML works, staleness indicated, secret not leaked.
- Embeds: unavailable/blocked/offline/slow; keyboard access, sandbox, no effect on parent.
- CV PDFs: English/Turkish requested language matches actual verified document, proper links.

## Quality targets
Lighthouse Performance ≥90 (target, not guaranteed), Accessibility ≥95, LCP <2.5s, CLS <0.1, INP <200ms in representative mobile tests; establish measured baseline, do not claim automatic compliance. Aim critical initial JS <100KB gzip on typical content pages; budget may be refined based on instrumented data. Core content readable without JS.

## Accessibility
WCAG 2.2 AA target; headings hierarchy, landmark/skip links, keyboard/focus visible, dialog trap and return focus, accessible names, text contrast verified, pointer alternatives, reduced motion. Do not rely on status color alone.

## Security & compliance
No public tokens; external URLs allowlisted/validated; CSP tested against search/fonts/embeds; images licensed and alt-text reviewed; external links with safe rel; no PII beyond owner-approved public contact details; no fake or hidden analytics.

## Anti-slop checklist
Specific content? Real design rationale? Different composition where content demands it? Authentic screenshots? No stock interface/mock outcomes? Motion useful and accessible? All CTAs functional? If any answer no, fix before merge.

## Release evidence
Attach actual screenshot/diff/test output references to PR or worklog. Report passes, failures and not-run distinctly. Lighthouse scores measured under documented settings; no fabricated tests.
