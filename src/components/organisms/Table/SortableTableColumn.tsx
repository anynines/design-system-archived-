import React from 'react'
import { Cell } from 'react-table'

import { TableRow, TableAccessor, TableColumnCell, TableColumnCellColor, TableColumnIcon, TableRowColor } from './Table'
import TableCell from './TableCell'

interface SortableTableColumnProps {
  bodyIndex: number
  cell: Cell<TableRow, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  cellIndex: number
  color: TableRowColor
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  isLastColumn?: boolean
  rowIndex: number
}

const SortableTableColumn: React.FC<SortableTableColumnProps> = (props) => {
  const { bodyIndex, rowIndex, cell, cellIndex, getTableColumnColor,
    getTableColumnType, getTableColumnIconType, isLastColumn = false, color } = props

  const header: TableAccessor | null = cell.column.Header as TableAccessor
  const className: TableColumnCellColor | null = getTableColumnColor(header)
  const cellType: TableColumnCell | null = getTableColumnType(header)
  const iconType: TableColumnIcon | null = getTableColumnIconType(header)

  return (
    <td
      {...cell.getCellProps()}
      key={`${bodyIndex.toString()}.${rowIndex.toString()}.${cellIndex.toString()}`}
      className={`${isLastColumn ? 'table-row-link' : ''} ${color}`}
    >
      <TableCell className={className} cellType={cellType} cell={cell} iconType={iconType} />
      {isLastColumn && <TableCell cellType='link' cell={cell} />}
    </td>
  )
}

export default SortableTableColumn
