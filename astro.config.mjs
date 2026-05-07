import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  prefetch: true,
  integrations: [react(), tailwind(), mdx()],
  site: 'https://adrian-nie.netlify.app',
});
