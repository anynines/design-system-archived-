import React from 'react'
import { Link } from 'react-router-dom'

import { CustomerOverview, ProjectOverview } from '@types'
import { getMonthId, MONTHS, QUARTERS } from '@helpers/date'
import { roundN } from '@helpers/utils'
import { getCustomerQuarterCosts, getProjectQuarterCosts, getCustomerMonthCosts, getCustomerAnnualCosts, roundNString } from '@helpers/internal'

// C O M P O N E N T S
import { Icon } from '@anynines/design-system'
import { YearDivision } from './YearDivision'
import ButtonNaked from '@components/atoms/ButtonNaked'
import Symbol from '@components/atoms/Symbol'
import TableBody from '@components/atoms/Table/Body'
import TableRow from '@components/atoms/Table/Row'
import TableCell from '@components/atoms/Table/Cell'

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
      <TableCell className={areCustomerProjectsHidden(customer) ? '' : 'highlight-primary'}>
        {customer.name}
        {renderToggleCustomerBtn(customer)}
      </TableCell>
    )
  }

  const renderCustomerRowCosts = (customer: CustomerOverview): JSX.Element[] => {
    if (division === 'quarters') {
      return QUARTERS.map((quarter) => {
        return (
          <TableCell key={`customer-costs-${customer.id}-${quarter}`}>
            {roundNString(getCustomerQuarterCosts(customer, quarter))}
            {' '}
            <Symbol entity='euro' />
          </TableCell>
        )
      })
    }

    return MONTHS.map((month) => {
      return (
        <TableCell key={`customer-costs-${customer.id}-${month}`}>
          {roundNString(getCustomerMonthCosts(customer, month))}
          {' '}
          <Symbol entity='euro' />
        </TableCell>
      )
    })
  }

  const renderCustomerRow = (customer: CustomerOverview): JSX.Element => {
    return (
      <TableRow
        key={`customer-${customer.id}`}
        className={areCustomerProjectsHidden(customer) ? '' : 'opened'}
      >
        {renderCustomerNameCell(customer)}

        {renderCustomerRowCosts(customer)}

        <TableCell>
          {roundNString(getCustomerAnnualCosts(customer))}
          {' '}
          <Symbol entity='euro' />
        </TableCell>
      </TableRow>
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
      <TableCell className='highlight-primary'>
        {project.name}
        <Link to={`/projects/${project.id}`}>
          <Icon icon='link' />
        </Link>
      </TableCell>
    )
  }

  const renderCustomerProjectCosts = (project: ProjectOverview, customerId: string): JSX.Element[] => {
    if (division === 'quarters') {
      return QUARTERS.map((quarter) => {
        return (
          <TableCell key={`project-costs-${customerId}-${project.id}-${quarter}`}>
            {roundNString(getProjectQuarterCosts(project, quarter))}
            {' '}
            <Symbol entity='euro' />
          </TableCell>
        )
      })
    }

    return MONTHS.map((month) => {
      return (
        <TableCell key={`project-costs-${customerId}-${project.id}-${month}`}>
          {roundNString(project.entries[getMonthId(month)])}
          {' '}
          <Symbol entity='euro' />
        </TableCell>
      )
    })
  }

  const renderCustomerProjectRow = (customerId: string, project: ProjectOverview): JSX.Element => {
    return (
      <TableRow key={`project-${customerId}-${project.id}`}>
        {renderProjectNameCell(project)}
        {renderCustomerProjectCosts(project, customerId)}

        <TableCell>
          {getProjectAnnualCosts(project)}
        </TableCell>
      </TableRow>
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
    <TableBody>
      {customersData.map((customer) => {
        return (
          <React.Fragment key={`customer-${customer.id}`}>
            {renderCustomerRow(customer)}
            {renderCustomerProjects(customer)}
          </React.Fragment>
        )
      })}
    </TableBody>
  )
}

export default DashboardTableBody
