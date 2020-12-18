import React from 'react'
import Wrapper from '../../../_helpers/Wrapper'
import { Section } from '../../layout/Section/Section'
import { Container } from '../../layout/Container/Container'
import { Color } from '../Color'

export default {
  title: '👋 Get started/ Colors',
  component: Color,
  parameters: {
    docs: { 
        description: { 
            component: 'These are our five base colors: primary, black, dark, light and white. Additionally we got four colours for different events: success, notice, warning and error. Both base and event colors can be customized by providing a custom theme and will automatically create all these different shades.'
        } 
    },
  }
}

export const Overview = () => (
  <Section bgColor='transparent'>
      <Wrapper style={{ margin: 0, padding: 0 }}>
        <Color
          color='var(--color-primary-lighter)'
          colorLabel='-lighter'
        />
        <Color
          color='var(--color-primary-light)'
          colorLabel='-light'
        />
        <Color
          color='var(--color-primary)'
          colorLabel='Primary'
          mainColor
        />
        <Color
          color='var(--color-primary-dark)'
          colorLabel='-dark'
        />
        <Color
          color='var(--color-primary-darker)'
          colorLabel='-darker'
        />
      </Wrapper>
      
      <Wrapper style={{ margin: 0, padding: 0 }}>
        <Color
          color='var(--color-black)'
          colorLabel='Black'
          mainColor
        />
        <Color
          color='var(--color-black-90)'
          colorLabel='-90'
        />
        <Color
          color='var(--color-black-80)'
          colorLabel='-80'
        />
        <Color
          color='var(--color-black-70)'
          colorLabel='-70'
        />
        <Color
          color='var(--color-black-60)'
          colorLabel='-60'
        />
        <Color
          color='var(--color-black-50)'
          colorLabel='-50'
        />
        <Color
          color='var(--color-black-40)'
          colorLabel='-40'
        />
        <Color
          color='var(--color-black-30)'
          colorLabel='-30'
        />
        <Color
          color='var(--color-black-20)'
          colorLabel='-20'
        />
        <Color
          color='var(--color-black-10)'
          colorLabel='-10'
        />
      </Wrapper>

      <Wrapper style={{ margin: 0, padding: 0 }}>
        <Color
          color='var(--color-dark)'
          colorLabel='Dark'
          mainColor
        />
        <Color
          color='var(--color-dark-90)'
          colorLabel='-90'
        />
        <Color
          color='var(--color-dark-80)'
          colorLabel='-80'
        />
        <Color
          color='var(--color-dark-70)'
          colorLabel='-70'
        />
        <Color
          color='var(--color-dark-60)'
          colorLabel='-60'
        />
        <Color
          color='var(--color-dark-50)'
          colorLabel='-50'
        />
        <Color
          color='var(--color-dark-40)'
          colorLabel='-40'
        />
        <Color
          color='var(--color-dark-30)'
          colorLabel='-30'
        />
        <Color
          color='var(--color-dark-20)'
          colorLabel='-20'
        />
        <Color
          color='var(--color-dark-10)'
          colorLabel='-10'
        />
      </Wrapper>

      <Wrapper style={{ margin: 0, padding: 0 }}>
        <Color
          color='var(--color-light)'
          colorLabel='Light'
          textColor='var(--color-black)'
          mainColor
        />
        <Color
          color='var(--color-light-90)'
          colorLabel='-90'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-light-80)'
          colorLabel='-80'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-light-70)'
          colorLabel='-70'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-light-60)'
          colorLabel='-60'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-light-50)'
          colorLabel='-50'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-light-40)'
          colorLabel='-40'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-light-30)'
          colorLabel='-30'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-light-20)'
          colorLabel='-20'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-light-10)'
          colorLabel='-10'
          textColor='var(--color-black)'
        />
      </Wrapper>

      <Wrapper style={{ margin: 0, padding: 0 }}>
        <Color
          color='var(--color-white)'
          colorLabel='White'
          textColor='var(--color-black)'
          mainColor
        />
        <Color
          color='var(--color-white-90)'
          colorLabel='-90'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-white-80)'
          colorLabel='-80'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-white-70)'
          colorLabel='-70'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-white-60)'
          colorLabel='-60'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-white-50)'
          colorLabel='-50'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-white-40)'
          colorLabel='-40'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-white-30)'
          colorLabel='-30'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-white-20)'
          colorLabel='-20'
          textColor='var(--color-black)'
        />
        <Color
          color='var(--color-white-10)'
          colorLabel='-10'
          textColor='var(--color-black)'
        />
      </Wrapper>

      <Wrapper style={{ margin: 0, padding: 0 }}>
        <Color
          color='var(--color-success-lighter)'
          colorLabel='-lighter'
        />
        <Color
          color='var(--color-success-light)'
          colorLabel='-light'
        />
        <Color
          color='var(--color-success)'
          colorLabel='Success'
          mainColor
        />
        <Color
          color='var(--color-success-dark)'
          colorLabel='-dark'
        />
        <Color
          color='var(--color-success-darker)'
          colorLabel='-darker'
        />
      </Wrapper>

      <Wrapper style={{ margin: 0, padding: 0 }}>
        <Color
          color='var(--color-notice-lighter)'
          colorLabel='-lighter'
        />
        <Color
          color='var(--color-notice-light)'
          colorLabel='-light'
        />
        <Color
          color='var(--color-notice)'
          colorLabel='Notice'
          mainColor
        />
        <Color
          color='var(--color-notice-dark)'
          colorLabel='-dark'
        />
        <Color
          color='var(--color-notice-darker)'
          colorLabel='-darker'
        />
      </Wrapper>

      <Wrapper style={{ margin: 0, padding: 0 }}>
        <Color
          color='var(--color-warning-lighter)'
          colorLabel='-lighter'
        />
        <Color
          color='var(--color-warning-light)'
          colorLabel='-light'
        />
        <Color
          color='var(--color-warning)'
          colorLabel='Warning'
          mainColor
        />
        <Color
          color='var(--color-warning-dark)'
          colorLabel='-dark'
        />
        <Color
          color='var(--color-warning-darker)'
          colorLabel='-darker'
        />
      </Wrapper>

      <Wrapper style={{ margin: 0, padding: 0 }}>
        <Color
          color='var(--color-error-lighter)'
          colorLabel='-lighter'
        />
        <Color
          color='var(--color-error-light)'
          colorLabel='-light'
        />
        <Color
          color='var(--color-error)'
          colorLabel='Error'
          mainColor
        />
        <Color
          color='var(--color-error-dark)'
          colorLabel='-dark'
        />
        <Color
          color='var(--color-error-darker)'
          colorLabel='-darker'
        />
      </Wrapper>
    
  </Section>
)
