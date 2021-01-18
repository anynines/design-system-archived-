import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface CardFooterProps {
  className?: string
  style?: React.CSSProperties
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  style
}) => {
  return (
    <StyledCardFooter
      className={`card-footer ${className}`}
      style={style}
    >
      {children}
    </StyledCardFooter>
  )
}

const StyledCardFooter = styled.div`
  padding: var(--space-sm) var(--space-md) var(--space-md);
`
