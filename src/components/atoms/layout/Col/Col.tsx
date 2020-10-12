import React from 'react'
import { Col as ReactGridSystemCol, Offsets, Push, Pull, ScreenClassMap } from 'react-grid-system'

// I N T E R F A C E S
export interface ColProps extends ScreenClassMap<number | 'content'> {
  width?: 'auto' | number | string
  debug?: boolean
  offset?: Offsets
  push?: Push
  pull?: Pull
  style?: object
  component?: () => string | string
  id?: string
  className?: string
}

// C O M P O N E N T
export const Col: React.FC<ColProps> = ({
  id,
  className,
  children,
  ...reactGridSystemColProps
}) => {
  return (
    <ReactGridSystemCol id={id} className={className} {...reactGridSystemColProps}>
      {children}
    </ReactGridSystemCol>
  )
}
