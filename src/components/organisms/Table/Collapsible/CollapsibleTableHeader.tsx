import React from 'react'
import styled from 'styled-components'

// C O M P O N E N T
import { THead } from '../Table/THead'
import { THeadCell } from '../Table/THeadCell'
import { TRow } from '../Table/TRow'

// I N T E R F A C E
export interface CollapsibleTableHeaderProps {
  headerData: string[]
}

// C O M P O N E N T
const CollapsibleTableHeader: React.FC<CollapsibleTableHeaderProps> = (props) => {
  const { headerData } = props

  const renderTableHeaderColumns = (): JSX.Element[] => {
    return headerData.map((col) => {
      return (
        <StyledCell key={`col-${col}`}>{col}</StyledCell>
      )
    })
  }

  return (
    <THead>
      <TRow>
        {renderTableHeaderColumns()}
      </TRow>
    </THead>
  )
}

const StyledCell = styled(THeadCell)`
  background-color: var(--color-dark)
`

export default CollapsibleTableHeader
