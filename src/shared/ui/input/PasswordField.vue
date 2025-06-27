<script setup lang="ts">
interface PasswordFieldProps {
  id: string
  label: string
  placeholder: string
  errorCode: string
}

defineProps<PasswordFieldProps>()
const model = defineModel<string>()
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label :for="id">{{ label }}</label>
    <Password
      v-model="model"
      class="h-12"
      :feedback="false"
      :invalid="!!errorCode"
      :placeholder
      toggleMask
      fluid
    />
    <Message v-show="errorCode" size="small" severity="error" variant="simple">{{
      errorCode
    }}</Message>
  </div>
</template>

<style scoped></style>
