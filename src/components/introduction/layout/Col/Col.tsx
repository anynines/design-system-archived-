import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface ColProps {
  id?: string
  className?: string
  style?: React.CSSProperties
}

// C O M P O N E N T
export const Col: React.FC<ColProps> = ({
  id,
  className,
  style,
  children
}) => {
  return (
    <StyledCol
      id={id}
      className={className}
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
