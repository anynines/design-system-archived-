import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface WrapperProps {
  height?: string
  bgColor?: WrapperBgColor
  direction?: WrapperDirection
  align?: WrapperAlignment
  justify?: WrapperAlignment
}

// T Y P E S
export type WrapperBgColor = 'light' | 'dark'
export type WrapperDirection = 'row' | 'column'
export type WrapperAlignment = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'space-between' | 'space-around'

// C O M P O N E N T
const Wrapper: React.FC<WrapperProps> = (props) => {
  const {
    height = '200px',
    bgColor = 'dark',
    direction = 'row',
    justify = 'center',
    align = 'center',
    children
  } = props
  return (
    <StyledWrapper
      style={{
        height,
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify
      }}
      className={bgColor}
    >
      { children }
    </StyledWrapper>
  )
}

// S T Y L E S
const StyledWrapper = styled.div`
  display: flex;
  padding: 50px;
  border-radius: var(--radius);

  &.light {
    background-color: var(--color-white);
  }

  &.dark {
    background-color: var(--color-dark);
  }
`

export default Wrapper
