<template>
  <form @submit.prevent="submitForm"
    class="w-full max-w-md font-sans text-sm font-medium text-text-primary placeholder:text-xs rounded border-2 border-black flex flex-col sm:flex-row">
    <label for="email" class="sr-only">Email</label>
    <input v-model="email" :disabled="isLoading" class="bg-white py-2 px-4 text-lg rounded h-11" placeholder="Enter your email"
      type="email" name="email" required>
    <button type="submit" :disabled="isLoading"
      class="flex justify-center items-center w-full h-11 bg-text-primary text-white font-medium text-xl">
      <span v-if="isLoading">Loading...</span>
      <span v-else>Subscribe</span>
    </button>
  </form>
  <p v-if="message" :class="messageClass" class="font-semibold italic">{{ message }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Define the expected types for the API responses
interface ApiResponse {
  ok: boolean;
  statusText?: string;
}

const email = ref('')
const message = ref('')
const isLoading = ref(false)
const isError = ref(false)

const messageClass = computed(() => {
  return isError.value ? 'text-red-700' : 'text-green-700'
})

const submitForm = async () => {
  isLoading.value = true
  message.value = ''
  isError.value = false

  try {
    const response = await fetch('/api/subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
      })
    })

    const data: ApiResponse = await response.json()
    
    if (!response.ok) {
      throw new Error(data.statusText || 'There was an error. Please try again.')
    }

    if (data.ok) {
      message.value = 'Subscription successful! Thank you for subscribing.'
      email.value = ''
    } else {
      throw new Error(data.statusText || 'There was an error. Please try again.')
    }
  } catch (error: any) {
    message.value = error.message || 'There was an error. Please try again.'
    isError.value = true
    console.error('Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>
