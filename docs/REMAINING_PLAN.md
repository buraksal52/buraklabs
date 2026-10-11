# Remaining implementation plan

Her batch sonunda gerçek komut sonuçları, bilinen sınırlılıklar ve örnek commit mesajı worklog’a yazılacaktır. Commit oluşturulması ayrıca istenmedikçe yalnızca mesaj örneği verilir.

## Batch 1 — Quality baseline and route behavior

**Goal:** Mevcut EN/TR sayfalarını tarayıcı ve erişilebilirlik açısından doğrulamak.

- Local preview çalıştırma.
- EN/TR index ve dört detail route kontrolü.
- Theme toggle, search, filters, back/forward ve keyboard akışları.
- 360/768/1440 viewport ve reduced-motion kontrolü.
- 404, boş filtre ve arama sonucu durumları.

**Exit:** Reproducible browser checklist; bulunan hatalar düzeltilmiş veya kayıt altına alınmış.

**Commit example:** `test(quality): verify localized routes, theme and search flows`

## Batch 2 — SEO and localization hardening — completed

**Goal:** Locale-safe metadata ve bağlantı davranışını tamamlamak.

- Canonical ve `hreflang` üretimi.
- EN/TR detail sayfaları arasında karşılıklı locale bağlantıları.
- Sitemap üretimi; draft/private içerik dışlama.
- Türkçe arama ve filtre metinlerinin kalite kontrolü.
- Link, slug ve translationKey doğrulaması.

**Exit:** Route matrix, metadata ve internal-link kontrolü PASS.

**Commit example:** `feat(i18n): add locale alternates, canonical metadata and sitemap rules`

Browser-level visual and interaction validation remains open and is tracked as a Batch 1 limitation.

## Batch 3 — Homepage and visual direction — implemented, visual QA pending

**Goal:** Creative Studio ana sayfasını tamamlamak ve görsel yönü doğrulamak.

- 2–3 hero/composition önerisi.
- Statik hero fallback’i.
- Featured projects, research/writing placeholder boundaries and contact route.
- Light/dark/reduced-motion varyantları.
- 360/768/1440 screenshot karşılaştırması.

**Exit:** Seçilen kompozisyon owner tarafından onaylanmış; screenshot matrix raporlanmış.

**Commit example:** `feat(home): add approved creative studio homepage composition`

Option A — Evidence Field was selected and implemented. Screenshot and browser QA remain open.

## Revised priority

Owner-specific profile, CV, contact and detailed provenance work is intentionally deferred. The immediate goal is to make the site useful as a product/design prototype: explore the visual language, navigation, project storytelling, filters, search and clearly labeled interactive simulations first. Existing owner-supplied facts remain in the repository, but new personal-data completion is not on the critical path.

## Batch 4 — Site prototype and project experience — implemented, review pending

**Goal:** Make the site feel complete enough to evaluate before the final personal-content pass.

- Project storytelling and case-study navigation.
- Clearly labeled interactive simulations using example data only.
- Empty/loading/error states and missing-demo behavior.
- Homepage, project index, detail, research and writing flow.
- Responsive and reduced-motion behavior.

**Exit:** A coherent local prototype can be reviewed without requiring final CV, email or repository data.

**Commit example:** `feat(prototype): complete project storytelling and interactive states`

All four projects now have labeled local interactive simulations using example data only. These are prototype experiences, not claims about the underlying production systems.

## Batch 5 — Content completion and evidence — deferred

**Goal:** Complete project provenance and owner-specific public information after the prototype direction is approved.

- Repository/demo URLs, exact dates, roles and contribution splits.
- Screenshots, licenses and attribution.
- Verified CV PDFs, public email and profile details.
- Research evidence, paper metadata and writing bodies.

**Commit example:** `content(profile): complete verified owner and project provenance`

## Batch 6 — Demo registry — safe contract implemented, real demos pending

**Goal:** Native, embedded ve external demo sözleşmesini uygulamak.

- Typed demo registry.
- Approved URL/CSP allowlist.
- Lazy loading and explicit user action.
- iframe sandbox, title, referrerpolicy and blocked/offline fallback.
- At least two real demos, only when owner-approved targets exist.

**Exit:** Demo matrix and keyboard/fallback tests PASS.

**Commit example:** `feat(demos): add validated demo registry and safe fallbacks`

Typed empty registry and HTTPS host allowlist are implemented. Real native/embedded/external demos still require owner-approved targets.

## Batch 7 — GitHub snapshot integration

**Goal:** Visitor-side API çağrısı olmadan doğrulanmış repo metadata’sı göstermek.

- Public repository allowlist.
- Snapshot schema and last-good fallback.
- Scheduled workflow, staleness label and malformed/rate-limit handling.
- Secret scan and no-token client output.

**Exit:** Network failure, stale snapshot and valid snapshot tests PASS.

**Commit example:** `feat(integrations): add validated scheduled GitHub metadata snapshot`

## Batch 8 — Research, writing, CV and contact — shells implemented, content deferred

**Goal:** Kalan content collections ve kişisel bilgi yüzeylerini eklemek.

- Research schema and verified status handling.
- Writing/MDX layout, TOC, code, figures and citations.
- Verified EN/TR CV PDFs.
- About/contact with owner-approved public facts.

**Exit:** No invented claims; draft/sitemap/search rules PASS.

**Commit example:** `feat(content): add verified research writing CV and contact surfaces`

EN/TR route shells and honest empty states are implemented. Verified research, writing, CV and contact facts remain required before adding public claims.

## Batch 9 — CI, security and release — baseline implemented, release pending

**Goal:** Production release kapılarını kurmak.

- CI: check, lint, test, build and link checks.
- CSP, external URL allowlist and secret scan.
- Dependency audit review.
- Cloudflare Pages preview/production configuration.
- Release evidence and measured Lighthouse/accessibility results.

**Exit:** Release checklist complete; deployment only after live verification.

**Commit example:** `ci(release): add quality gates and Cloudflare Pages release checks`

Node pin, npm CI workflow, test/check/build scripts, robots and 404 surfaces are implemented. Cloudflare deployment and measured release evidence remain pending.

## Current blockers

- Owner-approved repository/demo URL’leri yok.
- Gerçek tarihler, roller, ekip katkıları ve medya asset’leri eksik.
- Hero ve homepage kompozisyonu görsel olarak onaylanmadı.
- Browser/E2E altyapısı henüz kurulmadı.
- Cloudflare ve GitHub entegrasyonları için allowlist/secret/deployment bilgileri yok.
