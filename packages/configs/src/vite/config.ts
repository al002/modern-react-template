import { resolve } from 'path';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

export function createLibConfig(options: {
  dirname: string;
  entry?: string;
  external?: string[];
  css?: boolean;
}): UserConfig {
  const entry = options.entry || 'src/index.ts';
  const external = [...(options.external || [])];
  const srcPath = resolve(options.dirname, 'src');

  return defineConfig({
    resolve: {
      alias: {
        '@': srcPath,
      },
    },
    plugins: [
      react(),
      tailwindcss(),
      dts({
        include: [`src`],
        entryRoot: 'src',
        exclude: [`src/**/*.stories.tsx`, `src/**/*.test.tsx`],
      }),
    ],
    css: {
      transformer: 'lightningcss',
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
    build: {
      lib: {
        formats: ['es'],
        entry: resolve(options.dirname, entry),
      },
      rollupOptions: {
        external,
        output: {
          preserveModules: true,
          preserveModulesRoot: srcPath,
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          entryFileNames: '[name].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.originalFileNames?.indexOf('.css')) {
              return 'style.css';
              // return `styles/[name][extname]`
            }
            return 'assets/[name][extname]';
          },
        },
      },
      cssCodeSplit: options.css,
      cssMinify: 'lightningcss',
    },
  });
}
