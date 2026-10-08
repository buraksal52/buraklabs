# Components and ownership

## Composition
`BaseLayout.astro` (document, SEO, theme pre-paint) → `SiteShell.astro` (global header/footer) → page templates → feature components → UI primitives. Every component has a single reason to exist; favor composition over a one-size-fits-all mega component.

## Contract table
| Component | Form | Inputs | Responsibility |
|---|---|---|---|
| `Header` | Astro | locale, nav | Semantic links, skip link, responsive behavior |
| `LanguageSwitcher` | Astro | translationKey, currentLocale, availableRoutes | Route-safe language toggle; no invented translation |
| `ThemeSwitcher` | light TS / React | current preference | Light/dark/system, persistent and pre-paint initialization |
| `HomeHero` | Astro + optional island | copy, hero scene config | Core information always visible without JS |
| `ProjectCard` | Astro | ProjectSummary | Real evidence, image, status, links |
| `ProjectExplorer` | React | ProjectSummary[], locale | URL-backed filters, empty state, keyboard access |
| `CaseStudyLayout` | Astro | Project + renderer | Structured story, anchors, validated sources |
| `ResearchCard/Timeline` | Astro | ResearchSummary[] | True statuses/date ordering |
| `ArticleLayout` | Astro | Article + render | Reading typography, TOC, code and citations |
| `DemoHost` | React | DemoDefinition | Lazy native/iframe/external; loading/error/unavailable |
| `SearchDialog` | React | locale | Lazy Pagefind, ⌘K/Ctrl+K, focus trap/return, escape |
| `GitHubStats` | Astro | optional snapshot | Staleness label, graceful absence |
| `CVDownload` | Astro | locale, verified pdf path | Download and accessible text equivalent |

## UI primitives
`Button`, `Link`, `Tag`, `StatusBadge`, `CardSurface`, `Tabs`, `Dialog`, `Tooltip`, `CodeBlock`, `Figure`, `Callout`, `SectionHeading`, `Breadcrumbs`, `EmptyState`, `ErrorState` — implement as needed, not in a speculative batch. Prefer semantic native controls and accessible dialog primitives over custom event soup.

## Interaction/state
Filters encoded in query string for deep links; toggling theme modifies `data-theme` on root; language route changes preserve matching content when available. Avoid a global React state store. Animations must not block navigation. Demos never escalate origin privileges.

## Interface approval
Before implementation or restyle, make a real layout sketch/mock and state matrix (loading/empty/error/mobile/theme/locale), then implement selected option. Do not invent a component API without a consumer. Every interactive element requires a tested effect.
