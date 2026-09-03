// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
// import sitemap from '@astrojs/sitemap'; // Temporarily disabled

// https://astro.build/config
export default defineConfig({
  site: 'https://www.interprofinland.fi',
  output: 'hybrid',
  adapter: vercel(),
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  redirects: {
    '/projects': '/events',
    '/projects/[slug]': '/events',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    // sitemap(), // Temporarily disabled due to build issues
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
