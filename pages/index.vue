<template>
  <Header />
  <main class="min-h-[calc(100vh-16.25rem)] sm:min-h-[calc(100vh-13rem)]">
    <section class="flex flex-col gap-2 py-16 sm:py-24 md:py-32">
      <p
        class="relative -left-2 top-1 max-w-fit -rotate-6 rounded bg-background-accent px-3 py-2 font-PPNeueMontrealSemiBold text-lg font-semibold leading-none text-text-primary sm:top-2">
        Hey, I'm Shaan&#8230;
      </p>
      <h1 class="text-balance font-sans text-4xl font-medium uppercase text-text-primary md:text-5xl lg:text-7xl">
        I WRITE THINGS HERE.
      </h1>
      <p class="paragraph-1-125 u-mb-0">
        Join&nbsp;<span class="font-semibold">109,050</span>&nbsp;entrepreneurs on my email list. It's
        good, I&nbsp;swear.
      </p>
      <iframe title="newsletter" src="https://embeds.beehiiv.com/0981ff0c-788f-4a28-937e-59be0cc398f5?slim=true"
        data-test-id="beehiiv-embed" height="52"
        class="w-full max-w-md font-sans text-sm font-medium text-text-primary placeholder:text-xs"
        style="margin: 0; border-radius: 0px !important; background-color: transparent;"></iframe>
    </section>
    <Articles />
  </main>
  <Footer />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'THE GREATEST BLOG ON THE MOTHER FU**ING PLANET.',
  ogTitle: 'THE GREATEST BLOG ON THE MOTHER FU**ING PLANET.',
  description: 'The only blog that Paul Graham reads. So you should read it too.',
  ogDescription: 'The only blog that Paul Graham reads. So you should read it too.'
})
</script>
