<script setup lang="ts">
import { ref } from 'vue'
import { ROUTES } from '@/shared/router'
import { useI18n } from 'vue-i18n'
import { InputField, PasswordField } from '@/shared/ui'

const { t } = useI18n()

const username = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const passwordRepeat = ref('')
</script>

<template>
  <div class="space-y-1 mb-4">
    <h1 class="text-center text-2xl font-semibold">
      {{ t('auth.createAccount.title') }}
    </h1>
    <h2 class="text-center text-md text-gray-500">
      {{ t('auth.createAccount.subtitle') }}
    </h2>
  </div>
  <form class="flex flex-col gap-4 px-4 md:p-0">
    <InputField
      v-model="username"
      id="username"
      :label="t('auth.common.username')"
      :placeholder="t('auth.common.enterUsername')"
      error-code=""
    />
    <div class="flex flex-col md:flex-row gap-4">
      <InputField
        v-model="firstName"
        id="firstName"
        :label="t('auth.common.firstName')"
        :placeholder="t('auth.common.enterFirstName')"
        error-code=""
      />
      <InputField
        v-model="lastName"
        id="lastName"
        :label="t('auth.common.lastName')"
        :placeholder="t('auth.common.enterLastName')"
        error-code=""
      />
    </div>
    <InputField
      v-model="email"
      id="email"
      :label="t('auth.common.email')"
      :placeholder="t('auth.common.enterEmail')"
      error-code=""
    />
    <PasswordField
      v-model="password"
      id="password"
      :label="t('auth.common.password')"
      :placeholder="t('auth.common.enterPassword')"
      error-code=""
    />
    <PasswordField
      v-model="passwordRepeat"
      id="passwordRepeat"
      :label="t('auth.common.repeatPassword')"
      :placeholder="t('auth.common.enterRepeatPassword')"
      error-code=""
    />

    <Button :label="t('auth.createAccount.button')" icon="pi pi-user-plus" class="h-11" />

    <p class="text-center text-sm text-gray-500">
      {{ t('auth.createAccount.haveAccount') }}
      <RouterLink :to="ROUTES.SIGN_IN" class="text-blue-500 hover:underline">
        {{ t('auth.signIn.title') }}
      </RouterLink>
    </p>

    <p class="text-center text-xs text-gray-500">
      {{ t('auth.createAccount.terms') }}
    </p>
  </form>
</template>
