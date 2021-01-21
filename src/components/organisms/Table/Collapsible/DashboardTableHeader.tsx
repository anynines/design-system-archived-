import React from 'react'

import { getShortenedMonth, MONTHS, QUARTERS } from '@helpers/index'

// C O M P O N E N T S
import { YearDivision } from './YearDivision'
import Symbol from '@components/atoms/Symbol'
import TableHead from '@components/atoms/Table/Head'
import TableHeadCell from '@components/atoms/Table/HeadCell'
import TableRow from '@components/atoms/Table/Row'

// I N T E R F A C E
export interface DashboardTableHeaderProps {
  year: number
  division: YearDivision
}

// C O M P O N E N T
const DashboardTableHeader: React.FC<DashboardTableHeaderProps> = (props) => {
  const { division, year } = props

  const renderTableHeaderDivision = (): JSX.Element[] => {
    if (division === 'quarters') {
      return QUARTERS.map((quarter) => {
        return (
          <TableHeadCell key={`quarter-${quarter}`}>{quarter}</TableHeadCell>
        )
      })
    }

    return MONTHS.map((month) => {
      return (
        <TableHeadCell key={`month-${month}`} className='capitalized'>{getShortenedMonth(month)}</TableHeadCell>
      )
    })
  }

  return (
    <TableHead>
      <TableRow>
        <TableHeadCell>Customers</TableHeadCell>
        {renderTableHeaderDivision()}

        <TableHeadCell>
          <Symbol entity='sum' />
          {' '}
          {year}
        </TableHeadCell>
      </TableRow>
    </TableHead>
  )
}

export default DashboardTableHeader
