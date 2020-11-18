import React from 'react'

import { Input, InputProps } from '../Input'

export default {
  title: 'Molecules/Inputs/Input',
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
      },
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
  },
}

export const Basic = (args: InputProps) => (
  <Input name='Basic' label="Basic" {...args} />
)
export const Text = (args: InputProps) => (
  <Input name='Text' type='text' icon='shop' label="Text" value='Default Value' {...args} />
)
export const CustomRegexPattern = (args: InputProps) => (
  <Input name='Text' type='text' icon='shop' label="I match 4 digits numbers" pattern={/^[0-9]{4}$/} {...args} />
)
export const Color = (args: InputProps) => (
  <Input name='Color' type="color" label="Color" {...args} />
)

export const Email = (args: InputProps) => (
  <Input name='Email' type="email" icon='notifications' label="Email" {...args} />
)

export const Password = (args: InputProps) => (
  <Input name='Password' label='Password' type="password" icon='random' {...args} />
)
