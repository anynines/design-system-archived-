import React from 'react'
import styled from 'styled-components'
import { useTable, useSortBy, Row } from 'react-table'

import { DraggableTable, DraggableTableProps } from './DraggableTable'

// T Y P E S
export interface RowsDataObject {
  [key: string]: Row<DraggableTableWrapperRow>[]
}

export interface TableData {
  [key: string]: DraggableTableWrapperRow[]
}

export interface DraggableTableWrapperRow {
  authors: string[]
  category: string
  id?: number
  languages: string[]
  name?: string
  page: string
  permissions: string
  published?: boolean
  sections: string[]
  slug?: string
  status: string
  title?: string
  views: number
}

export type TableSortOption = 'draggable'

export type TableRowColor = 'primary' | 'light' | 'dark' | 'warning' | 'error' | 'success'

export type TableAccessor = 'page' | 'status' | 'permissions' | 'languages' | 'views' | 'authors' | 'sections' | 'category'

export interface TableColumn {
  accessor: TableAccessor
  Header: TableAccessor
  sortType?: string
}

export type TableColumnCellColor = 'blue' | 'black'

export type TableColumnCell = 'sticker' | 'icons' | 'icon' | 'link'

export type TableColumnIcon = 'icon'

export interface DraggableTableWrapperProps {
  tableHeaderData: TableColumn[]
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  type: TableSortOption
  initialPages: DraggableTableWrapperRow[]
  pagesPerFolder?: number
  color?: TableRowColor
  folderLimit?: number
}

export interface DraggableTableDataProps extends DraggableTableWrapperProps {
  type: 'draggable'
  disabledCategories: string[]
  setPages?: React.Dispatch<React.SetStateAction<DraggableTableWrapperRow[]>>
  pages?: DraggableTableWrapperRow[]
}

// C O M P O N E N T
export const DraggableTableWrapper: React.FC<DraggableTableDataProps> = (props) => {
  const {
    color = 'dark',
    folderLimit = 5,
    getTableColumnColor,
    getTableColumnIconType,
    getTableColumnType,
    initialPages,
    pagesPerFolder = 10,
    tableHeaderData,
    type
  } = props

  const [localPages, setLocalPages] = React.useState<DraggableTableWrapperRow[]>(
    [] as DraggableTableWrapperRow[]
  )

  React.useEffect(() => {
    if (initialPages.length) setLocalPages(initialPages)
  }, [props, initialPages])

  const decideTableData = (): DraggableTableWrapperRow[] => {
    if (type !== 'draggable') return localPages

    props = props as DraggableTableDataProps
    const { pages } = props
    if (pages && pages.length > 0) return pages
    return localPages
  }

  const sortCategoryAlphabeticallyAndControlLimits = (pagesDataObject: TableData):
  DraggableTableWrapperRow[] => {
    let pagesDataArray: [string, DraggableTableWrapperRow[]][] = Object.entries(pagesDataObject)
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

    let sortedPages: DraggableTableWrapperRow[] = []
    pagesDataArray.forEach((pages) => {
      sortedPages = [...sortedPages, ...pages[1]]
    })

    return sortedPages
  }

  const {
    headerGroups,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    rows
  } = useTable({ columns: tableHeaderData, data: decideTableData() }, useSortBy)

  props = props as DraggableTableDataProps
  const { disabledCategories, pages = [], setPages } = props

  const tableProps: DraggableTableProps = {
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
    sortCategoryAlphabeticallyAndControlLimits,
    color
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
          : type === 'draggable' ? <DraggableTable {...tableProps} /> : null
      }
    </StyledTable>
  )
}

const StyledTable = styled.div`
  background-color: var(--color-black);
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
      padding: var(--space-sm) 0;
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
        content:'@';
      }

      tr{
        th {
          background-color: var(--color-black);

          &:first-child {
            padding-left: 1rem;
            border-top-left-radius: var(--radius);
            border-bottom-left-radius: var(--radius);
          }
        }
      }
    }

    tbody {
      border-radius: var(--radius);

      &:before {
        display:block;
        text-indent:-99999px;
        line-height:1rem;
        content:'@';
      }

      &:last-child {
        &:after {
          display:block;
          text-indent:-99999px;
          line-height:1rem;
          content:'@';
        }
      }

      tr {
        border-radius: var(--radius);

        td {
          border-top: 0;
          border-bottom: 1px solid rgba(0,0,0,0.5);
          background-color: var(--color-dark);
          padding: var(--space-xs) 0;

          &:first-child {
            padding-left: 1rem;
            border-top-left-radius: var(--radius);
            border-bottom-left-radius: var(--radius);
          }
          &:last-child {
            border-top-right-radius: var(--radius);
            border-bottom-right-radius: var(--radius);
          }
          &:last-child.table-row-link {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border-top-right-radius: var(--radius);
            border-bottom-right-radius: var(--radius);
            padding: var(--space-sm) 0;
            padding-right: 1rem;


            a {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            div.icon-wrapper{
              display: flex;
              flex-direction: row;

              span {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: var(--space-sm);
              }
            }

          }

          a.cell-link {
            position: relative;
            color: var(--color-dark);
          }
          
          span.blue, span.black {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: rgb(59, 185, 255);
            padding: 2px var(--space-sm);
            width: 60%;
            font-size: var(--text-md);
            font-weight: var(--font-weight-bd);
            border-radius: var(--radius);

            svg {
              margin-right: var(--space-sm);
            }
          }
          span.black {
            background-color: var(--color-dark);
          }

          div.icon-wrapper{
            display: flex;
            flex-direction: row;

            span {
              margin-right: var(--space-sm);
              
              svg {
                background-color: var(--color-dark);
                padding: 3px;
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

          &.dark {
            background-color: var(--color-dark);
          }
          &.light {
            background-color: var(--color-light);
            color: var(--color-dark);

            span.black {
              color: var(--color-light);
            }

            div.icon-wrapper{
              svg {
                background-color: var(--color-white);
              }
            }
          }
          &.success {
            background-color: var(--color-success);
          }
          &.error {
            background-color: var(--color-error);
          }
          &.warning {
            background-color: var(--color-warning);
          }
          &.primary {
            background-color: var(--color-primary);
          }

          &.category-name {
            display: flex;
            flex-direction: row;
            align-items: center;

            &.active:before {
              display: flex;
              position: absolute;
              left: -2px;
              background-color: var(--color-white-fix);
              filter: brightness(70%);
              width: 4px;
              height: 20px;
              content: '';
              border-radius: 2px;
            }

            &.active {
              cursor: pointer;
            }

            span.category-name-title {
              margin-left: .7rem;
            }

            div.category-name-edit-icon {
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              right: -15px;
              border: 2px solid var(--color-black);
              background-color: var(--color-dark);
              cursor: pointer;
              padding: var(--space-sm);
              width: 25px;
              height: 25px;
              border-radius: 50%;
              outline: none;

              svg {
                width: 10px;
                height: 10px;
              }

              &:hover {
                filter: brightness(90%);
              }

              &.active {
                background-color: var(--color-primary);
              }
            }
          }
        }

        &.draggable {
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
              content:'';
              border-radius: 2px;
            }
          }
        }

        &:not(:first-child).divider {
          &:before {
            display:block;
            text-indent:-99999px;
            line-height:1rem;
            content:'@';
          }
        } 
      }
    }
  }`

export default DraggableTableWrapper
