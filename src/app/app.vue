<script setup lang="ts">
import { useUserStore } from '@/entities/user'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(() => {
  userStore.bootstrap()
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
