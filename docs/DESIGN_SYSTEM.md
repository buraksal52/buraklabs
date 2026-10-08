# Design system — Warm Neutral Creative Studio (provisional)

## Intent
An editorial and experimental **engineering studio**, not a SaaS dashboard, luxury architecture landing page, or generic AI portfolio. High contrast content, warm surfaces, precise technical details and rare signature 3D/Canvas moments. Mixed layouts adapt to content type.

## Color tokens (initial proposals, replace by token overrides)
| Token | Light | Dark | Use |
|---|---|---|---|
| `--canvas` | `#FAF8F4` | `#171614` | Background |
| `--surface` | `#FFFFFF` | `#24211E` | Panels |
| `--ink` | `#1B1A18` | `#F6F2EC` | Text |
| `--muted` | `#665F57` | `#BAB1A7` | Secondary text |
| `--border` | `#D9D0C6` | `#4B433C` | Dividers |
| `--accent` | `#B65E3D` | `#DE9675` | Primary accent |
| `--focus` | `#7D452D` | `#F1B08C` | Keyboard focus |

These are **starting values**: measure WCAG contrast in every component/state before release; adjust tokens when values fail. Never use accent for long-form body text without verification. Content-state colors must convey meaning with labels too.

## Typography
Editorial headings: trial `Instrument Serif` or `Newsreader` (license/check font files), UI/body: `Inter`, code/data: `JetBrains Mono`. One serif display family, one sans body, one mono utility. Use fluid scales (e.g. `clamp`), no arbitrary 12 font weights. Self-host licensed web fonts; fall back gracefully.

## Grid and rhythm
12-column desktop, 6 tablet, 4 mobile; max reading width ~70ch; main canvas max width ~1440px with responsive gutters; spacing based on 4/8px increments. Pair dense research listings with airy project hero panels; no mandatory identical grids across sections. Breakpoints driven by content not devices.

## Section treatment
- **Home:** large, expressive headline + experimental scene with static fallback; intentional whitespace and asymmetry.
- **Projects:** information-forward filters and mixed-sized art direction tiles, each with clear title/role/status.
- **Case study:** project-specific cover, sticky/anchor sections where appropriate; problem→role→decisions→architecture→evidence→demo→links.
- **Research:** compact timeline/list for scanability, status chips verified against owner metadata.
- **Writing:** comfortable serif headings, high readability, TOC for long articles, clear code blocks and captions.
- **About/CV:** personal and authentic; do not synthesize fake portraits/credentials.

## Experimental hero specification
Optional kinetic network/sculpture inspired by systems and connections, **not** a stock rotating sphere. Renderer loaded on viewport/idle only if useful; static poster + readable copy always first; capped DPR and frame budget; prefers-reduced-motion suppresses continuous animation; keyboard and touch unaffected. Define one memorable interaction (e.g., pointer shifts interconnected nodes), not endless decorative motion. Hero meaning doesn't depend on seeing it.

## Motion contract
Transition duration ~150–350ms for micro-interactions, scroll reveal only where it improves orientation, no parallax that obscures reading; respect OS reduced-motion, stop offscreen animation, avoid layout shift.

## Anti-slop review (reject if any)
- Placeholder project metrics, manufactured press logos, unexplained badges, unverified citations, fabricated results.
- Hero copy resembling generic "transforming the future with innovation" without specific meaning.
- Repeated identical three-card sections, blobby gradient backgrounds, excessive purple neon, glass overlays, random emojis, infinite autoplay effects, fake code panels.
- Aesthetic masking of missing functionality; CSS-only visual buttons with no action.

## Visual QA matrix
Viewport 360/768/1440; light/dark; EN/TR; normal/reduced motion; keyboard only; long title/tag; empty result; missing demo; stale GitHub metadata. Capture before/after screenshots for meaningful UI changes. `docs/QUALITY.md` defines release gates.
