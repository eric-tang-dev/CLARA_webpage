import { defineConfig } from 'vite';

export default defineConfig({
  base: '/CLARA_webpage/',
  publicDir: 'public',
  server: {
    port: 5173,
    open: true,
  },
});
