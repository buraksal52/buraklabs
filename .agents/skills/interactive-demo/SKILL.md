---
name: interactive-demo
description: Add or maintain native React, embedded iframe, or external BurakLabs project demos.
---

# Interactive demo workflow
Read `docs/INTEGRATIONS.md`, `docs/COMPONENTS.md`, `docs/QUALITY.md`.
1. Classify demo `native`, `embedded`, `external`; choose the smallest viable type.
2. Register stable demo id, validate componentKey or URL against allowlist, verify permission to embed.
3. Click-to-load expensive code/iframe; show lightweight genuine preview and explanation.
4. Implement progress, timeout/unavailable, offline, blocked embed and safe external fallback; sandbox iframe and isolate untrusted app origin.
5. Test keyboard/touch, reduced motion, responsive sizing, no impact to case study on demo failure.
6. Verify it *works*, not merely renders a screenshot. Record test path, constraints and hosting origin.
**Never:** run arbitrary user-supplied code in parent origin, disable sandbox reflexively, fabricate live demo links.
