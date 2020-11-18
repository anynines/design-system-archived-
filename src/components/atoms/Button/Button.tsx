import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface ButtonProps {
  className?: string
  type?: ButtonType
  size?: ButtonSize
  width?: ButtonWidth
  onClick?: () => void
  style?: React.CSSProperties
}

// T Y P E S
// @Note They will only be extracted in the props table if the param is optional...
export type ButtonType = 'primary' | 'dark' | 'darker' | 'submit'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonWidth = 'block' | 'inline'

// C O M P O N E N T
export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'md',
  width = 'inline',
  className,
  onClick,
  children,
  style
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
  cursor: pointer;
  padding: var(--space-lg) var(--space-lgr);
  width: auto;
  color: var(--color-white);
  font-family: var(--font-family);
  border-radius: var(--radius);
  outline: none;
  transition: var(--transition);
  font-weight: var(--font-weight-bd);
  border: var(--border);

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
    color: var(--color-white-fix);
    background-color: var(--color-primary);
  }

  &.dark {
    background-color: var(--color-dark);
  }

  &.darker {
    background-color: var(--color-darker);
  }

  &:hover {
    background-color: var(--color-primary-lightened);
    color: var(--color-white-fix);
    box-shadow: var(--shadow);
  }
`
StyledButton.displayName = 'StyledButton'
