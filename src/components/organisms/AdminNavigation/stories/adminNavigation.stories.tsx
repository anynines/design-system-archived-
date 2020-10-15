import React from 'react'
import { action } from "@storybook/addon-actions"
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

import { AdminNavigation, AdminNavigationProps } from '../AdminNavigation'


export default {
  title: 'Organisms/AdminNavigation',
  component: AdminNavigation
}

const StyledAdminNavigation = styled(AdminNavigation)`
  width: 260px;
  height: 100vh;
`


export const Basic = (args: AdminNavigationProps) => (
  <Router>
    <StyledAdminNavigation
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
    />
  </Router>
)
