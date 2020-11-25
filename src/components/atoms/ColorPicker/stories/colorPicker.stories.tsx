import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { ColorPicker } from '../ColorPicker'


export default {
  title: '💧 Atoms/ Color Picker',
  component: ColorPicker,
  argTypes: {
  },
}

export const Basic = () => (
  <Wrapper height='500'>
    <ColorPicker style={{position: 'relative', top: 0}} />
  </Wrapper>
)
