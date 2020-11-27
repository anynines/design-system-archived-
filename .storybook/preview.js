import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { GlobalStyle } from '../src/designSystemInstance/theme/GlobalStyle'
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
        { value: darkTheme, title: 'dark', key: 'darkTheme' },
        { value: getToggledTheme(lightTheme), title: 'light', key: 'lightTheme' },
      ],
    },
  },
}

const withThemeProvider = (Story, context) => {
  const theme = context.globals.theme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]

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
  viewport: {
    viewports: { ...customViewports, ...INITIAL_VIEWPORTS }
  },
  options: {
    storySort: {
      order: ['👋 Get started', ['Welcome'], '💧 Atoms', '🌱 Molecules', '🌳 Organisms'],
    },
  }
}