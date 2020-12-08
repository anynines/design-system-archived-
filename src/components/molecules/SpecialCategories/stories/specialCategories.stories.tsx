import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import Wrapper from '../../../_helpers/Wrapper'
import { SpecialCategories, SpecialCategory } from '../SpecialCategories'

export default {
  title: '🌱 Molecules/SpecialCategories',
  component: SpecialCategories,
  argTypes: {
    id: { control: { type: 'number' } },
    name: { control: { type: 'text' } },
    slug: { control: { type: 'text' } },
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
        ]
      }
    }
  }
}

const SpecialItems: SpecialCategory[] = [
  {
    'id': 100,
    'name': 'Bestseller',
    'icon': 'bestseller',
    'slug': '/shop/bestseller'
  },
  {
    'id': 101,
    'name': 'Novelties',
    'icon': 'novelties',
    'slug': '/shop/novelties'
  },
  {
    'id': 102,
    'name': 'Sale',
    'icon': 'sale',
    'slug': '/shop/sale'
  },
  {
    'id': 103,
    'name': 'Random',
    'icon': 'random',
    'slug': '/shop/random'
  }
]

export const Basic = (args: SpecialCategory) => (
  <MemoryRouter
    initialEntries={['/shop/novelties']}
  >
    <Wrapper>
      <SpecialCategories
        {...args}
        specialCategories={SpecialItems}
        onClick={action('Item clicked')}
      />
    </Wrapper>
  </MemoryRouter>
)
