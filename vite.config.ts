import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), react(), tsConfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    manifest: true,
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'react-toolbox',
      formats: ['es', 'cjs'],
      fileName: format => `react-toolbox.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        // Fix issues related to styled-components (https://github.com/styled-components/styled-components/issues/3700#issuecomment-1580761052)
        interop: 'compat'
      }
    }
  }
})
