import React from 'react'
import { action } from "@storybook/addon-actions";

import { Select, SelectProps } from '../Select'


export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {
    icon: {
      control: {
        type: 'options',
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
    register: {
      control: { type: 'disabled' }
    },
  },
}
const defaultValues = [
  'Arial',
  'Comic Sans',
  'Helevetica'
]

export const Basic = (args: SelectProps) => (
  <Select {...args} values={defaultValues} defaultValue={'Arial'} />
)

export const Example = (args: SelectProps) => (
  <Select label='Font' name='fontFamily' values={defaultValues} defaultValue={'Arial'} icon='font' onChange={(value) => {
    action(value)
  }} />
)
export const WithNumber = (args: SelectProps) => (
  <Select label='Pick a number' name='number' values={[1, 2, 3, 4]} icon='drop' onChange={action('Picked number')} />
)
