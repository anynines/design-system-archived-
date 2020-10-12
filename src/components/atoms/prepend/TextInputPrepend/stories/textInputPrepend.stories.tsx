import React from 'react'

import { Icon } from '../../../../atoms/Icon/Icon'
import { TextInputPrepend, TextInputPrependProps } from '../TextInputPrepend'


export default {
  title: 'Atoms/Prepends/TextInputPrepend',
  component: TextInputPrepend,
  argTypes: {
    clickable: {
      control: { type: 'boolean' }
    },
  },
}

export const Basic = (args: TextInputPrependProps) => (
  <TextInputPrepend {...args}>
    <Icon />
  </TextInputPrepend>
)
