import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { ColorPicker } from '../ColorPicker'


export default {
  title: '💧 Atoms/ Color Picker',
  component: ColorPicker,
  argTypes: {
  },
}

export const Basic = () => {
  const color = '#fff'
  const [selectedColor, setSelectedColor] = React.useState(color)

  return (
    <Wrapper height='500'>
      <ColorPicker style={{ position: 'relative', top: 0 }}
        color={selectedColor}
        onChangeComplete={(newColor): void => {
          setSelectedColor(newColor.hex.toUpperCase())
        }}
      />
    </Wrapper>
  )
}
