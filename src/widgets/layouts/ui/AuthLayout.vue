<script setup lang="ts">
import { MainLogo } from '@/shared/ui'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <div class="min-h-screen md:h-screen w-screen flex flex-col md:flex-row relative">
    <div
      class="sticky py-3 px-4 flex justify-between items-center md:bg-transparent border-b-2 border-b-gray-200 md:absolute left-6 top-0 md:top-6 z-10"
    >
      <MainLogo class="h-8 w-auto" />

      <div class="card flex justify-center md:hidden">
        <Drawer v-model:visible="visible" position="right" header="Drawer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Drawer>
        <Button icon="pi pi-align-justify" @click="visible = true" />
      </div>
    </div>

    <img
      src="https://plus.unsplash.com/premium_photo-1667112532365-8ebf5c36bcfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhZGllbnRzfGVufDB8fDB8fHww"
      alt="auth page photo"
      class="hidden md:block w-1/3 object-cover rounded-r-3xl"
    />

    <div class="flex flex-col justify-center items-center h-full mt-4 md:mt-0 md:w-2/3 md:p-10">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
