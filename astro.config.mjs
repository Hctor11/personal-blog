import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://Hctor11.github.io',
  base: '/personal-blog',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },
  integrations: [react()]
});