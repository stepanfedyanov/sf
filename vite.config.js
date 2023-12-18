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
  base: process.env.NODE_ENV === "production" ? "/sf/" : "/",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/mixins/adaptive-value";'
      },
    },
  },
  assetsInclude: ['**/*.mov'],
})
