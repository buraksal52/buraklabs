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

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.mdx$/, '').replaceAll('/', '-')
  }),
  schema: projectSchema
});

export const collections = { projects };
