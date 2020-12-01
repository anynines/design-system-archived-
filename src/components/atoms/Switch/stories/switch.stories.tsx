import React from 'react'
import { action } from '@storybook/addon-actions'

import { Switch, SwitchProps } from '../Switch'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Switch',
  component: Switch,
  argTypes: {
    checked: {
      control: {
        type: 'disabled'
      },
    },
  },
}

export const Basic = (args: SwitchProps) => {
  const [value, setValue] = React.useState(false)

  return (
    <Wrapper bgColor='black'>
      <Switch
        {...args}
        checked={value}
        onChange={() => setValue(!value)}
      />
    </Wrapper>
  )
}
