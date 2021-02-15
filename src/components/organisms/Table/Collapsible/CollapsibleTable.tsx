import React from 'react'

// C O M P O N E N T S
import CollapsibleTableHeader from './CollapsibleTableHeader'
import CollapsibleTableBody, { CollapsibleTableRow } from './CollapsibleTableBody'
import { Table } from '../Table/Table'

// I N T E R F A C E
export interface CollapsibleTableProps {
  headerData: string[]
  bodyData: CollapsibleTableRow[]
}

// C O M P O N E N T
const CollapsibleTable: React.FC<CollapsibleTableProps> = (props) => {
  const { headerData, bodyData } = props

  return (
    <Table className='scrollable'>
      <CollapsibleTableHeader headerData={headerData} />
      <CollapsibleTableBody bodyData={bodyData} />
    </Table>
  )
}

export default CollapsibleTable
