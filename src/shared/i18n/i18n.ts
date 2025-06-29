import { createI18n } from 'vue-i18n'
import ENGLISH from './locales/en'
import RUSSIAN from './locales/ru'

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'ru',
  messages: {
    en: ENGLISH,
    ru: RUSSIAN,
  },
})
