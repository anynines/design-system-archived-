import React from 'react'
import { Row as ReactGridSystemRow, Align, Justify } from 'react-grid-system'

// I N T E R F A C E S
export interface RowProps {
  align?: Align
  justify?: Justify
  debug?: boolean
  style?: object
  nogutter?: boolean
  component?: () => string | string
  gutterWidth?: number
  id?: string
  className?: string
}

// C O M P O N E N T
export const Row: React.FC<RowProps> = ({
  id,
  className,
  children,
  ...ReactGridSystemRowProps
}) => {
  return (
    <ReactGridSystemRow id={id} className={className} {...ReactGridSystemRowProps}>
      {children}
    </ReactGridSystemRow>
  )
}
