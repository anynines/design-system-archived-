import React from 'react'
import { Button } from '../../Button/Button'
import { Tooltip } from "../Tooltip"

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    
  }
}

export const Default = () => (
  <div style={{ minHeight: 300 }}>
    <Button className='tooltip-wrapper'>
        <span>👆 Hover over me</span>
        <Tooltip>
          👏  Good job you did it!
        </Tooltip>
    </Button>
  </div>
)
