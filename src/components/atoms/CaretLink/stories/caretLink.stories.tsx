import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { CaretLink, CaretLinkProps } from '../CaretLink'


export default {
  title: 'Atoms/CaretLink',
  component: CaretLink,
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    path: {
      control: { type: 'text' },
    }
  },
}

export const Basic = (args: CaretLinkProps) => (
  <MemoryRouter>
    <CaretLink
      {...args}
      text='Click me to jump to a path'
      path='/test'
    />
  </MemoryRouter>
)

export const SampleLink = () => (
  <MemoryRouter>
    <CaretLink
      text='Zurück zum Login'
      path='/test'
    />
  </MemoryRouter>
)
