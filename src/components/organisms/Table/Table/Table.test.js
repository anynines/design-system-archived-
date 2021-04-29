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

    describe('tBody', () => {
      it('should have only 1 tBody element', () => {
        const { queryAllByTestId } = component
        const tBody = queryAllByTestId('basic-table-body')

        expect(tBody).toHaveLength(1)
      })

      it('should have correct number of tr elements', () => {
        const { queryByTestId } = component
        const tBody = queryByTestId('basic-table-body')
        const bodyRows = tBody.querySelectorAll('tr')

        expect(bodyRows).toHaveLength(tBodyData.length)
      })

      it('should have correct number of td elements', () => {
        const { queryByTestId } = component
        const body = queryByTestId('basic-table-body')
        const rows = body.querySelectorAll('tr')

        rows.forEach((tr) => {
          const cells = tr.querySelectorAll('td')

          expect(cells).toHaveLength(tHeadData.length)
        })
      })

      it('should have correct values on td elements', () => {
        const { queryByTestId } = component
        const body = queryByTestId('basic-table-body')
        const rows = body.querySelectorAll('tr')

        rows.forEach((tr, trIndex) => {
          const cells = tr.querySelectorAll('td')

          expect(cells[0].innerHTML).toEqual(tBodyData[trIndex].id.toString())
          expect(cells[1].innerHTML).toEqual(tBodyData[trIndex].employee)
          expect(cells[2].innerHTML).toEqual(tBodyData[trIndex].age.toString())
          expect(cells[3].innerHTML).toEqual(tBodyData[trIndex].gender)
        })
      })
    })

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
