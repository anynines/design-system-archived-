import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface TextInputPrependProps {
  onClick?: () => void
  clickable?: boolean
  className?: string
}

// C O M P O N E N T
export const TextInputPrepend: React.FC<TextInputPrependProps> = ({
  className = 'StyledTextInputPrepend',
  clickable = false,
  onClick,
  children
}) => {
  const onPrependClick = (): void => {
    if (onClick !== undefined) {
      onClick()
    }
  }

  return (
    <StyledTextInputPrepend
      className={`input-prepend ${className}`}
      onClick={onPrependClick}
      clickable={clickable}
    >
      {children}
    </StyledTextInputPrepend>
  )
}

interface StyledTextInputPrependProps {
  clickable: boolean
}

// S T Y L E S
const StyledTextInputPrepend = styled.div<StyledTextInputPrependProps>`
  --cursor: ${(props): string => { return props.clickable ? 'pointer' : 'default' }};

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark-50);
  cursor: var(--cursor);
  width: 2.75rem;
  min-height: 100%;
  color: var(--color-white);
  border-radius: 10px 0 0 10px;
  transition: var(--transition);
  
  svg {
    width: 16px;
    height: 100%;
  }
`
