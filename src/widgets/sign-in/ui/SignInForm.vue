<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/shared/router'
import { useI18n } from 'vue-i18n'
import { InputField, PasswordField } from '@/shared/ui'

const { t } = useI18n()

const username = ref('')
const password = ref('')

async function handleFormSubmit() {}
</script>

<template>
  <div class="space-y-2 mb-3">
    <h1 class="text-center text-2xl md:text-3xl font-semibold">{{ t('auth.signIn.title') }}</h1>
    <h2 class="text-center text-md text-gray-500">
      {{ t('auth.signIn.subtitle') }}
    </h2>
  </div>

  <form @submit.prevent="handleFormSubmit" class="flex flex-col w-full gap-3 max-w-[400px]">
    <InputField
      v-model="username"
      id="username"
      :label="t('auth.common.username')"
      :placeholder="t('auth.common.enterUsername')"
      error-code=""
    />

    <div class="space-y-2">
      <PasswordField
        v-model="password"
        id="username"
        :label="t('auth.common.password')"
        :placeholder="t('auth.common.enterPassword')"
        error-code=""
      />

      <RouterLink
        :to="ROUTES.RESET_PASSWORD"
        class="flex justify-end text-sm text-blue-500 hover:underline"
        >{{ t('auth.signIn.forgotPassword') }}</RouterLink
      >
    </div>

    <Button :label="t('auth.signIn.button')" icon="pi pi-sign-in" class="h-12" />

    <p class="text-center text-sm text-gray-500">
      {{ t('auth.signIn.noAccount') }}
      <RouterLink :to="ROUTES.SIGN_UP" class="text-blue-500 hover:underline">
        {{ t('auth.createAccount.title') }}
      </RouterLink>
    </p>

    <p class="text-center text-xs text-gray-500">
      {{ t('auth.signIn.terms') }}
    </p>
  </form>
</template>
