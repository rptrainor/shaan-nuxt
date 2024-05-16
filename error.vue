<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})

</script>

<template>
  <div class="bg-background-primary text-text-primary">
    <Header />
    <main class="min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-8rem)]">
      <section class="flex flex-col justify-center items-center gap-2 py-16 sm:py-24 md:py-32 mx-auto px-4">

        <h1 class="text-balance font-sans text-4xl font-medium uppercase text-text-primary md:text-5xl lg:text-7xl">
          404 - Page Not Found
        </h1>
        <NuxtLink to="/" class="bg-text-primary text-white py-2 px-4 rounded max-w-lg text-center text-2xl">
          Go back home
        </NuxtLink>
      </section>
    </main>
    <Footer />
  </div>
</template>
