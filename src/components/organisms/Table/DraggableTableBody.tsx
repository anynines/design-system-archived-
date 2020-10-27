import React from 'react'
import { Row, TableBodyProps } from 'react-table'

import DraggableTableRow, { DraggableTableRowCategory } from './DraggableTableRow'
import { TableRow, TableAccessor, TableColumnCell, TableColumnCellColor, TableColumnIcon, TableRowColor } from './Table'

interface DraggableTableBodyProps {
  items: Row<TableRow>[]
  prepareRow: (row: Row<TableRow>) => void
  tableBodyProps: TableBodyProps
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  disabledCategories: string[]
  color?: TableRowColor
}

const DraggableTableBody: React.FC<DraggableTableBodyProps> = (
  props
): JSX.Element => {
  const {
    items, prepareRow, tableBodyProps, getTableColumnColor, getTableColumnType,
    getTableColumnIconType, disabledCategories, color
  } = props
  const rows: JSX.Element[] = []

  const isNewCategoryFound = (index: number): boolean => {
    const currentCategory = items[index].original.category.toLowerCase()
    const previousCategory = items[index - 1].original.category.toLowerCase()
    return index - 1 >= 0 && currentCategory !== previousCategory
  }

  items.forEach((item: Row<TableRow>, index: number) => {
    prepareRow(item)

    if (index === 0 || isNewCategoryFound(index)) {
      rows.push(
        <DraggableTableRowCategory
          key={`${index.toString()}.-1`}
          index={index}
          row={items[index]}
          idx={`${index.toString()}.-1`}
        />
      )
    }

    rows.push(
      <DraggableTableRow
        key={index.toString()}
        index={index}
        row={item}
        disabled={disabledCategories.includes(item.original.category)}
        isDraggable={disabledCategories.includes(item.original.category)}
        getTableColumnColor={getTableColumnColor}
        getTableColumnType={getTableColumnType}
        getTableColumnIconType={getTableColumnIconType}
        color={color}
      />
    )
  })

  return (
    <tbody {...tableBodyProps}>
      {rows}
    </tbody>
  )
}

export default DraggableTableBody
