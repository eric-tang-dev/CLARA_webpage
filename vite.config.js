import { defineConfig } from 'vite';

export default defineConfig({
  // Required for GitHub Pages project site: https://<user>.github.io/CLARA_webpage/
  base: '/CLARA_webpage/',
  publicDir: 'public',
  server: {
    port: 5173,
    open: false,
  },
});
