import React  from 'react'
import { Cell } from 'react-table'

import { CustomTableRow as TableRow, TableAccessor, TableColumnCell, TableColumnIcon, TableColumnCellColor, TableRowColor } from '../Custom/CustomTable'
import TableCell from '../Custom/TableCell'

interface DraggableTableColumnProps {
  cell: Cell<TableRow, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  cellIndex: number
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  isLastColumn: boolean
  color?: TableRowColor
}

const DraggableTableColumn: React.FC<DraggableTableColumnProps> = (props) => {
  const {
    cell,
    getTableColumnColor, getTableColumnType, getTableColumnIconType, isLastColumn = false,
    color
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
