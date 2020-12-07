import React from 'react'
import { action } from '@storybook/addon-actions'

import { Select, SelectProps } from '../Select'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Select',
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
      defaultValue: 'points'
    },
    label: {
      control: {
        type: 'text'
      },
      defaultValue: 'My Label'
    },
    register: {
      control: { type: 'disabled' }
    },
  },
}

const defaultValues = [
  'Arial',
  'Comic Sans',
  'Helvetica'
]

const scrollableValues = [
  'Arial',
  'Comic Sans',
  'Helvetica',
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
  <Wrapper>
    <Select
      {...args}
      values={defaultValues}
      defaultValue={'Helvetica'}
      onChange={action('Selected item')}
      />
  </Wrapper>
)

export const Example = () => (
  <Wrapper>
    <Select
      label='Font'
      name='fontFamily'
      values={defaultValues}
      defaultValue={'Helvetica'}
      icon='font'
      onChange={action('Selected item')}
    />
  </Wrapper>
)

export const Scrollable = () => (
  <Wrapper>
    <Select
      label='Font'
      name='fontFamily'
      values={scrollableValues}
      defaultValue={'Helvetica'}
      icon='font'
      onChange={action('Selected item')}
    />
  </Wrapper>
)

export const WithNumber = () => (
  <Wrapper>
    <Select
      label='Pick a number'
      name='number'
      values={[1, 2, 3, 4]}
      icon='drop'
      onChange={action('Selected item')}
    />
  </Wrapper>
)
