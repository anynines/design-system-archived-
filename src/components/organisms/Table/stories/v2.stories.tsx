import React from 'react'

import { Table, TableRow } from '../v2/Table'
import { Column } from '../v2/Column'
import { Row } from '../v2/Row'
import { Head } from '../v2/Head'
import { Body } from "../v2/Body"
import { Cell } from '../v2/Cell'

export default {
  title: 'Organisms/TableV2',
  component: Table,
  argTypes: {
    data: {
      control: { type: 'TableRow[]' }
    },
    sortedBy: {
      control: { type: 'string' }
    },
    sortDirection: {
      control: { type: 'TableSortDirection' }
    }
  }
}

const data: TableRow[] = [
  {
    "id": 1,
    "name": "Kristin",
    "surname": "Fink",
    "email": "courtney@beatty.tl",
    "status": false
  },
  {
    "id": 2,
    "name": "Kent",
    "surname": "Crane",
    "email": "samantha@choi.pt",
    "status": true
  },
  {
    "id": 3,
    "name": "Lester",
    "surname": "Ford",
    "email": "jordan@callahan.cy",
    "status": true
  },
  {
    "id": 4,
    "name": "Allison",
    "surname": "Diaz",
    "email": "wesley@dawson.gr",
    "status": false
  },
  {
    "id": 5,
    "name": "Ben",
    "surname": "Turner",
    "email": "jacob@mullen.my",
    "status": true
  }
]

export const TableV2: React.FC = () => {
  return (
    <Table data={data} sortDirection='asc' sortedBy='name'>
      <Head>
        <Row>
          <Cell type='head' value='name' field='name' sortable />
          <Cell type='head' value='surname' field='surname' />
        </Row>
      </Head>
      <Body fields={['name', 'surname']} />
    </Table>
  )
}
