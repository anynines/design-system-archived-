import React from 'react'
import { action } from '@storybook/addon-actions'

import { ProductItem, ProductItemProps } from '../ProductItem'

export default {
  title: 'Organisms/ProductItem',
  component: ProductItem,
  argTypes: {
    product: {
      title: {
        control: { type: 'text' },
      },
      imageUrl: {
        control: { type: 'text' },
      },
      variations: {
        control: { type: 'text' },
      },
      price: {
        control: { type: 'number' },
      }
    },
    quantity: {
      control: { type: 'number' },
    },
    setItemQuantity: {
      control: { type: 'disabled' },
    },
    deleteItem: {
      control: { type: 'disabled' },
    },
    move: {
      control: { type: 'disabled' },
    },
    moveIcon: {
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

  }
}

const SampleProduct =
{
  title: 'Something very special',
  imageUrl: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  variations: [],
  price: 142
}


export const Basic = (args: ProductItemProps) => (
  <ProductItem {...args} deleteItem={action('delete-click')} move={action('move-click')} />
)

export const Product = (args: ProductItemProps) => (
  <ProductItem
    {...args}
    deleteItem={action('delete-click')}
    move={action('move-click')}
    product={SampleProduct}
    quantity={1}
  />
)
