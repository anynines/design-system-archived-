import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface TableProps {
  className?: string
}

// C O M P O N E N T
export const Table: React.FC<TableProps> = (props) => {
  const { children, className } = props

  return (
    <StyledTable className={className}>
      {children}
    </StyledTable>
  )
}

// S T Y L E S
const StyledTable = styled.table`
  overflow: hidden;
  width: 100%;
  border-radius: calc(var(--radius) * 2);

  &.scrollable {
    display: block;
    overflow: auto;
  }
`
