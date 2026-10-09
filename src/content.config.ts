import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  id: z.string(),
  translationKey: z.string(),
  locale: z.enum(['en', 'tr']),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  draft: z.boolean().default(true),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  categories: z.array(z.string()),
  technologies: z.array(z.string()),
  status: z.enum(['concept', 'building', 'live', 'archived']),
  maturity: z.enum(['implemented', 'prototyped', 'explored', 'planned']),
  featured: z.boolean().default(false),
  myRole: z.string().optional(),
  repositoryUrl: z.string().url().optional(),
  demoId: z.string().optional(),
  sources: z.array(z.string().url()).default([]),
  seo: z.object({
    title: z.string(),
    description: z.string()
  })
});

const researchSchema = z.object({
  id: z.string(),
  translationKey: z.string(),
  locale: z.enum(['en', 'tr']),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  draft: z.boolean().default(true),
  authors: z.array(z.string()),
  researchAreas: z.array(z.string()),
  status: z.enum(['ongoing', 'preprint', 'submitted', 'accepted', 'published', 'archived']),
  startedAt: z.string().optional(),
  venue: z.string().optional(),
  doi: z.string().optional(),
  paperUrl: z.string().url().optional(),
  repositoryUrl: z.string().url().optional(),
  sources: z.array(z.string().url()).default([]),
  seo: z.object({ title: z.string(), description: z.string() })
});

const writingSchema = z.object({
  id: z.string(),
  translationKey: z.string(),
  locale: z.enum(['en', 'tr']),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  draft: z.boolean().default(true),
  tags: z.array(z.string()),
  publishedAt: z.string().optional(),
  updatedAt: z.string().optional(),
  sources: z.array(z.string().url()).default([]),
  seo: z.object({ title: z.string(), description: z.string() })
});

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.mdx$/, '').replaceAll('/', '-')
  }),
  schema: projectSchema
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/research', generateId: ({ entry }) => entry.replace(/\.mdx$/, '').replaceAll('/', '-') }),
  schema: researchSchema
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/writing', generateId: ({ entry }) => entry.replace(/\.mdx$/, '').replaceAll('/', '-') }),
  schema: writingSchema
});

export const collections = { projects, research, writing };
