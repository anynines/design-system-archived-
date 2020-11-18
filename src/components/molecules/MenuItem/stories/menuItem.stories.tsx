import React from 'react'
import { action } from '@storybook/addon-actions'

import { MenuItem, MenuItemProps } from '../MenuItem'

export default {
  title: 'Molecules/MenuItem',
  component: MenuItem,
  argTypes: {
    id: { control: null },
    icon: {
      control: {
        type: 'select',
        options: {
          menu: "menu",
          shop: "shop",
          bestseller: "bestseller",
          novelties: "novelties",
          sale: "sale",
          random: "random",
          wishlist: "wishlist",
          cart: "cart",
          notifications: "notifications",
          points: "points",
          caretDown: "caretDown",
          caretRight: "caretRight",
          dashboard: "dashboard",
          pages: "pages",
          remove: "remove",
          settings: "settings",
          turnAround: "turnAround",
          users: "users",
          user: "user",
          logout: "logout",
          orders: "orders",
          edit: "edit",
          light: "light",
          heart: "heart",
          customer: "customer",
          color: "color",
          bin: "bin",
          plus: "plus",
          minus: "minus",
          moon: "moon",
          font: "font",
          close: "close",
          info: "info",
          placeholder: "placeholder",
          pipette: "pipette"
        }
      }
    },
    path: { control: { type: "text" } },
    counter: { control: { type: "boolean" } },
    active: { control: { type: "boolean" } },
    vertical: { control: { type: "boolean" } },
    onClick: { control: null },
    children: { control: null }
  }
}
export const Base = (args: MenuItemProps) => (
  <MenuItem {...args} onClick={action('label clicked')}>
    <>Label</>
  </MenuItem>
)


export const Label = () => (
  <MenuItem onClick={action('label clicked')}>
    <>Label</>
  </MenuItem>
)

export const LabelInline = () => <MenuItem vertical onClick={action('label clicked')}><>Label inline</></MenuItem>

export const Icon = () => <MenuItem icon={'menu'} vertical onClick={action('label clicked')}></MenuItem>

export const IconAndLabel = () => (
  <MenuItem icon={'menu'} vertical onClick={action('label clicked')}>
    <>Icon and Label</>
  </MenuItem>
)
