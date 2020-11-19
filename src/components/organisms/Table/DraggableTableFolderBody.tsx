import React from 'react'
import { Row, TableBodyProps } from 'react-table'
import { SortableElement } from 'react-sortable-hoc'
import styled from 'styled-components'

import { DraggableTableRowCategory, UndraggableTableRow } from './DraggableTableRow'
import {
  TableRow, TableAccessor, TableColumnCell,
  TableColumnCellColor, TableColumnIcon, TableRowColor
} from './Table'

interface DraggableTableFolderBodyProps {
  items: Row<TableRow>[]
  prepareRow: (row: Row<TableRow>) => void
  tableBodyProps: TableBodyProps
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  disabledCategories: string[]
  isFolderDraggable: boolean
  setIsFolderDraggable: React.Dispatch<React.SetStateAction<boolean>>
  color?: TableRowColor
}

const DraggableTableFolderBody: React.FC<DraggableTableFolderBodyProps> = (
  props
) => {
  const {
    items, prepareRow, tableBodyProps,
    getTableColumnColor, getTableColumnType,
    getTableColumnIconType, disabledCategories,
    isFolderDraggable, setIsFolderDraggable,
    color
  } = props
  const folders: JSX.Element[] = []
  let rows: JSX.Element[] = []
  let folderIndex = 0

  const isNewCategoryFound = (index: number): boolean => {
    return index - 1 >= 0
      && items[index].original.category.toLowerCase()
      !== items[index - 1].original.category.toLowerCase()
  }

  const Folder = SortableElement(
    ({ rowsArray }): JSX.Element => {
      return (
        <StyledBody {...tableBodyProps}>
          {rowsArray}
        </StyledBody>
      )
    }
  )

  const pushFolder = (): void => {
    if (rows.length) {
      folders.push(
        <Folder rowsArray={rows} key={folderIndex.toString()} index={folderIndex} />
      )
      rows = []
      folderIndex += 1
    }
  }

  items.forEach((item: Row<TableRow>, index: number) => {
    prepareRow(item)

    const shouldRowBeDisabled = (): boolean => {
      return isFolderDraggable || disabledCategories.includes(item.original.category)
    }

    if (index === 0 || isNewCategoryFound(index)) {
      pushFolder()
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
      <UndraggableTableRow
        key={index.toString()}
        index={index}
        row={item}
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

  pushFolder()

  return <>{folders}</>
}

const StyledBody = styled.tbody`
  width: 100%;

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

  tr {
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
          border: 2px solid var(--color-darker);
          background-color: var(--color-dark);
          cursor: pointer;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          outline: none;

          &:hover {
            filter: brightness(90%);
          }

          &.active {
            background-color: var(--color-primary);
          }
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
`

export default DraggableTableFolderBody
