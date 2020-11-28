import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface ButtonProps {
  className?: string
  onClick?: () => void
  size?: ButtonSize
  style?: React.CSSProperties
  type?: ButtonType
  width?: ButtonWidth
}

// T Y P E S
// @Note They will only be extracted in the props table if the param is optional...
export type ButtonType = 'primary' | 'dark' | 'black' | 'submit' | 'white'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonWidth = 'block' | 'inline'

// C O M P O N E N T
export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  size = 'md',
  style,
  type = 'primary',
  width = 'inline'
}) => {
  return (
    <StyledButton
      style={style}
      className={`btn ${type} ${size} ${width} ${className}`}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={(): void => { return (onClick && onClick()) }}
    >
      {children}
    </StyledButton>
  )
}

// S T Y L E S
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border: var(--border);
  cursor: pointer;
  padding: var(--space-lg) var(--space-lgr);
  width: auto;
  color: var(--color-white);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bd);
  border-radius: var(--radius);
  outline: none;
  transition: var(--transition);

  /* Width */
  &.block {
    width: 100%;
  }

  /* Sizes */
  &.xs {
    font-size: var(--text-xs);
  }

  &.sm {
    font-size: var(--text-sm);
  }
  
  &.md {
    font-size: var(--text-md);
  }
  
  &.lg {
    font-size: var(--text-lg);
  }

  /* Types */
  &.primary, &.submit {
    background-color: var(--color-primary);
    color: var(--color-white-fix);
  }

  &.dark {
    background-color: var(--color-dark);
  }

  &.black {
    background-color: var(--color-black);
  }

  &.white {
    background-color: var(--color-white);
    color: var(--color-black);
  }

  &:hover {
    background-color: var(--color-primary-light);
    color: var(--color-white-fix);
    box-shadow: var(--shadow);
  }
`
StyledButton.displayName = 'StyledButton'
