import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/usuarios': 'http://localhost:3000', 
    },
  },
});
