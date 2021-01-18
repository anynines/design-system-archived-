import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface CardBodyProps {
  className?: string
  style?: React.CSSProperties
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
  style
}) => {
  return (
    <StyledCardBody
      className={`card-body ${className}`}
      style={style}
    >
      {children}
    </StyledCardBody>
  )
}

const StyledCardBody = styled.div`
  padding: var(--space-md);
  padding-top: 0;
  color: var(--color-light-50);
`
