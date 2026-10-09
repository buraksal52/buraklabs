import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buraklabs.studio',
  integrations: [
    mdx(),
    sitemap({ filter: (page) => !page.endsWith('/search') && !page.endsWith('/search/') })
  ]
});
