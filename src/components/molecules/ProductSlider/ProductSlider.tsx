import React from 'react'
import styled from 'styled-components'
import { ProductCard } from './ProductCard'

export interface ProductType {
  category: string
  deliveryDays: number
  description: string
  id: string
  imageUrl: string
  points: number
  tags: string
  title: string
}

export interface ProductSliderProps {
  products: ProductType[]
}

export const ProductSlider: React.FC<ProductSliderProps> = ({
  products
}) => {
  return (
    <StyledProductSlider>
      {products.map((product) => {
        return (
          <ProductCard key={product.id} {...product} />
        )
      })}
    </StyledProductSlider>
  )
}

const StyledProductSlider = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: nowrap;
  margin-left: -20px;
  background-color: var(--color-black-dark);
  padding: 20px;
  width: calc(100% + 40px);
  overflow-x: auto;
`
