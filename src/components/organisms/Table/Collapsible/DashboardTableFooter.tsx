import React from 'react'

import {
  MONTHS,
  QUARTERS,
  getCustomerAnnualCosts,
  roundN,
  getCustomersQuarterTurnover,
  getCustomersMonthTurnover,
  getMonthsQuarter,
  getAnnualCosts,
  getTeamsCosts,
  roundNString
} from '@helpers/index'
import { CustomerOverview, AnnualCosts } from '@types'

// C O M P O N E N T S
import { YearDivision } from './YearDivision'
import Symbol from '@components/atoms/Symbol'
import TableFoot from '@components/atoms/Table/Foot'
import TableRow from '@components/atoms/Table/Row'
import TableCell from '@components/atoms/Table/Cell'

// I N T E R F A C E
export interface DashboardTableFooterProps {
  division: YearDivision
  customersData: CustomerOverview[]
  costsData: Partial<AnnualCosts>
}

// C O M P O N E N T
const DashboardTableFooter: React.FC<DashboardTableFooterProps> = (props) => {
  const { division, customersData, costsData } = props

  const renderTurnoverCells = (): JSX.Element[] => {
    if (division === 'quarters') {
      return QUARTERS.map((quarter) => {
        return (
          <TableCell key={`turnover-${quarter}`}>
            {roundNString(getCustomersQuarterTurnover(customersData, quarter))}
            {' '}
            <Symbol entity='euro' />
          </TableCell>
        )
      })
    }

    return MONTHS.map((month) => {
      return (
        <TableCell key={`turnover-${month}`}>
          {roundNString(getCustomersMonthTurnover(customersData, month))}
          {' '}
          <Symbol entity='euro' />
        </TableCell>
      )
    })
  }

  const getAnnualTurnover = (): number => {
    let costs = 0

    customersData.forEach((customer) => {
      costs += getCustomerAnnualCosts(customer)
    })

    return roundN(costs, 2)
  }

  const getAnnualDifference = (): number => {
    return roundN(getAnnualTurnover() - getAnnualCosts(costsData), 2)
  }

  const renderTurnoverRow = (): JSX.Element => {
    return (
      <TableRow className='green'>
        <TableCell>Turnover</TableCell>
        {renderTurnoverCells()}
        <TableCell>
          {roundNString(getAnnualTurnover())}
          {' '}
          <Symbol entity='euro' />
        </TableCell>
      </TableRow>
    )
  }

  const renderCostsCells = (): JSX.Element[] => {
    if (division === 'quarters') {
      return QUARTERS.map((quarter) => {
        const quarterCosts = costsData[quarter]

        return (
          <TableCell key={`costs-${quarter}`}>
            {quarterCosts ? roundNString(getTeamsCosts(quarterCosts)) : roundNString(0)}
            {' '}
            <Symbol entity='euro' />
          </TableCell>
        )
      })
    }

    return MONTHS.map((month) => {
      const quarterCosts = costsData[getMonthsQuarter(month)]

      return (
        <TableCell key={`costs-${month}`}>
          {quarterCosts
            ? roundNString(roundN(getTeamsCosts(quarterCosts) / 3, 2), 2)
            : roundNString(0)}
          {' '}
          <Symbol entity='euro' />
        </TableCell>
      )
    })
  }

  const renderDifferenceCells = (): JSX.Element[] => {
    if (division === 'quarters') {
      return QUARTERS.map((quarter) => {
        const quarterCostsObject = costsData[quarter]
        const quarterCosts = quarterCostsObject ? getTeamsCosts(quarterCostsObject) : 0
        const quarterTurnover = getCustomersQuarterTurnover(customersData, quarter)
        const difference = roundN(quarterTurnover - quarterCosts, 2)
        const isDifferenceNegative = difference < 0

        return (
          <TableCell
            key={`difference-${quarter}`}
            className={isDifferenceNegative ? 'red' : 'green'}
          >
            {roundNString(difference)}
            {' '}
            <Symbol entity='euro' />
          </TableCell>
        )
      })
    }

    return MONTHS.map((month) => {
      const quarterCosts = costsData[getMonthsQuarter(month)]
      const monthCosts = quarterCosts ? roundN(getTeamsCosts(quarterCosts) / 3, 2) : 0
      const monthTurnover = getCustomersMonthTurnover(customersData, month)
      const difference = roundN(monthTurnover - monthCosts, 2)
      const isDifferenceNegative = difference < 0

      return (
        <TableCell
          key={`difference-${month}`}
          className={isDifferenceNegative ? 'red' : 'green'}
        >
          {roundNString(difference)}
          {' '}
          <Symbol entity='euro' />
        </TableCell>
      )
    })
  }

  const renderCostsRow = (): JSX.Element => {
    return (
      <TableRow className='red'>
        <TableCell>Costs</TableCell>
        {renderCostsCells()}
        <TableCell>
          {roundNString(getAnnualCosts(costsData))}
          {' '}
          <Symbol entity='euro' />
        </TableCell>
      </TableRow>
    )
  }

  const renderDifferenceRow = (): JSX.Element => {
    const annualDifference = getAnnualDifference()
    return (
      <TableRow className='green'>
        <TableCell>Difference</TableCell>
        {renderDifferenceCells()}
        <TableCell className={annualDifference < 0 ? 'red' : 'green'}>
          {roundNString(annualDifference)}
          {' '}
          <Symbol entity='euro' />
        </TableCell>
      </TableRow>
    )
  }

  return (
    <TableFoot>
      {renderTurnoverRow()}
      {renderCostsRow()}
      {renderDifferenceRow()}
    </TableFoot>
  )
}

export default DashboardTableFooter
