import { getMonthId, MONTHS, MONTHS_IN_QUARTERS, Month, Quarter } from './date'
import { roundN } from './utils'

export type Team = 'CNAD' | 'DS' | 'EPO' | 'MS'

export interface ProjectOverview {
  name: string
  id: string
  entries: number[]
}

export interface Employee {
  name: string
  id: string
}
export interface EmployeeTimeEntry {
  employee_id: string
  hours: number
}
export interface ProjectTimeEntries {
  year: string
  employees: Employee[]
  entries_by_month: EmployeeTimeEntry[][]
}

export interface MonthHourlyRates {
  hours_per_month: number
  generated_hours_in_euro: number
  billed_turnovers: number
  actual_day_rate: number
  actual_hour_rate: number
}
export interface ProjectHourlyRates {
  year: string
  months: MonthHourlyRates[]
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

export interface CostsOverview {
  [year: string]: AnnualCosts
}

export const TEAMS: Team[] = ['CNAD', 'DS', 'EPO', 'MS']

export const getProjectQuarterCosts = (project: ProjectOverview, quarter: Quarter): number => {
  let costs = 0

  MONTHS_IN_QUARTERS[quarter].forEach((month) => {
    costs += project.entries[getMonthId(month)]
  })

  return roundN(costs, 2)
}

export const getCustomerQuarterCosts = (customer: CustomerOverview, quarter: Quarter): number => {
  let costs = 0

  customer.projects.forEach((project) => {
    costs += getProjectQuarterCosts(project, quarter)
  })

  return roundN(costs, 2)
}

export const getCustomerMonthCosts = (customer: CustomerOverview, month: Month): number => {
  let costs = 0

  customer.projects.forEach((project) => {
    costs += project.entries[getMonthId(month)]
  })

  return roundN(costs, 2)
}

export const getCustomerAnnualCosts = (customer: CustomerOverview): number => {
  let costs = 0

  customer.projects.forEach((project) => {
    MONTHS.forEach((month) => {
      costs += project.entries[getMonthId(month)]
    })
  })

  return roundN(costs, 2)
}

export const getCustomersQuarterTurnover = (customers: CustomerOverview[], quarter: Quarter): number => {
  let costs = 0

  customers.forEach((customer) => {
    costs += getCustomerQuarterCosts(customer, quarter)
  })

  return roundN(costs, 2)
}

export const getCustomersMonthTurnover = (customers: CustomerOverview[], month: Month): number => {
  let costs = 0

  customers.forEach((customer) => {
    costs += getCustomerMonthCosts(customer, month)
  })

  return roundN(costs, 2)
}

export const getTeamsCosts = (teams: QuarterCosts): number => {
  let costs = 0

  Object.keys(teams).forEach((team) => {
    costs += teams[team as Team]
  })

  return roundN(costs, 2)
}

export const getAnnualCosts = (costsData: Partial<AnnualCosts>): number => {
  let costs = 0

  Object.keys(costsData).forEach((quarter) => {
    const quarterCost = costsData[quarter as Quarter]
    costs += quarterCost ? getTeamsCosts(quarterCost) : 0
  })

  return roundN(costs, 2)
}

export const formatToGermanCosts = (cost: number): string => {
  return cost.toString().replace('.', ',')
}

export const formatGermanCostsToNumber = (cost: string): number => {
  return Number(cost.replace('.', '').replace(',', '.'))
}

export const roundNString = (number: number, n = 2): string => {
  return number.toFixed(n)
}
