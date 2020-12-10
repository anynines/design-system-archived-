import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { AdminNavigation, AdminNavigationProps } from '../AdminNavigation'
import { Logo } from '../../../atoms/Logo/Logo'
import { Menu } from '../../../molecules/Menu/Menu'
import { UserNav } from '../../../organisms/UserNav/UserNav'

export default {
  title: '📄 Templates/AdminNavigation',
  component: AdminNavigation
}

export const Basic = (args: AdminNavigationProps) => (
  <Router>
    <AdminNavigation>
      <Logo
        src='https://raw.githubusercontent.com/anynines-johannchopin/happy-static/master/a9s/assets/logos/light_vertical.svg?sanitize=true'
        vertical
      />
      <Menu
        selectedItem='/users'
        items={[
          {
            children: <>Users</>,
            icon: 'users',
            id: '/users'
          },
          {
            children: <>Pages</>,
            icon: 'pages',
            id: '/pages'
          }
        ]}
        vertical
      />
      <UserNav
        avatar='https://www.anynines.com/assets/team/profiles/2x/fischer-dd47fbfc116c0069ffd414d3784f5895044aaef3e2411414c5f0fc637624f030.jpg'
        name='Julian Fischer'
        description='CEO'
        mode='dark'
        setMode={() => {}}
        logoutUser={() => {}}
      />
    </AdminNavigation>
  </Router>
)
