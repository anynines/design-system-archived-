import React from 'react'

import CollapsibleTable, { YearDivision as YearDivisionType, CustomerOverview, GetAnnualCostResponse } from '../Collapsible/CollapsibleTable'

export default {
  title: '🌳 Organisms/CollapsibleTable',
  component: CollapsibleTable,
  argTypes: {
    className: {
      control: { type: 'string' }
    }
  }
}

const customerOverviewData = [
  {
    "name":"Connelly and Sons-463",
    "id":"0",
    "projects":
      [
        {
          "name":"Triene539",
          "id":"10280476",
          "entries":[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]
        },
        {
          "name":"MPR523",
          "id":"10459099",
          "entries":[
            0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
          ]
        }
      ]
  },
  {
    "name":"123123",
    "id":"1",
    "projects":[
      {
        "name":"möööp",
        "id":"123123",
        "entries":[
          0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0
        ]
      }
    ]
  }
]

const costsOverviewData = {
  "Q2": {
    "CNAD": 1234.11,
    "DS": 12343.11,
    "EPO": 1234.11,
    "MS": 1234.11
  },
  "Q3": {
    "CNAD": 1234.11,
    "DS": 1934.11,
    "EPO": 1234.11,
    "MS": 1234.11
  },
  "Q4": {
    "CNAD": 1234.11,
    "DS": 1234.11,
    "EPO": 124.11,
    "MS": 1234.11
  }
}

export const Default: React.FC = () => {
  const [yearDivision, setYearDivision] = React.useState<YearDivisionType>('months' as YearDivisionType)
  const [customersOverview, setCustomersOverview] = React.useState<CustomerOverview[] | null>(customerOverviewData)
  const [costsOverview, setCostsOverview] = React.useState<GetAnnualCostResponse | null>(costsOverviewData)

  return (
    <CollapsibleTable
      division={yearDivision}
      year={2021}
      customersData={customersOverview}
      costsData={costsOverview}
    />
  )
}
