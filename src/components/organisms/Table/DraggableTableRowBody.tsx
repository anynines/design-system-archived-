import React from 'react'
import { Row, TableBodyProps } from 'react-table'

import DraggableTableRow, { DraggableTableRowCategory } from './DraggableTableRow'
import { TableRow, TableAccessor, TableColumnCell, TableColumnCellColor, TableColumnIcon, TableRowColor } from './Table'

interface DraggableTableRowBodyProps {
  color?: TableRowColor
  disabledCategories: string[]
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  isFolderDraggable: boolean
  items: Row<TableRow>[]
  prepareRow: (row: Row<TableRow>) => void
  setIsFolderDraggable: React.Dispatch<React.SetStateAction<boolean>>
  tableBodyProps: TableBodyProps
}

const DraggableTableRowBody: React.FC<DraggableTableRowBodyProps> = (
  props
): JSX.Element => {
  const {
    items, prepareRow, tableBodyProps,
    getTableColumnColor, getTableColumnType,
    getTableColumnIconType, disabledCategories,
    isFolderDraggable, setIsFolderDraggable, color
  } = props
  const rows: JSX.Element[] = []

  const isNewCategoryFound = (index: number): boolean => {
    const currentCategory = items[index].original.category.toLowerCase()
    const previousCategory = items[index - 1].original.category.toLowerCase()
    return index - 1 >= 0 && currentCategory !== previousCategory
  }

  items.forEach((item: Row<TableRow>, index: number) => {
    prepareRow(item)

    const shouldRowBeDisabled = (): boolean => {
      return isFolderDraggable || disabledCategories.includes(item.original.category)
    }

    if (index === 0 || isNewCategoryFound(index)) {
      rows.push(
        <DraggableTableRowCategory
          key={`${index.toString()}.-1`}
          index={index}
          row={items[index]}
          idx={`${index.toString()}.-1`}
          isFolderDraggable={isFolderDraggable}
          setIsFolderDraggable={setIsFolderDraggable}
        />
      )
    }

    rows.push(
      <DraggableTableRow
        key={index.toString()}
        index={index}
        row={item}
        disabled={shouldRowBeDisabled()}
        isDraggable={!shouldRowBeDisabled()}
        getTableColumnColor={getTableColumnColor}
        getTableColumnType={getTableColumnType}
        getTableColumnIconType={getTableColumnIconType}
        isFolderDraggable={isFolderDraggable}
        setIsFolderDraggable={setIsFolderDraggable}
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

export default DraggableTableRowBody
