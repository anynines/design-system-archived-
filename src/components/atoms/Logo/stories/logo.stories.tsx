import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'

import Wrapper from '../../../_helpers/Wrapper'
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
    <Wrapper bgColor='light'>
      <Logo
        {...args}
        path='/test'
        vertical={false}
        src={globals.logos.horizontal.dark}
        onClick={action('button-click')}
      />
    </Wrapper>
  </MemoryRouter>
)

export const HorizontalLight = () => (
  <MemoryRouter>
    <Wrapper>
      <Logo
        path='/test'
        vertical={false}
        src={globals.logos.horizontal.light}
        onClick={action('button-click')}
      />
    </Wrapper>
  </MemoryRouter>
)

export const VerticalDark = () => (
  <MemoryRouter>
    <Wrapper bgColor='light'>
      <Logo
        path='/test'
        vertical={true}
        src={globals.logos.vertical.dark}
        onClick={action('button-click')}
      />
    </Wrapper>
  </MemoryRouter>
)

export const VerticalLight = () => (
  <MemoryRouter>
    <Wrapper>
      <Logo
        path='/test'
        vertical={true}
        src={globals.logos.vertical.light}
        onClick={action('button-click')}
      />
    </Wrapper>
  </MemoryRouter>
)
