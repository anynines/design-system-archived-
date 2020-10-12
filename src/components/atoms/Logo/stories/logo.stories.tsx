import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'

import { Logo, LogoProps } from '../Logo'

import globals from '../../../../theme/globals.json'

export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    path: {
      control: { type: 'text' },
    },
    vertical: {
      control: { type: 'boolean' },
    },
    onClick: {
      control: { type: 'disabled' },
    },
  },
}

export const HorizontalDark = (args: LogoProps) => (
  <MemoryRouter>
    <Logo
      {...args}
      path='/test'
      vertical={false}
      src={globals.logos.horizontal.dark}
      onClick={action('button-click')}
    />
  </MemoryRouter>
)

export const HorizontalLight = () => (
  <MemoryRouter>
    <Logo
      path='/test'
      vertical={false}
      src={globals.logos.horizontal.light}
      onClick={action('button-click')}
    />
  </MemoryRouter>
)

export const VerticalDark = () => (
  <MemoryRouter>
    <Logo
      path='/test'
      vertical={true}
      src={globals.logos.vertical.dark}
      onClick={action('button-click')}
    />
  </MemoryRouter>
)

export const VerticalLight = () => (
  <MemoryRouter>
    <Logo
      path='/test'
      vertical={true}
      src={globals.logos.vertical.light}
      onClick={action('button-click')}
    />
  </MemoryRouter>
)
