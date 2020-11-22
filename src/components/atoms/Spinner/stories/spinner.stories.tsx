import React from 'react'

import { Spinner, SpinnerProps } from '../Spinner'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: {
          small: 'sm',
          medium: 'md',
          large: 'lg',
        }
      },
    },
    hidden: {
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'text' },
    },
  }
}

export const Basic = (args: SpinnerProps) => (
  <Wrapper>
    <Spinner {...args} />
  </Wrapper>
)

export const Sizes = () => (
  <Wrapper justify='space-around' >
    <Spinner size={'sm'} />
    <Spinner size={'md'} />
    <Spinner size={'lg'} />
  </Wrapper>
)

export const CustomColor = () => (
  <Wrapper>
    <Spinner color={'#ff1e4c'} />
  </Wrapper>
)
