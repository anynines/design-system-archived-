import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Wrapper from '../../../_helpers/Wrapper'
import { CaretLink, CaretLinkProps } from '../CaretLink'

export default {
  title: 'Atoms/CaretLink',
  component: CaretLink,
  argTypes: {
    text: {
      control: { type: 'text' },
      defaultValue: 'Peter Weinmann'
    },
    path: {
      control: { type: 'text'},
      defaultValue: '/test'
    }
  },
}

export const Basic = (args: CaretLinkProps) => (
  <MemoryRouter>
    <Wrapper>
      <CaretLink
        {...args}
      />
    </Wrapper>
  </MemoryRouter>
)
