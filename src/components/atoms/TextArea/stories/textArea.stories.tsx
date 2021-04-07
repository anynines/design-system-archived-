import React from 'react'

import { TextArea, TextAreaProps } from '../TextArea'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/TextArea',
  component: TextArea,
  argTypes: {
    name: {
      control: { type: 'text' },
      defaultValue: 'Unique name used as ref'
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'Your placeholder goes here',
    }
  }
}

export const Basic = (args: TextAreaProps) => (
  <Wrapper bgColor='black-darker'>
    <TextArea {...args} placeholder='Sample placeholder' name='basic' />
  </Wrapper>
)
