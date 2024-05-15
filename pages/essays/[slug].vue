<template>
  <Header />
  <main class="min-h-[calc(100vh-16.25rem)] sm:min-h-[calc(100vh-13rem)]">
    <section class="flex flex-col gap-2 max-w-prose mx-auto">
      <div class="text-left sm:text-center flex flex-col gap-4 pt-16 sm:py-24 lg:py-32">
        <p class="text-text-secondary text-lg">
          {{ formattedData.published_date }}
        </p>
        <h1 class="text-balance font-sans text-4xl font-medium uppercase text-text-primary md:text-7xl">
          {{ formattedData.title }}
        </h1>
      </div>
      <p class="mt-8 text-sm text-left w-full italic">This blog post takes <bold class="font-bold">{{ formattedData.read_time }}</bold> minutes to read</p>
      <div v-html="rawHtmlContent" class="mt-8 text-lg" />
      <div id="copy-button" class="u-mb-1 mt-4 border-black w-full flex flex-col justify-center items-center rounded-md border-2 bg-background-accent text-lg py-3 px-2 my-8">
        <p class="text-lg font-semibold">
          Enjoy this article? 
          <a href="#" id="copy-status" class="underline" @click.prevent="copyUrl">
            {{ copyStatus ? 'Copied!' : 'Send to a friend' }}
          </a>
        </p>
      </div>
      <p class="text-lg font-semibold">Want more stories like this in your inbox?</p>
      <iframe title="subscribe" src="https://embeds.beehiiv.com/0981ff0c-788f-4a28-937e-59be0cc398f5?slim=true" data-test-id="beehiiv-embed" height="52" frameborder="0" style="margin: 0; border-radius: 0px !important; background-color: transparent;"></iframe>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { useAsyncData, useRoute } from 'nuxt/app'
import { ref, computed } from 'vue';

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
  read_time: string;
}

const runtimeConfig = useRuntimeConfig()
const route = useRoute()

const slug = route.params.slug as string
const { data, pending, error } = await useAsyncData('articles', async () => {
  const response = await fetch(`${runtimeConfig.public.NUXT_CLOUDFLARE_KV_STORE_ARTICLES_BASE_URL}/articles/${slug}`)
  if (!response.ok) {
    throw new Error('Failed to fetch single article')
  }
  return response.json() as Promise<Article>
})

const formatPublishedDate = (dateString: string): string => {
  const date = new Date(dateString)
  const options = { month: 'numeric', day: 'numeric', year: 'numeric' } as const
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

const formattedData = computed(() => {
  return {
    ...data.value,
    published_date: formatPublishedDate(data.value?.published_date ?? "")
  }
})

const rawHtmlContent = ref(data.value?.body ?? "");
const copyStatus = ref(false);

const copyUrl = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyStatus.value = true;
  } catch (err) {
    console.error('Failed to copy URL: ', err);
  }
};
</script>
