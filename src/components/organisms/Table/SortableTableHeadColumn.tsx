import React from 'react'

interface SortableTableHeadColumnProps {
  column: any // eslint-disable-line @typescript-eslint/no-explicit-any
  isPage: boolean
  renderSortAndFilterOptions: (isPage: boolean, column: {isSorted: boolean; isSortedDesc: boolean}) =>
  JSX.Element | null
}

const SortableTableHeadColumn: React.FC<SortableTableHeadColumnProps> = (props) => {
  const { column, isPage, renderSortAndFilterOptions } = props

  React.useEffect(() => {
    column.clearSortBy()
  }, [column])

  return (
    <th
      className={isPage ? 'sortable' : ''}
      {...isPage ? column.getHeaderProps(column.getSortByToggleProps())
        : column.getHeaderProps()}
    >
      {column.render('Header')}
      {renderSortAndFilterOptions(isPage, column)}
    </th>
  )
}

export { SortableTableHeadColumn }
