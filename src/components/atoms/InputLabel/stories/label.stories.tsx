import React from 'react'

import { InputLabel, InputLabelProps } from '../InputLabel'


export default {
  title: 'Atoms/InputLabel',
  component: InputLabel,
  argTypes: {
  },
}

export const Basic = (args: InputLabelProps) => (
  <InputLabel {...args}>
    Some label here
  </InputLabel>
)
