<script setup lang="ts">
import { AppLogo } from '@/shared/ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
        <h1 class="text-center text-2xl md:text-2xl font-semibold">
          Work in progress - {{ t('auth.resetPassword') }}
        </h1>
      </form>
    </div>
  </div>
</template>
