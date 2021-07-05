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

const headerData = ["Full Name","January","February","March","April","May","June","July",
"August","September","October","November","December"]
const bodyData: CollapsibleTableRow[] = [
  {
    "id": "0",
    "values": [
      "Carolina Gross",
      '1461',
      '8130',
      '9233',
      '2855',
      '1560',
      '1036',
      '2101',
      '6054',
      '9629',
      '1169',
      '3117',
      '2984'
    ],
    "rows": [
      {
        "id": "0",
        "values": [
          "Maxine Koch",
          '6872',
          '2101',
          '4650',
          '6036',
          '2681',
          '2579',
          '1737',
          '2190',
          '1092',
          '4660',
          '3704',
          '2689'
        ]
      },
      {
        "id": '1',
        "values": [
          "Cleveland Ortiz",
          '6890',
          '8970',
          '3945',
          '6342',
          '5711',
          '2862',
          '6272',
          '7838',
          '5575',
          '2757',
          '6207',
          '4722'
        ]
      }
    ]
  },
  {
    "id": "1",
    "values": [
      "Sabrina Hunt",
      '4221',
      '6283',
      '4442',
      '6271',
      '3048',
      '1542',
      '6827',
      '3807',
      '6753',
      '5971',
      '4677',
      '1577'
    ],
    "rows": [
      {
        "id": "0",
        "values": [
          "Lynette Buck",
          '1026',
          '7292',
          '8270',
          '6623',
          '4349',
          '3547',
          '2565',
          '7549',
          '7805',
          '4355',
          '1929',
          '4573'
        ]
      },
      {
        "id": "1",
        "values": [
          "Carver Fisher",
          '1273',
          '5533',
          '5310',
          '4019',
          '9247',
          '2178',
          '3880',
          '4398',
          '3548',
          '4790',
          '6529',
          '7830'
        ]
      }
    ]
  },
  {
    "id": '2',
    "values": [
      "Walters Grant",
      '1295',
      '3985',
      '2652',
      '5490',
      '2989',
      '6708',
      '1963',
      '2295',
      '1632',
      '8649',
      '1263',
      '6164'
    ],
    "rows": [
      {
        "id": "0",
        "values": [
          "Margie Rosario",
          '2467',
          '1359',
          '5759',
          '7839',
          '6145',
          '7972',
          '5783',
          '9851',
          '8349',
          '9835',
          '3462',
          '6668'
        ]
      },
      {
        "id": "1",
        "values": [
          "Charity Hamilton",
          '1806',
          '8174',
          '4814',
          '7744',
          '7422',
          '9674',
          '9282',
          '6133',
          '6946',
          '6837',
          '3806',
          '7381'
        ]
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
