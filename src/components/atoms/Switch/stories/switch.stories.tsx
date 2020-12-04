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
  const [valueBold, setValueBold] = React.useState(false)
  const [valueSlim, setValueSlim] = React.useState(false)

  return (
    <Wrapper align='flex-start' direction='column' bgColor='none'  >
      <Wrapper justify='flex-start' bgColor='none'  >
        <Switch
          checked={valueBold}
          name='switch-1'
          onChange={() => setValueBold(!valueBold)}
          type='bold'
        />
        {valueBold ? 'Bold Switch Component' : 'Press me'}
      </Wrapper>
      <Wrapper justify='flex-start' bgColor='none'  >
        <Switch
          checked={valueSlim}
          name='switch-2'
          onChange={() => setValueSlim(!valueSlim)}
          type='slim'
        />
        {valueSlim ? 'Slim Switch Component' : 'Press me'}
      </Wrapper>
    </Wrapper>
  )
}

export const Border = () => {
  const [valueBorder, setValueBorder] = React.useState(false)
  const [valueBorderless, setValueBorderless] = React.useState(false)

  return (
    <Wrapper align='flex-start' direction='column' bgColor='none'  >
      <Wrapper justify='flex-start' bgColor='none'  >
        <Switch
          border={true}
          checked={valueBorder}
          name='switch-1'
          onChange={() => setValueBorder(!valueBorder)}
          type='bold'
        />
        {valueBorder ? 'Bold Border Switch Component' : 'Press me'}
      </Wrapper>
      <Wrapper justify='flex-start' bgColor='none'  >
        <Switch
          border={true}
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
