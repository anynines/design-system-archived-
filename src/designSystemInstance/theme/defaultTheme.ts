// T Y P E S
import { Theme } from '../types/types'

// V A R I A B L E S
import globals from '../../theme/globals.json'
import sharedColors from '../../theme/sharedColors.json'
import darkColors from '../../theme/darkColors.json'

export const defaultTheme = {
  name: 'default',
  globals,
  colors: { ...sharedColors, ...darkColors }
} as Theme
