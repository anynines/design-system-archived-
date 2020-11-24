import React from 'react'

import { Notification, NotificationProps } from '../Notification'

export default {
  title: '🌱 Molecules/Notification',
  component: Notification,
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
    },
    date: {
      control: { type: 'number' },
    }
  }
}

const testItem = {
  'msg': 'Next competition starting soon!',
  'date': 1587462304000
}

export const Basic = (args: NotificationProps) => (
  <Notification {...args} />
)

export const Example = () => (
  <Notification icon={'notifications'} msg={testItem.msg} date={testItem.date} />
)
