import React from 'react'

import { Icon, IconName } from '../../atoms/Icon/Icon'
import { TableColumnIcon } from './Table'

interface TableIconProps {
  icon: string
  type: TableColumnIcon | null
  iconIndex: number
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
