import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface InputLabelProps {
  className?: string
  htmlFor: string
}

// C O M P O N E N T
export const InputLabel: React.FC<InputLabelProps> = ({
  children,
  className,
  htmlFor
}) => {
  return (
    <StyledInputLabel
      htmlFor={htmlFor}
      className={`input-label ${className}`}
    >
      {children}
    </StyledInputLabel>
  )
}

// S T Y L E S
const StyledInputLabel = styled.label`
  position: absolute;
  top: 6px;
  z-index: 10;
  opacity: .5;
  font-size: var(--text-md);
  transition: var(--transition);
`
