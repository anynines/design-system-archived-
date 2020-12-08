import React from 'react'

import { ColorInput, ColorInputProps } from '../ColorInput'
import Wrapper from '../../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Inputs/ColorInput',
  component: ColorInput,
  argTypes: {
    icon: {
      control: { type: 'disabled' },
    },
    label: {
      control: { type: 'disabled' },
      defaultValue: 'Pick a color'
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'color-input'
    },
    color: {
      control: { type: 'text' },
      defaultValue: '#062035'
    },
    pattern: {
      control: { type: 'text' },
    }
  },
}

export const Basic = (args: ColorInputProps) => (
  <Wrapper>
    <ColorInput 
      {...args}
    />
  </Wrapper>
)
