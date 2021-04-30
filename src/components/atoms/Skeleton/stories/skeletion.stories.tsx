import React from 'react'
import { action } from '@storybook/addon-actions'

import { CardSkeleton, CardSkeletonProps } from '../Card'
import { HeroSkeleton } from '../Hero'
import { LineSkeleton, LineSkeletonProps } from '../Line'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Skeleton',
  component: CardSkeleton,
  argTypes: {
  },
}

const defaultValues = [
  'Arial',
  'Comic Sans',
  'Helvetica'
]

export const Card = (args: CardSkeletonProps) => (
  <Wrapper>
    <CardSkeleton
      {...args}
    />
  </Wrapper>
)

export const Hero = (args: CardSkeletonProps) => (
  <Wrapper>
    <HeroSkeleton
      {...args}
    />
  </Wrapper>
)

export const Line = (args: LineSkeletonProps) => (
  <Wrapper>
    <LineSkeleton
      {...args}
    />
  </Wrapper>
)
