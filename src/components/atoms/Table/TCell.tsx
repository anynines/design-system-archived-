import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface TCellProps {
  value?: number | string
  className?: string
}

// C O M P O N E N T
export const TCell: React.FC<TCellProps> = (props) => {
  const { value, children, className } = props

  return (
    <StyledTCell className={className}>
      {value || children}
    </StyledTCell>
  )
}

// S T Y L E S
const StyledTCell = styled.td`
  border: none;
  background-color: var(--color-dark-50);
  padding: 10px;
  text-align: left;
  white-space: nowrap;
  font-size: 14px;

  &:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-dark);
    text-align: left;

    a {
      display: flex;
      flex-direction: center;
      justify-content: center;
    }
  }

  &:last-child {
    background-color: var(--color-dark);
  }

  &.highlight-primary {
    border-left: 5px solid var(--color-primary);
  }

  &.green {
    background-color: var(--color-success) !important;
  }

  &.red {
    background-color: var(--color-error) !important;
  }
`
