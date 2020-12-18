import React from 'react'
import styled from 'styled-components'

// I N T E RF A C E S
export interface TBodyProps {
  className?: string
}

// C O M P O N E N T
export const TBody: React.FC<TBodyProps> = (props) => {
  const { children, className } = props

  return (
    <StyledTBody className={className}>
      {children}
    </StyledTBody>
  )
}

// S T Y L E S
const StyledTBody = styled.tbody`
  tr:last-child td {
    border-bottom: 3px solid var(--color-black);
  }

  &:last-child{
    tr {
      &:last-child {
        td:first-child {
          border-bottom-left-radius: var(--radius);
        }
        td:last-child {
          border-bottom-right-radius: var(--radius);
        }
      } 
    }
  }
`
