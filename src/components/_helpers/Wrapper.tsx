import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface WrapperProps {
  align?: WrapperAlignment
  bgColor?: WrapperBgColor
  className?: string
  direction?: WrapperDirection
  flexWrap?: WrapperFlexWrap
  height?: string
  justify?: WrapperAlignment
  style?: React.CSSProperties
}

// T Y P E S
export type WrapperBgColor = 'light' | 'dark' | 'black' | 'transparent'
export type WrapperDirection = 'row' | 'column'
export type WrapperAlignment = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'space-between' | 'space-around'
export type WrapperFlexWrap = 'nowrap' | 'wrap'

// C O M P O N E N T
const Wrapper: React.FC<WrapperProps> = ({
  align = 'center',
  children,
  className,
  bgColor = 'transparent',
  direction = 'row',
  flexWrap = 'nowrap',
  height = 'auto',
  justify = 'center'
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
      className={`styled-wrapper ${bgColor} ${className}`}
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

  &.transparent {
    background-color: transparent;
  }
`

export default Wrapper
