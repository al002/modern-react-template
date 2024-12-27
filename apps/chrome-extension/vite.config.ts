import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
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
  plugins: [
    react(),
    crx({
      manifest: manifest as crx.ManifestV3Export,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: './dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'popup.html'),
        options: resolve(__dirname, 'options.html'),
        background: resolve(__dirname, 'src/background/index.ts'),
        content: resolve(__dirname, 'src/content/index.ts'),
      },
      output: {
        dir: './dist',
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          ui: ['@myapp/ui'],
        },
      },
    },
    cssMinify: 'lightningcss',
  },
});
