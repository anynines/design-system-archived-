import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { Checkbox } from '../../../atoms/Checkbox/Checkbox'
import { CheckboxGroup, CheckboxGroupProps } from '../CheckboxGroup'

export default {
  title: '🌱 Molecules/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal']
      }
    }
  }
}

export const Basic = (args: CheckboxGroupProps) => (
  <Wrapper bgColor='black-darker'>
    <CheckboxGroup
      {...args}
    >
      <Checkbox label='Vegetables' name='vegetables' />
      <Checkbox label='Fruits' name='fruits' />
      <Checkbox label='chocolate' name='chocolate' />
      <Checkbox label='Coffee' name='coffee' />
    </CheckboxGroup>
  </Wrapper>
)

export const Vertical = () => (
  <Wrapper bgColor='black-darker'>
    <CheckboxGroup orientation='vertical'>
      <Checkbox label='Vegetables' name='vegetables' />
      <Checkbox label='Fruits' name='fruits' />
      <Checkbox label='chocolate' name='chocolate' />
      <Checkbox label='Coffee' name='coffee' />
    </CheckboxGroup>
  </Wrapper>
)

export const Horizontal = () => (
  <Wrapper bgColor='black-darker'>
    <CheckboxGroup orientation='horizontal'>
      <Checkbox label='Vegetables' name='vegetables' />
      <Checkbox label='Fruits' name='fruits' />
      <Checkbox label='chocolate' name='chocolate' />
      <Checkbox label='Coffee' name='coffee' />
    </CheckboxGroup>
  </Wrapper>
)