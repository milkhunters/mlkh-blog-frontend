<script setup lang="ts">
import { ref } from 'vue'
import { AppLogo } from '@/shared/ui'
import { UserPlus } from 'lucide-vue-next'
import { ROUTES } from '@/shared/router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const username = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const passwordRepeat = ref('')
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
        <div class="space-y-1">
          <h1 class="text-center text-2xl md:text-2xl font-semibold">{{ t('auth.signUp') }}</h1>
          <h2 class="text-center text-md text-gray-500">
            {{ t('auth.underSignUp') }}
          </h2>
        </div>
        <div class="space-y-3 w-full">
          <InputText v-model="username" :placeholder="t('auth.username')" class="w-full" />
          <InputText v-model="firstName" :placeholder="t('auth.firstName')" class="w-full" />
          <InputText v-model="lastName" :placeholder="t('auth.lastName')" class="w-full" />
          <InputText v-model="email" type="email" :placeholder="t('auth.email')" class="w-full" />
          <Password
            v-model="password"
            :feedback="false"
            :placeholder="t('auth.password')"
            toggleMask
            fluid
          />
          <Password
            v-model="passwordRepeat"
            :feedback="false"
            :placeholder="t('auth.repeatPassword')"
            toggleMask
            fluid
          />
        </div>

        <Button class="w-full flex gap-2 justify-center items-center">
          <UserPlus :size="18" />
          <span>{{ t('auth.createAccount') }}</span>
        </Button>

        <p class="text-center text-sm text-gray-500">
          {{ t('auth.haveAccount') }}
          <RouterLink :to="ROUTES.SIGN_IN" class="text-blue-500 hover:underline">
            {{ t('auth.signIn') }}
          </RouterLink>
        </p>
        <p class="text-center text-xs text-gray-500">
          {{ t('auth.termsSignUp') }}
        </p>
      </form>
    </div>
  </div>
</template>
