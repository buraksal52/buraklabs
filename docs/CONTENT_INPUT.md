# BurakLabs — Content Input

Bu dosya, site içeriği için içerik sahibinin doldurduğu kaynak dosyadır.

- Boş bırakılan alanlar kamuya açık sayfalara eklenmez.
- Bilinmeyen bilgiler için tahmin yapılmaz.
- Tarihleri `YYYY-MM-DD` biçiminde yaz.
- Fotoğraf ve logo eklerken kullanım iznini doğrula.
- Bir bilgi henüz kesin değilse sonuna `[VERIFY]` ekle.

## 1. Profile

```yaml
full_name: "TODO(content-owner)"
short_name: "TODO(content-owner)"
headline_en: "TODO(content-owner)"
headline_tr: "TODO(content-owner)"
location: "TODO(content-owner)"
email: "TODO(content-owner)"
website: "https://buraklabs.studio"
github: "TODO(content-owner)"
linkedin: "TODO(content-owner)"
```

## 2. About

### English

```text
Who I am:
TODO(content-owner)

What I do:
TODO(content-owner)

Where this leads:
TODO(content-owner)
```

### Türkçe

```text
Ben kimim:
TODO(content-owner)

Ne yapıyorum:
TODO(content-owner)

Bu nereye gidiyor:
TODO(content-owner)
```

## 3. Projects

Add one block per project. Existing project names can be updated here; no new project is published without evidence and an approved status.

```yaml
- slug: "TODO(content-owner)"
  title_en: "TODO(content-owner)"
  title_tr: "TODO(content-owner)"
  one_line_summary_en: "TODO(content-owner)"
  one_line_summary_tr: "TODO(content-owner)"
  category: ["TODO(content-owner)"]
  technologies: ["TODO(content-owner)"]
  status: "concept | building | live | archived"
  started_at: "TODO(content-owner)"
  my_role_en: "TODO(content-owner)"
  my_role_tr: "TODO(content-owner)"
  repository_url: ""
  demo_url: ""
  public: false
```

## 4. Writing and experiments

Add only notes that are approved for public release. Experiments belong here until they become a separate validated project or research record.

```yaml
- slug: "TODO(content-owner)"
  title_en: "TODO(content-owner)"
  title_tr: "TODO(content-owner)"
  summary_en: "TODO(content-owner)"
  summary_tr: "TODO(content-owner)"
  tags: ["TODO(content-owner)"]
  published_at: "TODO(content-owner)"
  public: false
  sources:
    - "TODO(content-owner)"
```

## 5. Research

```yaml
- id: "TODO(content-owner)"
  title_en: "TODO(content-owner)"
  title_tr: "TODO(content-owner)"
  authors: ["TODO(content-owner)"]
  research_areas: ["TODO(content-owner)"]
  status: "ongoing | preprint | submitted | accepted | published | archived"
  started_at: "TODO(content-owner)"
  venue: ""
  doi: ""
  paper_url: ""
  repository_url: ""
  public: false
```

## 6. Visual assets

For each image, provide the exact local filename, what it depicts, and usage permission.

```yaml
- filename: "TODO(content-owner)"
  purpose: "profile | project | writing | research"
  alt_en: "TODO(content-owner)"
  alt_tr: "TODO(content-owner)"
  rights: "TODO(content-owner)"
```

## 7. Change request

Use this small section when you want a specific update made from the information above.

```text
Requested change:
TODO(content-owner)

Public now? yes / no:
TODO(content-owner)

Applies to: EN / TR / both:
TODO(content-owner)
```

