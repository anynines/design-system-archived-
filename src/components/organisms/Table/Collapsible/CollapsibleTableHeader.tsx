import React from 'react'

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
        <THeadCell key={`col-${col}`}>{col}</THeadCell>
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

export default CollapsibleTableHeader
