import { createApp } from 'vue'
import App from './app.vue'
import { router } from './router'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'
import { preset } from './ui/preset'
import { options } from './ui/options'
import { i18n } from '@/shared/i18n'
import './ui/global.css'
import 'primeicons/primeicons.css'

const pinia = createPinia()
const app = createApp(App)

app
  .use(router)
  .use(pinia)
  .use(i18n)
  .use(PrimeVue, {
    theme: {
      preset,
      options,
    },
  })
  .mount('#app')
