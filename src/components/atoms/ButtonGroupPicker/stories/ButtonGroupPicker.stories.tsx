import React from 'react'

import { Button } from '../../../atoms/Button/Button'
import { ButtonGroupPicker } from '../ButtonGroupPicker'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/ButtonGroupPicker',
  component: ButtonGroupPicker,
}

export const Basic = () => {
  const [selectedValue, setSelectedValue] = React.useState(1)

  return (
    <Wrapper>
      <ButtonGroupPicker>
        {[1, 2, 3].map(value => {
          return (
            <Button
              type={value === selectedValue ? 'primary' : 'black'}
              onClick={() => { setSelectedValue(value) }}
            >
              {value}
            </Button>
          )
        })}
      </ButtonGroupPicker>
    </Wrapper>
  )
}
