import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface WrapperProps {
  height?: string
  bgColor?: WrapperBgColor
  direction?: WrapperDirection
  align?: WrapperAlignment
  justify?: WrapperAlignment
  flexWrap?: WrapperFlexWrap
  style?: React.CSSProperties
}

// T Y P E S
export type WrapperBgColor = 'light' | 'dark' | 'black'
export type WrapperDirection = 'row' | 'column'
export type WrapperAlignment = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'space-between' | 'space-around'
export type WrapperFlexWrap = 'nowrap' | 'wrap'

// C O M P O N E N T
const Wrapper: React.FC<WrapperProps> = ({
  height = 'auto',
  bgColor = 'dark',
  direction = 'row',
  justify = 'center',
  align = 'center',
  flexWrap = 'nowrap',
  children
}) => {
  return (
    <StyledWrapper
      style={{
        height,
        flexDirection: direction,
        alignItems: align,
        flexWrap,
        justifyContent: justify
      }}
      className={bgColor}
    >
      {children}
    </StyledWrapper>
  )
}

// S T Y L E S
const StyledWrapper = styled.div`
  display: flex;
  margin: var(--space-xl);
  padding: var(--space-xl);
  border-radius: var(--radius);

  &.light {
    background-color: var(--color-white);
  }

  &.dark {
    background-color: var(--color-dark);
  }

  &.black {
    background-color: var(--color-black);
  }
`

export default Wrapper
