import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { UserRep } from '../api/user.rep'

export const useUserStore = defineStore('user', () => {
  const repository = new UserRep()

  const currentUser = reactive({})
  const isCurrentUserLoading = ref(false)

  async function loadCurrentUser() {
    await repository.getCurrentUser()
  }
  async function signIn() {}
  async function signUp() {}
  async function signOut() {}
  async function confirmEmail() {}
  async function resetPassword() {}
  async function bootstrap() {}

  return {
    currentUser,
    isCurrentUserLoading,
    loadCurrentUser,
    signIn,
    signUp,
    signOut,
    confirmEmail,
    resetPassword,
    bootstrap,
  }
})
