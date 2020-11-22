import React from 'react'
import { Button } from '../../Button/Button'
import { Tooltip } from '../Tooltip'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Tooltip',
  component: Tooltip,
  argTypes: {

  }
}

export const Default = () => (
  <Wrapper>
    <Button
      type='primary'
      className='tooltip-wrapper'
    >
      <span>👆 Hover over me</span>
      <Tooltip>
        👏  Good job you did it!
        </Tooltip>
    </Button>
  </Wrapper>
)
