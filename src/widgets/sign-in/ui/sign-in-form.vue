<script setup lang="ts">
import { ref } from 'vue'
import { AppLogo } from '@/shared/ui'
import { LogIn } from 'lucide-vue-next'
import { ROUTES } from '@/shared/router'

const username = ref('')
const password = ref('')
const loading = ref(false)
</script>

<template>
  <div class="h-screen w-screen flex relative bg-gray-50">
    <div class="absolute top-6 left-6 z-10">
      <AppLogo class="h-8 w-auto" />
    </div>

    <img
      src="https://plus.unsplash.com/premium_photo-1667112532365-8ebf5c36bcfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhZGllbnRzfGVufDB8fDB8fHww"
      alt="sign-in photo"
      class="hidden md:block w-1/3 object-cover"
    />

    <div class="flex flex-col justify-center items-center w-full md:w-2/3 h-full p-4 md:p-10">
      <form class="flex flex-col gap-4 w-full max-w-[350px]">
        <h1 class="text-center text-2xl md:text-2xl font-semibold">Вход</h1>

        <div class="space-y-3 w-full">
          <InputText v-model="username" placeholder="Имя пользователя" class="w-full" />
          <Password v-model="password" :feedback="false" placeholder="Пароль" toggleMask fluid />
        </div>

        <Button class="w-full flex gap-2 justify-center items-center" :loading="loading">
          <LogIn :size="18" />
          <span>Войти</span>
        </Button>

        <p class="text-center text-sm text-gray-500">
          Нет аккаунта?
          <RouterLink :to="ROUTES.SIGN_UP" class="text-blue-500 hover:underline"
            >Зарегистрироваться</RouterLink
          >
        </p>
        <p class="text-center text-xs text-gray-500">
          Нажимая «Войти», вы принимаете пользовательское соглашение и политику конфиденциальности
        </p>
      </form>
    </div>
  </div>
</template>
