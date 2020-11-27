import React from 'react'
import { Row, TableBodyProps } from 'react-table'

import { TableRow, TableAccessor, TableColumnCell, TableColumnCellColor, TableColumnIcon, TableRowColor } from './Table'
import SortableTableRow from './SortableTableRow'

interface SortableTableBodyProps {
  color: TableRowColor
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  index: number
  prepareRow: (row: Row<TableRow>) => void
  rows: [string, Row<TableRow>[]]
  tableBodyProps: TableBodyProps
}

const SortableTableBody = (
  {
    rows, index, prepareRow, tableBodyProps, getTableColumnColor,
    getTableColumnType, getTableColumnIconType, color
  }: SortableTableBodyProps
): JSX.Element => {
  return (
    <tbody {...tableBodyProps}>
      <SortableTableRow
        key='-1'
        type='category'
        getTableColumnColor={getTableColumnColor}
        getTableColumnType={getTableColumnType}
        getTableColumnIconType={getTableColumnIconType}
        category={rows[0]}
        rowIndex={-1}
        bodyIndex={index}
        color={color}
      />
      {rows[1].map((row: Row<TableRow>, rowIndex: number) => {
        prepareRow(row)
        return (
          <SortableTableRow
            key={row.id}
            getTableColumnColor={getTableColumnColor}
            getTableColumnType={getTableColumnType}
            getTableColumnIconType={getTableColumnIconType}
            row={row}
            rowIndex={rowIndex}
            bodyIndex={index}
            color={color}
          />
        )
      })}
    </tbody>
  )
}

export default SortableTableBody
