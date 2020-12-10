import React from 'react'
import { action } from '@storybook/addon-actions'

import { ToggleMode, ToggleModeProps } from '../ToggleMode'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/ToggleMode',
  component: ToggleMode,
  argTypes: {
    size: {
      control: { type: 'select', options: { Default: 'lg', Sm: 'sm' } }
    },
    mode: {
      control: { type: 'select', options: { Dark: 'dark', Light: 'light' } }
    },
    setMode: {
      control: { type: 'disabled' },
    },
  }
}

export const Basic = (args: ToggleModeProps) => (
  <Wrapper>
    <ToggleMode
      {...args}
      setMode={action('mode-set')}
    />
  </Wrapper>
)

export const Light = () => (
  <Wrapper>
    <ToggleMode
      mode='light'
      setMode={action('mode-set')}
    />
  </Wrapper>
)

export const Dark = () => (
  <Wrapper>
    <ToggleMode
      mode='dark'
      setMode={action('mode-set')}
    />
  </Wrapper>
)

export const Sizes = () => (
  <Wrapper justify='space-around'>
    <ToggleMode
      mode='dark'
      size='sm'
      setMode={action('mode-set')}
    />
    <ToggleMode
      mode='dark'
      size='lg'
      setMode={action('mode-set')}
    />
  </Wrapper>
)
