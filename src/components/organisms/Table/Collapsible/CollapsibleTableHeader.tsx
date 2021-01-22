import React from 'react'

import { getShortenedMonth, MONTHS, QUARTERS } from '../helpers/index'

// C O M P O N E N T S
import { YearDivision } from './CollapsibleTable'
import Symbol from './Symbol'
import { THead } from '../Table/THead'
import { THeadCell } from '../Table/THeadCell'
import { TRow } from '../Table/TRow'

// I N T E R F A C E
export interface CollapsibleTableHeaderProps {
  year: number
  division: YearDivision
}

// C O M P O N E N T
const CollapsibleTableHeader: React.FC<CollapsibleTableHeaderProps> = (props) => {
  const { division, year } = props

  const renderTableHeaderDivision = (): JSX.Element[] => {
    if (division === 'quarters') {
      return QUARTERS.map((quarter) => {
        return (
          <THeadCell key={`quarter-${quarter}`}>{quarter}</THeadCell>
        )
      })
    }

    return MONTHS.map((month) => {
      return (
        <THeadCell key={`month-${month}`} className='capitalized'>{getShortenedMonth(month)}</THeadCell>
      )
    })
  }

  return (
    <THead>
      <TRow>
        <THeadCell>Customers</THeadCell>
        {renderTableHeaderDivision()}

        <THeadCell>
          <Symbol entity='sum' />
          {' '}
          {year}
        </THeadCell>
      </TRow>
    </THead>
  )
}

export default CollapsibleTableHeader
