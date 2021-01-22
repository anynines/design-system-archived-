import React from 'react'

// C O M P O N E N T S
import CollapsibleTableHeader from './CollapsibleTableHeader'
import CollapsibleTableBody from './CollapsibleTableBody'
import CollapsibleTableFooter from './CollapsibleTableFooter'
import { Table } from '../Table/Table'

import { Quarter, Team } from '../helpers/index'

// I N T E R F A C E
export interface ProjectOverview {
  name: string
  id: string
  entries: number[]
}
export interface CustomerOverview {
  name: string
  id: string
  projects: ProjectOverview[]
}
export type QuarterCosts = {
  [team in Team]: number
}
export type AnnualCosts = {
  [quarter in Quarter]: QuarterCosts
}
export type GetAnnualCostResponse = Partial<AnnualCosts>
export type YearDivision = 'quarters' | 'months'

export interface CollapsibleTableProps {
  year: number
  division: YearDivision
  customersData: CustomerOverview[]
  costsData: Partial<AnnualCosts>
}

// C O M P O N E N T
const CollapsibleTable: React.FC<CollapsibleTableProps> = (props) => {
  const { division, year, customersData, costsData } = props

  return (
    <Table className='scrollable'>
      <CollapsibleTableHeader year={year} division={division} />
      <CollapsibleTableBody customersData={customersData} division={division} />
      <CollapsibleTableFooter division={division} customersData={customersData} costsData={costsData} />
    </Table>
  )
}

export default CollapsibleTable
