import React from 'react'

import { Section } from '../../introduction/layout/Section/Section'
import { Slider } from './Slider'

export default {
  title: '🌳 Organisms/Slider',
  component: Slider,
  argTypes: {
  }
}

const slides = [
  {
    "title": "Kind of universe",
    "subtitle": "Mystic galaxy somewhere else",
    "src": "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  {
    "title": "Smells like roses",
    "subtitle": "Wolle rose kaufen?",
    "src": "https://images.pexels.com/photos/54320/rose-roses-flowers-red-54320.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    "title": "Special fish",
    "subtitle": "Most beautiful fish",
    "src": "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  }
]

export const Basic = () => (
  <Section bgColor='transparent' style={{ padding: 20 }}>
    <Slider
      slides={slides}
    />
  </Section>
)
