import React from 'react'
import { action } from '@storybook/addon-actions'

import Wrapper from '../../../_helpers/Wrapper'
import { Checkbox, CheckboxProps } from '../Checkbox'

export default {
  title: '💧 Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Simple Checkbox '
    },
    onClick: {
      control: { type: 'disabled' }
    },
    value: {
      control: { type: 'disabled' }
    }
  }
}

export const Basic = (args: CheckboxProps) => {
  const [value, setValue] = React.useState(false)

  return (
    <Wrapper>
      <Checkbox
        {...args}
        value={value}
        onClick={() => { setValue(!value), action('checkbox-click') }}
      />
    </Wrapper>
  )
}
