import React from 'react'

import { AdminNavigation } from '../AdminNavigation'
import { Logo } from '../../../atoms/Logo/Logo'
import { Menu } from '../../../molecules/Menu/Menu'
import { UserNav } from '../../../organisms/UserNav/UserNav'

export const AdminNavigationExample: React.FC = () => {
  const brandLogo = 'https://raw.githubusercontent.com/anynines-johannchopin/happy-static/master/a9s/assets/logos/light_vertical.svg?sanitize=true'

  const userAvatar = 'https://www.anynines.com/assets/team/profiles/2x/fischer-dd47fbfc116c0069ffd414d3784f5895044aaef3e2411414c5f0fc637624f030.jpg'

  return (
    <AdminNavigation>
      <Logo
        src={brandLogo}
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
        avatar={userAvatar}
        name='Julian Fischer'
        description='CEO'
        mode='dark'
        setMode={(): void => { console.log('setMode') }}
        logoutUser={(): void => { console.log('logoutUser') }}
      />
    </AdminNavigation>
  )
}
