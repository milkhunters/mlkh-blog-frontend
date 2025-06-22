import { createApp } from 'vue'
import App from './app.vue'
import { router } from './router/router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import './ui/global.css'

const app = createApp(App)

app
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        cssLayer: {
          name: 'primevue',
          order: 'theme, base, primevue',
        },
      },
    },
  })
  .mount('#app')
