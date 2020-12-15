import React from 'react'

import { Label, LabelProps } from '../Label'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Label',
  component: Label,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: {
          primary: 'primary',
          success: 'success',
          notice: 'notice',
          warning: 'warning',
          error: 'error',
          white: 'white',
          light: 'light',
          dark: 'dark',
          black: 'black',
        }
      },
    },
  }
}

export const Basic = (args: LabelProps) => (
  <Wrapper bgColor='black-darker'>
    <Label {...args}>
      Testlabel
    </Label>
  </Wrapper>
)

export const Types = () => (
  <Wrapper bgColor='black-darker'>
    <Label type='primary'>
      Primary
    </Label>
    <Label type='success'>
      Success
    </Label>
    <Label type='notice'>
      Notice
    </Label>
    <Label type='warning'>
      Warning
    </Label>
    <Label type='error'>
      Error
    </Label>
    <Label type='white'>
      White
    </Label>
    <Label type='light'>
      Light
    </Label>
    <Label type='dark'>
      Dark
    </Label>
    <Label type='black'>
      Black
    </Label>
  </Wrapper>
)
