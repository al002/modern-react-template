import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { createLibConfig } from '@myapp/configs/vite/config';
import pkg from './package.json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default createLibConfig({
  dirname: __dirname,
  external: [
    'zustand/middleware',
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
});
