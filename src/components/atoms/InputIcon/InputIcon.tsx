import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface InputIconProps {
  onClick?: () => void
  clickable?: boolean
  className?: string
}

// C O M P O N E N T
export const InputIcon: React.FC<InputIconProps> = ({
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
    <StyledInputIcon
      className={`input-prepend ${className}`}
      onClick={onPrependClick}
      clickable={clickable}
    >
      {children}
    </StyledInputIcon>
  )
}

interface StyledInputIconProps {
  clickable: boolean
}

// S T Y L E S
const StyledInputIcon = styled.div<StyledInputIconProps>`
  --cursor: ${(props): string => { return props.clickable ? 'pointer' : 'default' }};

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white-10);
  cursor: var(--cursor);
  width: 44px;
  min-width: 44px;
  min-height: 100%;
  color: var(--color-white);
  border-radius: 10px 0 0 10px;
  transition: var(--transition);
  
  svg {
    width: 16px;
    height: 100%;
  }
`
