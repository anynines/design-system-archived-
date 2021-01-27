import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E S
export interface ColProps extends DefaultComponentProps {
  id?: string
}

// C O M P O N E N T
export const Col: React.FC<ColProps> = ({
  children,
  className,
  id,
  style
}) => {
  return (
    <StyledCol
      id={id}
      className={`column ${className}`}
      style={style}
    >
      {children}
    </StyledCol>
  )
}

const StyledCol = styled.div`
  margin: 0 var(--space-md);
  width: auto;
  flex: 1;
`
