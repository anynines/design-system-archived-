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
    label: {
      control: {
        type: 'text'
      },
      defaultValue: 'Basic Switch'
    },
    labelPosition: {
      control: {
        type: 'select',
        options: {
          top: 'top',
          right: 'right',
          bottom: 'bottom',
          left: 'left'
        }
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
          label='Bold Switch Component'
        />

      </Wrapper>
      <Wrapper justify='flex-start' bgColor='transparent'  >
        <Switch
          name='switch-2'
          type='slim'
          label='Slim Switch Component'
        />
      </Wrapper>
    </Wrapper>
  )
}

export const Border = () => {
  return (
    <Wrapper align='flex-start' direction='column' bgColor='transparent'  >
      <Wrapper justify='flex-start' bgColor='transparent'  >
        <Switch
          border
          name='switch-1'
          type='bold'
          label='Bold Border Switch Component'
        />
      </Wrapper>
      <Wrapper justify='flex-start' bgColor='transparent'  >
        <Switch
          border
          name='switch-2'
          type='slim'
          label='Slim Border Switch Component'
        />
      </Wrapper>
    </Wrapper>
  )
}

export const LabelPosition = () => {
  return (
    <Wrapper align='flex-start' direction='column' bgColor='transparent'  >
      <Wrapper justify='flex-start' bgColor='transparent'  >
        <Switch
          border
          name='switch-1'
          type='bold'
          label='Label Top'
          labelPosition='top'
        />
      </Wrapper>
      <Wrapper justify='flex-start' bgColor='transparent'  >
        <Switch
          border
          name='switch-2'
          type='slim'
          label='Label Right'
          labelPosition='right'
        />
      </Wrapper>
      <Wrapper justify='flex-start' bgColor='transparent'  >
        <Switch
          border
          name='switch-3'
          type='bold'
          label='Label Bottom'
          labelPosition='bottom'
        />
      </Wrapper>
      <Wrapper justify='flex-start' bgColor='transparent'  >
        <Switch
          border
          name='switch-4'
          type='slim'
          label='Label Left'
          labelPosition='left'
        />
      </Wrapper>
    </Wrapper>
  )
}
