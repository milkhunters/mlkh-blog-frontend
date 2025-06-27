<script setup lang="ts">
import { AppLogo } from '@/shared/ui'
</script>

<template>
  <div class="h-screen w-screen flex relative">
    <div class="absolute left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 top-6 z-10">
      <AppLogo class="h-8 w-auto" />
    </div>

    <img
      src="https://plus.unsplash.com/premium_photo-1667112532365-8ebf5c36bcfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhZGllbnRzfGVufDB8fDB8fHww"
      alt="sign-in photo"
      class="hidden md:block w-1/3 object-cover rounded-r-3xl"
    />

    <div class="flex flex-col justify-center items-center w-full md:w-2/3 h-full md:p-10">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
