export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  modules: ['@nuxt/content'],
  content: {
    experimental: { nativeSqlite: true }
  },
  css: ['~/assets/css/blog.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Blog de Arquitectura de Software'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog']
    }
  }
})
