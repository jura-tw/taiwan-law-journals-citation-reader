const ASSET_BASE_URL = 'https://lex-hare.github.io/favicon'

export default defineNuxtConfig({
  compatibilityDate: '2026-06-28',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/fonts'],
  css: ['@picocss/pico/css/pico.fluid.classless.min.css', '~/assets/css/main.css'],
  typescript: {
    strict: true,
  },
  app: {
    baseURL: '/taiwan-law-journals-citation-reader/',
    head: {
      htmlAttrs: { lang: 'zh-Hant-TW' },
      meta: [
        {
          name: 'description',
          content: '非官方的線上管道，可查閱臺灣 TSSCI 一級法學期刊共同制定的〈法學期刊引註格式凡例〉。',
        },
      ],
      title: '法學期刊引註格式凡例：線上查閱',
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: `${ASSET_BASE_URL}/apple-touch-icon.png`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${ASSET_BASE_URL}/favicon-32x32.png`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${ASSET_BASE_URL}/favicon-16x16.png`,
        },
        {
          rel: 'manifest',
          href: `${ASSET_BASE_URL}/site.webmanifest`,
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/citations', '/robots.txt'],
    },
  },

  fonts: {
    // 強制優先使用 bunny 提供商
    provider: 'bunny',

    families: [
      {
        name: 'Gentium Book Basic',
        provider: 'bunny',
        weights: [400, 700],
        styles: ['normal', 'italic'],
      },
      {
        name: 'Noto Serif TC',
        provider: 'bunny',
        weights: [500, 700],
        styles: ['normal'],
      },
      {
        name: 'Noto Serif JP',
        provider: 'bunny',
        weights: [500, 700],
        styles: ['normal'],
      },
      {
        name: 'Noto Sans JP',
        provider: 'bunny',
        weights: [500, 700],
        styles: ['normal'],
      },
    ],
  },
})
