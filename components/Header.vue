<template>
  <nav>
    <div class="flex h-16 w-full justify-between">
      <div class="flex flex-shrink-0 items-center">
        <div class="flex h-full space-x-1 sm:space-x-4">
          <NuxtImg src="/images/shaan.jpeg" alt="Shaan Puri" class="m-auto h-8 w-8 rounded-full" height="32" width="32"
            placeholder />
          <NuxtLink to="/" aria-label="Home" :class="['hover:animate-pop inline-flex items-center px-1 pt-1 font-PPNeueMontrealSemiBold text-lg font-semibold uppercase text-text-primary',
            { 'border-b-2 border-background-accent': isHome }]" :aria-current="isHome ? 'page' : null">
            SHAAN PURI
          </NuxtLink>
        </div>
      </div>
      <div class="sm:ml-6 flex sm:space-x-8">
        <NuxtLink to="https://twitter.com/ShaanVP" aria-label="Twitter"
          class="hover:animate-pop inline-flex items-center px-1 pt-1 font-sans text-lg text-text-primary extra-short:hidden">
          About me
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isHome = computed(() => route.path === '/');
</script>
