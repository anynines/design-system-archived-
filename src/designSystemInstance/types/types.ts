// T Y P E S
export type Mode = 'dark' | 'light'

// I N T E R F A C E S
export interface Globals {
  font: {
    name: string
    light: string
    regular: string
    bold: string
  }
  colors: {
    primary: string
    notice: string
    success: string
    warning: string
    error: string
    whiteFix: string
    white: string
    light: string
    dark: string
    black: string
  }
  radius: string
  contentMaxWidth: string
  border: string
  shadow: string
  transition: string
  logos: {
    vertical: {
      dark: string
      light: string
    }
    horizontal: {
      dark: string
      light: string
    }
  }
  spacing: {
    baseUnit: string
    fixedUnit: string
  }
  typography: {
    baseUnit: string
    headingLineHeight: string
    bodyLineHeight: string
  }
}
export interface Theme {
  name: string
  globals: Globals
}

export type PartialTheme = RecursivePartial<Theme>

type RecursivePartial<T> = {
  [P in keyof T]?:
  T[P] extends (infer U)[] ? RecursivePartial<U>[] :
  T[P] extends object ? RecursivePartial<T[P]> :
  T[P]
}

export interface ThemeContextParam<T extends Theme> {
  theme: T
  setTheme: (newTheme: T) => void
  resetTheme: () => void
  mode: Mode
  setMode: (newMode: Mode) => void
}

export interface DesignSystemInstanceProps<T> {
  theme?: T
  persistantModeStorage?: boolean
  mode?: Mode
  useFavicon?: boolean
  autoDetectPreferenceMode?: boolean
  storagePrefix?: string
}

export interface DesignSystemContextElements<T> {
  ThemeContext: React.Context<ThemeContextParam<T & Theme>>
  DesignSystemInstance: React.FC<DesignSystemInstanceProps<T>>
}
