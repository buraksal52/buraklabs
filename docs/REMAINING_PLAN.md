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

## Batch 3 — Homepage and visual direction

**Goal:** Creative Studio ana sayfasını tamamlamak ve görsel yönü doğrulamak.

- 2–3 hero/composition önerisi.
- Statik hero fallback’i.
- Featured projects, research/writing placeholder boundaries and contact route.
- Light/dark/reduced-motion varyantları.
- 360/768/1440 screenshot karşılaştırması.

**Exit:** Seçilen kompozisyon owner tarafından onaylanmış; screenshot matrix raporlanmış.

**Commit example:** `feat(home): add approved creative studio homepage composition`

## Batch 4 — Content completion and evidence

**Goal:** Proje içeriklerini public kullanıma hazır kanıt seviyesine taşımak.

- Repository ve demo URL’leri.
- Gerçek rol, tarih, ekip katkısı ve durum bilgileri.
- Görseller, alt text, lisans ve attribution.
- Implemented/prototyped/explored/planned ayrımı.
- Case-study architecture, decisions, challenges and evidence sections.

**Exit:** Dört proje için provenance checklist tamamlanmış.

**Commit example:** `content(projects): complete verified project provenance and case studies`

## Batch 5 — Demo registry

**Goal:** Native, embedded ve external demo sözleşmesini uygulamak.

- Typed demo registry.
- Approved URL/CSP allowlist.
- Lazy loading and explicit user action.
- iframe sandbox, title, referrerpolicy and blocked/offline fallback.
- At least two real demos, only when owner-approved targets exist.

**Exit:** Demo matrix and keyboard/fallback tests PASS.

**Commit example:** `feat(demos): add validated demo registry and safe fallbacks`

## Batch 6 — GitHub snapshot integration

**Goal:** Visitor-side API çağrısı olmadan doğrulanmış repo metadata’sı göstermek.

- Public repository allowlist.
- Snapshot schema and last-good fallback.
- Scheduled workflow, staleness label and malformed/rate-limit handling.
- Secret scan and no-token client output.

**Exit:** Network failure, stale snapshot and valid snapshot tests PASS.

**Commit example:** `feat(integrations): add validated scheduled GitHub metadata snapshot`

## Batch 7 — Research, writing, CV and contact

**Goal:** Kalan content collections ve kişisel bilgi yüzeylerini eklemek.

- Research schema and verified status handling.
- Writing/MDX layout, TOC, code, figures and citations.
- Verified EN/TR CV PDFs.
- About/contact with owner-approved public facts.

**Exit:** No invented claims; draft/sitemap/search rules PASS.

**Commit example:** `feat(content): add verified research writing CV and contact surfaces`

## Batch 8 — CI, security and release

**Goal:** Production release kapılarını kurmak.

- CI: check, lint, test, build and link checks.
- CSP, external URL allowlist and secret scan.
- Dependency audit review.
- Cloudflare Pages preview/production configuration.
- Release evidence and measured Lighthouse/accessibility results.

**Exit:** Release checklist complete; deployment only after live verification.

**Commit example:** `ci(release): add quality gates and Cloudflare Pages release checks`

## Current blockers

- Owner-approved repository/demo URL’leri yok.
- Gerçek tarihler, roller, ekip katkıları ve medya asset’leri eksik.
- Hero ve homepage kompozisyonu görsel olarak onaylanmadı.
- Browser/E2E altyapısı henüz kurulmadı.
- Cloudflare ve GitHub entegrasyonları için allowlist/secret/deployment bilgileri yok.
