// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    viewTransition: true
  },
  nitro: {
    preset: 'cloudflare-pages'
  },

  modules: [
    'nitro-cloudflare-dev',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image'
  ],
  runtimeConfig: {
    public: {
      NUXT_CLOUDFLARE_KV_STORE_ARTICLES_BASE_URL: process.env.NUXT_CLOUDFLARE_KV_STORE_ARTICLES_BASE_URL || 'https://shaan-cloudflare-worker.ryan9551.workers.dev'
    }
  },
  fonts: {
    provider: 'local', // sets default provider
    families: [
      {
        name: 'PPNeueMontreal', // the 'canonical' name of the font used to look it up in a provider database
        provider: 'local', // you can override the provider on a per-family basis
        src: '~/public/fonts/PPNeueMontreal.woff', // you can specify a source within your project
        subsets: ['latin'],
        display: 'swap', // or 'block'
        weight: 'normal',
        style: 'normal',
        fallbacks: ['Sans-Serif'],
      }
    ]
  }
});
