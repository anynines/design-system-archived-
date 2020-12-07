import { create } from '@storybook/theming/create'

export default create({
  base: 'dark',

  colorPrimary: '#e4833e',
  colorSecondary: '#e4833e',

  // App
  appBg: '#062035',
  appBorderRadius: 10,
  appContentBg: '#010f1b',

  // Typography
  fontBase: '"Lato", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: '#062035',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#e4833e',
  barBg: '#010f1b',

  addonBg: '#010f1b',

  // Form colors
  inputBg: '#062035',
  inputTextColor: 'white',
  inputBorderRadius: 5,

  brandTitle: 'anynines Design System',
  brandUrl: 'https://anynines.com',
  brandImage: 'https://raw.githubusercontent.com/r3p0x/happy-assets/master/anynines/logo-light.svg',
})