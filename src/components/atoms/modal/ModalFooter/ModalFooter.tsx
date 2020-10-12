import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface ModalFooterProps {
  className?: string
}

// C O M P O N E N T
export const ModalFooter: React.FC<ModalFooterProps> = ({
  className,
  children
}) => {
  return (
    <StyledModalFooter className={`modal-footer ${className}`}>
      {children}
    </StyledModalFooter>
  )
}

// S T Y L E S
const StyledModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  color: var(--color-white);
`
