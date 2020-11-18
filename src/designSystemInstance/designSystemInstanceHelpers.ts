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
    colors: {
      ...theme.colors,
      white: theme.colors.darker,
      white50: theme.colors.darker50,
      white10: theme.colors.darker10,
      light: theme.colors.dark,
      light50: theme.colors.dark50,
      dark: theme.colors.light,
      dark50: theme.colors.light50,
      darker: theme.colors.white,
      darker50: theme.colors.white50,
      darker10: theme.colors.white10
    }
  }
}
