import { LocalStorage } from '../helpers/localStorage'
import { Theme, Mode } from './types/types'

export const getTheme = <T extends Theme>(
  theme: T,
  storagePrefix: string,
  useLocalStorage: boolean
): T => {
  const themeStoredInLocalStorage = LocalStorage.getItem(`${storagePrefix}theme`)

  if (useLocalStorage && themeStoredInLocalStorage !== null) {
    return JSON.parse(themeStoredInLocalStorage)
  }

  return theme
}

export const getMode = (
  mode: Mode,
  storagePrefix: string,
  useLocalStorage: boolean
): Mode => {
  const modeStoredInLocalStorage = LocalStorage.getItem(`${storagePrefix}mode`)

  if (useLocalStorage && modeStoredInLocalStorage !== null) {
    return modeStoredInLocalStorage as Mode
  }

  return mode
}

export const onThemeChange = <T extends Theme>(
  theme: T,
  storagePrefix: string,
  useLocalStorage: boolean
): void => {
  if (useLocalStorage) {
    LocalStorage.setItem(`${storagePrefix}theme`, theme)
  }
}

export const getToggledTheme = <T extends Theme>(theme: T): T => {
  return {
    ...theme,
    white: theme.globals.colors.black,
    light: theme.globals.colors.dark,
    dark: theme.globals.colors.light,
    black: theme.globals.colors.white
  }
}
