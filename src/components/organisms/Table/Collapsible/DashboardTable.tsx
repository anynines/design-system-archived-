import React from 'react'

// C O M P O N E N T S
import DashboardTableHeader from './DashboardTableHeader'
import DashboardTableBody from './DashboardTableBody'
import DashboardTableFooter from './DashboardTableFooter'
import Table from './Table'

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
export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4'
export type QuarterCosts = {
  [team in Team]: number
}
export type AnnualCosts = {
  [quarter in Quarter]: QuarterCosts
}
export interface DashboardTableProps {
  year: number
  division: 'quarters' | 'months'
  customersData: CustomerOverview[]
  costsData: Partial<AnnualCosts>
}

// C O M P O N E N T
const DashboardTable: React.FC<DashboardTableProps> = (props) => {
  const { division, year, customersData, costsData } = props

  return (
    <Table className='scrollable'>
      <DashboardTableHeader year={year} division={division} />
      <DashboardTableBody customersData={customersData} division={division} />
      <DashboardTableFooter division={division} customersData={customersData} costsData={costsData} />
    </Table>
  )
}

export default DashboardTable
