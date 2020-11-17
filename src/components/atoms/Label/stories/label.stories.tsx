import React from 'react'

import { Label, LabelProps } from '../Label'


export default {
  title: 'Atoms/InputLabel',
  component: Label,
  argTypes: {
  },
}

export const Basic = (args: LabelProps) => (
  <Label {...args}>
    Some label here
  </Label>
)
