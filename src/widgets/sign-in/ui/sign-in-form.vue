<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <form class="flex flex-col gap-3 min-w-1/5">
      <h1 class="text-center">Войдите в свой аккаунт</h1>
      <InputText v-model="username" placeholder="Введите имя пользователя" />
      <InputText v-model="password" placeholder="Введите пароль" />
      <Button class="w-full" label="Войти" />
    </form>
  </div>
</template>

<style scoped></style>
