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
      <form @submit.prevent="submitForm"
        class="w-full max-w-md font-sans text-sm font-medium text-text-primary placeholder:text-xs rounded border-2 border-black flex flex-col sm:flex-row">
        <label for="email" class="sr-only">Email</label>
        <input v-model="email" class="bg-white py-2 px-4 text-lg rounded h-11" placeholder="Enter your email"
          type="email" name="email" required>
        <button type="submit"
          class="flex justify-center items-center w-full h-11 bg-text-primary text-white font-medium text-xl">Subscribe</button>
      </form>
      <p v-if="message" class="mt-4">{{ message }}</p>
    </section>
    <Articles />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const message = ref('')

const submitForm = async () => {
  try {
    await useFetch('/api/subscriptions', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
      })
    })
    message.value = 'Subscription successful! Thank you for subscribing.'
  } catch (error) {
    message.value = 'There was an error. Please try again.'
    console.error('Error:', error)
  }
}
useSeoMeta({
  title: 'THE GREATEST BLOG ON THE MOTHER FU**ING PLANET.',
  ogTitle: 'THE GREATEST BLOG ON THE MOTHER FU**ING PLANET.',
  description: 'The only blog that Paul Graham reads. So you should read it too.',
  ogDescription: 'The only blog that Paul Graham reads. So you should read it too.'
})
</script>
