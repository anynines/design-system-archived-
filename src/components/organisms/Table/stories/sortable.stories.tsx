import React from 'react'

import { SortableTable, SortableTableRow } from '../Sortable/SortableTable'
import { getCellValue, handleSort } from '../Sortable/helpers'
import { SRow } from '../Sortable/SRow'
import { SHead } from '../Sortable/SHead'
import { SBody } from "../Sortable/SBody"
import { SFoot } from "../Sortable/SFoot"
import { SCell } from '../Sortable/SCell'
import { Badge } from '../../../atoms/Badge/Badge'

export default {
  title: '🌳 Organisms/SortableTable',
  component: SortableTable,
  argTypes: {
    sortData: {
      control: { type: 'SortableTableRow[]' }
    },
    sortedBy: {
      control: { type: 'string' }
    },
    sortDirection: {
      control: { type: 'SortableTableSortDirection' }
    },
    onSort: {
      control: { type: '(sortArgs: SortableTableSortArgs) => void' }
    }
  }
}

const userData: SortableTableRow[] = [
  {
  "id": 1,
  "employee": "Eileen Sherrill",
  "january": 1519,
  "february": 390,
  "march": 1126,
  "april": 746,
  "may": 297,
  "june": 789,
  "july": 721,
  "august": 369,
  "september": 232,
  "october": 434,
  "november": 489,
  "december": 1,
  "average": 1000
  },
  {
  "id": 2,
  "employee": "Deborah Kelley",
  "january": 1212,
  "february": 1133,
  "march": 1116,
  "april": 1530,
  "may": 1659,
  "june": 902,
  "july": 1321,
  "august": 1929,
  "september": 297,
  "october": 1192,
  "november": 1957,
  "december": 1646,
  "average": 1000
  },
  {
  "id": 3,
  "employee": "Kay Rich",
  "january": 1057,
  "february": 268,
  "march": 1854,
  "april": 234,
  "may": 1893,
  "june": 1311,
  "july": 532,
  "august": 171,
  "september": 871,
  "october": 627,
  "november": 592,
  "december": 928,
  "average": 1000
  },
  {
  "id": 4,
  "employee": "Frances Douglas",
  "january": 1692,
  "february": 210,
  "march": 391,
  "april": 944,
  "may": 1641,
  "june": 809,
  "july": 202,
  "august": 270,
  "september": 1020,
  "october": 180,
  "november": 976,
  "december": 1799,
  "average": 1000
  },
  {
  "id": 5,
  "employee": "Gene Nolan",
  "january": 1147,
  "february": 189,
  "march": 1728,
  "april": 215,
  "may": 1794,
  "june": 191,
  "july": 1722,
  "august": 536,
  "september": 758,
  "october": 636,
  "november": 172,
  "december": 343,
  "average": 1000
  },
  {
  "id": 6,
  "employee": "Justin Song",
  "january": 1282,
  "february": 43,
  "march": 1784,
  "april": 4,
  "may": 1492,
  "june": 381,
  "july": 1422,
  "august": 1251,
  "september": 738,
  "october": 274,
  "november": 1536,
  "december": 1975,
  "average": 1000
  },
  {
  "id": 7,
  "employee": "Marshall Barton",
  "january": 1635,
  "february": 135,
  "march": 1566,
  "april": 922,
  "may": 953,
  "june": 1191,
  "july": 1597,
  "august": 1605,
  "september": 1443,
  "october": 913,
  "november": 287,
  "december": 1774,
  "average": 1000
  },
  {
  "id": 8,
  "employee": "Tamara Riley",
  "january": 1463,
  "february": 616,
  "march": 1722,
  "april": 987,
  "may": 1925,
  "june": 65,
  "july": 315,
  "august": 1777,
  "september": 1497,
  "october": 1610,
  "november": 1248,
  "december": 866,
  "average": 1000
  }
  ]

const metaData = [
    {
    "id": 1,
    "employee": "forecast",
    "january": 1519,
    "february": 390,
    "march": 1126,
    "april": 746,
    "may": 297,
    "june": 789,
    "july": 721,
    "august": 369,
    "september": 232,
    "october": 434,
    "november": 489,
    "december": 1,
    "average": 1000
    },
    {
    "id": 2,
    "employee": "turnover",
    "january": 1212,
    "february": 1133,
    "march": 1116,
    "april": 1530,
    "may": 1659,
    "june": 902,
    "july": 1321,
    "august": 1929,
    "september": 297,
    "october": 1192,
    "november": 1957,
    "december": 1646,
    "average": 1000
    },
    {
    "id": 3,
    "employee": "cost",
    "january": 1057,
    "february": 268,
    "march": 1854,
    "april": 234,
    "may": 1893,
    "june": 1311,
    "july": 532,
    "august": 171,
    "september": 871,
    "october": 627,
    "november": 592,
    "december": 928,
    "average": 1000
    },
    {
    "id": 4,
    "employee": "difference",
    "january": 1692,
    "february": 210,
    "march": 391,
    "april": 944,
    "may": 1641,
    "june": 809,
    "july": 202,
    "august": 270,
    "september": 1020,
    "october": 180,
    "november": 976,
    "december": 1799,
    "average": 1000
    }
]

export const Default: React.FC = () => {
  const [currentData, setCurrentData] = React.useState<SortableTableRow[]>(userData as SortableTableRow[])

  return (
    <SortableTable sortData={currentData} originalData={userData} setSortData={setCurrentData} onSort={handleSort}>
      <SHead>
        <SRow>
          <SCell type='head' value='full name' field='employee' sortable color='success' />
          <SCell type='head' value='january' field='january' />
          <SCell type='head' value='february' field='february' />
          <SCell type='head' value='march' field='march' />
          <SCell type='head' value='april' field='april' sortable />
          <SCell type='head' value='may' field='may' />
          <SCell type='head' value='june' field='june' />
          <SCell type='head' value='july' field='july' />
          <SCell type='head' value='august' field='august' />
          <SCell type='head' value='september' field='september' />
          <SCell type='head' value='october' field='october' />
          <SCell type='head' value='november' field='november' />
          <SCell type='head' value='december' field='december' />
          <SCell type='head' value='average (2020)' field='average' color='warning' />
        </SRow>
      </SHead>
      <SBody>
        {currentData.map((row: SortableTableRow) => {
          return (
            <SRow key={row.id.toString()}>
              <SCell value={row['employee']} color='success' />
              <SCell value={row['january']} />
              <SCell value={row['february']} />
              <SCell value={row['march']} />
              <SCell value={row['april']}/>
              <SCell value={row['may']}/>
              <SCell value={row['june']} />
              <SCell value={row['july']} />
              <SCell value={row['august']} />
              <SCell value={row['september']} />
              <SCell value={row['october']} />
              <SCell value={row['november']} />
              <SCell><Badge value='n/a' /></SCell>
              <SCell value={row['average']} color='warning' />
            </SRow>
          )
        })}
      </SBody>
      <SFoot>
        {metaData.map((row: SortableTableRow) => {
          return (
            <SRow key={row.id.toString()}>
              <SCell value={row['employee']} color='error' />
              <SCell value={row['january']} color='light' />
              <SCell value={row['february']} color='light' />
              <SCell value={row['march']} color='light' />
              <SCell value={row['april']} color='light' />
              <SCell value={row['may']} color='light' />
              <SCell value={row['june']} color='light' />
              <SCell value={row['july']} color='light' />
              <SCell value={row['august']} color='light' />
              <SCell value={row['september']} color='light' />
              <SCell value={row['october']} color='light' />
              <SCell value={row['november']} color='light' />
              <SCell color='light'><Badge value='n/a' /></SCell>
              <SCell value={row['average']} color='dark' />
            </SRow>
          )
        })}
      </SFoot>
    </SortableTable>
  )
}
