import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Adminland } from '../Adminland'
import { AdminNavigation } from '../../../AdminNavigation/AdminNavigation'
import { Container } from '../../../../introduction/layout/Container/Container'
import { Section } from '../../../../introduction/layout/Section/Section'
import { Page } from '../../../../introduction/layout/Page/Page'
import { Logo } from '../../../../atoms/Logo/Logo'
import { Button } from '../../../../atoms/Button/Button'
import { Menu } from '../../../../molecules/Menu/Menu'
import { UserNav } from '../../../AdminNavigation/helpers/UserNav'
import { PageHeader } from '../../../../atoms/PageHeader/PageHeader'

export default {
  title: '📄 Templates/Layouts/Adminland',
  component: Adminland,
}

export const Basic = () => (
  <MemoryRouter>
    <Adminland>
      <AdminNavigation>
        <Logo
          src='https://raw.githubusercontent.com/anynines-johannchopin/happy-static/master/a9s/assets/logos/light_vertical.svg?sanitize=true'
          vertical
        />
        <Menu
          items={[
            {
              children: <>Users</>,
              icon: 'users',
              id: '/users'
            },
            {
              children: <>Pages</>,
              icon: 'pages',
              id: '/users'
            }
          ]}
          vertical
        />
        <UserNav
          avatar='https://www.anynines.com/assets/team/profiles/2x/fischer-dd47fbfc116c0069ffd414d3784f5895044aaef3e2411414c5f0fc637624f030.jpg'
          name='Julian Fischer'
          description='CEO'
          mode='dark'
          setMode={function noRefCheck() { }}
          logoutUser={() => { }}
        />
      </AdminNavigation>
      <Page>
        <Container>
          <PageHeader>
            <h1>Feature Name</h1>
            <Button size='md'>
              Do something
            </Button>
          </PageHeader>
          <Section>
            <span>Some Component</span>
          </Section>
          <Section>
            <span>Some other Component</span>
          </Section>
        </Container>
      </Page>
    </Adminland>
  </MemoryRouter>
)
