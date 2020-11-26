import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import ThemeProvider from '../src/theme/theme-provider'
import { getToggledTheme } from '../src/designSystemInstance/designSystemInstanceHelpers'

// V A R I A B L E S
import globals from '../src/theme/globals.json'

export const darkTheme = {
  name: 'dark',
  background: globals.colors.black,
  globals
}

export const lightTheme = {
  name: 'light',
  background: globals.colors.white,
  globals
}

const themes = [
  darkTheme,
  getToggledTheme(lightTheme)
]

const customViewports = {
  breakpointDown: {
    name: 'Breakpoint Down',
    styles: {
      width: '59em',
      height: '34em',
    },
  },
  breakpointUp: {
    name: 'Breakpoint Up',
    styles: {
      width: '80em',
      height: '42em',
    },
  }
}

export const decorators = [
  withThemesProvider(themes, ThemeProvider)
]
export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'de', right: '🇩🇪', title: 'Deutsch' },
        { value: 'es', right: '🇪🇸', title: 'Español' },
      ],
    },
  },
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  viewport: {
    viewports: { ...customViewports, ...INITIAL_VIEWPORTS }
  },
  options: {
    storySort: {
      order: ['👋 Get started', ['Welcome'], '💧 Atoms', '🌱 Molecules', '🌳 Organisms'],
    },
  }
}