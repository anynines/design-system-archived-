import React from 'react'
import { Row, useTable, useSortBy } from 'react-table'

import { TableColumn, TableRow, TableAccessor, TableColumnCellColor, TableColumnCell, TableColumnIcon, RowsDataObject, TableData } from './Table'
import SortableTableHead from './SortableTableHead'
import SortableTableBody from './SortableTableBody'

export interface SortableTableProps {
  tableHeaderData: TableColumn[]
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  pagesPerFolder: number
  folderLimit: number
  setPages: React.Dispatch<React.SetStateAction<TableRow[]>>
  pages: TableRow[]
  sortCategoryAlphabeticallyAndControlLimits: (pagesDataObject: TableData) => TableRow[]
}

// C O M P O N E N T
export const SortableTable: React.FC<SortableTableProps> = (props) => {
  const { tableHeaderData,
          getTableColumnColor,
          getTableColumnType,
          getTableColumnIconType,
          pagesPerFolder,
          folderLimit,
          pages,
          setPages,
          sortCategoryAlphabeticallyAndControlLimits } = props
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns: tableHeaderData, data: pages }, useSortBy)
  const rowsData = rows; const tableProps = getTableProps(); const
      tableBodyProps = getTableBodyProps()

  const sortRowDataArrayAndControlLimits = (rowsDataObject: RowsDataObject): [string, Row<TableRow>[]][] => {
    let rowsDataArray: [string, Row<TableRow>[]][] = Object.entries(rowsDataObject)
      .sort((a, b) => {
        const categoryA: string = a[0].toUpperCase()
        const categoryB: string = b[0].toUpperCase()
        return categoryA.charCodeAt(0) - categoryB.charCodeAt(0)
      })

    rowsDataArray = rowsDataArray.slice(0, folderLimit)
    rowsDataArray = rowsDataArray.map((rowsArray) => {
      const slicedArray = rowsArray[1].slice(0, pagesPerFolder)
      rowsArray[1] = slicedArray
      return rowsArray
    })

    return rowsDataArray
  }

  const getRowDataArray = (rowArray: Row<TableRow>[]): [string, Row<TableRow>[]][] => {
    const rowsDataObject: RowsDataObject = {}

    rowArray.forEach((row: Row<TableRow>): void => {
      const { original } = row
      let { category } = original
      category = category.toLowerCase()

      if (!rowsDataObject[category]) rowsDataObject[category] = []
      rowsDataObject[category].push(row)
    })

    return sortRowDataArrayAndControlLimits(rowsDataObject)
  }

  const groupRowDataCategorically = (): void => {
    const pagesDataObject: TableData = {}

    pages.forEach((page: TableRow): void => {
      const { category } = page
      if (!pagesDataObject[category]) pagesDataObject[category] = []
      pagesDataObject[category].push(page)
    })

    const sortedPages: TableRow[] = sortCategoryAlphabeticallyAndControlLimits(pagesDataObject)
    setPages(sortedPages)
  }

  React.useEffect(() => {
    groupRowDataCategorically()
  }, []) // eslint-disable-line

  return (
    <table {...tableProps}>
      <SortableTableHead headerGroups={headerGroups} />
      {getRowDataArray(rowsData).map((rowsByCategory: [string, Row<TableRow>[]], rowIndex: number) => {
        const rowCategory = rowsByCategory[0]
        return (
          <SortableTableBody
            key={rowCategory}
            index={rowIndex}
            rows={rows}
            prepareRow={prepareRow}
            tableBodyProps={tableBodyProps}
            getTableColumnColor={getTableColumnColor}
            getTableColumnType={getTableColumnType}
            getTableColumnIconType={getTableColumnIconType}
          />
        )
      })}
    </table>
  )
}

export default SortableTable
