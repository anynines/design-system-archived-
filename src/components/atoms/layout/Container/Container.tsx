import React from 'react'
import { Container as ReactGridSystemContainer, ScreenClassMap } from 'react-grid-system'

// I N T E R F A C E S
export interface ContainerProps extends ScreenClassMap<boolean> {
  fluid?: boolean
  style?: object
  component?: () => string | string
  id?: string
  className?: string
}

// C O M P O N E N T
export const Container: React.FC<ContainerProps> = ({
  id,
  className,
  children,
  ...ReactGridSystemContainerProps
}) => {
  return (
    <ReactGridSystemContainer id={id} className={className} {...ReactGridSystemContainerProps}>
      {children}
    </ReactGridSystemContainer>
  )
}
