# BurakLabs — Agent Constitution

**Applies to Codex, Claude Code, and human contributors.** Product: independent engineering, research and creative studio at `buraklabs.studio`. Read `docs/PRODUCT.md`, `docs/ARCHITECTURE.md`, and the relevant task documents before editing. The canonical implementation specification is this repository, not past conversations.

## Non-negotiables
1. **Evidence over invention.** No fabricated projects, dates, papers, affiliations, metrics, screenshots, testimonials, links, demos, experience, or CV claims. Missing information is `TODO(content-owner)` in unpublished source, never plausible fake public content.
2. **Intentional design.** Follow `docs/DESIGN_SYSTEM.md`. Warm-neutral is a replaceable token theme, not hardcoded colors. Avoid AI-slop patterns (gradient fog, generic three-card grids everywhere, random glassmorphism, emoji decorations, meaningless 3D). Use real artifacts and information hierarchy.
3. **Static-first.** Astro renders content; React only for interactions. No backend/database/auth/CMS runtime in MVP. Heavy demos run separately or load on user action.
4. **Content integrity.** Projects, research, writing use validated content models; research status must reflect evidence; translated pages must not invent missing content.
5. **Small and reversible changes.** Inspect before edits; reuse existing components; no speculative abstractions or dependency without a reason; no silent large redesigns.
6. **Accessible by default.** Keyboard operation, semantic HTML, meaningful focus states, contrast, reduced motion, responsive layouts, and failure states are release blockers.
7. **Keep secrets private.** No API keys in client, repo, MDX, build output, public env variables; allowlist third-party embeds and validate URLs.
8. **Verify honestly.** Never claim a test, visual check or deployment ran unless it actually did. Show command and result; distinguish not-run.

## Change protocol
- **Inspect:** `git status`, affected files, docs, content status.
- **Plan:** for nontrivial changes list files, behavior, risks, acceptance checks. For user-facing design, clarify target or provide mockups *before* implementation.
- **Implement:** simplest maintainable solution with localized edits.
- **Verify:** `pnpm check`, `pnpm test`, `pnpm build`, relevant Playwright, link/i18n/a11y checks when present. Do not invent a result if repo is documentation-only.
- **Review:** read the relevant skill, perform anti-slop audit, inspect mobile/light/dark and fallback states.
- **Handoff:** changed files, decisions, tests/results, limitations, next task. Update `docs/WORKLOG.md` only for durable state; remove stale entries.

## Skills
Canonical source `.agents/skills/<skill>/SKILL.md`; project `.claude/skills/` contains links to same folders. Prefer skill applicable to current change; skills are workflows, not automatic exemption from these rules.

## References
`docs/PRODUCT.md` · `docs/ARCHITECTURE.md` · `docs/DESIGN_SYSTEM.md` · `docs/COMPONENTS.md` · `docs/CONTENT_MODEL.md` · `docs/I18N.md` · `docs/INTEGRATIONS.md` · `docs/QUALITY.md` · `docs/DECISIONS.md` · `docs/IMPLEMENTATION.md`.
