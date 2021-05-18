
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import Wrapper from '../../../_helpers/Wrapper'

import { ProductCard, ProductCardProps } from '../ProductCard'
import { ProductSlider, ProductSliderProps } from '../ProductSlider'

export default {
  title: '🌱 Molecules/Product Slider',
  component: ProductSlider,
  argTypes: {
    id: {
      control: { type: 'text' },
      defaultValue: '1'
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'This is a simple modal.'
    },
    imageUrl: {
      control: { type: 'text' },
      defaultValue: ''
    },
    points: {
      control: { type: 'number' },
      defaultValue: 1200
    },
    tags: {
      control: { type: 'text' },
      defaultValue: 'default tag'
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'Default Product'
    }
  }
}

const sampleproducts = [
  {
    category: 'Sample Category 1',
    deliveryDays: 12,
    description: 'Lorem Ipsum',
    id: '1',
    imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    points: 1200,
    tags: '',
    title: 'Sample Product 1'
  },
  {
    category: 'Sample Category 2',
    deliveryDays: 2,
    description: 'Lorem Ipsum',
    id: '2',
    imageUrl: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
    points: 200,
    tags: '',
    title: 'Sample Product 2'
  },
  {
    category: 'Sample Category 3',
    deliveryDays: 4,
    description: 'Lorem Ipsum',
    id: '3',
    imageUrl: 'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    points: 3200,
    tags: '',
    title: 'Sample Product 3'
  },
  {
    category: 'Sample Category 4',
    deliveryDays: 21,
    description: 'Lorem Ipsum',
    id: '4',
    imageUrl: 'https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    points: 40900,
    tags: '',
    title: 'Sample Product 4'
  },
  {
    category: 'Sample Category 1',
    deliveryDays: 21,
    description: 'Lorem Ipsum',
    id: '5',
    imageUrl: 'https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    points: 900,
    tags: '',
    title: 'Sample Product 5'
  },
  {
    category: 'Sample Category 1',
    deliveryDays: 21,
    description: 'Lorem Ipsum',
    id: '6',
    imageUrl: 'https://images.pexels.com/photos/2622187/pexels-photo-2622187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    points: 1200,
    tags: '',
    title: 'Sample Product 6'
  },
]


export const Basic = (args: ProductCardProps) => {
  return (
    <MemoryRouter>
      <Wrapper>
        <ProductCard {...args} />
      </Wrapper>
    </MemoryRouter>
  )
}

export const Slider = (args: ProductSliderProps) => {
  return (
    <MemoryRouter>
      <Wrapper>
        <ProductSlider products={sampleproducts} />
      </Wrapper>
    </MemoryRouter>
  )
}
