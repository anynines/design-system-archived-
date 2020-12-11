import React from 'react'

import { Label, LabelProps } from '../Label'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Label',
  component: Label,
  argTypes: {
  }
}

export const Basic = (args: LabelProps) => (
  <Wrapper bgColor='black-darker'>
    <Label {...args} />
  </Wrapper>
)
