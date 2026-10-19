import { defineConfig } from 'vite';

export default defineConfig({
  // Use '/' for local preview. Change to '/CLARA_webpage/' only if deploying to that subpath.
  base: '/',
  publicDir: 'public',
  server: {
    port: 5173,
    open: false,
  },
});
