import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface InputIconProps {
  className?: string
  clickable?: boolean
  onClick?: () => void
}

// C O M P O N E N T
export const InputIcon: React.FC<InputIconProps> = ({
  children,
  className,
  clickable = false,
  onClick
}) => {
  const onPrependClick = (): void => {
    if (onClick !== undefined) {
      onClick()
    }
  }

  return (
    <StyledInputIcon
      className={`input-icon ${className}`}
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
  background-color: rgba(0,0,0,.02);
  cursor: var(--cursor);
  width: 44px;
  min-width: 44px;
  min-height: 100%;
  color: var(--text-color);
  border-radius: calc(var(--radius) - 1px) 0 0 calc(var(--radius) - 1px);
  transition: var(--transition);
  
  svg {
    width: 16px;
    height: 100%;
  }
`
