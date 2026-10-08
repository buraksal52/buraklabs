---
name: localization
description: Modify English/Turkish copy, localized routes, locale switcher, translations, SEO alternates.
---

# Localization workflow
Read `docs/I18N.md` and `docs/CONTENT_MODEL.md`.
1. Classify UI dictionary string vs published prose/MDX; preserve brand, code, source quotes and links correctly.
2. Maintain `translationKey` mapping, validated slugs, language-specific canonical/alternates only for existing translations.
3. Do not invent or machine-publish untranslated research as verified translation.
4. When a translation is absent, show honest language index/original link fallback.
5. Test both languages at mobile width, large labels, accents/Turkish casing, switch at detail page, search result locale, 404/back behavior.
**Evidence:** route pairs, missing key report, visual clipping screenshots, sitemap/hreflang checks.
