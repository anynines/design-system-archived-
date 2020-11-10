import React from 'react'
import { SortableContainer } from 'react-sortable-hoc'
import { Row, HeaderGroup, TableBodyProps, TableProps } from 'react-table'

import { TableRow, TableAccessor, TableColumnCellColor, TableColumnIcon, TableColumnCell, TableRowColor } from './Table'
import DraggableTableHead from './DraggableTableHead'
import DraggableTableRowBody from './DraggableTableRowBody'
import DraggableTableFolderBody from './DraggableTableFolderBody'

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
  isFolderDraggable: boolean
  setIsFolderDraggable: React.Dispatch<React.SetStateAction<boolean>>
  color?: TableRowColor
}

const DraggableTableContainer = SortableContainer((
  {
    items,
    tableProps,
    headerGroups,
    prepareRow,
    tableBodyProps, getTableColumnColor, getTableColumnIconType,
    getTableColumnType,
    disabledCategories, isFolderDraggable, setIsFolderDraggable,
    color
  }: DraggableTableContainerProps
): JSX.Element => {
  return (
    <table {...tableProps}>
      <DraggableTableHead headerGroups={headerGroups} />
      {
        isFolderDraggable ? (
          <DraggableTableFolderBody
            items={items}
            prepareRow={prepareRow}
            tableBodyProps={tableBodyProps}
            getTableColumnColor={getTableColumnColor}
            getTableColumnType={getTableColumnType}
            getTableColumnIconType={getTableColumnIconType}
            disabledCategories={disabledCategories}
            isFolderDraggable={isFolderDraggable}
            setIsFolderDraggable={setIsFolderDraggable}
            color={color}
          />
        ) : (
          <DraggableTableRowBody
            items={items}
            prepareRow={prepareRow}
            tableBodyProps={tableBodyProps}
            getTableColumnColor={getTableColumnColor}
            getTableColumnType={getTableColumnType}
            getTableColumnIconType={getTableColumnIconType}
            disabledCategories={disabledCategories}
            isFolderDraggable={isFolderDraggable}
            setIsFolderDraggable={setIsFolderDraggable}
            color={color}
          />
        )
      }
    </table>
  )
})

export default DraggableTableContainer
