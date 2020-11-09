import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import { Row, HeaderGroup, TableBodyProps, TableProps } from 'react-table'

import { TableRow, TableAccessor, TableColumnCellColor, TableColumnIcon, TableColumnCell, TableRowColor } from './Table'
import DraggableTableHead from './DraggableTableHead'
import DraggableTableBody from './DraggableTableBody'

interface DraggableTableContainerProps {
  prepareRow: (row: Row<TableRow>) => void
  tableBodyProps: TableBodyProps
  tableProps: TableProps
  items: Row<TableRow>[]
  headerGroups: HeaderGroup<TableRow>[]
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  disabledCategories: string[]
  color?: TableRowColor
}

const DraggableTableContainer = SortableContainer((
  {
    items,
    tableProps,
    headerGroups,
    prepareRow,
    tableBodyProps, getTableColumnColor, getTableColumnIconType,
    getTableColumnType, disabledCategories,
    color
  }: DraggableTableContainerProps
): JSX.Element => {
  return (
    <table {...tableProps}>
      <DraggableTableHead headerGroups={headerGroups} />
      <DraggableTableBody
        items={items}
        prepareRow={prepareRow}
        tableBodyProps={tableBodyProps}
        getTableColumnColor={getTableColumnColor}
        getTableColumnType={getTableColumnType}
        getTableColumnIconType={getTableColumnIconType}
        disabledCategories={disabledCategories}
        color={color}
      />
    </table>
  )
})

export default DraggableTableContainer
