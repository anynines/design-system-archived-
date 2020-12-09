import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Adminland } from '../../../templates/layouts/Adminland/Adminland'
import { AdminNavigation } from '../../../templates/AdminNavigation/AdminNavigation'
import { Container } from '../../../introduction/layout/Container/Container'
import { Section } from '../../../introduction/layout/Section/Section'
import { Row } from '../../../introduction/layout/Row/Row'
import { Col } from '../../../introduction/layout/Col/Col'
import { Page } from '../../../introduction/layout/Page/Page'
import { Button } from '../../../atoms/Button/Button'
import { ButtonGroup } from '../../../atoms/Button/ButtonGroup'
import { Logo } from '../../../atoms/Logo/Logo'
import { Input } from '../../../atoms/Input/Input'
import { Tooltip } from '../../../atoms/Tooltip/Tooltip'
import { Menu } from '../../../molecules/Menu/Menu'
import { UserNav } from '../../../organisms/UserNav/UserNav'
import { Form } from '../../../organisms/Form/Form'
import { PageHeader } from '../../../atoms/PageHeader/PageHeader'

export default {
  title: '📙 Pages/Adminland/Create',
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
      <Page>
        <Container containerSize='sm'>
          <PageHeader>
            <h1>Create something</h1>
            <Button
              iconOnly
              type='black'
              icon='bin'
              className='tooltip-wrapper'
            >
              <Tooltip>Delete Something</Tooltip>
            </Button>
          </PageHeader>
          <Section bgColor='black-darker'>
            <Form onSubmit={(data: Record<string, string> | undefined, setValue: any): void => { // eslint-disable-line
              if (data) {
                console.log(data)
                setValue('firstName', '')
                setValue('lastName', '')
                setValue('address', '')
                setValue('address', '')
              }
            }}>
              <Row style={{flexWrap: 'nowrap'}}>
                <Col>
                  <Input
                    name='firstName'
                    type='text'
                    icon='user'
                    label='First Name'
                    value='John'
                    autoFocus={true}
                  />
                  
                </Col>
                <Col>
                  <Input
                    name='lastName'
                    type='text'
                    icon='user'
                    label='Last Name'
                    value='Doe'
                  />
                </Col>
              </Row>
              <Input
                name='email'
                type='email'
                icon='send'
                label='Email'
                value='johndoe@gmail.com'
              />
              <Input
                name='address'
                type='text'
                icon='home'
                label='Address'
                value='Rosenstraße 42, 66111 Saarbrücken'
              />
              <ButtonGroup>
                <Button type='black' width='block'>Cancel</Button>
                <Button type='submit' width='block'>Submit</Button>
              </ButtonGroup>
            </Form>
          </Section>
        </Container>
      </Page>
    </Adminland>
  </MemoryRouter>
)
