import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Adminland } from '../../templates/layouts/Adminland/Adminland'
import { AdminNavigationExample } from '../../templates/AdminNavigation/examples/AdminNavigationExample'
import { Container } from '../../introduction/layout/Container/Container'
import { Section } from '../../introduction/layout/Section/Section'
import { Page } from '../../introduction/layout/Page/Page'
import { Button } from '../../atoms/Button/Button'
import { Tooltip } from '../../atoms/Tooltip/Tooltip'
import { PageHeader } from '../../atoms/PageHeader/PageHeader'

export default {
  title: '📙 Pages/Adminland',
}

export const Index = () => (
  <MemoryRouter>
    <Adminland>
      <AdminNavigationExample />
      <Page>
        <Container containerSize='sm'>
          <PageHeader>
            <h1>Somethings</h1>
            <div className='page-header-toolbar'>
              <Button
                iconOnly
                type='black'
                icon='grid4'
                className='tooltip-wrapper'
              >
                <Tooltip>This could do something</Tooltip>
              </Button>
              <Button
                iconOnly
                style={{ marginLeft: 20 }}
                type='black'
                icon='grid1'
                className='tooltip-wrapper'
              >
                <Tooltip>Something else</Tooltip>
              </Button>
            </div>
          </PageHeader>
          <Section bgColor='black-darker'>
            <span>Table will soon come here</span>
          </Section>
        </Container>
      </Page>
    </Adminland>
  </MemoryRouter>
)
