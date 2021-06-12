import React from 'react'

import { Menu, MenuItemObject, MenuProps } from '../Menu'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '🌱 Molecules/Menu',
  component: Menu,
  argTypes: {
    items: { control: null },
    selectedItem: { control: { type: 'number' } },
    onClick: { control: null },
    vertical: { control: { type: 'boolean' } },
    children: { control: null }
  }
}

const menuData: MenuItemObject[] = [
  {
    id: 'menu',
    icon: 'menu',
    children: <>Menu</>,
  },
  {
    id: 'shop',
    icon: 'shop',
    children: <>Shop</>,
  },
]

export const MainMenu = (args: MenuProps) => (
  <Wrapper>
    <Menu {...args} items={menuData} />
  </Wrapper>
)

const userMenuData: MenuItemObject[] = [
  {
    id: 'wishlist',
    icon: 'wishlist',
    counter: 42,
  },
  {
    id: 'cart',
    icon: 'cart',
    counter: 42,
  },
  {
    id: 'notifications',
    icon: 'notifications',
    counter: 42,
  },
  {
    id: 'points',
    icon: 'points',
    children: <>4242</>,
  },
]

export const UserMenu = () => (
  <Wrapper>
    <Menu items={userMenuData}></Menu>
  </Wrapper>
)

const adminMenuData: MenuItemObject[] = [
  {
    id: 'dashboard',
    icon: 'dashboard',
    vertical: true,
    children: <>Dashboard</>,
  },
  {
    id: 'users',
    icon: 'users',
    vertical: true,
    children: <>Users</>,
  },
  {
    id: 'pages',
    icon: 'pages',
    vertical: true,
    children: <>Pages</>,
  },
  {
    id: 'settings',
    icon: 'settings',
    vertical: true,
    children: <>Settings</>,
  },
]

export const AdminMenu = () => (
  <Wrapper>
    <Menu vertical items={adminMenuData}></Menu>
  </Wrapper>
)
