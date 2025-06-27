<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { InputField, PasswordField } from '@/shared/ui'
import { ref } from 'vue'

const { t } = useI18n()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const opt = ref(null)
</script>

<template>
  <div class="space-y-2 mt-3">
    <h1 class="text-center text-2xl md:text-2xl font-semibold">
      {{ t('auth.resetPassword.title') }}
    </h1>
    <h2 class="text-center text-md text-gray-500">
      {{ t('auth.resetPassword.subtitle') }}
    </h2>
  </div>
  <form class="flex flex-col gap-4 w-full">
    <div class="card flex justify-center">
      <Stepper value="1" class="">
        <StepList>
          <Step value="1">{{ t('auth.resetPassword.step1') }}</Step>
          <Step value="2">{{ t('auth.resetPassword.step2') }}</Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" value="1">
            <div class="flex flex-col h-auto">
              <div
                class="border-2 border-surface-200 dark:border-surface-700 rounded-2xl bg-surface-50 dark:bg-surface-950 flex-col flex justify-center p-10 gap-4 items-start"
              >
                <p class="text-md font-semibold text-gray-600">
                  <i class="pi pi-envelope mr-2"></i>
                  {{ t('auth.resetPassword.step1Title') }}
                </p>

                <InputField
                  id="email-reset-password"
                  v-model="email"
                  :placeholder="t('auth.common.enterEmail')"
                  :label="t('auth.common.email')"
                  error-code=""
                />
              </div>
            </div>

            <div class="flex pt-6 justify-end">
              <Button
                :label="t('auth.resetPassword.step1')"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="activateCallback('2')"
              />
            </div>
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" value="2">
            <div class="flex flex-col">
              <div
                class="border-2 border-surface-200 dark:border-surface-700 rounded-2xl bg-surface-50 dark:bg-surface-950 flex-col flex justify-center p-10 gap-4 items-start"
              >
                <p class="text-md font-semibold text-gray-600">
                  <i class="pi pi-envelope mr-2"></i>
                  {{ t('auth.resetPassword.step2Title', { email: email }) }}
                </p>
                <InputOtp v-model="opt" class="rounded-xl" integerOnly />

                <PasswordField
                  id="password"
                  :placeholder="t('auth.resetPassword.enterNewPassword')"
                  :label="t('auth.resetPassword.newPassword')"
                  v-model="password"
                  error-code=""
                />

                <PasswordField
                  id="confirmPassword"
                  :placeholder="t('auth.resetPassword.repeatNewPassword')"
                  :label="t('auth.resetPassword.repeatNewPassword')"
                  v-model="confirmPassword"
                  error-code=""
                />
              </div>
            </div>
            <div class="flex pt-6 justify-between">
              <Button
                label="Back"
                severity="secondary"
                icon="pi pi-arrow-left"
                @click="activateCallback('1')"
              />
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="activateCallback('3')"
              />
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </div>
  </form>
</template>
