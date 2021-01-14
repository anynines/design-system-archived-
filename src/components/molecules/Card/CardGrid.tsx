import React from 'react'
import styled from 'styled-components'

export interface CardGridProps {
  className?: string
  style?: React.CSSProperties
}

export const CardGrid: React.FC<CardGridProps> = ({
  children,
  className,
  style
}) => {
  return (
    <StyledCardGrid
      className={`card-grid ${className}`}
      style={style}
    >
      {children}
    </StyledCardGrid>
  )
}

const StyledCardGrid = styled.div`
  display: grid;
  grid-row-gap: var(--space-md);
  grid-column-gap: var(--space-md);
  width: 100%;
  max-width: var(--content-max-width);
  
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
