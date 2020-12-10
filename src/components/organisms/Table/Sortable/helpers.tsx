import { SortableTableRow, SortableTableSortArgs } from './SortableTable'

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
