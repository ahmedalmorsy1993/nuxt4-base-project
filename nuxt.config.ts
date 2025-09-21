// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ui: {},
  modules: ['@nuxt/image', '@nuxt/ui'],

  // Optimize lazy loading and code splitting
  experimental: {
    payloadExtraction: false, // Reduces initial bundle size
    asyncEntry: true,
  },
  build: {
    transpile: ['vue']
  },
  // Enable component lazy loading

  // Enable compression
  nitro: {
    compressPublicAssets: true
  }
})