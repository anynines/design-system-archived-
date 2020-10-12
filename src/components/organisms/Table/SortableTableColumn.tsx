import React from 'react'
import { Cell } from 'react-table'

import { TableRow, TableAccessor, TableColumnCell, TableColumnCellColor, TableColumnIcon } from './Table'
import TableCell from './TableCell'

interface SortableTableColumnProps {
  bodyIndex: number
  rowIndex: number
  cellIndex: number
  cell: Cell<TableRow, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
}

const SortableTableColumn: React.FC<SortableTableColumnProps> = (props) => {
  const { bodyIndex, rowIndex, cell, cellIndex, getTableColumnColor,
          getTableColumnType, getTableColumnIconType } = props

  const header: TableAccessor | null = cell.column.Header as TableAccessor
  const className: TableColumnCellColor | null = getTableColumnColor(header)
  const cellType: TableColumnCell | null = getTableColumnType(header)
  const iconType: TableColumnIcon | null = getTableColumnIconType(header)

  return (
    <td {...cell.getCellProps()} key={`${bodyIndex.toString()}.${rowIndex.toString()}.${cellIndex.toString()}`}>
      <TableCell className={className} cellType={cellType} cell={cell} iconType={iconType} />
    </td>
  )
}

export default SortableTableColumn
