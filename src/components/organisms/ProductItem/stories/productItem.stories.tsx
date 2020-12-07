import React from 'react'
import { action } from '@storybook/addon-actions'

import { ProductItem, ProductItemProps } from '../ProductItem'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '🌳 Organisms/ProductItem',
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
      },
      defaultValue: {
        title: 'Awesome Product',
        imageUrl: 'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        variations: 'Some text',
        price: 42.00,

      }
    },
    quantity: {
      control: { type: 'number' },
      defaultValue: 4
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
      defaultValue: 'heart'
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
  <Wrapper>
    <ProductItem 
      {...args} 
      deleteItem={action('delete-click')} 
      move={action('move-click')} 
    />
  </Wrapper>
)

export const Product = () => (
  <Wrapper>
    <ProductItem
      deleteItem={action('delete-click')}
      move={action('move-click')}
      product={SampleProduct}
      quantity={1}
      moveIcon='heart'
    />
  </Wrapper>
)
