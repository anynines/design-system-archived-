import React, { Dispatch, SetStateAction, useCallback } from 'react'
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
}

export interface TableChildrenProps {
  sortData: TableRow[]
  sortDirection: TableSortDirection
  sortedBy: string
  setSortDirection: Dispatch<SetStateAction<TableSortDirection>>
  setSortData: Dispatch<SetStateAction<TableRow[]>>
  setSortedBy: Dispatch<SetStateAction<string>>
  onSort: (field: string) => void
}

// H E L P E R S
export const getCellValue = (row: TableRow, field: string): boolean | number | string => {
  const value = row[field]
  if (Array.isArray(value)) return ''
  if (Number.isInteger(value)) return value
  if (typeof value === 'string') return value.toLowerCase()
  return ''
}

// C O M P O N E N T S
export const Table: React.FC<TableProps> = (props) => {
  const {
    sortData,
    originalData,
    setSortData,
    children
  } = props

  const [currentSortedBy, setCurrentSortedBy] = React.useState<string>('')
  const [currentSortDirection, setCurrentSortDirection] = React.useState<TableSortDirection>(null)

  const handleOnSort = useCallback((field: string): void => {
    if (currentSortDirection === null) {
      setSortData(originalData)
      return
    }
    console.log('reached start')
    const newData = [...sortData]
    let sortedData: TableRow[] = []
    sortedData = newData.sort((firstItem, secondItem) => {
      const firstValue: string | boolean | number = getCellValue(firstItem, field)
      const secondValue: string | boolean | number = getCellValue(secondItem, field)

      if (typeof firstValue === 'string' && typeof secondValue === 'string') return firstValue.charCodeAt(0) - secondValue.charCodeAt(0)
      if (typeof firstValue === 'number' && typeof secondValue === 'number') return Number(firstValue) - Number(secondValue)
      return 0
    })
    console.log('reached there almost')
    if (currentSortDirection === 'desc') sortedData.reverse()

    setSortData(sortedData)
  }, [originalData, setSortData, sortData, currentSortDirection])

  React.useEffect(() => {
    handleOnSort(currentSortedBy)
  }, [currentSortDirection, currentSortedBy, handleOnSort])

  const childrenProps: TableChildrenProps = {
    sortData,
    sortDirection: currentSortDirection,
    sortedBy: currentSortedBy,
    setSortDirection: setCurrentSortDirection,
    setSortData,
    setSortedBy: setCurrentSortedBy,
    onSort: handleOnSort
  }

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
