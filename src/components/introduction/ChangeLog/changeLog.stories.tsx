import React from 'react'
import { Section } from '../layout/Section/Section'
import { Container } from '../layout/Container/Container'
import { ChangeLog } from './ChangeLog'

// Changelogs
import v0_1_37 from './logs/0.1.37.json'
import v0_1_38 from './logs/0.1.38.json'
import v0_1_41 from './logs/0.1.41.json'
import v0_1_44 from './logs/0.1.44.json'
import v0_3_0 from './logs/0.3.0.json'
import v0_3_1 from './logs/0.3.1.json'
import v0_4_0 from './logs/0.4.0.json'
import v0_4_3 from './logs/0.4.3.json'
import v0_4_4 from './logs/0.4.4.json'
import v0_4_6 from './logs/0.4.6.json'
import v0_5_0 from './logs/0.5.0.json'
import v0_5_8 from './logs/0.5.8.json'
import v0_6_0 from './logs/0.6.0.json'
import v0_6_1 from './logs/0.6.1.json'
import v0_7_0 from './logs/0.7.0.json'
import v0_7_6 from './logs/0.7.6.json'
import v0_7_8 from './logs/0.7.8.json'
import v0_7_9 from './logs/0.7.9.json'
import v0_8_0 from './logs/0.8.0.json'
import v0_8_1 from './logs/0.8.1.json'
import v0_8_2 from './logs/0.8.2.json'

export default {
  title: '👋 Get started/Changelog',
}

export const Welcome = () => (
  <Section bgColor='transparent'>
    <Container style={{ marginTop: 50, width: 800 }}>
      <h2 style={{ marginBottom: 30 }}>Changelog</h2>
      <ChangeLog
        version='0.8.2'
        date='8. July 2021'
        isPublished={true}
        changelog={v0_8_2}
      />
      <ChangeLog
        version='0.8.1'
        date='5. July 2021'
        isPublished={true}
        changelog={v0_8_1}
      />
      <ChangeLog
        version='0.8.0'
        date='28. Mai 2021'
        isPublished={false}
        changelog={v0_8_0}
      />
      <ChangeLog
        version='0.7.9'
        date='30. June 2021'
        isPublished={true}
        changelog={v0_7_9}
      />
      <ChangeLog
        version='0.7.8'
        date='30. June 2021'
        isPublished={true}
        changelog={v0_7_8}
      />
      <ChangeLog
        version='0.7.6'
        date='20. June 2021'
        isPublished={true}
        changelog={v0_7_6}
      />
      <ChangeLog
        version='0.7.0'
        date='11. Mai 2021'
        isPublished={true}
        changelog={v0_7_0}
      />
      <ChangeLog
        version='0.6.1'
        date='22. April 2021'
        isPublished={true}
        changelog={v0_6_1}
      />
      <ChangeLog
        version='0.6.0'
        date='20. April 2021'
        isPublished={true}
        changelog={v0_6_0}
      />
      <ChangeLog
        version='0.5.1'
        date='13. April 2021'
        isPublished={true}
        changelog={v0_5_8}
      />
      <ChangeLog
        version='0.5.0'
        date='07. April 2021'
        isPublished={true}
        changelog={v0_5_0}
      />
      <ChangeLog
        version='0.4.6'
        date='26. March 2021'
        isPublished={true}
        changelog={v0_4_6}
      />
      <ChangeLog
        version='0.4.4'
        date='15. March 2021'
        isPublished={true}
        changelog={v0_4_4}
      />
      <ChangeLog
        version='0.4.3'
        date='09. March 2021'
        isPublished={true}
        changelog={v0_4_3}
      />
      <ChangeLog
        version='0.4.0'
        date='01. March 2021'
        isPublished={true}
        changelog={v0_4_0}
      />
      <ChangeLog
        version='0.3.1'
        date='13. January 2021'
        isPublished={true}
        changelog={v0_3_1}
      />
      <ChangeLog
        version='0.3.0'
        date='22. December 2020'
        isPublished={true}
        changelog={v0_3_0}
      />
      <ChangeLog
        version='0.1.44'
        date='11. December 2020'
        isPublished={true}
        changelog={v0_1_44}
      />
      <ChangeLog
        version='0.1.41'
        date='09. December 2020'
        isPublished
        changelog={v0_1_41}
      />
      <ChangeLog
        version='0.1.38'
        date='08. December 2020'
        isPublished
        changelog={v0_1_38}
      />
      <ChangeLog
        version='0.1.37'
        date='08. December 2020'
        isPublished
        changelog={v0_1_37}
      />
    </Container>
  </Section>
)
