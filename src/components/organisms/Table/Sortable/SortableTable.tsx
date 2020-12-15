import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

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

export interface SortableTableContextProps {
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

// C O N T E X T

export const SortableTableContext = React.createContext<SortableTableContextProps>(
  {} as SortableTableContextProps
)

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

  const childrenProps: SortableTableContextProps = {
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
    <SortableTableContext.Provider value={childrenProps}>
      <StyledTable>
        {children}
      </StyledTable>
    </SortableTableContext.Provider>
  )
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 3px;
`
