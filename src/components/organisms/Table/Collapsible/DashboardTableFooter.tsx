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
} from '../helpers/index'
import { CustomerOverview, AnnualCosts, YearDivision } from './DashboardTable'

// C O M P O N E N T S
import Symbol from './Symbol'
import { TFoot } from '../Table/TFoot'
import { TRow } from '../Table/TRow'
import { TCell } from '../Table/TCell'

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
          <TCell key={`turnover-${quarter}`}>
            {roundNString(getCustomersQuarterTurnover(customersData, quarter))}
            {' '}
            <Symbol entity='euro' />
          </TCell>
        )
      })
    }

    return MONTHS.map((month) => {
      return (
        <TCell key={`turnover-${month}`}>
          {roundNString(getCustomersMonthTurnover(customersData, month))}
          {' '}
          <Symbol entity='euro' />
        </TCell>
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
      <TRow className='green'>
        <TCell>Turnover</TCell>
        {renderTurnoverCells()}
        <TCell>
          {roundNString(getAnnualTurnover())}
          {' '}
          <Symbol entity='euro' />
        </TCell>
      </TRow>
    )
  }

  const renderCostsCells = (): JSX.Element[] => {
    if (division === 'quarters') {
      return QUARTERS.map((quarter) => {
        const quarterCosts = costsData[quarter]

        return (
          <TCell key={`costs-${quarter}`}>
            {quarterCosts ? roundNString(getTeamsCosts(quarterCosts)) : roundNString(0)}
            {' '}
            <Symbol entity='euro' />
          </TCell>
        )
      })
    }

    return MONTHS.map((month) => {
      const quarterCosts = costsData[getMonthsQuarter(month)]

      return (
        <TCell key={`costs-${month}`}>
          {quarterCosts
            ? roundNString(roundN(getTeamsCosts(quarterCosts) / 3, 2), 2)
            : roundNString(0)}
          {' '}
          <Symbol entity='euro' />
        </TCell>
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
          <TCell
            key={`difference-${quarter}`}
            className={isDifferenceNegative ? 'red' : 'green'}
          >
            {roundNString(difference)}
            {' '}
            <Symbol entity='euro' />
          </TCell>
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
        <TCell
          key={`difference-${month}`}
          className={isDifferenceNegative ? 'red' : 'green'}
        >
          {roundNString(difference)}
          {' '}
          <Symbol entity='euro' />
        </TCell>
      )
    })
  }

  const renderCostsRow = (): JSX.Element => {
    return (
      <TRow className='red'>
        <TCell>Costs</TCell>
        {renderCostsCells()}
        <TCell>
          {roundNString(getAnnualCosts(costsData))}
          {' '}
          <Symbol entity='euro' />
        </TCell>
      </TRow>
    )
  }

  const renderDifferenceRow = (): JSX.Element => {
    const annualDifference = getAnnualDifference()
    return (
      <TRow className='green'>
        <TCell>Difference</TCell>
        {renderDifferenceCells()}
        <TCell className={annualDifference < 0 ? 'red' : 'green'}>
          {roundNString(annualDifference)}
          {' '}
          <Symbol entity='euro' />
        </TCell>
      </TRow>
    )
  }

  return (
    <TFoot>
      {renderTurnoverRow()}
      {renderCostsRow()}
      {renderDifferenceRow()}
    </TFoot>
  )
}

export default DashboardTableFooter
