import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface LabelProps {
  htmlFor: string
  className?: string
}

// C O M P O N E N T
export const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      className={`input-label ${className}`}
    >
      {children}
    </StyledLabel>
  )
}

// S T Y L E S
const StyledLabel = styled.label`
  position: absolute;
  top: 6px;
  z-index: 10;
  opacity: .5;
  font-size: var(--text-md);
  transition: var(--transition);
`
