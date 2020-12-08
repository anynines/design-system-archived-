import React from 'react'

import { Col } from '../Col/Col'
import { Container } from '../Container/Container'
import { Row } from '../Row/Row'
import { Section } from '../Section/Section'
import { Page } from '../Page/Page'


export default {
  title: '👋 Get started/Layout',
  component: Col, Container, Row, Section, Page,
}

const ColumnStyles: React.CSSProperties = {
  backgroundColor: 'var(--color-dark-10)',
  border: 'var(--border)',
  borderRadius: 'var(--radius)',
  padding: 16
}

export const Sections = () => (
  <>
    <Section bgColor='black'>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
    </Section>
    <Section bgColor='dark'>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
    </Section>
    <Section bgColor='primary'>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
    </Section>
    <Section bgColor='light'>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
    </Section>
    <Section bgColor='white'>
      <Row>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
        <Col style={ColumnStyles}>
          <p style={{margin: 0}}>Content</p>
        </Col>
      </Row>
    </Section>
  </>
)

export const RowsAndColumns = () => (
  <Section bgColor='transparent'>
    <Row>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
    </Row>

    <Row>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
    </Row>

    <Row>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
    </Row>

    <Row>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
    </Row>

    <Row>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
    </Row>

    <Row>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
      <Col style={ColumnStyles}>
        <p style={{margin: 0}}>Content</p>
      </Col>
    </Row>
  </Section>
)
