<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { InputField, PasswordField } from '@/shared/ui'
import { ref } from 'vue'
import { computed } from 'vue'

const { t } = useI18n()

const email = ref('')
const code = ref(null)
const password = ref('')
const confirmPassword = ref('')

const canMoveToStep2 = computed(() => {
  return email.value.length > 0
})
</script>

<template>
  <div class="space-y-2 mt-3 px-4">
    <h1 class="text-center text-2xl md:text-2xl font-semibold">
      {{ t('auth.resetPassword.title') }}
    </h1>
    <h2 class="text-center text-md text-gray-500">
      {{ t('auth.resetPassword.subtitle') }}
    </h2>
  </div>

  <div class="card flex justify-center px-4">
    <Stepper value="1" class="">
      <StepList>
        <Step value="1">{{ t('auth.resetPassword.step1') }}</Step>
        <Step value="2">{{ t('auth.resetPassword.step2') }}</Step>
      </StepList>
      <StepPanels>
        <StepPanel v-slot="{ activateCallback }" value="1">
          <div class="flex flex-col h-auto">
            <div
              class="border-2 border-surface-200 dark:border-surface-700 rounded-2xl dark:bg-surface-950 flex-col flex justify-center p-5 gap-4 items-start"
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
              :disabled="!canMoveToStep2"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <div class="flex flex-col">
            <div
              class="border-2 border-surface-200 dark:border-surface-700 rounded-2xl dark:bg-surface-950 flex-col flex justify-center p-5 gap-4 items-start"
            >
              <p class="text-md font-semibold text-gray-600">
                <i class="pi pi-envelope mr-2"></i>
                {{ t('auth.resetPassword.step2Title') }}
                <Chip :label="email" />
              </p>
              <InputOtp v-model="code" class="rounded-xl" integerOnly />

              <Divider />

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
              :label="t('auth.resetPassword.changeEmail')"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback('1')"
            />
            <Button :label="t('auth.resetPassword.button')" @click="activateCallback('3')" />
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>
