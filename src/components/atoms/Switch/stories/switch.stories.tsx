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
  const [value, setValue] = React.useState(false)

  return (
    <Wrapper justify='flex-start' bgColor={undefined} >
      <Switch
        {...args}
        checked={value}
        onChange={() => setValue(!value)}
      />
      { value ? 'Switch Component' : 'Press me'}
    </Wrapper>
  )
}

export const Type = () => {
  const [value, setValue] = React.useState(false)

  return (
    <Wrapper align='flex-start' direction='column' bgColor='none'  >
      <Wrapper justify='flex-start' bgColor='none'  >
        <Switch
          type='bold'
          checked={value}
          onChange={() => setValue(!value)}
        />
        {value ? 'Bold Switch Component' : 'Press me'}
      </Wrapper>
      <Wrapper justify='flex-start' bgColor='none'  >
        <Switch
          type='slim'
          checked={value}
          onChange={() => setValue(!value)}
        />
        {value ? 'Slim Switch Component' : 'Press me'}
      </Wrapper>
    </Wrapper>
  )
}

export const Border = () => {
  const [value, setValue] = React.useState(false)

  return (
    <Wrapper align='flex-start' direction='column' bgColor='none'  >
      <Wrapper justify='flex-start' bgColor='none'  >
        <Switch
          type='bold'
          border={true}
          checked={value}
          onChange={() => setValue(!value)}
        />
        {value ? 'Bold Border Switch Component' : 'Press me'}
      </Wrapper>
      <Wrapper justify='flex-start' bgColor='none'  >
        <Switch
          type='slim'
          border={true}
          checked={value}
          onChange={() => setValue(!value)}
        />
        {value ? 'Slim Border Switch Component' : 'Press me'}
      </Wrapper>
    </Wrapper>
  )
}
