import React from 'react'
import styled from 'styled-components'
import { useTable, useSortBy, Row } from 'react-table'

import { SortableTable, SortableTableProps } from './SortableTable'
import { DraggableTable, DraggableTableProps } from './DraggableTable'

// T Y P E S
export interface RowsDataObject {
  [key: string]: Row<TableRow>[]
}

export interface TableData {
  [key: string]: TableRow[]
}

export interface TableRow {
  page: string
  status: string
  permissions: string
  languages: string[]
  views: number
  authors: string[]
  sections: string[]
  category: string
  id?: number
  slug?: string
  title?: string
  name?: string
  published?: boolean
}

export type TableSortOption = 'draggable' | 'sortable'

export type TableAccessor = 'page' | 'status' | 'permissions' | 'languages' | 'views' | 'authors' | 'sections' | 'category'

export interface TableColumn {
  Header: TableAccessor
  accessor: TableAccessor
  sortType?: string
}

export type TableColumnCellColor = 'blue' | 'black'

export type TableColumnCell = 'sticker' | 'icons' | 'icon'

export type TableColumnIcon = 'icon'

export interface TableProps {
  tableHeaderData: TableColumn[]
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  type: TableSortOption
  initialPages: TableRow[]
  pagesPerFolder?: number
  folderLimit?: number
}

export interface SortableTableDataProps extends TableProps {
  type: 'sortable'
}

export interface DraggableTableDataProps extends TableProps {
  type: 'draggable'
  disabledCategories: string[]
  setPages?: React.Dispatch<React.SetStateAction<TableRow[]>>
  pages?: TableRow[]
}

// C O M P O N E N T
export const Table: React.FC<DraggableTableDataProps | SortableTableDataProps> = (props) => {
  const {
    tableHeaderData,
    getTableColumnColor,
    getTableColumnIconType,
    getTableColumnType,
    type,
    initialPages,
    pagesPerFolder = 10,
    folderLimit = 5
  } = props

  const [localPages, setLocalPages] = React.useState<TableRow[]>(
    [] as TableRow[]
  )

  React.useEffect(() => {
    if (initialPages.length) setLocalPages(initialPages)
  }, [props, initialPages])

  const decideTableData = (): TableRow[] => {
    if (type !== 'draggable') return localPages

    props = props as DraggableTableDataProps
    const { pages } = props
    if (pages && pages.length > 0) return pages
    return localPages
  }

  const sortCategoryAlphabeticallyAndControlLimits = (pagesDataObject: TableData): TableRow[] => {
    let pagesDataArray: [string, TableRow[]][] = Object.entries(pagesDataObject)
      .sort((a, b) => {
        const categoryA: string = a[0].toUpperCase()
        const categoryB: string = b[0].toUpperCase()
        return categoryA.charCodeAt(0) - categoryB.charCodeAt(0)
      })

    pagesDataArray = pagesDataArray.slice(0, folderLimit)
    pagesDataArray = pagesDataArray.map((pagesArray) => {
      const slicedArray = pagesArray[1].slice(0, pagesPerFolder)
      pagesArray[1] = slicedArray
      return pagesArray
    })

    let sortedPages: TableRow[] = []
    pagesDataArray.forEach((pages) => {
      sortedPages = [...sortedPages, ...pages[1]]
    })

    return sortedPages
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns: tableHeaderData, data: decideTableData() }, useSortBy)

  let tableProps: SortableTableProps | DraggableTableProps

  if (type === 'draggable') {
    props = props as DraggableTableDataProps
    const { disabledCategories, pages = [], setPages } = props
    tableProps = {
      rowsData: rows,
      tableProps: getTableProps(),
      prepareRow,
      tableBodyProps: getTableBodyProps(),
      headerGroups,
      getTableColumnColor,
      getTableColumnType,
      getTableColumnIconType,
      disabledCategories,
      setPages: setPages || setLocalPages,
      pages: pages.length > 0 ? pages : localPages,
      pagesPerFolder,
      folderLimit,
      sortCategoryAlphabeticallyAndControlLimits
    }
  } else {
    tableProps = {
      getTableColumnColor,
      getTableColumnType,
      getTableColumnIconType,
      setPages: setLocalPages,
      pages: localPages,
      pagesPerFolder,
      folderLimit,
      tableHeaderData,
      sortCategoryAlphabeticallyAndControlLimits
    }
  }

  return (
    <StyledTable>
      {
        rows.length === 0
          ? (
            <div className='empty-row'>
              <h4>There is no data to display.</h4>
            </div>
          )
          : type === 'draggable' ? <DraggableTable {...tableProps as DraggableTableProps} /> : <SortableTable {...tableProps as SortableTableProps} />
      }
    </StyledTable>
  )
}

const StyledTable = styled.div`
  background-color: var(--color-darker);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow-y: auto;

  .empty-row {
    display: flex;
    flex-direction: row;
    justify-content: center;

    h4 {
      color: var(--color-white)
    }
  }

  table {
    padding: 0 .7rem;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 2px;

    th,
    td {
      margin: 0;
      border: 0;
      padding: 0.6rem 0;
      text-align: left;
      text-transform: capitalize;
      color: var(--color-white);
      font-size: var(--text-md);
      filter: brightness(85%);
    }

    thead{
      &:before {
        display:block;
        text-indent:-99999px;
        line-height:1rem;
        content:"@";
      }

      tr{
        th {
          background-color: var(--color-darker);

          &:first-child {
            padding-left: 1rem;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }

          &.sortable {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0;
            padding-right: 1rem;

            .inverted {
              display: flex;
              transform: rotate(-180deg);
            }
            svg {
              background-color: var(--color-darker);
              padding: 5px;
              width: 20px;
              height: 20px;
              filter: brightness(70%);
              border-radius: 5px;
            }
          }
          &:last-child{
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      }
    }

    tbody{
      border-radius: 5px;

      &:before {
        display:block;
        text-indent:-99999px;
        line-height:1rem;
        content:"@";
      }

      &:last-child {
        &:after {
          display:block;
          text-indent:-99999px;
          line-height:1rem;
          content:"@";
        }
      }

      tr{
        border-radius: 5px;

        td {
          border-top: 0;
          border-bottom: 1px solid rgba(0,0,0,0.5);
          background-color: var(--color-dark);
          padding: .6rem 0;

          &:first-child{
            padding-left: 1rem;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          &:last-child{
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }

          &.category-name {
            display: flex;
            flex-direction: row;
            align-items: center;

            span {
              margin-left: .7rem;
            }
          }

          span.blue, span.black {
            background-color: rgb(59, 185, 255);
            padding: 2px 5px;
            font-size: var(--text-md);
            font-weight: var(--font-weight-bd);
            border-radius: 5px;

            svg {
              margin-right: 5px;
            }
          }
          span.black {
            background-color: var(--color-darker);
          }

          div.icon-wrapper{
            display: flex;
            flex-direction: row;

            span {
              margin-right: 5px;
              width: 20px;
              height: 20px;
              
              svg {
                background-color: var(--color-darker);
                padding: 5px;
                width: 20px;
                height: 20px;
                border-radius: 5px;
              }
            }

            img.icon {
              display: block;
              margin-right: 2px;
              width: 20px;
              height: 20px;
              border-radius: 50%;
            }
          }
        }

        &.draggable{
          &:hover {
            cursor: pointer;
          }
            
          td:first-child{
            &:before{
              display: flex;
              position: absolute;
              left: -2px;
              background-color: var(--color-white-fix);
              filter: brightness(70%);
              width: 4px;
              height: 20px;
              content:"";
              border-radius: 2px;
            }
          }
        }

        &:not(:first-child).divider {
          &:before {
            display:block;
            text-indent:-99999px;
            line-height:1rem;
            content:"@";
          }
        } 
      }
    }
  }`

export default Table
