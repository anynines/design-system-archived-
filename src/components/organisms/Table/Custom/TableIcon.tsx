import React from 'react'

import { Icon, IconName } from '../../../atoms/Icon/Icon'
import { TableColumnIcon } from './CustomTable'

interface TableIconProps {
  icon: string
  iconIndex: number
  type: TableColumnIcon | null | undefined
}

const TableIcon: React.FC<TableIconProps> = ({ icon, type, iconIndex }) => {
  switch (type) {
    case 'icon':
      return <span key={iconIndex}><Icon icon={icon as IconName} /></span>
    default:
      return <img className='icon' src={icon} alt='avatar' key={iconIndex.toString()} />
  }
}

export default TableIcon
