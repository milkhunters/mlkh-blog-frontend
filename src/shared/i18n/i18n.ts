import { createI18n } from 'vue-i18n'
import ENGLISH from './locales/en'
import RUSSIAN from './locales/ru'

const systemLanguage = 0 && window.navigator.language.slice(0, 2)

export const i18n = createI18n({
  legacy: false,
  locale: systemLanguage || 'en',
  fallbackLocale: 'ru',
  messages: {
    en: ENGLISH,
    ru: RUSSIAN,
  },
})
