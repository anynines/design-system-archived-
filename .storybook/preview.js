import React from 'react'
import { ThemeProvider } from 'styled-components'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { GlobalStyle } from '../src/designSystemInstance/theme/GlobalStyle'
import { getToggledTheme } from '../src/designSystemInstance/designSystemInstanceHelpers'

// V A R I A B L E S
import globals from '../src/theme/globals.json'

// T H E M E S
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

const getTheme = (theme) => {
  if (theme == 'dark') {
    return darkTheme
  }
  if (theme == 'light') {
    return getToggledTheme(lightTheme)
  }
}

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]

// G L O B A L T Y P E S   A N D   T O O L B A R 
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
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'dark', title: 'dark', icon: 'circle' },
        { value: 'light', title: 'light' },
      ],
    },
  },
}

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

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  backgrounds: {
    values: [
      {
        name: 'white',
        value: globals.colors.white,
      },
      {
        name: 'light',
        value: globals.colors.light,
      },
      {
        name: 'dark',
        value: globals.colors.dark,
      },
      {
        name: 'black',
        value: globals.colors.black,
      },
      {
        name: 'primary',
        value: globals.colors.primary,
      },
    ],
  },
  viewport: {
    viewports: { ...customViewports, ...INITIAL_VIEWPORTS }
  },
  options: {
    storySort: {
      order: [
        '👋 Get started', ['Welcome', 'Colors', 'Type Scale', 'Layout', 'Changelog'],
        '💧 Atoms', 
        '🌱 Molecules', 
        '🌳 Organisms'
      ],
    },
  }
}