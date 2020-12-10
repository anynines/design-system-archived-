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
  <Wrapper bgColor='black-darker'>
    <Input {...args} style={{marginBottom: 0}}/>
  </Wrapper>
)

export const Text = () => (
  <Wrapper bgColor='black-darker'>
    <Input
      style={{marginBottom: 0}}
      name='Text'
      type='text'
      icon='shop'
      label='Text'
      autoComplete='off'
      autoFocus
    />
  </Wrapper>
)

export const Date = () => (
  <Wrapper bgColor='black-darker'>
    <Input
      style={{marginBottom: 0}}
      name='color'
      type='date'
      label='Pick a date'
      autoComplete='off'
      autoFocus
    />
  </Wrapper>
)
export const Color = () => (
  <Wrapper bgColor='black-darker'>
    <Input
      style={{marginBottom: 0}}
      name='color'
      type='color'
      label='Pick a color'
      autoComplete='off'
      autoFocus
    />
  </Wrapper>
)

export const CustomRegexPattern = () => (
  <Wrapper bgColor='black-darker'>
    <Input
      style={{marginBottom: 0}}
      name='CustomRegex'
      type='text'
      icon='shop'
      label='I match 4 digits numbers'
      pattern={/^[0-9]{4}$/}
      autoComplete='off'
      autoFocus
    />
  </Wrapper>
)

export const Email = () => (
  <Wrapper bgColor='black-darker'>
    <Input
      style={{marginBottom: 0}}
      name='Email'
      type='email'
      icon='send'
      label='Email'
      autoComplete='off'
      autoFocus
    />
  </Wrapper>
)

export const Number = () => (
  <Wrapper bgColor='black-darker'>
    <Input
      style={{marginBottom: 0}}
      name='number'
      type="number"
      icon='euro'
      label='Number'
      autoComplete='off'
      autoFocus
    />
  </Wrapper>
)

export const Password = () => (
  <Wrapper bgColor='black-darker'>
    <Input
      style={{marginBottom: 0}}
      name='password'
      label='Password'
      type='password'
      icon='lock'
      autoComplete='off'
      autoFocus
    />
  </Wrapper>

)
