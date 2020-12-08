import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Adminland } from '../Adminland'
import { AdminNavigation } from '../../../AdminNavigation/AdminNavigation'
import { Section } from '../../../../introduction/layout/Section/Section'
import { Page } from '../../../../introduction/layout/Page/Page'

export default {
  title: '📄 Templates/Layouts/Adminland',
  component: Adminland,
}

export const Basic = () => (
  <MemoryRouter>
    <Adminland>
      <AdminNavigation
        activeLink="/pages"
        links={[
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
        logoSrc="https://raw.githubusercontent.com/anynines-johannchopin/happy-static/master/a9s/assets/logos/light_vertical.svg?sanitize=true"
        logoutUser={() => {}}
        mode="dark"
        onLinkClick={function noRefCheck() {}}
        setMode={function noRefCheck() {}}
        style={{
        }}
        userInfo={{
          avatar: 'https://www.anynines.com/assets/team/profiles/2x/fischer-dd47fbfc116c0069ffd414d3784f5895044aaef3e2411414c5f0fc637624f030.jpg',
          description: 'CEO',
          name: 'Morgan Kelin'
        }}
      />
      <Page>
        <Section>
          <h2>Place here some content</h2>
        </Section>
      </Page>
    </Adminland>
  </MemoryRouter>
)
