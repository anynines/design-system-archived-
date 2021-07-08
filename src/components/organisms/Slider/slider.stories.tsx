import React from 'react'

import { Section } from '../../introduction/layout/Section/Section'
import { Slider } from './Slider'
import { SlideItemContent } from "./SlideItemContent"

export default {
  title: '🌳 Organisms/Slider',
  component: Slider,
  argTypes: {
  }
}

const slidesChildrenAuthors = [
  {
    "username": "Matthew Doherty",
    "userGroup": "Platform Engineer",
    "avatarUrl": "https://cdnb.artstation.com/p/assets/images/images/009/836/467/large/maria-bo-schatzis-stream-profilpicture.jpg?1521139318"
  },
  {
    "username": "Phillipp Kuntz",
    "userGroup": "Platform Engineer",
    "avatarUrl": "https://cdnb.artstation.com/p/assets/images/images/009/836/467/large/maria-bo-schatzis-stream-profilpicture.jpg?1521139318"
  },
  {
    "username": "Robert Gogolok",
    "userGroup": "Platform Engineer",
    "avatarUrl": "https://cdnb.artstation.com/p/assets/images/images/009/836/467/large/maria-bo-schatzis-stream-profilpicture.jpg?1521139318"
  }
];

const slides = [
  {
    "title": "Kind of universe",
    "subtitle": "Mystic galaxy somewhere else",
    "src": "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "link": "https://www.w3.org/Provider/Style/dummy.html",
    "children": <SlideItemContent title="Smells like roses" authors={slidesChildrenAuthors} />
  },
  {
    "title": "Smells like roses",
    "subtitle": "Wolle rose kaufen?",
    "src": "https://images.pexels.com/photos/54320/rose-roses-flowers-red-54320.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "link": "https://www.w3.org/Provider/Style/dummy.html",
    "children": <SlideItemContent title="Smells like roses" authors={slidesChildrenAuthors} />
  },
  {
    "title": "Special fish",
    "subtitle": "Most beautiful fish",
    "src": "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "link": "https://www.w3.org/Provider/Style/dummy.html",
    "children": <SlideItemContent title="Smells like roses" authors={slidesChildrenAuthors} />
  }
]

export const Basic = () => (
  <Section bgColor='transparent' style={{ padding: 20 }}>
    <Slider
      slides={slides}
    />
  </Section>
)
