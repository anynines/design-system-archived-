import { LocalStorage } from '../helpers/localStorage'
import { Theme, Mode } from './types/types'

export const getTheme = <T extends Theme>(theme: T): T => {
  return theme
}

export const getMode = (mode: Mode, storagePrefix: string): Mode => {
  const modeStoredInLocalStorage = LocalStorage.getItem(`${storagePrefix}mode`)

  if (modeStoredInLocalStorage !== null) {
    return modeStoredInLocalStorage as Mode
  }

  return mode
}

export const getToggledTheme = <T extends Theme>(theme: T): T => {
  return {
    ...theme,
    globals: {
      ...theme.globals,
      colors: {
        ...theme.globals.colors,
        white: theme.globals.colors.black,
        light: theme.globals.colors.dark,
        dark: theme.globals.colors.light,
        black: theme.globals.colors.white
      }
    }
  }
}
