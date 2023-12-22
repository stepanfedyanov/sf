import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('swiper-container') || tag.includes('swiper-slide')
        }
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/sf' : '',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/mixins/adaptive-value";'
      },
    },
  },
  assetsInclude: ['**/*.mov'],
})
