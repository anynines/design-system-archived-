import React from 'react'
import { Cell } from 'react-table'

import { DraggableTableWrapperRow as TableRow, TableAccessor, TableColumnCell, TableColumnIcon, TableColumnCellColor, TableRowColor } from './DraggableTableWrapper'
import TableCell from './DraggableTableCell'

interface DraggableTableColumnProps {
  cell: Cell<TableRow, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  cellIndex: number
  color?: TableRowColor
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  isLastColumn: boolean
}

const DraggableTableColumn: React.FC<DraggableTableColumnProps> = (props) => {
  const {
    cell,
    color,
    getTableColumnColor, getTableColumnType, getTableColumnIconType, isLastColumn = false
  } = props

  let header: TableAccessor | null = cell.column.Header as TableAccessor
  if (header === undefined || Object.keys(header).length === 0) header = null

  const className: TableColumnCellColor | null = getTableColumnColor(header)
  const cellType: TableColumnCell | null = getTableColumnType(header)
  const iconType: TableColumnIcon | null = getTableColumnIconType(header)

  return (
    <td role='cell' className={`${isLastColumn ? 'table-row-link' : ''} ${color}`}>
      <TableCell className={className} cellType={cellType} cell={cell} iconType={iconType} />
      {isLastColumn && <TableCell cellType='link' cell={cell} />}
    </td>
  )
}

export default DraggableTableColumn
