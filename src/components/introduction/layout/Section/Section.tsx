import React from 'react'
import styled from 'styled-components'

import { Container } from '../Container/Container'

// I N T E R F A C E S
export interface SectionProps {
  id?: string
  className?: string
  bgColor?: BgColorType
  style?: React.CSSProperties
}

export type BgColorType = 'black' | 'dark' | 'primary' | 'light' | 'white'

// C O M P O N E N T
export const Section: React.FC<SectionProps> = ({
  id,
  className,
  bgColor = 'dark',
  style,
  children
}) => {
  return (
    <StyledSection
      id={id}
      className={`${className} section--${bgColor}`}
      style={style}
    >
      <Container>
        {children}
      </Container>
    </StyledSection>
  )
}

// S T Y L E S
const StyledSection = styled.div`
  padding: calc(var(--space-xl) * 2) var(--space-xl);
  height: auto;

  &.section--dark {
    background-color: var(--color-dark);
  }
  &.section--black {
    background-color: var(--color-black);
  }
  &.section--primary {
    background-color: var(--color-primary);
  }
  &.section--light {
    * {
      color: var(--color-black);
    }
    background-color: var(--color-light);
  }
  &.section--white {
    * {
      color: var(--color-black);
    }
    background-color: var(--color-white);
  }
`
StyledSection.displayName = 'StyledSection'
