<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <Header />
  <main class="min-h-[calc(100vh-16.25rem)] sm:min-h-[calc(100vh-13rem)]">
    <section class="flex flex-col gap-2 py-16 sm:py-24 md:py-32">
      <h1 class="text-balance font-sans text-4xl font-medium uppercase text-text-primary md:text-5xl lg:text-7xl">
        {{ route.params.slug }}
      </h1>
    </section>
  </main>
  <Footer />
</template>