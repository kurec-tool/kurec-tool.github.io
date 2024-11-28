// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import expressiveCode from 'astro-expressive-code';
import remarkMermaid from 'remark-mermaidjs'

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), mdx()],
  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkMermaid]
  }
});
