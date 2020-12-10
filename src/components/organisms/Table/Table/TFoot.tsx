import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface TFootProps {
  className?: string
}

// C O M P O N E N T
export const TFoot: React.FC<TFootProps> = (props) => {
  const { children, className } = props

  return (
    <StyledTFoot className={className}>
      {children}
    </StyledTFoot>
  )
}

// S T Y L E S
const StyledTFoot = styled.tfoot`
  td {
    font-weight: 900;
  }
  
  &:last-child{
    tr {
      &:last-child {
        td:first-child {
          border-bottom-left-radius: 5px;
        }
        td:last-child {
          border-bottom-right-radius: 5px;
        }
      } 
    }
  }
`
