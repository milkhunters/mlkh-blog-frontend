import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

export const preset = definePreset(Aura, {
  components: {
    button: {
      root: {
        borderRadius: '1rem',
      },
    },
    inputtext: {
      root: {
        borderRadius: '1rem',
      },
    },
  },
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
  },
})
