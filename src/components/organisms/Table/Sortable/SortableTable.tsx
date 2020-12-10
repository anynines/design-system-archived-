import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

import { getChildrenWithNewProps } from '../../../../helpers'

// T Y P E S
export interface SortableTableRow {
  [key: string]: string | boolean | number | string[] | number[]
}

export type SortableTableSortDirection = 'asc' | 'desc' | null

export interface SortableTableProps {
  sortData: SortableTableRow[]
  originalData: SortableTableRow[]
  setSortData: Dispatch<SetStateAction<SortableTableRow[]>>
  onSort?: (sortArgs: SortableTableSortArgs) => void
}

export interface SortableTableChildrenProps {
  sortData: SortableTableRow[]
  sortDirection: SortableTableSortDirection
  sortedBy: string
  setSortDirection: Dispatch<SetStateAction<SortableTableSortDirection>>
  setSortData: Dispatch<SetStateAction<SortableTableRow[]>>
  setSortedBy: Dispatch<SetStateAction<string>>
  onSort?: (sortArgs: SortableTableSortArgs) => void
}

export interface SortableTableSortArgs {
  field: string
  sortDirection: SortableTableSortDirection
  setSortData: Dispatch<SetStateAction<SortableTableRow[]>>
  originalData: SortableTableRow[]
  sortData: SortableTableRow[]
}

// H E L P E R S
export const getCellValue = (row: SortableTableRow, field: string): boolean | number | string => {
  const value = row[field]
  if (Array.isArray(value)) return ''
  if (Number.isInteger(value)) return value
  if (typeof value === 'string') return value.toLowerCase()
  return ''
}

export const handleSort = (sortArgs: SortableTableSortArgs): void => {
  const { field, sortDirection, setSortData, originalData, sortData } = sortArgs

  if (sortDirection === null) {
    setSortData(originalData)
    return
  }

  const newData = [...sortData]
  let sortedData: SortableTableRow[] = []

  sortedData = newData.sort((firstItem, secondItem) => {
    const firstValue: string | boolean | number = getCellValue(firstItem, field)
    const secondValue: string | boolean | number = getCellValue(secondItem, field)

    if (typeof firstValue === 'string' && typeof secondValue === 'string') return firstValue.charCodeAt(0) - secondValue.charCodeAt(0)
    if (typeof firstValue === 'number' && typeof secondValue === 'number') return Number(firstValue) - Number(secondValue)
    return 0
  })

  if (sortDirection === 'desc') sortedData.reverse()

  setSortData(sortedData)
}

// C O M P O N E N T S
export const SortableTable: React.FC<SortableTableProps> = (props) => {
  const {
    sortData,
    setSortData,
    onSort,
    originalData,
    children
  } = props

  const [currentSortedBy, setCurrentSortedBy] = React.useState<string>('')
  const [currentSortDirection, setCurrentSortDirection] = React.useState<SortableTableSortDirection>(null)

  const childrenProps: SortableTableChildrenProps = {
    sortData,
    sortDirection: currentSortDirection,
    sortedBy: currentSortedBy,
    setSortDirection: setCurrentSortDirection,
    setSortData,
    setSortedBy: setCurrentSortedBy
  }
  if (onSort) childrenProps.onSort = onSort

  React.useEffect(() => {
    if (onSort) {
      const args: SortableTableSortArgs = {
        field: currentSortedBy,
        sortDirection: currentSortDirection,
        setSortData,
        originalData,
        sortData
      }
      onSort(args)
    }
  }, [onSort, currentSortDirection]) // eslint-disable-line

  return (
    <StyledTable>
      {getChildrenWithNewProps(children, childrenProps)}
    </StyledTable>
  )
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 3px;
`
