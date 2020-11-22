import React from 'react'

import { Menu, MenuItemObject, MenuProps } from '../Menu'

export default {
  title: '🌳 Organisms/Menu',
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
  <Menu {...args} items={menuData} />
)

const userMenuData: MenuItemObject[] = [
  {
    id: 'wishlist',
    icon: 'wishlist',
    counter: true,
  },
  {
    id: 'cart',
    icon: 'cart',
    counter: true,
  },
  {
    id: 'notifications',
    icon: 'notifications',
    counter: true,
  },
  {
    id: 'points',
    icon: 'points',
    children: <>4242</>,
  },
]

export const UserMenu = () => <Menu items={userMenuData}></Menu>

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

export const AdminMenu = () => <Menu vertical items={adminMenuData}></Menu>
