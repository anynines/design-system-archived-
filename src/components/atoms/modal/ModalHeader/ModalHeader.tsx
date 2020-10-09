import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface ModalHeaderProps {
  className?: string
}

// C O M P O N E N T
export const ModalHeader: React.FC<ModalHeaderProps> = ({
  className,
  children
}) => {
  return (
    <StyledModalHeader className='modal-header'>
      <div className={className && className}>
        <h2>{children}</h2>
      </div>
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
