import React from 'react'
import { action } from '@storybook/addon-actions'

import { ToggleMode, ToggleModeProps } from '../ToggleMode'

export default {
  title: 'Atoms/ToggleMode',
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
  <ToggleMode
    {...args}
    setMode={action('mode-set')}
  />
)

export const Light = (args: ToggleModeProps) => (
  <ToggleMode
    {...args}
    mode='light'
    setMode={action('mode-set')}
  />
)

export const Dark = (args: ToggleModeProps) => (
  <ToggleMode
    {...args}
    mode='dark'
    setMode={action('mode-set')}
  />
)

export const Small = (args: ToggleModeProps) => (
  <ToggleMode
    {...args}
    size='sm'
    setMode={action('mode-set')}
  />
)
