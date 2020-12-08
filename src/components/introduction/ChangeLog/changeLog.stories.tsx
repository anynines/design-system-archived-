import React from 'react'
import { Section } from '../layout/Section/Section'
import { Container } from '../layout/Container/Container'
import { ChangeLog } from './ChangeLog'

// Changelogs
import v0_1_37 from './logs/0.1.37.json'
import v0_1_38 from './logs/0.1.38.json'

export default {
  title: '👋 Get started/Changelog',
}

export const Welcome = () => (
  <Section bgColor='transparent'>
    <Container style={{ marginTop: 50, width: 800 }}>
      <h2 style={{ marginBottom: 30 }}>Changelog</h2>
      <ChangeLog
        version='0.1.38'
        date='08. December 2020'
        isPublished={false}
        changelog={v0_1_38}
      />
      <ChangeLog
        version='0.1.37'
        date='08. December 2020'
        isPublished={true}
        changelog={v0_1_37}
      />
    </Container>
  </Section>
)