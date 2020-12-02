import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Userland } from '../Userland'
import { TopNavigation } from '../../../TopNavigation/TopNavigation'
import { Logo } from '../../../../atoms/Logo/Logo'
import { Menu } from '../../../../organisms/Menu/Menu'
import { Section } from '../../../../introduction/layout/Section/Section'


export default {
  title: '📄 Templates/Layouts/Userland',
  component: Userland,
}

export const Basic = () => (
  <MemoryRouter>
    <Userland>
      <TopNavigation>
      <div className='wrapper'>
          <Logo
            path='/test'
            vertical={false}
            src={'https://anynines.com/assets/logo-5ca296ecafc3b6885d9d0fd09123c6a07138fbfc01e34551c7c8d220317f394c.svg'}
          />
          <Menu
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
            items={[
              {
                id: 'wishlist',
                icon: 'wishlist',
                counter: true,
              },
              {
                id: 'cart',
                icon: 'cart',
                counter: true,
              }
            ]}
          />
        </div>
      </TopNavigation>
      <Section>
        <h2>Place here some content</h2>
      </Section>
    </Userland>
  </MemoryRouter>
)
