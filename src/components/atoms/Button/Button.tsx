import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// A T O M S
import { Icon, IconName } from '../Icon/Icon'

// I N T E R F A C E
export interface ButtonProps extends DefaultComponentProps {
  icon?: IconName
  iconOnly?: boolean
  onClick?: () => void
  size?: ButtonSize
  type?: ButtonType
  width?: ButtonWidth
}

// T Y P E S
export type ButtonType =
  'primary' |
  'dark' |
  'black' |
  'submit' |
  'white' |
  'light' |
  'transparent' |
  'disabled'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonWidth = 'block' | 'inline'

// C O M P O N E N T
export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  icon,
  iconOnly = false,
  onClick,
  size = 'md',
  style,
  type = 'primary',
  width = 'inline'
}) => {
  return (
    <StyledButton
      style={style}
      className={`btn 
        ${type} 
        ${size} 
        ${width} 
        ${iconOnly && 'icon-only'} 
        ${className}
      `}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={(): void => { return (onClick && onClick()) }}
      icon={icon}
      disabled={type === 'disabled'}
    >
      { icon && <Icon icon={icon} className={`${iconOnly && 'icon-only'}`} /> }
      { children }
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
  padding: var(--space-md) var(--space-lg);
  width: auto;
  font-family: var(--font-family);
  font-weight: var(--font-weight-bd);
  border-radius: var(--radius);
  outline: none;
  transition: var(--transition);

  i {
    margin-right: var(--space-md);
  }

  &.icon-only {
    padding: var(--space-lg);
    
    i {
      margin-right: 0;
    }
  }

  /* Width */
  &.block {
    width: 100%;
  }

  /* Sizes */
  &.xs {
    font-size: var(--text-xxxs);

    i {
      --icon-size: .6rem;
    }
  }

  &.sm {
    font-size: var(--text-xxs);

    i {
      --icon-size: .75rem;
    }
  }
  
  &.md {
    font-size: var(--text-xs);
  }
  
  &.lg {
    font-size: var(--text-md);
  }

  /* Types */
  &.primary,
  &.submit {
    background-color: var(--color-primary);
    color: var(--color-white-fix);
  }

  &.primary,
  &.submit,
  &.dark,
  &.black {
    color: var(--color-white);
  }

  &.transparent {
    background-color: transparent;
    color: var(--text-color);
  }

  &.dark {
    background-color: var(--color-dark);
  }

  &.black {
    background-color: var(--color-black);
  }

  &.white,
  &.light {
    color: var(--color-black);
  }

  &.white {
    background-color: var(--color-white);
  }

  &.light {
    background-color: var(--color-light);
  }

  &.disabled {
    opacity: .75;
    background-color: var(--color-dark);
    cursor: not-allowed;

    &:hover,
    &:focus {
      background-color: var(--color-dark);
    }
  }

  &:hover, &:focus {
    background-color: var(--color-primary-light);
    color: var(--color-white-fix);
    box-shadow: 0 0 6px var(--color-light-10);
  }
`
