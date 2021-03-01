import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E S
export type ModalHeaderProps = DefaultComponentProps

// C O M P O N E N T
export const ModalHeader: React.FC<ModalHeaderProps> = ({
  className,
  children,
  style
}) => {
  return (
    <StyledModalHeader
      className={`modal-header ${className}`}
      style={style}
    >
      <h2>{children}</h2>
    </StyledModalHeader>
  )
}

const StyledModalHeader = styled.div`
  padding: var(--space-fixed-sm);

  h2 {
    margin-bottom: 15px;
    line-height: 1.35;
    color: var(--color-white);
  }
`
