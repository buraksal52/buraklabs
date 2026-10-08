# Integration contracts

## GitHub snapshot
Only **selected public repos**. A scheduled GitHub Action (example every 6h) fetches repository metadata, validates response/allowlist, and writes last good snapshot including `repository`, `stars`, `forks`, `pushedAt`, `latestRelease`, `fetchedAt`. On failure keep previous good snapshot, flag staleness, and do not block static site. Tokens are secret in CI. Build only renders snapshot; visitor's browser does not call GitHub. A scheduled workflow that commits data or triggers build must avoid infinite CI loops; document which event actually deploys.

## Pagefind
Post-build `pagefind --site dist` creates locale-aware static search assets. Exclude nav/footer/private pages; include published project/research/writing with data attributes/semantic headings; no drafts. Lazy open search dialog with shortcut, focus management, empty/failure states, and accessibility. Test Turkish queries and English queries separately.

## Demo Registry
Union: `native: {id, componentKey}`, `embedded: {id,url,title}`, `external: {id,url}`. Build-time validated ID allows only approved components and permitted URLs. Native demos lazy load and provide non-JS preview; embedded demos require explicit user action, iframe sandbox, title/referrerpolicy and CSP allowlists; external demos use safe links. If X-Frame-Options/CSP disallows embed, offer external link. Heavy apps prefer separate origin. Never embed untrusted code with same-origin privileges.

## Theme
Root `data-theme=light|dark` with `system` preference; minimal pre-paint inline script reads safe persisted choice + `prefers-color-scheme`; React UI only for input if justified. Tokens in CSS, not hard-coded into components. Storage unavailable -> system fallback. `prefers-reduced-motion` disables continuous animation.

## Cloudflare Pages
Static output `dist`, GitHub push preview and production from main, custom domain `buraklabs.studio`, HTTPS, appropriate DNS. Node/pnpm pinned. Avoid unsupported assumption that Pages provides dynamic backend by default; use separate Workers only after a documented need.

## Analytics
Cloudflare Web Analytics only if consent/legal requirements have been checked. No unnecessary personal tracking, hidden fingerprinting, or surveillance scripts.
