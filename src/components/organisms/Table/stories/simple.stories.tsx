import React from 'react'

import { Table, TableRow, getCellValue, handleSort } from '../Simple/Table'
import { Badge } from '../../../atoms/Badge/Badge'
import { Row } from '../Simple/Row'
import { Head } from '../Simple/Head'
import { Body } from "../Simple/Body"
import { Foot } from "../Simple/Foot"
import { Cell } from '../Simple/Cell'

export default {
  title: '🌳 Organisms/SimpleTable',
  component: Table,
  argTypes: {
    sortData: {
      control: { type: 'TableRow[]' }
    },
    sortedBy: {
      control: { type: 'string' }
    },
    sortDirection: {
      control: { type: 'TableSortDirection' }
    },
    onSort: {
      control: { type: '(sortArgs: TableSortArgs) => void' }
    }
  }
}

const userData: TableRow[] = [
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

export const Simple: React.FC = () => {
  const [currentData, setCurrentData] = React.useState<TableRow[]>(userData as TableRow[])

  return (
    <Table sortData={currentData} originalData={userData} setSortData={setCurrentData} onSort={handleSort}>
      <Head>
        <Row>
          <Cell type='head' value='full name' field='employee' sortable color='success' />
          <Cell type='head' value='january' field='january' />
          <Cell type='head' value='february' field='february' />
          <Cell type='head' value='march' field='march' />
          <Cell type='head' value='april' field='april' sortable />
          <Cell type='head' value='may' field='may' />
          <Cell type='head' value='june' field='june' />
          <Cell type='head' value='july' field='july' />
          <Cell type='head' value='august' field='august' />
          <Cell type='head' value='september' field='september' />
          <Cell type='head' value='october' field='october' />
          <Cell type='head' value='november' field='november' />
          <Cell type='head' value='december' field='december' />
          <Cell type='head' value='average (2020)' field='average' color='warning' />
        </Row>
      </Head>
      <Body>
        {currentData.map((row: TableRow) => {
          return (
            <Row key={row.id.toString()}>
              <Cell value={row['employee']} color='success' />
              <Cell value={row['january']} />
              <Cell value={row['february']} />
              <Cell value={row['march']} />
              <Cell value={row['april']}/>
              <Cell value={row['may']}/>
              <Cell value={row['june']} />
              <Cell value={row['july']} />
              <Cell value={row['august']} />
              <Cell value={row['september']} />
              <Cell value={row['october']} />
              <Cell value={row['november']} />
              <Cell><Badge value='n/a' /></Cell>
              <Cell value={row['average']} color='warning' />
            </Row>
          )
        })}
      </Body>
      <Foot>
        {metaData.map((row: TableRow) => {
          return (
            <Row key={row.id.toString()}>
              <Cell value={row['employee']} color='error' />
              <Cell value={row['january']} color='light' />
              <Cell value={row['february']} color='light' />
              <Cell value={row['march']} color='light' />
              <Cell value={row['april']} color='light' />
              <Cell value={row['may']} color='light' />
              <Cell value={row['june']} color='light' />
              <Cell value={row['july']} color='light' />
              <Cell value={row['august']} color='light' />
              <Cell value={row['september']} color='light' />
              <Cell value={row['october']} color='light' />
              <Cell value={row['november']} color='light' />
              <Cell color='light'><Badge value='n/a' /></Cell>
              <Cell value={row['average']} color='dark' />
            </Row>
          )
        })}
      </Foot>
    </Table>
  )
}
