import React from 'react'

import { Table } from '../Table/Table'
import { TRow } from '../Table/TRow'
import { THead } from '../Table/THead'
import { TBody } from "../Table/TBody"
import { THeadCell } from '../Table/THeadCell'
import { TCell } from '../Table/TCell'

export default {
  title: '🌳 Organisms/Table',
  component: Table,
  argTypes: {
    className: {
      control: { type: 'string' }
    }
  }
}

const data = [
  {
    "id": 1,
    "employee": "Eileen Sherrill",
    "age": 30,
    "gender": "female"
  },
  {
    "id": 2,
    "employee": "Deborah Kelley",
    "age": 20,
    "gender": "female"
  },
  {
    "id": 3,
    "employee": "Kay Rich",
    "age": 50,
    "gender": "male"
  },
  {
    "id": 4,
    "employee": "Frances Douglas",
    "age": 40,
    "gender": "male"
  }
]

export const Basic: React.FC = () => {
  return (
    <Table>
      <THead>
        <TRow>
          <THeadCell>ID</THeadCell>
          <THeadCell>Name</THeadCell>
          <THeadCell>Age</THeadCell>
          <THeadCell>Gender</THeadCell>
        </TRow>
      </THead>
      <TBody>
        {data.map((row) => {
          return (
            <TRow key={row.id.toString()}>
              <TCell>{row.id}</TCell>
              <TCell>{row.employee}</TCell>
              <TCell>{row.age}</TCell>
              <TCell>{row.gender}</TCell>
            </TRow>
          )
        })}
      </TBody>
    </Table>
  )
}
