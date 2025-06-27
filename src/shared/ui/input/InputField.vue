<script setup lang="ts">
interface InputFieldProps {
  id: string
  label: string
  placeholder: string
  errorCode: string
}

defineProps<InputFieldProps>()
const model = defineModel<string>()
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label :for="id">{{ label }}</label>
    <InputText class="h-12" :invalid="!!errorCode" v-model="model" :id :placeholder />
    <Message v-show="errorCode" size="small" severity="error" variant="simple">{{
      errorCode
    }}</Message>
  </div>
</template>

<style scoped></style>
