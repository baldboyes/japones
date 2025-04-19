import process from 'node:process'
const sw = process.env.SW === 'true'

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      appVersion: process.env.npm_package_version,
      env: process.env.NODE_ENV as 'DEVELOPMENT' | 'PRODUCTION',
      mapboxToken: 'pk.eyJ1IjoiYmFsZGJveSIsImEiOiJhMzBzeklzIn0.buJ1PP9-a9JkqNWGHW-H0g'
    },
  },
  app:{
    head: {
      title: 'oKana',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        { name: 'description', content: 'Esta es la APP de aprendizaje japonés para el grupo de Japonizados.' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    strategies: sw ? 'injectManifest' : 'generateSW',
    srcDir: sw ? 'service-worker' : undefined,
    filename: sw ? 'sw.ts' : undefined,
    registerType: 'autoUpdate',
    manifest: {
      name: 'oKana',
      short_name: 'oKana',
      description: 'oKana',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: 'favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: 'favicon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: 'favicon-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'favicon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        }
      ],
    },
    pwaAssets: {
      config: false,
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },

  compatibilityDate: '2025-04-17'
})