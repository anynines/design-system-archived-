import React from 'react'
import Wrapper from '../../../_helpers/Wrapper'

import { MemoryRouter } from 'react-router-dom'
import { Card, CardProps } from '../Card'
import { CardGrid } from '../CardGrid'
import { Button } from '../../../atoms/Button/Button'
import { CardImageProps, CardHeaderType } from '../components/CardImage'
import { IconName, IconSize } from '../../../atoms/Icon/Icon'

export interface CardStoryProps {
  icon?: IconName
  iconSize?: IconSize
  imageUrl?: string
  imageMargin?: boolean
  linkUrl?: string
  type?: CardHeaderType
}

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
      defaultValue: 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
    },
    linkUrl: {
      control: { type: 'text' },
      defaultValue: '/'
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'Card example description.'
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'card example title'
    },
    footer: {
      control: { type: 'disabled' },
      description: 'You can put another component (e.g. Button) inside this property'
    },
    iconSize: {
      control: {
        type: 'select',
        options: {
          xs: 'xs',
          sm: 'sm',
          md: 'md',
          lg: 'lg',
          xl: 'xl'
        }
      },
      defaultValue: 'xl'
    },
    type: {
      control: {
        type: 'select',
        options: {
          image: 'image',
          icon: 'icon'
        }
      },
      defaultValue: 'image'
    },
    tagClassName: {
      control: {
        type: 'string'
      },
      defaultValue: ''
    },
    contentTypeIconClassName: {
      control: {
        type: 'string'
      },
      defaultValue: ''
    }
  }
}

export const Basic = (args: CardStoryProps) => (
  <Wrapper>
    <Card {...args}>
      <Card.Image
        type={args.type}
        icon={args.icon}
        iconSize={args.iconSize}
        imageUrl={args.imageUrl}
        imageMargin={args.imageMargin}
      />
    </Card>
  </Wrapper>
)

export const Image = () => (
  <Wrapper>
    <CardGrid>
      <Card title='Card with Icon'>
        <Card.Image
          type='image'
          imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
          linkUrl='https://youtube.com' />
      </Card>
      <Card title='Card with image'>
        <Card.Image
          type='image'
          imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
          linkUrl='https://youtube.com' />
      </Card>
      <Card>
        <Card.Image
          type='image'
          imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
          linkUrl='https://youtube.com'
        />
      </Card>
      <Card title='Card with image margin'>
        <Card.Image
          type='image'
          imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
          linkUrl='https://youtube.com'
          imageMargin={true}
        />
      </Card>
    </CardGrid>
  </Wrapper>
)

export const Grid = () => {
  return (
    <MemoryRouter>
      <Wrapper>
        <CardGrid>
          <Card
            description='Lorem ipsum dolor.'
            title='Card with image'
          >
            <Card.Image
              type='image'
              imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
              linkUrl='https://youtube.com'
            />
          </Card>
          <Card
            description='Lorem ipsum dolor.'
            title='Card with image'
          >
            <Card.Image
              type='image'
              imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
              linkUrl='https://youtube.com'
            />
          </Card>
          <Card
            description='Lorem ipsum dolor.'
            title='Card with icon'
          >
            <Card.Image
              type='icon'
              icon='remove'
              iconSize='lg'
              linkUrl='https://youtube.com'
            />
          </Card>
          <Card
            description='Lorem ipsum dolor.'
            title='Card with icon'
          >
            <Card.Image
              type='icon'
              icon='sale'
              iconSize='lg'
              linkUrl='https://youtube.com'
            />
          </Card>
        </CardGrid>
      </Wrapper>
    </MemoryRouter>
  )
}

export const CustomTitles = () => {
  return (
    <Wrapper>
      <CardGrid>
        <Card>
          <Card.Image
            type='image'
            imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
            linkUrl='https://youtube.com'
            tag='tag'
            tagClassName='tag-styles'
            contentTypeIconClassName='content-type-icon-styles'
            contentTypeIcon='camera'
          />
          <Card.Title>
            <h2>Card h2 title</h2>
          </Card.Title>
          <Card.Body>
            Card h2 Body
          </Card.Body>
        </Card>
        <Card>
          <Card.Image
            type='image'
            imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
            linkUrl='https://youtube.com'
          />
          <Card.Title>
            <h3>Card h3 title</h3>
          </Card.Title>
          <Card.Body>
            Card h3 Body
          </Card.Body>
        </Card>
        <Card>
          <Card.Image
            type='image'
            imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
            linkUrl='https://youtube.com'
          />
          <Card.Title>
            <h4>Card h4 title</h4>
          </Card.Title>
          <Card.Body>
            Card h4 Body
          </Card.Body>
        </Card>
        <Card>
          <Card.Image
            type='image'
            imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
            linkUrl='https://youtube.com'
          />
          <Card.Title>
            <h5>Card h5 title</h5>
          </Card.Title>
          <Card.Body>
            Card h5 Body
          </Card.Body>
        </Card>
      </CardGrid>
    </Wrapper>
  )
}

export const CustomFooter = () => {
  return (
    <Wrapper>
      <CardGrid>
        <Card>
          <Card.Image
            type='image'
            imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
            linkUrl='https://youtube.com'
          />
          <Card.Title>
            Card with custom footer
          </Card.Title>
          <Card.Footer>
            <Button width='block'>Custom Button</Button>
          </Card.Footer>
        </Card>
        <Card
          title='Card with custom footer'
          description='Card with custom footer description'
        >
          <Card.Image
            type='image'
            imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
            linkUrl='https://youtube.com'
          />
          <Card.Title>Card with custom Footer</Card.Title>
          <p>Description here</p>
          <Card.Footer>
            <Button width='block'>Custom Button</Button>
          </Card.Footer>
        </Card>
      </CardGrid>
    </Wrapper>
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
            description='Lorem ipsum dolor.'
            title='Card with image'
          >
            <Card.Image
              type='image'
              imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
              linkUrl='https://youtube.com'
            />
          </Card>
          <Card
            description='Lorem ipsum dolor.'
            title='Card with image'
          >
            <Card.Image
              type='image'
              imageUrl='https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg'
              linkUrl='https://youtube.com'
            />
          </Card>
          <Card
            description='Lorem ipsum dolor.'
            title='Card with icon'
          >
            <Card.Image
              type='icon'
              icon='remove'
              iconSize='lg'
              linkUrl='https://youtube.com'
            />
          </Card>
          <Card
            description='Lorem ipsum dolor.'
            title='Card with icon'
          >
            <Card.Image
              type='icon'
              icon='camera'
              iconSize='lg'
              linkUrl='https://youtube.com'
            />
          </Card>
          <Card
            description='Lorem ipsum dolor.'
            title='Card with icon'
          >
            <Card.Image
              type='icon'
              icon='customer'
              iconSize='lg'
              linkUrl='https://youtube.com'
            />
          </Card>
        </CardGrid>
      </Wrapper>
    </MemoryRouter>
  )
}
