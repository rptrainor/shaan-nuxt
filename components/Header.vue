<!-- ***
TODO: TOGGLE ANCHOR TAG ACTIVE CLASSES WHEN ROUTE MATCHES
TODO: ADD ARIA-CURRENT TO ANCHOR TAGS
TODO: FOR EXTRA SHORT SCREENS, DON'T RENDER THE CURRENT PAGE'S ANCHOR TAG
*** -->

<template>
  <nav>
    <div class="flex h-16 w-full justify-between">
      <div class="flex flex-shrink-0 items-center">
        <div class="flex h-full space-x-1 sm:space-x-4">
          <NuxtImg src="/images/shaan.jpeg" alt="Shaan Puri" class="m-auto h-8 w-8 rounded-full" height="32" width="32"
            placeholder />
          <a href="/" aria-label="Home"
            class="hover:animate-pop inline-flex items-center border-b-2 border-background-accent px-1 pt-1 font-PPNeueMontrealSemiBold text-lg font-semibold uppercase text-text-primary">
            SHAAN
            PURI</a>
        </div>
      </div>
      <div class="sm:ml-6 flex sm:space-x-8">
        <a href="https://twitter.com/ShaanVP" aria-label="Twitter"
          class="hover:animate-pop inline-flex items-center border-b-2 border-background-accent px-1 pt-1 font-sans text-lg text-text-primary extra-short:hidden">About
          me</a>
      </div>
    </div>
  </nav>
</template>