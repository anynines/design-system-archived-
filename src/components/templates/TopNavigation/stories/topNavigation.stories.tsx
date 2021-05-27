import React from 'react'
import { action } from '@storybook/addon-actions'
import { MemoryRouter } from 'react-router-dom'

import { TopNavigation } from '../TopNavigation'
import { Logo } from '../../../atoms/Logo/Logo'
import { Menu } from '../../../molecules/Menu/Menu'

export default {
  title: '📄 Templates/TopNav',
  component: TopNavigation,
}

export const Basic = () => (
  <MemoryRouter>
    <TopNavigation>
      <div className='wrapper'>
        <Logo
          path='/test'
          vertical={false}
          src={'https://anynines.com/assets/logo-5ca296ecafc3b6885d9d0fd09123c6a07138fbfc01e34551c7c8d220317f394c.svg'}
          onClick={action('button-click')}
        />
        <Menu
          className='StyledMenu'
          items={[
            {
              children: <>Menu</>,
              icon: 'menu',
              id: 'menu'
            },
            {
              children: <>Shop</>,
              icon: 'shop',
              id: 'shop'
            }
          ]}
        />

      </div>
      <div className='wrapper'>
        <Menu
          className='StyledMenu'
          items={[
            {
              id: 'wishlist',
              icon: 'wishlist',
              counter: 42,
            },
            {
              id: 'cart',
              icon: 'cart',
              counter: 42,
            }
          ]}
        />
      </div>
    </TopNavigation>
  </MemoryRouter>
)
