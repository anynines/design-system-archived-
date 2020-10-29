import React, { FC } from 'react'
import styled from 'styled-components'
import { TableChildrenProps } from './Table'

// T Y P E S
export type CellType = 'head' | 'body'

export interface CellProps extends TableChildrenProps {
  type: CellType
  component?: JSX.Element
  value: string | boolean | number
}

// C O M P O N E N T S

export const Cell: FC<CellProps> = (props) => {
  console.log(props)
  const {
    // data,
    // sortDirection,
    // sortedBy,
    // setSortDirection,
    // setData,
    // setSortedBy,
    // onSort,
    type,
    value,
    component
  } = props
  if (type === 'head') {
    return (
      <StyledHeadCell>
        {value.toString() || component}
      </StyledHeadCell>
    )
  }
  return (
    <StyledBodyCell>
      {value.toString() || component}
    </StyledBodyCell>
  )
}

const StyledHeadCell = styled.th`
`
const StyledBodyCell = styled.td`
`
