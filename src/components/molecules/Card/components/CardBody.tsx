import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E
export type CardBodyProps = DefaultComponentProps

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
