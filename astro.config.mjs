// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hi-sameer.web.app',
  markdown: {
    shikiConfig: {
      // Colors are applied per site theme in global.css, so code follows the light/dark switch.
      themes: { light: 'gruvbox-light-medium', dark: 'gruvbox-dark-medium' },
      defaultColor: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: true,
    port: 3000,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
