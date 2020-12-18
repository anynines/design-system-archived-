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
import { ButtonGroup } from '../../atoms/Button/ButtonGroup'
import { Input } from '../../atoms/Input/Input'
import { Tooltip } from '../../atoms/Tooltip/Tooltip'
import { Form } from '../../organisms/Form/Form'
import { PageHeader } from '../../atoms/PageHeader/PageHeader'

export default {
  title: '📙 Pages/Adminland',
}

export const Edit = () => (
  <MemoryRouter>
    <Adminland>
      <AdminNavigationExample />
      <Page>
        <Container containerSize='sm'>
          <PageHeader>
            <h1>Edit something</h1>
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
                    autoFocus
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
                <Button type='submit' width='block'>Edit Something</Button>
              </ButtonGroup>
            </Form>
          </Section>
        </Container>
      </Page>
    </Adminland>
  </MemoryRouter>
)
