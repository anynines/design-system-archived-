import React from 'react'

import CollapsibleTable, { CollapsibleTableProps } from '../Collapsible/CollapsibleTable'
import { CollapsibleTableRow, CollapsibleRow } from '../Collapsible/CollapsibleTableBody'

export default {
  title: '🌳 Organisms/CollapsibleTable',
  component: CollapsibleTable,
  argTypes: {
    className: {
      control: { type: 'string' }
    }
  }
}

const headerData = ['col 1','col 2','col 3','col 4']
const bodyData: CollapsibleTableRow[] = [
  {
    id: 'test 1',
    values: [1, 2, 3, 4],
    rows: [
      {
        id: 'test 2',
        values: [1, 2, 3, 4]
      }
    ]
  },
  {
    id: 'test 3',
    values: [1, 2, 3, 4],
    rows: [
      {
        id: 'test 4',
        values: [1, 2, 3, 4]
      },
      {
        id: 'test 5',
        values: [1, 2, 3, 4]
      }
    ]
  }
]

export const Default: React.FC = () => {
  return (
    <CollapsibleTable
      headerData={headerData}
      bodyData={bodyData}
    />
  )
}
