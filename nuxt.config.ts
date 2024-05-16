export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    viewTransition: true
  },
  nitro: {
    preset: "cloudflare-pages"
  },
  modules: [
    "nitro-cloudflare-dev",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/sitemap"
  ],
  runtimeConfig: {
    public: {
      NUXT_CLOUDFLARE_KV_STORE_ARTICLES_BASE_URL: process.env.NUXT_CLOUDFLARE_KV_STORE_ARTICLES_BASE_URL,
      NUXT_BEEHIIV_V2_PUBLICATION_ID: process.env.NUXT_BEEHIIV_V2_PUBLICATION_ID,
      NUXT_BEEHIIV_API_KEY: process.env.NUXT_BEEHIIV_API_KEY,
    }
  },
  fonts: {
    provider: 'local', // sets default provider
    families: [
      {
        name: 'PPNeueMontreal', // the 'canonical' name of the font used to look it up in a provider database
        provider: 'local', // you can override the provider on a per-family basis
        // provider specific options can be provided
        src: '~/public/fonts/PPNeueMontreal.woff', // you can specify a source within your project
        // specific configuration will be used to generate `@font-face` definitions
        subsets: ['latin'],
        display: 'swap', // or 'block'
        weight: 'normal',
        style: 'normal',
        // and produce CSS overrides to reduce layout shift (using fontaine)
        fallbacks: ['Sans-Serif'],
      }
    ]
  }
})