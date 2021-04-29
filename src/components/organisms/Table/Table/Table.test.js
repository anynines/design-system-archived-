import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import { Table } from './Table'
import { TRow } from './TRow'
import { THead } from './THead'
import { TBody } from './TBody'
import { THeadCell } from './THeadCell'
import { TCell } from './TCell'

describe('Basic Table', () => {
  let component
  let tHeadData
  let tBodyData

  beforeEach(() => {
    tHeadData = ['ID', 'Name', 'Age', 'Gender']
    tBodyData = [
      {
        id: 1,
        employee: 'Eileen Sherrill',
        age: 30,
        gender: 'female'
      },
      {
        id: 2,
        employee: 'Deborah Kelley',
        age: 20,
        gender: 'female'
      },
      {
        id: 3,
        employee: 'Kay Rich',
        age: 50,
        gender: 'male'
      },
      {
        id: 4,
        employee: 'Frances Douglas',
        age: 40,
        gender: 'male'
      }
    ]
    component = render(
      <Table data-testid='basic-table'>
        <THead data-testid='basic-table-head'>
          <TRow>
            {tHeadData.map((colName, index) => {
              return <THeadCell key={index.toString() + colName}>{colName}</THeadCell>
            })}
          </TRow>
        </THead>
        <TBody data-testid='basic-table-body'>
          {tBodyData.map((row) => {
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
  })

  describe('snapshot', () => {
    it('should match default snapshot', () => {
      const { asFragment } = component
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('rendering', () => {
    describe('table', () => {
      it('should have only 1 table element', () => {
        const { queryAllByTestId } = component
        const table = queryAllByTestId('basic-table')
        expect(table).toHaveLength(1)
      })
    })

    describe('tHead', () => {
      it('should have only 1 thead element', () => {
        const { queryAllByTestId } = component
        const tHead = queryAllByTestId('basic-table-head')
        expect(tHead).toHaveLength(1)
      })

      it('should have correct number of th elements', () => {
        const { container } = component
        const headCols = container.querySelectorAll('th')
        expect(headCols).toHaveLength(tBodyData.length)
      })

      it('should have correct names on th elements', () => {
        const { container } = component
        const headCols = container.querySelectorAll('th')
        headCols.forEach((th, index) => {
          expect(th.innerHTML).toEqual(tHeadData[index])
        })
      })
    })

    // // The table should have ONLY 1 tbody tag
    // const tbody = table.find('tbody')
    // expect(tbody).toHaveLength(1)
    // // tbody tag should have the same number of tr tags as data rows
    // const rows = tbody.find('tr')
    // expect(rows).toHaveLength(data.length)
    // // Loop through each row and check the content
    // rows.forEach((tr, rowIndex) => {
    //   const cells = tr.find('td')
    //   expect(cells).toHaveLength(cols.length)
    //   expect(cells.at(0).text()).toEqual(data[rowIndex].id)
    //   expect(cells.at(1).text()).toEqual(data[rowIndex].name)
    //   expect(cells.at(2).text()).toEqual(data[rowIndex].email)
    // })
  })
})
