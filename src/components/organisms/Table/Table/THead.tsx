import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface THeadProps {
  className?: string
}

// C O M P O N E N T
export const THead: React.FC<THeadProps> = (props) => {
  const { children, className, ...rest } = props

  return (
    <StyledTHead className={className} {...rest}>
      {children}
    </StyledTHead>
  )
}

// S T Y L E S
const StyledTHead = styled.thead`
  tr {
    &:last-child {
      td:first-child {
        border-top-left-radius: var(--radius);
      }
      td:last-child {
        border-top-right-radius: var(--radius);
      }
    } 
  }
`
