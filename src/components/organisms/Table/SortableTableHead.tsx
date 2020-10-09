import React from 'react'
import { Icon } from '../../atoms/Icon/Icon'
import { HeaderGroup } from 'react-table'

import { SortableTableHeadColumn } from './SortableTableHeadColumn'

import { TableRow } from './Table'

interface SortableTableHeadProps {
  headerGroups: HeaderGroup<TableRow>[]
}

const SortableTableHead: React.FC<SortableTableHeadProps> = (props) => {
  const { headerGroups } = props

  const renderSortAndFilterOptions = (isPage: boolean, column: {isSorted: boolean; isSortedDesc: boolean}):
  JSX.Element | null => {
    if (!isPage) return null
    if (!column.isSorted) return <Icon icon='unorderedList' />
    if (!column.isSortedDesc) return <Icon className='inverted' icon='caretDown' />
    return <Icon icon='caretDown' />
  }

  return (
    <thead>
      {
        headerGroups.map((headerGroup: HeaderGroup<TableRow>, headerIndex: number) => {
          return (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerIndex.toString()}>
              {headerGroup.headers.map(
                (column: any, colIndex: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
                  const isPage = column.id === 'page' || column.id === 'views'
                  return (
                    <SortableTableHeadColumn
                      key={colIndex.toString()}
                      column={column}
                      isPage={isPage}
                      renderSortAndFilterOptions={renderSortAndFilterOptions}
                    />
                  )
                }
              )}
            </tr>
          )
        })
      }
    </thead>
  )
}

export default SortableTableHead
