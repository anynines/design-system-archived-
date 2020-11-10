import React from 'react'
import { Icon } from '../../atoms/Icon/Icon'
import { Row, Cell } from 'react-table'

import { TableRow, TableColumnCell, TableColumnCellColor, TableColumnIcon, TableAccessor, TableRowColor } from './Table'
import SortableTableColumn from './SortableTableColumn'

interface SortableTableRowProps {
  bodyIndex: number
  rowIndex: number
  row?: Row<TableRow>
  type?: string
  category?: string
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  color: TableRowColor
}

const SortableTableRow: React.FC<SortableTableRowProps> = (props) => {
  const {
    bodyIndex,
    rowIndex,
    row,
    type = 'cell',
    category,
    getTableColumnColor,
    getTableColumnType,
    getTableColumnIconType,
    color
  } = props

  if (type === 'category') {
    return (
      <tr key={rowIndex}>
        <td className='category-name' key={`${bodyIndex.toString()}.-1.0`}>
          <Icon icon='folder' />
          <span className='category-name-title'>{category}</span>
        </td>
      </tr>
    )
  } if (row) {
    return (
      <tr {...row.getRowProps()}>
        {row.cells.map((cell: Cell<TableRow, any>, cellIndex: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
          return (
            <SortableTableColumn
              key={`${cell.row.id}-${cell.column.id}`}
              cell={cell}
              rowIndex={rowIndex}
              cellIndex={cellIndex}
              bodyIndex={bodyIndex}
              getTableColumnColor={getTableColumnColor}
              getTableColumnType={getTableColumnType}
              getTableColumnIconType={getTableColumnIconType}
              isLastColumn={cellIndex === row.cells.length - 1}
              color={color}
            />
          )
        })}
      </tr>
    )
  }
  return null
}

export default SortableTableRow
