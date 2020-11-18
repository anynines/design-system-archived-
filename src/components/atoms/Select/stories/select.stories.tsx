import React from 'react'
import { action } from "@storybook/addon-actions";

import { Select, SelectProps } from '../Select'


export default {
  title: 'Atoms/Select',
  component: Select,
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
    register: {
      control: { type: 'disabled' }
    },
  },
}
const defaultValues = [
  'Arial',
  'Comic Sans',
  'Helevtica'
]

const scrollableValues = [
  'Arial',
  'Comic Sans',
  'Helevtica',
  'Times New Roman',
  'Roboto',
  'Goldman',
  'Oswald',
  'Raleway',
  'Ubuntu',
  'Lora',
  'Quicksand',
  'Cabin',
  'Open Sans',
  'Lato'
]

export const Basic = (args: SelectProps) => (
  <Select {...args} values={defaultValues} defaultValue={'Helevtica'} onChange={action("Selected item")} />
)

export const Example = (args: SelectProps) => (
  <Select label='Font' name='fontFamily' values={defaultValues} defaultValue={'Helevtica'} icon='font' onChange={action("Selected item")} />
)

export const Scrollable = (args: SelectProps) => (
  <Select label='Font' name='fontFamily' values={scrollableValues} defaultValue={'Helevtica'} icon='font' onChange={action("Selected item")} />
)
export const WithNumber = (args: SelectProps) => (
  <Select label='Pick a number' name='number' values={[1, 2, 3, 4]} icon='drop' onChange={action('Selected item')} />
)
