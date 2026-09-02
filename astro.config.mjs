// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.interprofinland.fi',
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
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
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
