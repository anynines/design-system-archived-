import React  from 'react'
import { Cell } from 'react-table'

import { TableRow, TableAccessor, TableColumnCell, TableColumnIcon, TableColumnCellColor, TableRowColor } from './Table'
import TableCell from './TableCell'

interface DraggableTableColumnProps {
  cell: Cell<TableRow, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  cellIndex: number
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  color?: TableRowColor
}

const DraggableTableColumn: React.FC<DraggableTableColumnProps> = (props) => {
  const { cell, getTableColumnColor, getTableColumnType, getTableColumnIconType, color } = props

  let header: TableAccessor | null = cell.column.Header as TableAccessor
  if (header === undefined || Object.keys(header).length === 0) header = null

  const className: TableColumnCellColor | null = getTableColumnColor(header)
  const cellType: TableColumnCell | null = getTableColumnType(header)
  const iconType: TableColumnIcon | null = getTableColumnIconType(header)

  return (
    <td role='cell' className={color}>
      <TableCell className={className} cellType={cellType} cell={cell} iconType={iconType} />
    </td>
  )
}

export default DraggableTableColumn
