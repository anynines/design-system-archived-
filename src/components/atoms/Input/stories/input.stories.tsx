import React from 'react'

import { Input, InputProps } from '../Input'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Input',
  component: Input,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: [
          'menu',
          'shop',
          'bestseller',
          'novelties',
          'sale',
          'random',
          'wishlist',
          'cart',
          'notifications',
          'points',
          'caretDown',
          'caretRight',
          'dashboard'
        ],
        defaultValue: 'points'
      },
    },
    type: {
      control: {
        type: 'select',
        options: [
          'text',
          'color',
          'email',
          'password'
        ],
        defaultValue: 'text'
      },
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'Unique name used as ref'
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Text input',
    },
    value: {
      control: { type: 'text' },
      defaultValue: 'Your value goes here',
    },
    autoComplete: {
      control: { type: 'boolean' }
    },
    autoFocus: {
      control: { type: 'boolean' }
    },
    errors: {
      control: { type: 'disabled' }
    },
    register: {
      control: { type: 'disabled' }
    },
    onChange: {
      control: { type: 'disabled' }
    },
    onFocusChange: {
      control: { type: 'disabled' }
    }
  }
}

export const Basic = (args: InputProps) => (
  <Wrapper>
    <Input {...args} />
  </Wrapper>
)

export const Text = () => (
  <Wrapper>
    <Input
      name='Text'
      type='text'
      icon='shop'
      label='Text'
      value='Default Value'
    />
  </Wrapper>
)

export const Color = () => (
  <Wrapper>
    <Input
      name='color'
      type='color'
      label='Pick a color'
      value='#123456'
    />
  </Wrapper>
)

export const CustomRegexPattern = () => (
  <Wrapper>
    <Input
      name='CustomRegex'
      type='text'
      icon='shop'
      label='I match 4 digits numbers'
      pattern={/^[0-9]{4}$/}
    />
  </Wrapper>
)

export const Email = () => (
  <Wrapper>
    <Input
      name='Email'
      type='email'
      icon='send'
      label='Email'
    />
  </Wrapper>
)

export const Number = () => (
  <Wrapper>
    <Input
      name='number'
      type="number"
      icon='euro'
      label="Number"
    />
  </Wrapper>
)

export const Password = () => (
  <Wrapper>
    <Input
      name='password'
      label='Password'
      type='password'
      icon='lock'
    />
  </Wrapper>

)
