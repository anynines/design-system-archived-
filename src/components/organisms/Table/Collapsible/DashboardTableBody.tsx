import React from 'react'

import { CustomerOverview, ProjectOverview, YearDivision } from './DashboardTable'
import { getMonthId, MONTHS, QUARTERS } from '../helpers/date'
import { roundN } from '../helpers/utils'
import { getCustomerQuarterCosts, getProjectQuarterCosts, getCustomerMonthCosts, getCustomerAnnualCosts, roundNString } from '../helpers/internal'

// C O M P O N E N T S
import { Icon } from '../../../atoms/Icon/Icon'
import ButtonNaked from './ButtonNaked'
import Symbol from './Symbol'
import { TBody } from '../Table/TBody'
import { TRow } from '../Table/TRow'
import { TCell } from '../Table/TCell'

// I N T E R F A C E
export interface DashboardTableBodyProps {
  customersData: CustomerOverview[]
  division: YearDivision
}

// C O M P O N E N T
const DashboardTableBody: React.FC<DashboardTableBodyProps> = (props) => {
  const { division, customersData } = props

  const [customersToShowProjects, setCustomersToShowProjects] = React.useState<string[]>([])

  const areCustomerProjectsHidden = (customer: CustomerOverview): boolean => {
    return !customersToShowProjects.includes(customer.id)
  }

  const renderToggleCustomerBtn = (customer: CustomerOverview): JSX.Element => {
    const areProjectsHidden = areCustomerProjectsHidden(customer)

    const removeCustomerFromCustomersToShowProjects = (): void => {
      const arrayWithoutCustomer = customersToShowProjects.filter((customerId) => {
        return customerId !== customer.id
      })

      setCustomersToShowProjects(arrayWithoutCustomer)
    }

    if (areProjectsHidden) {
      return (
        <ButtonNaked
          onClick={(): void => { setCustomersToShowProjects([...customersToShowProjects, customer.id]) }}
        >
          <Icon icon='plus' />
        </ButtonNaked>
      )
    }

    return (
      <ButtonNaked
        onClick={removeCustomerFromCustomersToShowProjects}
      >
        <Icon icon='minus' />
      </ButtonNaked>
    )
  }

  const renderCustomerNameCell = (customer: CustomerOverview): JSX.Element => {
    return (
      <TCell className={areCustomerProjectsHidden(customer) ? '' : 'highlight-primary'}>
        {customer.name}
        {renderToggleCustomerBtn(customer)}
      </TCell>
    )
  }

  const renderCustomerRowCosts = (customer: CustomerOverview): JSX.Element[] => {
    if (division === 'quarters') {
      return QUARTERS.map((quarter) => {
        return (
          <TCell key={`customer-costs-${customer.id}-${quarter}`}>
            {roundNString(getCustomerQuarterCosts(customer, quarter))}
            {' '}
            <Symbol entity='euro' />
          </TCell>
        )
      })
    }

    return MONTHS.map((month) => {
      return (
        <TCell key={`customer-costs-${customer.id}-${month}`}>
          {roundNString(getCustomerMonthCosts(customer, month))}
          {' '}
          <Symbol entity='euro' />
        </TCell>
      )
    })
  }

  const renderCustomerRow = (customer: CustomerOverview): JSX.Element => {
    return (
      <TRow
        key={`customer-${customer.id}`}
        className={areCustomerProjectsHidden(customer) ? '' : 'opened'}
      >
        {renderCustomerNameCell(customer)}

        {renderCustomerRowCosts(customer)}

        <TCell>
          {roundNString(getCustomerAnnualCosts(customer))}
          {' '}
          <Symbol entity='euro' />
        </TCell>
      </TRow>
    )
  }

  const getProjectAnnualCosts = (project: ProjectOverview): number => {
    let costs = 0

    MONTHS.forEach((month) => {
      costs += project.entries[getMonthId(month)]
    })

    return roundN(costs, 2)
  }

  const renderProjectNameCell = (project: ProjectOverview): JSX.Element => {
    return (
      <TCell className='highlight-primary'>
        {project.name}
        <Icon icon='link' />
      </TCell>
    )
  }

  const renderCustomerProjectCosts = (project: ProjectOverview, customerId: string): JSX.Element[] => {
    if (division === 'quarters') {
      return QUARTERS.map((quarter) => {
        return (
          <TCell key={`project-costs-${customerId}-${project.id}-${quarter}`}>
            {roundNString(getProjectQuarterCosts(project, quarter))}
            {' '}
            <Symbol entity='euro' />
          </TCell>
        )
      })
    }

    return MONTHS.map((month) => {
      return (
        <TCell key={`project-costs-${customerId}-${project.id}-${month}`}>
          {roundNString(project.entries[getMonthId(month)])}
          {' '}
          <Symbol entity='euro' />
        </TCell>
      )
    })
  }

  const renderCustomerProjectRow = (customerId: string, project: ProjectOverview): JSX.Element => {
    return (
      <TRow key={`project-${customerId}-${project.id}`}>
        {renderProjectNameCell(project)}
        {renderCustomerProjectCosts(project, customerId)}

        <TCell>
          {getProjectAnnualCosts(project)}
        </TCell>
      </TRow>
    )
  }
  const renderCustomerProjects = (customer: CustomerOverview): JSX.Element | null => {
    if (areCustomerProjectsHidden(customer)) {
      return null
    }

    return (
      <>
        {customer.projects.map((project) => {
          return renderCustomerProjectRow(customer.id, project)
        })}
      </>
    )
  }

  return (
    <TBody>
      {customersData.map((customer) => {
        return (
          <React.Fragment key={`customer-${customer.id}`}>
            {renderCustomerRow(customer)}
            {renderCustomerProjects(customer)}
          </React.Fragment>
        )
      })}
    </TBody>
  )
}

export default DashboardTableBody
