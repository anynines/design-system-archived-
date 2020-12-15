import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'

import Wrapper from '../../../_helpers/Wrapper'
import { Logo, LogoProps } from '../Logo'

import globals from '../../../../theme/globals.json'

export default {
  title: '💧 Atoms/Logo',
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

export const Vertical = (args: LogoProps) => (
  <MemoryRouter>
    <Wrapper>
      <Logo
        path='/test'
        vertical
        src={globals.logos.vertical.light}
        onClick={action('button-click')}
      />
    </Wrapper>
    <Wrapper bgColor='light'>
      <Logo
        path='/test'
        vertical
        src={globals.logos.vertical.dark}
        onClick={action('button-click')}
      />
    </Wrapper>
  </MemoryRouter>
)

export const Horizontal = () => (
  <MemoryRouter>
    <Wrapper>
      <Logo
        path='/test'
        vertical={false}
        src={globals.logos.horizontal.light}
        onClick={action('button-click')}
      />
    </Wrapper>
    <Wrapper bgColor='light'>
      <Logo
        path='/test'
        vertical={false}
        src={globals.logos.horizontal.dark}
        onClick={action('button-click')}
      />
    </Wrapper>
  </MemoryRouter>
)
