import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface THeadProps {
  className?: string
}

// C O M P O N E N T
export const THead: React.FC<THeadProps> = (props) => {
  const { children, className } = props

  return (
    <StyledTHead className={className}>
      {children}
    </StyledTHead>
  )
}

// S T Y L E S
const StyledTHead = styled.thead`

`
