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
  setSortData: (data: SortableTableRow[]) => void
  onSort?: (sortArgs: SortableTableSortArgs) => void
}

export interface SortableTableContextProps {
  sortData: SortableTableRow[]
  sortDirection: SortableTableSortDirection
  sortedBy: string
  setSortDirection: Dispatch<SetStateAction<SortableTableSortDirection>>
  setSortData: (data: SortableTableRow[]) => void
  setSortedBy: Dispatch<SetStateAction<string>>
  onSort?: (sortArgs: SortableTableSortArgs) => void
}

export interface SortableTableSortArgs {
  field: string
  sortDirection: SortableTableSortDirection
  setSortData: (data: SortableTableRow[]) => void
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
    setSortData: setSortDataProps,
    onSort,
    originalData,
    children
  } = props

  const setSortData = React.useCallback((data: SortableTableRow[]) => {
    setSortDataProps(data)
  }, [setSortDataProps])

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

    // sortData is missing in the dependency because it produce an infinite rerender loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSort, currentSortDirection, currentSortedBy, setSortData, originalData])

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
