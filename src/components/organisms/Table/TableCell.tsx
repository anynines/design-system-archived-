import React from 'react'
import { Cell } from 'react-table'
import { Icon, IconName } from '../../atoms/Icon/Icon'
import { Tooltip } from '../../atoms/Tooltip/Tooltip'

import TableIcon from './TableIcon'
import { TableRow, TableColumnCell, TableColumnCellColor, TableColumnIcon } from './Table'

/* Some parts of Cell's TS definition could not be resolved */

interface TableCellProps {
  cell: Cell<TableRow, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  className?: TableColumnCellColor | null
  cellType: TableColumnCell | null
  iconType?: TableColumnIcon | null
}

const TableCell = (props: TableCellProps): any => { // eslint-disable-line @typescript-eslint/no-explicit-any
  const { cell, className, cellType, iconType } = props

  switch (cellType) {
    case 'sticker':
      return (
        <span className={className || undefined}>{cell.value}</span>
      )
    case 'icons': {
      const icons: string[] = cell.value
      return (
        <div className='icon-wrapper'>
          {icons.map((icon: string, iconIndex: number) => {
            return (
              <TableIcon
                type={iconType}
                iconIndex={iconIndex}
                icon={icon}
                key={iconIndex.toString()}
              />
            )
          })}
        </div>
      )
    }
    case 'icon': {
      return (
        <span className={className || undefined}>
          <Icon icon={'eye' as IconName} />
          {cell.value}
        </span>
      )
    }
    case 'link': {
      return (
        <a
          href={cell.row.original.slug}
          style={{ position: 'relative' }}
        >
          <Icon data-tip data-for='default' icon={'link' as IconName} />
          <Tooltip>
            Go to link
          </Tooltip>
        </a>
      )
    }
    default:
      return cell.render('Cell')
  }
}

export default TableCell
