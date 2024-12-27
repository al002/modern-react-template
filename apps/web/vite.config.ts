import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [tailwindcss(), TanStackRouterVite(), react()],
  css: {
    lightningcss: {
      targets: {
        chrome: 95,
        firefox: 95,
        safari: 15,
      },
      drafts: {
        customMedia: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: './dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        dir: './dist',
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          query: ['@tanstack/react-query'],
          ui: ['@myapp/ui'],
        },
      },
    },
    cssMinify: 'lightningcss',
  },
});
