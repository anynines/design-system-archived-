import React from 'react'
import Wrapper from '../../../_helpers/Wrapper'

import { MemoryRouter } from 'react-router-dom'
import { Card, CardProps } from '../Card'
import { CardGrid } from '../CardGrid'
import { Button } from '../../../atoms/Button/Button'
import { render } from '@testing-library/react'

export default {
  title: '🌱 Molecules/Card',
  component: Card,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: {
          menu: 'menu',
          shop: 'shop',
          bestseller: 'bestseller',
          novelties: 'novelties',
          sale: 'sale',
          random: 'random',
          wishlist: 'wishlist',
          cart: 'cart',
          notifications: 'notifications',
          points: 'points',
          caretDown: 'caretDown',
          caretRight: 'caretRight',
          dashboard: 'dashboard',
          pages: 'pages',
          remove: 'remove',
          settings: 'settings',
          turnAround: 'turnAround',
          users: 'users',
          user: 'user',
          logout: 'logout',
          orders: 'orders',
          edit: 'edit',
          light: 'light',
          heart: 'heart',
          customer: 'customer',
          color: 'color',
          bin: 'bin',
          plus: 'plus',
          minus: 'minus',
          moon: 'moon',
          font: 'font',
          close: 'close',
          info: 'info',
          placeholder: 'placeholder',
          pipette: 'pipette'
        }
      }
    },
    imageMargin: {
      control: { type: 'boolean' },
      defaultValue: false
    },
    imageUrl: {
      control: { type: 'text' },
      defaultValue: 'http://www.artofmtg.com/wp-content/uploads/2021/01/Egon-God-of-Death-Variant-Kaldheim-MtG-Art.jpg'
    },
    linkUrl: {
      control: { type: 'text' },
      defaultValue: '/'
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'card example title'
    },
    footer: {
      control: { type: 'disabled' },
      description: 'You can put another component (e.g. Button) inside this property'
    }
  }
}

export const Basic = (args: CardProps) => (
  <Wrapper>
    <Card {...args}>
      Lorem Ipsum dolor bla blub
    </Card>
  </Wrapper>
)

export const Icon = () => (
  <Wrapper>
    <Card
      title="Card with Icon"
      icon="remove"
      iconSize='lg'
      linkUrl="https://youtube.com"
    />
  </Wrapper>
)

const CartFooter: React.FC = (): any => {
  return (
    <Button width='block'>Button</Button>
  )
}

export const Grid = () => {
  return (
    <MemoryRouter>
      <Wrapper>
        <CardGrid>
          <Card
            title="Card with Icon"
            icon="remove"
            iconSize='lg'
            linkUrl="https://youtube.com"
          >
            Lorem Ipsum dolor bla blub
          </Card>
          <Card
            title="Card with Icon"
            imageUrl='http://www.artofmtg.com/wp-content/uploads/2021/01/Egon-God-of-Death-Variant-Kaldheim-MtG-Art.jpg'
            linkUrl="https://youtube.com"
            footer={<CartFooter />}
          >
            Lorem Ipsum dolor bla blub
          </Card>
          <Card
            title="Card with Icon"
            imageUrl='http://www.artofmtg.com/wp-content/uploads/2021/01/Egon-God-of-Death-Variant-Kaldheim-MtG-Art.jpg'
            linkUrl="https://youtube.com"
          >
            Lorem Ipsum dolor bla blub
          </Card>
          <Card
            title="Card with Icon"
            icon="remove"
            iconSize='lg'
            linkUrl="https://youtube.com"
          >
            Lorem Ipsum dolor bla blub
          </Card>
        </CardGrid>
      </Wrapper>
    </MemoryRouter>
  )
}

export const CustomGrid = () => {
  return (
    <MemoryRouter>
      <Wrapper>
        <CardGrid
          gridColumnsMobile={3}
          gridColumnsDesktop={5}
        >
          <Card
            title="Card with Icon"
            icon="remove"
            iconSize='lg'
            linkUrl="https://youtube.com"
          >
            Lorem Ipsum dolor bla blub
          </Card>
          <Card
            title="Card with Icon"
            imageUrl='http://www.artofmtg.com/wp-content/uploads/2021/01/Egon-God-of-Death-Variant-Kaldheim-MtG-Art.jpg'
            linkUrl="https://youtube.com"
            footer={<CartFooter />}
          >
            Lorem Ipsum dolor bla blub
          </Card>
          <Card
            title="Card with Icon"
            imageUrl='http://www.artofmtg.com/wp-content/uploads/2021/01/Egon-God-of-Death-Variant-Kaldheim-MtG-Art.jpg'
            linkUrl="https://youtube.com"
          >
            Lorem Ipsum dolor bla blub
          </Card>
          <Card
            title="Card with Icon"
            icon="remove"
            iconSize='lg'
            linkUrl="https://youtube.com"
          >
            Lorem Ipsum dolor bla blub
          </Card>
          <Card
            title="Card with Icon"
            icon="remove"
            iconSize='lg'
            linkUrl="https://youtube.com"
          >
            Lorem Ipsum dolor bla blub
          </Card>
        </CardGrid>
      </Wrapper>
    </MemoryRouter>
  )
}
