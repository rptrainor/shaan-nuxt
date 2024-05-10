<!-- ***
TODO: TOGGLE ANCHOR TAG ACTIVE CLASSES WHEN ROUTE MATCHES
TODO: ADD ARIA-LABELS TO ANCHOR TAGS
TODO: ADD ARIA-CURRENT TO ANCHOR TAGS
TODO: FOR EXTRA SHORT SCREENS, DON'T RENDER THE CURRENT PAGE'S ANCHOR TAG
*** -->

<template>
  <nav>
    <div class="flex h-16 justify-between w-full">
      <div class="flex flex-shrink-0 items-center">
        <div class="flex sm:space-x-4 h-full space-x-1">
          <NuxtImg src="/images/shaan.jpeg" alt="Shaan Puri" class="h-8 w-8 rounded-full m-auto" height="32" width="32"
            placeholder />
          <a href="/"
            class="inline-flex items-center border-b-2 border-background-accent px-1 pt-1 text-text-primary font-PPNeueMontrealSemiBold text-lg font-semibold uppercase">SHAAN
            PURI</a>
        </div>
      </div>
      <div class="sm:ml-6 flex sm:space-x-8">
        <a href="#"
          class="inline-flex items-center border-b-2 border-background-accent px-1 pt-1 text-text-primary font-sans text-lg extra-short:hidden">About
          me</a>
      </div>
    </div>
  </nav>
</template>