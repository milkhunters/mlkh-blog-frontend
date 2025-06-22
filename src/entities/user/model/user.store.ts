import { defineStore } from 'pinia'
import { ref } from 'vue'
import { UserRep } from '../api/user.rep'

export const useUserStore = defineStore('user', () => {
  const repository = new UserRep()

  const user = ref(null)

  async function loadCurrentUser() {
    await repository.getCurrentUser()
  }
  function signIn() {}
  function signUp() {}
  function signOut() {}
  function confirmEmail() {}
  function resetPassword() {}

  return { user, loadCurrentUser, signIn, signUp, signOut, confirmEmail, resetPassword }
})
