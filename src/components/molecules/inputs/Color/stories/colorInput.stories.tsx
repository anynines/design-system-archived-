import React from 'react'

import { ColorInput, ColorInputProps } from '../ColorInput'

export default {
  title: 'Molecules/Inputs/ColorInput',
  component: ColorInput,
  argTypes: {
    icon: {
      control: { type: 'disabled' },
    },
    color: {
      control: { type: 'text' },
    },
    pattern: {
      control: { type: 'text' },
    }
  },
}

export const Basic = (args: ColorInputProps) => (
  <ColorInput name='Primary' label="Primary" {...args} />
)

export const Custom = (args: ColorInputProps) => (
  <ColorInput name='Custom' label="Custom" color="#49426F" {...args} />
)
