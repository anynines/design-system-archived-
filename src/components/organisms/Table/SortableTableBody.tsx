import React from 'react'
import { Row, TableBodyProps } from 'react-table'

import { TableRow, TableAccessor, TableColumnCell, TableColumnCellColor, TableColumnIcon, TableRowColor } from './Table'
import SortableTableRow from './SortableTableRow'

interface SortableTableBodyProps {
  rows: [string, Row<TableRow>[]]
  index: number
  prepareRow: (row: Row<TableRow>) => void
  tableBodyProps: TableBodyProps
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  color?: TableRowColor
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
