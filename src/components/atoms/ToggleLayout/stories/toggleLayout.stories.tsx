import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { ToggleLayout, ToggleLayoutProps } from '../ToggleLayout'

export default {
  title: 'Atoms/ToggleLayout',
  component: ToggleLayout,
  argTypes: {
    path: {
      control: { type: 'text' },
    }
  },
}

export const Basic = (args: ToggleLayoutProps) => (
  <MemoryRouter>
    <ToggleLayout
      {...args}
      path='/test'
    />
  </MemoryRouter>
)
