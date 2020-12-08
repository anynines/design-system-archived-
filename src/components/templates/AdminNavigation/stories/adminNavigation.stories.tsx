import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { AdminNavigation, AdminNavigationProps } from '../AdminNavigation'


export default {
  title: '📄 Templates/AdminNavigation',
  component: AdminNavigation
}

export const Basic = (args: AdminNavigationProps) => (
  <Router>
    <AdminNavigation
      logoSrc='https://raw.githubusercontent.com/anynines-johannchopin/happy-static/master/a9s/assets/logos/light_vertical.svg?sanitize=true'
      links={[
        {
          id: '/users',
          icon: 'users',
          children: <>Users</>
        },
        {
          id: '/pages',
          icon: 'pages',
          children: <>Pages</>
        }
      ]}
      onLinkClick={(clickedLink) => {
        console.log(clickedLink)
      }}
      activeLink='/pages'
      setMode={(mode): void => { console.log(`Mode set to: ${mode}`) }}
      mode='dark'
      logoutUser={(): void => { console.log('logout user') }}
      userInfo={{
        avatar: 'https://www.anynines.com/assets/team/profiles/2x/fischer-dd47fbfc116c0069ffd414d3784f5895044aaef3e2411414c5f0fc637624f030.jpg',
        name: 'Morgan Kelin',
        description: 'CEO'
      }}
      style={{
        width: 260,
        height: '100vh'
      }}
    />
  </Router>
)
