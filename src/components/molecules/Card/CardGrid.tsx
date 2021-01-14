import React from 'react'
import styled from 'styled-components'

export interface CardGridProps {
  className?: string
  gridColumnsMobile?: number
  gridColumnsDesktop?: number
  style?: React.CSSProperties
}

export const CardGrid: React.FC<CardGridProps> = ({
  children,
  className,
  gridColumnsMobile = 2,
  gridColumnsDesktop = 4,
  style
}) => {

  return (
    <StyledCardGrid
      className={`card-grid ${className}`}
      gridColumnsMobile={gridColumnsMobile}
      gridColumnsDesktop={gridColumnsDesktop}
      style={style}
    >
      {children}
    </StyledCardGrid>
  )
}

const StyledCardGrid = styled.div`
  --columns-mobile: ${(props): string => { return props.gridColumnsMobile }};
  --columns-desktop: ${(props): string => { return props.gridColumnsDesktop }};

  display: grid;
  grid-row-gap: var(--space-md);
  grid-column-gap: var(--space-md);
  width: 100%;
  max-width: var(--content-max-width);
  
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(var(--columns-mobile), 1fr);
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(var(--columns-desktop), 1fr);
  }
`
