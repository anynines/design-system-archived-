import React from 'react'
import { Row, CustomTableProps as TableProps, TableBodyProps, HeaderGroup } from 'react-table'

import { CustomTableRow as TableRow, TableAccessor, TableColumnCellColor, TableColumnCell, TableColumnIcon, TableData, TableRowColor } from '../Custom/CustomTable'
import DraggableTableContainer from './DraggableTableContainer'

export interface DraggableTableProps {
  rowsData: Row<TableRow>[]
  prepareRow: (row: Row<TableRow>) => void
  tableBodyProps: TableBodyProps
  tableProps: TableProps
  headerGroups: HeaderGroup<TableRow>[]
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  disabledCategories: string[]
  setPages: React.Dispatch<React.SetStateAction<TableRow[]>>
  pages: TableRow[]
  pagesPerFolder: number
  folderLimit: number
  sortCategoryAlphabeticallyAndControlLimits: (pagesDataObject: TableData) => TableRow[]
  color?: TableRowColor
}

// C O M P O N E N T
export const DraggableTable: React.FC<DraggableTableProps> = (props) => {
  const {
    rowsData: items, headerGroups, tableProps, tableBodyProps, prepareRow,
    getTableColumnColor,
    getTableColumnIconType,
    getTableColumnType,
    disabledCategories,
    setPages, pages, pagesPerFolder,
    sortCategoryAlphabeticallyAndControlLimits,
    color
  } = props

  const [isFolderDraggable, setIsFolderDraggable] = React.useState<boolean>(false)

  const groupRowDataCategorically = (): void => {
    const pagesDataObject: TableData = {}

    pages.forEach((page: TableRow): void => {
      let { category } = page
      category = category.toLowerCase()

      if (!pagesDataObject[category]) pagesDataObject[category] = []
      pagesDataObject[category].push(page)
    })

    const sortedPages: TableRow[] = sortCategoryAlphabeticallyAndControlLimits(pagesDataObject)
    setPages(sortedPages)
  }

  const shiftBodyDataCategorically = (oldIndex: number, newIndex: number): void => {
    const pagesDataObject: TableData = {}

    pages.forEach((page: TableRow): void => {
      let { category } = page
      category = category.toLowerCase()

      if (!pagesDataObject[category]) pagesDataObject[category] = []
      pagesDataObject[category].push(page)
    })

    const pagesDataArray: [string, TableRow[]][] = Object.entries(pagesDataObject)
    const oldCategoryRows: [string, TableRow[]] = pagesDataArray[newIndex]
    pagesDataArray[newIndex] = pagesDataArray[oldIndex]
    pagesDataArray[oldIndex] = oldCategoryRows

    let newlyOrderedPages: TableRow[] = []
    pagesDataArray.forEach((pagesRow) => {
      newlyOrderedPages = [...newlyOrderedPages, ...pagesRow[1]]
    })

    setPages(newlyOrderedPages)
    setIsFolderDraggable(!isFolderDraggable)
  }

  const shiftArrayItemPosition = (
    arr: TableRow[],
    oldIndex: number,
    newIndex: number,
    newItem: TableRow
  ): TableRow[] => {
    const newArr: TableRow[] = [...arr]
    const targetIndex: number = newIndex > oldIndex ? newIndex + 1 : newIndex
    const removableIndex: number = newIndex < oldIndex ? oldIndex + 1 : oldIndex

    newArr.splice(targetIndex, 0, newItem)
    newArr.splice(removableIndex, 1)

    return newArr
  }

  const isLimitCrossed = (category: string): boolean => {
    return pages.filter((page) => { return page.category === category }).length >= pagesPerFolder
  }

  const changeArrayItemPositionAndCategory = (
    oldIndex: number,
    newIndex: number
  ): void => {
    if (pages.length) {
      let newArr: TableRow[] = [...pages]
      const currentItem: TableRow = pages[newIndex]
      const newItem: TableRow = pages[oldIndex]

      if (newItem.category === currentItem.category || !isLimitCrossed(currentItem.category)) {
        newItem.category = currentItem.category
        newArr = shiftArrayItemPosition(newArr, oldIndex, newIndex, newItem)
        setPages(newArr)
      }
    }
  }

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }): void => {
    if (isFolderDraggable) shiftBodyDataCategorically(oldIndex, newIndex)
    else changeArrayItemPositionAndCategory(oldIndex, newIndex)
  }

  React.useEffect(() => {
    groupRowDataCategorically()
  }, []) // eslint-disable-line

  return (
    <DraggableTableContainer
      items={items}
      lockAxis='y'
      lockToContainerEdges
      helperClass='draggable-table-row'
      onSortEnd={onSortEnd}
      tableProps={tableProps}
      headerGroups={headerGroups}
      tableBodyProps={tableBodyProps}
      prepareRow={prepareRow}
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

export default DraggableTable
