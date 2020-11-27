import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { Row, Cell } from 'react-table'
import styled from 'styled-components'

import { Icon } from '../../../atoms/Icon/Icon'
import { CustomTableRow as TableRow, TableColumnCell, TableAccessor, TableColumnCellColor, TableColumnIcon, TableRowColor } from '../Custom/CustomTable'
import DraggableTableColumn from './DraggableTableColumn'

interface DraggableTableRowProps {
  color?: TableRowColor
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
  index: number
  isDraggable: boolean
  isFolderDraggable: boolean
  key: string
  row: Row<TableRow>
  setIsFolderDraggable: React.Dispatch<React.SetStateAction<boolean>>
}

interface DraggableTableRowCategoryProps {
  idx: string
  key: string
  index: number
  isFolderDraggable: boolean
  setIsFolderDraggable: React.Dispatch<React.SetStateAction<boolean>>
  row: Row<TableRow>
}

const DraggableTableRowCategory: React.FC<DraggableTableRowCategoryProps> = (props) => {
  const {
    row, idx, isFolderDraggable, setIsFolderDraggable
  } = props
  return (
    <tr key={idx} className='draggable-table-row divider'>
      <td className={`category-name ${isFolderDraggable ? 'active' : ''}`}>
        <Icon icon='folder' />
        <span className='category-name-title'>{row.original.category}</span>
        <div
          role='button'
          onClick={(): void => { setIsFolderDraggable(!isFolderDraggable) }}
          className={`category-name-edit-icon ${isFolderDraggable ? 'active' : ''}`}
          tabIndex={0}
        >
          <Icon icon='plus' />
        </div>
      </td>
    </tr>
  )
}

const DraggableTableRow = SortableElement(
  (props: DraggableTableRowProps): JSX.Element => {
    const {
      row, isDraggable, getTableColumnColor,
      getTableColumnType, getTableColumnIconType,
      isFolderDraggable, color
    } = props

    return (
      <StyledRow {...row.getRowProps()} className={!isDraggable || isFolderDraggable ? '' : 'draggable'}>
        {row.cells.map((cell: Cell<TableRow, any>, cellIndex: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
          return (
            <DraggableTableColumn
              key={`${cell.row.id}-${cell.column.id}`}
              cell={cell}
              cellIndex={cellIndex}
              getTableColumnColor={getTableColumnColor}
              getTableColumnType={getTableColumnType}
              getTableColumnIconType={getTableColumnIconType}
              isLastColumn={row.cells.length - 1 === cellIndex}
              color={color}
            />
          )
        })}
      </StyledRow>
    )
  }
)

const UndraggableTableRow: React.FC<DraggableTableRowProps> = (props) => {
  const {
    index, row, isDraggable, getTableColumnColor,
    getTableColumnType, getTableColumnIconType,
    isFolderDraggable,
    color
  } = props
  return (
    <StyledRow key={index} className={!isDraggable || isFolderDraggable ? '' : 'draggable'}>
      {row.cells.map((cell: Cell<TableRow, any>, cellIndex: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        return (
          <DraggableTableColumn
            key={`${cell.row.id}-${cell.column.id}`}
            cell={cell}
            cellIndex={cellIndex}
            getTableColumnColor={getTableColumnColor}
            getTableColumnType={getTableColumnType}
            getTableColumnIconType={getTableColumnIconType}
            isLastColumn={cellIndex === row.cells.length - 1}
            color={color}
          />
        )
      })}
    </StyledRow>
  )
}

const StyledRow = styled.tr`
  &.draggable-table-row {
    width: 100%;
    border-radius: 5px;
    max-height: 60px;

    td {
      margin: 0;
      border-top: 1px solid rgba(0,0,0,0.5);
      border-bottom: 1px solid rgba(0,0,0,0.5);
      background-color: var(--color-dark);
      padding: 0.6rem 1rem;
      width: 100%;
      text-align: left;
      text-transform: capitalize;
      color: var(--color-white);
      font-size: var(--text-md);
      filter: brightness(85%);

      &:first-child {
        padding-left: 1rem;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
      }
      &:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }

      span.blue, span.black {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
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
        background-color: var(--color-black);
      }

      div.icon-wrapper{
        display: flex;
        flex-direction: row;

        span {
          margin-right: 5px;
          width: 20px;
          height: 20px;
            
          svg {
            background-color: var(--color-black);
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
          content:'';
          border-radius: 2px;
        }
      }
    }
  }
`

export default DraggableTableRow

export { DraggableTableRowCategory, UndraggableTableRow }
