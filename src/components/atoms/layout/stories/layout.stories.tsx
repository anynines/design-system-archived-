import React from 'react'

import { Col } from '../Col/Col'
import { Container } from '../Container/Container'
import { Row } from '../Row/Row'
import { Section } from '../Section/Section'
import { Page } from '../Page/Page'


export default {
  title: 'Atoms/Layout',
  component: Col, Container, Row, Section, Page,
}

export const Basic = () => (
  <Page>
    <Section>
      <Row>
        <Col >
          <span>Layout</span>
          <h1>Column</h1>
        </Col>
      </Row>
    </Section>
  </Page>
)
