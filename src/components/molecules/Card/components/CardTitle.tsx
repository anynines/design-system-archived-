import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface CardTitleProps {
  className?: string
  style?: React.CSSProperties
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = '',
  style
}) => {
  return (
    <StyledCardTitle
      className={`card-title ${className}`}
      style={style}
    >
      {children}
    </StyledCardTitle>
  )
}

const StyledCardTitle = styled.div`
  padding: var(--space-md);
  max-width: 100%;
  color: var(--color-light);

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 0;
  }
`
