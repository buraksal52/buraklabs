# BurakLabs Engineering Playbook v1.0

Repository-ready **documentation and agent skills only**. No app scaffold, no invented content and no deployment. Approved target: `buraklabs.studio`, Astro static-first, hybrid interactive demos, MDX now/CMS-ready later, bilingual English/Turkish, GitHub metadata snapshots, Pagefind, light/dark/system theme and creative-studio visual language.

## Install
1. Extract archive at the **root of a new/empty BurakLabs repository**, preserving dot-folders. If code exists, merge carefully; do not overwrite existing custom instructions without comparing.
2. Start Codex or Claude Code from the repository root. Read `AGENTS.md`; Claude also sees `CLAUDE.md`. Project skills live in `.agents/skills/` and linked `.claude/skills/`.
3. Run `python3 scripts/validate_playbook.py` to check docs, frontmatter, and skill links. On Windows, use a shell that preserves symlinks or recreate the links following `scripts/link_claude_skills.py`.
4. Read `docs/IMPLEMENTATION.md` and start **Phase 0: content inventory + design acceptance**, not an unreviewed landing-page generator.

## Navigation
- Vision/scope: `docs/PRODUCT.md`
- Architecture: `docs/ARCHITECTURE.md`; components: `docs/COMPONENTS.md`
- Design: `docs/DESIGN_SYSTEM.md`
- Content and editorial: `docs/CONTENT_MODEL.md`; language: `docs/I18N.md`
- GitHub, search, demos: `docs/INTEGRATIONS.md`
- Tests/performance/accessibility: `docs/QUALITY.md`
- Decision log: `docs/DECISIONS.md`; task sequence: `docs/IMPLEMENTATION.md`; handoffs: `docs/WORKLOG.md`

## Agent handoff
Agent A records durable work in `docs/WORKLOG.md` (what changed, checks actually run, unresolved decisions); Agent B reads worklog, checks `git status`/diff, and continues. Chats are not the source of truth.

## Design status
Warm Neutral is the **initial, reversible direction**. Tokens and hero scene are provisional until visually reviewed. Do not present speculative portfolio data or AI-generated people as real.
