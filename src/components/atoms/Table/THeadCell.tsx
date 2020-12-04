import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface THeadCellProps {
  value?: number | string
  className?: string
}

// C O M P O N E N T
export const THeadCell: React.FC<THeadCellProps> = (props) => {
  const { value, className, children } = props

  return (
    <StyledTHeadCell className={className}>
      {value || children}
    </StyledTHeadCell>
  )
}

// S T Y L E S
const StyledTHeadCell = styled.th`
  border: none;
  background-color: var(--color-dark);
  padding: 10px;
  text-align: left;
  font-size: 14px;
`
