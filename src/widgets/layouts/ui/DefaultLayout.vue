<script setup lang="ts">
import { MainLogo } from '@/shared/ui'
</script>

<template>
  <div class="container mx-auto max-w-6xl border flex flex-col h-screen">
    <header class="border h-14 flex justify-between items-center">
      <MainLogo />

      <Avatar label="P" class="mr-2" size="large" shape="circle" />
    </header>
    <main class="border flex-1">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
