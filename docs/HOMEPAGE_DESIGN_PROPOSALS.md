# Homepage design proposals — Batch 3

## Shared constraints

- Audience: recruiter, researcher, developer and potential client.
- Verified content available now: four user-supplied project records in EN/TR.
- Missing content: approved portrait, project screenshots, research entries, writing entries, CV facts, demos and GitHub repositories.
- No fabricated metrics, logos, screenshots, testimonials or decorative data visualizations.
- Warm Neutral tokens remain replaceable; all proposals support light/dark and reduced motion.
- Hero copy must remain useful without JavaScript or a Canvas renderer.

## Option A — Evidence field (recommended)

### Information hierarchy

1. Small studio label and a specific statement about building around real problems.
2. Large editorial headline with a short explanation of engineering × research × creative work.
3. A quiet, bounded “evidence field” on the right: connected nodes represent problem → prototype → evidence, with a static typographic fallback.
4. Selected work begins with one wide Ghostellar/LucidUI feature and a narrow secondary column for Physim/MIV Blockspace.
5. Compact research/writing/contact prompts are shown only when verified content exists; otherwise the section is omitted or clearly marked as not yet published.

### Grid and type

- 12-column desktop grid: hero copy spans 5 columns, evidence field spans 7.
- Feature project spans 8 columns; secondary project rail spans 4.
- Serif display heading, sans body, mono labels/statuses.
- Generous 4/8px rhythm and a max reading width near 70ch.

### Mobile behavior

- Copy first, static evidence field below it.
- Feature projects become a vertical editorial sequence; no horizontal overflow.
- Filters and status labels remain visible as text, not color-only signals.

### Motion purpose

- One pointer/touch response in the evidence field shifts node connections slightly.
- `prefers-reduced-motion` replaces it with a still diagram.
- No continuous autoplay and no dependency on the scene for meaning.

## Option B — Research notebook

### Information hierarchy

1. Left-aligned statement and short personal studio context.
2. A vertical index of four projects styled like notebook entries, each with maturity and domain labels.
3. A large “current questions” panel for research themes, using only verified LucidUI/Physim descriptions.
4. Contact/CV action at the bottom of the first screen.

### Grid and type

- 6-column editorial grid with a strong left rule and asymmetric entry lengths.
- Serif headline and monospace index numbers; no fake timestamps or progress bars.
- Dense information design favors fast recruiter/researcher scanning.

### Mobile behavior

- Vertical rule becomes a left border on entries.
- Project metadata remains inline and wraps naturally for long Turkish labels.

### Motion purpose

- Only hover/focus border and 150–250ms reveal transitions.
- No hero canvas; strongest option for performance and accessibility.

## Option C — Systems map

### Information hierarchy

1. Headline and one-line proposition.
2. A static systems map connecting the four projects by domain: payments, HCI, learning, analytics.
3. Clicking/focusing a project reveals its short summary and links to the case study.
4. A lower editorial strip for contact and future research/writing entries.

### Grid and type

- 12-column desktop map with project nodes placed asymmetrically.
- Card surfaces used only for the four project summaries; no repeated generic card section elsewhere.
- Mono labels for domain and maturity; serif for the main proposition.

### Mobile behavior

- Map becomes a semantic ordered list; every node remains keyboard reachable.
- Visual connections are supplementary and hidden when space or motion preferences require it.

### Motion purpose

- Focus/hover highlights only the selected relation.
- No physics simulation, autoplay or decorative particle field.

## Recommendation

Choose Option A if the homepage should feel like a distinctive engineering studio while retaining an experimental signature. Choose Option B if scanability and publishing speed are the priority. Choose Option C if the four projects should be the primary navigation metaphor.

## Approval state

- [x] Three distinct compositions documented.
- [x] Information hierarchy, grid, type, mobile and motion behavior documented.
- [ ] Owner selects a composition.
- [ ] Desktop/mobile light/dark prototype implemented.
- [ ] Screenshot matrix reviewed at 360/768/1440.
- [ ] Final visual direction approved.

## Visual verification

NOT VISUALLY VERIFIED. No screenshot or browser interaction evidence exists for these proposals.
