import { createApp } from 'vue'
import App from './app.vue'
import { router } from './router/routes'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'
import { preset } from './ui/preset'
import { options } from './ui/options'
import './ui/global.css'

const pinia = createPinia()
const app = createApp(App)

app
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    theme: {
      preset,
      options,
    },
  })
  .mount('#app')
