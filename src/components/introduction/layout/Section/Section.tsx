import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

import { Container, containerSizeType } from '../Container/Container'

// I N T E R F A C E S
export interface SectionProps extends DefaultComponentProps {
  bgColor?: BgColorType
  containerSize?: containerSizeType
  id?: string
}

export type BgColorType = 'black' | 'dark' | 'primary' | 'light' | 'white' | 'transparent' | 'black-darker'

// C O M P O N E N T
export const Section: React.FC<SectionProps> = ({
  bgColor = 'transparent',
  children,
  className,
  containerSize,
  id,
  style
}) => {
  return (
    <StyledSection
      id={id}
      className={`section ${className} section--${bgColor}`}
      style={style}
    >
      <Container containerSize={containerSize}>
        {children}
      </Container>
    </StyledSection>
  )
}

// S T Y L E S
const StyledSection = styled.div`
  padding: calc(var(--space-xl) * 2) var(--space-xl);
  height: auto;

  &.section--dark, &.section--black, &.section--primary, &.section--black-darker {
    h1, h2, h3, h4, h5, h6, p, span {
      color: var(--color-white);
    }
  }

  &.section--dark {
    background-color: var(--color-dark);
  }

  &.section--black {
    background-color: var(--color-black);
  }

  &.section--black-darker {
    background-color: var(--color-black-darker);
  }

  &.section--primary {
    background-color: var(--color-primary);
  }

  &.section--light, &.section--white {
    h1, h2, h3, h4, h5, h6, p, span {
      color: var(--color-black);
    }
  }

  &.section--light {
    background-color: var(--color-light);
  }

  &.section--white {
    background-color: var(--color-white);
  }

  &.section--transparent {
    background-color: transparent;
  }
`
StyledSection.displayName = 'StyledSection'
