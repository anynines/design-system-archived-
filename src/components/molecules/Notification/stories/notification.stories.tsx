import React from 'react'
import Wrapper from '../../../_helpers/Wrapper'
import { Notification, NotificationProps } from '../Notification'

export default {
  title: '🌱 Molecules/Notification',
  component: Notification,
  parameters: {
    docs: {
      description: {
        component: 'This is our notification component which can be used to display system notifications. You can choose between a full-width (block) variant or the default inline variant.'
      }
    },
  },
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
    msg: {
      control: { type: 'text' },
      defaultValue: 'Next competition starting soon!'
    },
    date: {
      control: { type: 'number' },
    },
    width: {
      control: {
        type: 'select',
        options: {
          inline: 'inline',
          block: 'block'
        }
      }
    }
  }
}

const testItem = {
  'msg': 'Next competition starting soon!',
  'date': 1587462304000
}

export const Basic = (args: NotificationProps) => (
  <Wrapper bgColor='light'>
    <Notification {...args} />
  </Wrapper>
)

export const Inline = () => (
  <Wrapper bgColor='light'>
    <Notification icon={'notifications'} msg={testItem.msg} date={testItem.date} />
  </Wrapper>
)

export const Block = () => (
  <Wrapper bgColor='light'>
    <Notification icon={'notifications'} msg={testItem.msg} date={testItem.date} width='block' />
  </Wrapper>
)
