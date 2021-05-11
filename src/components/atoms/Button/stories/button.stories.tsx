import React from 'react'
import { action } from '@storybook/addon-actions'

import Wrapper from '../../../_helpers/Wrapper'
import { Button, ButtonProps } from '../Button'
import { ButtonGroup } from '../ButtonGroup'

export default {
  title: '💧 Atoms/Button',
  component: Button,
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
    type: {
      control: {
        type: 'select',
        options: ['dark', 'black', 'primary', 'submit', 'white']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg']
      }
    },
    width: {
      control: {
        type: 'select',
        options: ['inline', 'block']
      }
    },
    onClick: {
      control: { type: 'disabled' }
    },
  }
}

export const Basic = (args: ButtonProps) => (
  <Wrapper>
    <Button
      {...args}
      onClick={action('button-click')}
    >
      Button default
    </Button>
  </Wrapper>
)

export const Types = () => (
  <Wrapper justify='space-around'>
    <Button>
      Button Primary
    </Button>
    <Button type='dark'>
      Button Dark
    </Button>
    <Button type='black'>
      Button Black
    </Button>
  </Wrapper>
)

export const Sizes = () => (
  <Wrapper justify='space-around'>
    <Button size='lg'>
      Button Large
    </Button>
    <Button size='md'>
      Button Medium
    </Button>
    <Button size='sm'>
      Button Small
    </Button>
    <Button size='xs'>
      Button Extra Small
    </Button>
  </Wrapper>
)

export const Disabled = () => (
  <Wrapper justify='space-around'>
    <Button disabled>
      Disabled Button
    </Button>
  </Wrapper>
)

export const Block = () => (
  <Wrapper>
    <Button width='block'>
      Button Block filling all the space
    </Button>
  </Wrapper>
)

export const Submit = () => (
  <Wrapper>
    <Button
      type='submit'
      onClick={action('button-click - Use this one for forms since the button will be from type submit and get the styles from a primary button.')}
    >
      Button Submit for Forms
    </Button>
  </Wrapper>
)

export const OnClick = () => (
  <Wrapper>
    <Button
      type='dark'
      onClick={action('button-click - I can do something in case you want)')}
    >
      Button onClick for any Callback
    </Button>
  </Wrapper>
)

export const Icon = () => (
  <Wrapper justify='space-around'>
    <Button
      type='dark'
      icon={'menu'}
    >
      Button with menu icon
    </Button>
    <Button
      type='submit'
      icon={'grid4'}
    >
      Button with grid icon
    </Button>
  </Wrapper>
)

export const Group = () => (
  <Wrapper>
    <ButtonGroup>
      <Button
        type='dark'
        icon={'menu'}
      >
        Button with menu icon
      </Button>
      <Button
        type='submit'
        icon={'grid4'}
      >
        Button with grid icon
    </Button>
    </ButtonGroup>
  </Wrapper>
)
