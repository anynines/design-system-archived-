import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

import { getChildrenWithNewProps } from '../../../../helpers'

// T Y P E S
export interface TableRow {
  [key: string]: string | boolean | number | string[] | number[]
}

export type TableSortDirection = 'asc' | 'desc' | null

export interface TableProps {
  data: TableRow[]
  sortDirection?: TableSortDirection
  sortedBy?: string
}

export interface TableChildrenProps {
  data: TableRow[]
  sortDirection: TableSortDirection
  sortedBy: string
  setSortDirection: Dispatch<SetStateAction<TableSortDirection>>
  setData: Dispatch<SetStateAction<TableRow[]>>
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
    data,
    sortDirection,
    sortedBy,
    children
  } = props

  const [currentData, setCurrentData] = React.useState<TableRow[]>([] as TableRow[])
  const [currentSortedBy, setCurrentSortedBy] = React.useState<string>('')
  const [currentSortDirection, setCurrentSortDirection] = React.useState<TableSortDirection>(null)

  React.useEffect(() => {
    if (data.length) {
      setCurrentData(data)
      if (sortedBy) setCurrentSortedBy(sortedBy)
      if (sortDirection) setCurrentSortDirection(sortDirection)
    }
  }, [data, sortDirection, sortedBy])

  const getDirection = (direction: TableSortDirection): TableSortDirection => {
    if (direction === 'asc') return 'desc'
    if (direction === 'desc') return null
    return 'asc'
  }

  const handleOnSort = (field: string): void => {
    const newData = [...currentData]

    if (field !== currentSortedBy) {
      setCurrentSortedBy(field)
      setCurrentSortDirection('asc')
    } else setCurrentSortDirection(getDirection(currentSortDirection))

    if (newData.length) {
      const value = newData[0][field]
      if (Array.isArray(value) || typeof value === 'boolean') return
      if (sortDirection === null) {
        setCurrentData(data)
        return
      }
    }

    const sortedData = newData.sort((firstItem, secondItem) => {
      const firstValue: string | boolean | number = getCellValue(firstItem, field)
      const secondValue: string | boolean | number = getCellValue(secondItem, field)

      if (typeof firstValue === 'string' && typeof secondValue === 'string') return firstValue.charCodeAt(0) - secondValue.charCodeAt(0)
      if (typeof firstValue === 'number' && typeof secondValue === 'number') return Number(firstValue) - Number(secondValue)
      return 0
    })
    if (sortDirection === 'desc') sortedData.reverse()

    setCurrentData(sortedData)
  }

  const childrenProps: TableChildrenProps = {
    data: currentData,
    sortDirection: currentSortDirection,
    sortedBy: currentSortedBy,
    setSortDirection: setCurrentSortDirection,
    setData: setCurrentData,
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
`
