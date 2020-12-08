import React from 'react'

import { TextInput, TextInputProps } from '../TextInput'
import Wrapper from '../../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Inputs/TextInput',
  component: TextInput,
  argTypes: {
    name: {
      control: { type: 'text' },
      defaultValue: 'Unique name used as ref'
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Input label',
    },
    value: {
      control: { type: 'text' },
      defaultValue: 'Fancy text input with icon',
    }
  },
}

export const Basic = (args: TextInputProps) => (
  <Wrapper>
    <TextInput
      {...args}
    />
  </Wrapper>
)
