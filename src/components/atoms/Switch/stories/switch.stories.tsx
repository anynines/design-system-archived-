import React from 'react'

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
    type: {
      control: {
        type: 'select',
        options: {
          slim: 'slim',
          bold: 'bold'
        }
      },
    },
  },
}

export const Basic = (args: SwitchProps) => {
  return (
    <Wrapper justify='flex-start' bgColor={undefined} >
      <Switch
        {...args}
      />
      Basic Switch
    </Wrapper>
  )
}

export const Type = () => {
  return (
    <Wrapper align='flex-start' direction='column' bgColor='transparent' >
      <Wrapper justify='flex-start' bgColor='transparent' >
        <Switch
          name='switch-1'
          type='bold'
        />
        Bold Switch Component
      </Wrapper>
      <Wrapper justify='flex-start' bgColor='transparent'  >
        <Switch
          name='switch-2'
          type='slim'
        />
        Slim Switch Component
      </Wrapper>
    </Wrapper>
  )
}

export const Border = () => {
  const [valueBorder, setValueBorder] = React.useState(false)
  const [valueBorderless, setValueBorderless] = React.useState(false)

  return (
    <Wrapper align='flex-start' direction='column' bgColor='transparent'  >
      <Wrapper justify='flex-start' bgColor='transparent'  >
        <Switch
          border
          checked={valueBorder}
          name='switch-1'
          onChange={() => setValueBorder(!valueBorder)}
          type='bold'
        />
        {valueBorder ? 'Bold Border Switch Component' : 'Press me'}
      </Wrapper>
      <Wrapper justify='flex-start' bgColor='transparent'  >
        <Switch
          border
          checked={valueBorderless}
          name='switch-2'
          onChange={() => setValueBorderless(!valueBorderless)}
          type='slim'
        />
        {valueBorderless ? 'Slim Border Switch Component' : 'Press me'}
      </Wrapper>
    </Wrapper>
  )
}
