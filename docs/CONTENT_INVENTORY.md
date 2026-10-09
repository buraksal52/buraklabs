# Content inventory — Phase 0

Bu belge, public içerik yazmadan önce hangi bilgilerin mevcut olduğunu ve hangilerinin içerik sahibinden doğrulanması gerektiğini kaydeder.

## Evidence policy

- Bu repository’de henüz uygulama source’u, MDX içeriği, CV, repository listesi veya medya asset’i bulunmuyor.
- `docs/PRODUCT.md` içinde geçen proje adları yalnızca aday içerik olarak ele alınır; public gerçek, sonuç veya başarı iddiası değildir.
- Kanıtı olmayan alanlar içerikte kullanılmayacak; gerektiğinde `TODO(content-owner)` olarak tutulacaktır.
- Bu envanter, public sayfaya doğrudan içerik sağlamaz.

## Current repository evidence

| Alan | Mevcut kanıt | Durum | Kaynak |
|---|---|---|---|
| Ürün adı | BurakLabs | Doğrulanmış proje kimliği | `README.md`, `docs/PRODUCT.md` |
| Alan | Engineering × research × creative studio | Ürün yönü olarak tanımlı; public bio iddiası değil | `docs/PRODUCT.md` |
| Hedef domain | `buraklabs.studio` | Hedef olarak tanımlı; deploy doğrulanmadı | `README.md`, `docs/INTEGRATIONS.md` |
| Diller | İngilizce ve Türkçe | Route ve içerik politikası tanımlı; çeviri içeriği yok | `docs/I18N.md` |
| Uygulama | Yok | Scaffold edilmedi | `README.md`, `docs/WORKLOG.md` |
| Proje içerikleri | Yok | Public kullanıma hazır kanıt yok | Repository taraması |
| Araştırma içerikleri | Yok | Public kullanıma hazır kanıt yok | Repository taraması |
| Yazılar | Yok | Public kullanıma hazır kanıt yok | Repository taraması |
| CV/PDF | Yok | Owner doğrulaması gerekli | `docs/DECISIONS.md` |
| Görseller/logolar | Yok | Hak ve alt text doğrulaması gerekli | Repository taraması |
| Deploy/test kanıtı | Yalnızca playbook validation | UI/build/deploy doğrulanmadı | `docs/WORKLOG.md` |

## Owner-supplied portfolio data — 2026-10-09

The attached `Portfolio Content Data` brief is now an approved source for the following public facts:

- Display name: Ömer Burak Şal.
- English and Turkish bios.
- GitHub: `https://github.com/buraksal52`.
- LinkedIn: `https://www.linkedin.com/in/brksal`.
- No portrait until a real photo is supplied.
- Ghostellar and MIV Blockspace: September 2026 hackathon context and stated outcomes.
- Ghostellar role: blockchain payment system design and development, with individual details still unresolved.
- LucidUI role, Dr. Didem Tufan attribution, ongoing research status and E-HCI target context.
- Physim role and learning-engineering positioning without efficacy claims.
- MIV Blockspace role and Monad Blitz Istanbul v2 context without production/backend or detection-performance claims.
- CV education, public skill areas and community activity as supplied; expected graduation remains subject to reconfirmation.

Still unresolved and intentionally omitted from public links/claims:

- Public email, other profiles, portrait, CV PDFs.
- Repository/demo URLs and detailed contribution splits.
- Exact dates except supplied September 2026 context.
- Project screenshots and asset licenses.
- LucidUI dataset, evaluation protocol, paper/DOI and other authors.
- Physim implementation modules, users and experiments.
- MIV real data source, live deployment and evaluation evidence.

## Candidate projects — owner verification required

These four records were supplied and approved for the initial portfolio pass by the user in the attached project brief. Repository/demo URLs, dates and individual roles remain unresolved and are not claimed.

| Candidate | Include? | Required evidence |
|---|---|---|
| LucidUI | Included in initial pass | Official title and brief supplied by owner; URL/repository, dates, role, screenshots/assets, outcomes and collaborators still unresolved |
| Remotion Studio | `TODO(content-owner)` | Official title, URL/repository, dates, role, status, screenshots/assets, outcomes, collaborators |
| Physim | Included in initial pass | Official title and brief supplied by owner; URL/repository, dates, role, screenshots/assets, outcomes and collaborators still unresolved |
| AB/C | `TODO(content-owner)` | Official title, URL/repository, dates, role, status, screenshots/assets, outcomes, collaborators |
| Ghostellar | Included in initial pass | Official title and brief supplied by owner; URL/repository, dates, role, screenshots/assets and collaborator attribution still unresolved |
| MIV Blockspace | Included in initial pass | Official title and brief supplied by owner; URL/repository, dates, role, screenshots/assets, real-data path and evaluation evidence still unresolved |

## Research inventory

No research item is currently verified. For every publishable item, collect:

- exact title and stable identity;
- author list and attribution;
- research area;
- actual status: ongoing, preprint, submitted, accepted, published or archived;
- relevant dates;
- venue, DOI, paper URL and repository URL when applicable;
- public-release permission and language coverage.

`submitted`, `accepted` and `published` must only be used when the corresponding evidence exists.

## Writing inventory

No articles or notes are currently present. For every article, collect:

- title, locale, stable translation key and slug;
- publication/update date;
- summary and tags;
- source links and citations;
- code, figures, captions and image rights;
- Turkish counterpart or an explicit missing-translation decision.

## CV, profile and contact inventory

Required owner-approved facts:

- display name and preferred short introduction;
- verified role/discipline wording;
- education, employment and affiliations that may be public;
- skills or capabilities the owner wants to state;
- verified English and Turkish CV PDFs, if both exist;
- approved email and social/profile URLs;
- portrait or other personal media, including usage rights;
- whether social profiles should be exposed publicly.

## Media and demo inventory

For each visual or demo, collect:

- asset/demo name and owning project;
- local file or approved URL;
- license/permission and attribution requirements;
- localized alt text/caption;
- demo type: native, embedded or external;
- fallback image or non-JavaScript explanation;
- iframe/CSP restrictions and whether the target permits embedding.

## Phase 0 blockers

The following must be resolved before public content or a final design prototype can be approved:

1. Which candidate projects are real, current and publishable?
2. What are the verified role, dates, status, links and outcomes for each selected project?
3. Which research items and statuses are public and evidence-backed?
4. Which CV facts and PDF files are approved for English and Turkish?
5. Which images, screenshots, logos and demos may be used, and under what rights?
6. What exact hero interaction is desired, and what static fallback should represent it?
7. Which content has an approved Turkish translation?

## Phase 0 acceptance state

- [x] Repository and documentation inventory completed.
- [x] Candidate content separated from verified public content.
- [x] Missing evidence and owner decisions recorded.
- [ ] Owner-approved links, dates, roles, media and demo inventory completed.
- [ ] Final home and case-study layout approved at desktop/mobile.
- [ ] Light/dark and reduced-motion visual variants approved.
- [ ] No fabricated public placeholders.
