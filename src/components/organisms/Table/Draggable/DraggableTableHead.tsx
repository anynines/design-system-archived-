import React from 'react'
import { HeaderGroup } from 'react-table'

import { DraggableTableWrapperRow as TableRow } from './DraggableTableWrapper'

interface DraggableTableHeadProps {
  headerGroups: HeaderGroup<TableRow>[]
}

const DraggableTableHead: React.FC<DraggableTableHeadProps> = (props) => {
  const { headerGroups } = props

  return (
    <thead>
      {
        headerGroups.map((headerGroup: HeaderGroup<TableRow>, headerIndex: number) => {
          return (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerIndex.toString()}>
              {headerGroup.headers.map(
                (column: any, cellIndex: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
                  return (
                    <th
                      {
                        ...column.getHeaderProps()}
                      key={cellIndex.toString()}
                    >
                      {column.render('Header')}
                    </th>
                  )
                }
              )}
            </tr>
          )
        })
      }
    </thead>
  )
}

export default DraggableTableHead
