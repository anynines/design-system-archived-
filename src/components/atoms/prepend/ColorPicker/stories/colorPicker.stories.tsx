import React from 'react'

import Wrapper from '../../../../_helpers/Wrapper'
import { ColorPicker } from '../ColorPicker'


export default {
  title: 'Atoms/Prepends/ColorPicker',
  component: ColorPicker,
  argTypes: {
  },
}

export const Basic = () => (
  <Wrapper>
    <ColorPicker />
  </Wrapper>
)
