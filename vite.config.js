import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  VantResolver,
  ElementPlusResolver,
} from 'unplugin-vue-components/resolvers'

import AddLogo from './plugins/vite-plugin-add-logo'
import RemoveConsole from './plugins/vite-plugin-remove-console'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://api.tophub.fun',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    Inspect(),
    RemoveConsole(),
    AddLogo(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(), VantResolver()],
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      dts: false,
      directoryAsNamespace: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
