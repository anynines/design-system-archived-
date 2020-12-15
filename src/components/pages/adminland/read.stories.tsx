import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Adminland } from '../../templates/layouts/Adminland/Adminland'
import { AdminNavigationExample } from '../../templates/AdminNavigation/examples/AdminNavigationExample'
import { Container } from '../../introduction/layout/Container/Container'
import { Section } from '../../introduction/layout/Section/Section'
import { Row } from '../../introduction/layout/Row/Row'
import { Col } from '../../introduction/layout/Col/Col'
import { Page } from '../../introduction/layout/Page/Page'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import { Tooltip } from '../../atoms/Tooltip/Tooltip'
import { Form } from '../../organisms/Form/Form'
import { PageHeader } from '../../atoms/PageHeader/PageHeader'

export default {
  title: '📙 Pages/Adminland',
}

export const Read = () => (
  <MemoryRouter>
    <Adminland>
      <AdminNavigationExample />
      <Page>
        <Container containerSize='sm'>
          <PageHeader>
            <h1>John Doe</h1>
            <div className='page-header-toolbar'>
              <Button
                iconOnly
                type='black'
                icon='edit'
                className='tooltip-wrapper'
              >
                <Tooltip>Edit John Doe</Tooltip>
              </Button>
              <Button
                iconOnly
                style={{ marginLeft: 20 }}
                type='black'
                icon='bin'
                className='tooltip-wrapper'
              >
                <Tooltip>Delete John Doe</Tooltip>
              </Button>
              
            </div>
          </PageHeader>
          <Section bgColor='black-darker'>
            <Form>
              <Row style={{flexWrap: 'nowrap'}}>
                <Col>
                  <Input
                    disabled
                    icon='user'
                    label='First Name'
                    name='firstName'
                    type='text'
                    value='John'
                  />
                  
                </Col>
                <Col>
                  <Input
                    disabled
                    icon='user'
                    label='Last Name'
                    name='lastName'
                    type='text'
                    value='Doe'
                  />
                </Col>
              </Row>
              <Input
                disabled
                icon='send'
                label='Email'
                name='email'
                type='email'
                value='johndoe@gmail.com'
              />
              <Input
                disabled
                icon='home'
                label='Address'
                name='address'
                type='text'
                style={{ marginBottom: 0 }}
                value='Rosenstraße 42, 66111 Saarbrücken'
              />
            </Form>
          </Section>
        </Container>
      </Page>
    </Adminland>
  </MemoryRouter>
)
