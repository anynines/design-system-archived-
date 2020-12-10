import React, { FC, useContext } from 'react'
import styled from 'styled-components'

import { SortableTableSortDirection, SortableTableContext } from './SortableTable'
import { Icon } from '../../../atoms/Icon/Icon'

// T Y P E S
export type SCellType = 'head' | 'body'
export type SCellColor = 'primary' | 'light' | 'dark' | 'warning' | 'error' | 'success' | 'notice'

export interface SCellProps {
  type: SCellType
  value?: string | boolean | number
  color?: SCellColor
  field?: string
  sortable?: boolean
}

// C O M P O N E N T S

export const SCell: FC<SCellProps> = (props) => {
  const {
    sortable = false,
    field = '',
    type,
    value,
    color,
    children
  } = props

  const {
    sortDirection,
    sortedBy,
    setSortDirection,
    setSortedBy,
    onSort
  } = useContext(SortableTableContext)

  const renderValue = (): string | boolean | number | JSX.Element | React.ReactNode => {
    if (value) return value.toString()
    if (field) return field.toString()
    if (children) return children
    return ''
  }

  const handleOnClickCell = (): void => {
    if (sortable) {
      if (sortedBy !== field) {
        setSortedBy(field || '')
        setSortDirection('asc' as SortableTableSortDirection)
      } else if (sortDirection === 'asc') setSortDirection('desc' as SortableTableSortDirection)
      else if (sortDirection === 'desc') {
        setSortDirection(null as SortableTableSortDirection)
        setSortedBy('')
      }
    }
  }

  const renderSortableIcon = (): JSX.Element | null => {
    if (onSort && sortable && sortedBy === field) {
      if (sortDirection === 'desc') return <Icon className='inverted' icon='caretDown' />
      if (sortDirection === 'asc') return <Icon icon='caretDown' />
    }
    if (onSort && sortable && (sortDirection === null || sortedBy !== field)) return <Icon icon='unorderedList' />
    return null
  }

  if (type === 'head') {
    return (
      <StyledHeadCell
        className={`${onSort && sortable ? 'head ' : ''}${color || null}`}
        {...onSort ? { onClick: handleOnClickCell } : {}}
      >
        <div>
          {renderValue()}
          {renderSortableIcon()}
        </div>
      </StyledHeadCell>
    )
  }

  return (
    <StyledBodyCell className={color || null}>
      <div>
        {renderValue()}
      </div>
    </StyledBodyCell>
  )
}

const StyledBodyCell = styled.td`
  margin: 0;
  border: 0;
  background-color: var(--color-dark);

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem;
    text-align: left;
    text-transform: capitalize;
    color: var(--color-white);
    font-size: var(--text-md);

    i {
      margin-left: var(--space-sm);
      width: 10px;
      height: 10px;
    }
  }
  
  &.head {
    cursor: pointer;
  }
  &.dark {
    background-color: var(--color-dark);
  }
  &.light {
    background-color: var(--color-light);

    div{
      color: var(--color-dark);

      span.black {
        color: var(--color-light);
      }

      div.icon-wrapper {
        svg {
          background-color: var(--color-white);
        }
      }
    }
  }
  &.notice {
    background-color: var(--color-notice);
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

  .inverted {
    display: flex;
    transform: rotate(-180deg);
  }
`

const StyledHeadCell = styled(StyledBodyCell)`
  background-color: var(--color-notice);
`
