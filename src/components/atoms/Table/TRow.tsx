import React from 'react'
import styled from 'styled-components'

import { TCell } from './TCell'

// I N T E R F A C E S
export interface TRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  values?: (number | string)[]
  className?: string
}

// C O M P O N E N T
const TRow: React.FC<TRowProps> = (props) => {
  const { values, className, children, ...rest } = props

  const renderCells = (): React.ReactNode | JSX.Element[] => {
    if (values) {
      return values.map((value) => {
        return <TCell value={value} />
      })
    }

    return children
  }

  return (
    <StyledTRow {...rest} className={className}>
      {renderCells()}
    </StyledTRow>
  )
}

// S T Y L E S
const StyledTRow = styled.tr`

  td {
    border-left: 5px solid transparent;
    color: var(--color-white-70);
    transition: var(--transition);
  }

  td:first-child, td:last-child {
    color: var(--color-white);
  }

  &:hover {
    td {
      background-color: var(--color-primary);
      color: var(--color-white);
    }
  }

  &.opened {
    td {
      background-color: var(--color-dark);
    }
  }

  &.green td {
    background-color: var(--color-success-dark);
  }

  &.red td {
    background-color: var(--color-error-dark);
  }

  &.green td:first-child, &.green td:last-child {
    background-color: var(--color-success);
  }

  &.red td:first-child, &.red td:last-child {
    background-color: var(--color-error);
  }
`

export default TRow
