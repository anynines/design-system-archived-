import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { Checkbox, CheckboxProps } from '../Checkbox'

export default {
  title: '💧 Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Simple Checkbox '
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'simpleCheckbox'
    }
  }
}

export const Basic = (args: CheckboxProps) => {
  return (
    <Wrapper>
      <Checkbox
        {...args}
      />
    </Wrapper>
  )
}
