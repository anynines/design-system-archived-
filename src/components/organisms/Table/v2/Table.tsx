import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

import { getChildrenWithNewProps } from '../../../../helpers'

// T Y P E S
export interface TableRow {
  [key: string]: string | boolean | number | string[] | number[]
}

export type TableSortDirection = 'asc' | 'desc' | null

export interface TableProps {
  sortData: TableRow[]
  originalData: TableRow[]
  setSortData: Dispatch<SetStateAction<TableRow[]>>
  onSort?: (sortArgs: TableSortArgs) => void
}

export interface TableChildrenProps {
  sortData: TableRow[]
  sortDirection: TableSortDirection
  sortedBy: string
  setSortDirection: Dispatch<SetStateAction<TableSortDirection>>
  setSortData: Dispatch<SetStateAction<TableRow[]>>
  setSortedBy: Dispatch<SetStateAction<string>>
  onSort?: (sortArgs: TableSortArgs) => void
}

export interface TableSortArgs {
  field: string
  sortDirection: TableSortDirection
  setSortData: Dispatch<SetStateAction<TableRow[]>>
  originalData: TableRow[]
  sortData: TableRow[]
}

// H E L P E R S
export const getCellValue = (row: TableRow, field: string): boolean | number | string => {
  const value = row[field]
  if (Array.isArray(value)) return ''
  if (Number.isInteger(value)) return value
  if (typeof value === 'string') return value.toLowerCase()
  return ''
}

export const handleSort = (sortArgs: TableSortArgs): void => {
  const { field, sortDirection, setSortData, originalData, sortData } = sortArgs

  if (sortDirection === null) {
    setSortData(originalData)
    return
  }

  const newData = [...sortData]
  let sortedData: TableRow[] = []

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
export const Table: React.FC<TableProps> = (props) => {
  const {
    sortData,
    setSortData,
    onSort,
    originalData,
    children
  } = props

  const [currentSortedBy, setCurrentSortedBy] = React.useState<string>('')
  const [currentSortDirection, setCurrentSortDirection] = React.useState<TableSortDirection>(null)

  const childrenProps: TableChildrenProps = {
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
      const args: TableSortArgs = {
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
