// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/variables.css'],
  runtimeConfig: {
    serverUrl: 'http://localhost:3030/api/v1',
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
  },
  image: {
    format: ['webp'],
    domains: ['https://cdn.noitatnemucod.net', 'https://cdn.myanimelist.net'],
  },
})
