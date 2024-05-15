<template>
  <section>
    <h2 class="uppercase font-semibold text-base">RECENT ESSAYS</h2>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error loading articles</div>
    <ul v-else class="divide divide-y divide-text-primary flex flex-col gap-4 sm:gap-8">
      <li v-for="article in data" :key="article.id" class="flex flex-col pt-4 gap-[0.4rem]">
        <p class="text-sm font-medium">{{ article.published_date }}</p>
        <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-8">{{ article.title }}</h3>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useAsyncData } from 'nuxt/app'

interface Article {
  id: number;
  created_at: string;
  updated_at: string;
  slug: string;
  title: string;
  description: string | null;
  body: string;
  author_full_name: string | null;
  cover_img_src: string | null;
  cover_img_alt: string | null;
  is_active: boolean;
  published_date: string;
}

const runtimeConfig = useRuntimeConfig()

const { data, pending, error } = await useAsyncData('articles', async () => {
  const response = await fetch(`${runtimeConfig.public.NUXT_CLOUDFLARE_KV_STORE_ARTICLES_BASE_URL}/articles`)
  if (!response.ok) {
    throw new Error('Failed to fetch articles')
  }
  return response.json() as Promise<Article[]>
})
</script>
