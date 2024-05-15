<template>
  <section>
    <h2 class="uppercase font-semibold text-base">RECENT ESSAYS</h2>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error loading articles</div>
    <ul v-else class="divide divide-y divide-text-primary flex flex-col gap-4 sm:gap-8">
      <li v-for="article in formattedData" :key="article.id" class="flex flex-col pt-4 gap-[0.4rem]">
        <NuxtLink :to="`/essays/${article.slug}`">
          <p class="text-sm font-medium tracking-widest">{{ article.published_date }}</p>
          <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-8 hover:underline">{{ article.title }}</h3>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useAsyncData } from 'nuxt/app'
import { computed } from 'vue'

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

const formatPublishedDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options = { month: 'numeric', day: 'numeric', year: 'numeric' } as const
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

const formattedData = computed(() => {
  return data.value?.map(article => ({
    ...article,
    published_date: formatPublishedDate(article.published_date)
  })) || []
})
</script>
