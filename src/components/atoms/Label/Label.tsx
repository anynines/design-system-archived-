import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface LabelProps {
  className?: string
  style?: React.CSSProperties
  type?: LabelType
}

// T Y P E S
export type LabelType =
  'primary'
  | 'success'
  | 'notice'
  | 'warning'
  | 'error'
  | 'white'
  | 'light'
  | 'dark'
  | 'black'

// C O M P O N E N T
export const Label: React.FC<LabelProps> = ({
  children,
  className = '',
  style,
  type = 'primary'
}) => {
  return (
    <StyledLabel
      className={`label ${className} ${type}`}
      style={style}
    >
      {children}
    </StyledLabel>
  )
}

// S T Y L E S
const StyledLabel = styled.span`
  z-index: 10;
  margin-left: 10px;
  padding: 4px 8px;
  font-size: var(--text-md);
  font-weight: var(--font-weight-rg);
  border-radius: calc(var(--radius) / 2);

  &.primary {
    background-color: var(--color-primary);
  }

  &.success {
    background-color: var(--color-success);
  }

  &.notice {
    background-color: var(--color-notice);
  }

  &.warning {
    background-color: var(--color-warning);
    color: var(--color-black);
  }

  &.error {
    background-color: var(--color-error);
  }

  &.white {
    background-color: var(--color-white);
    color: var(--color-black);
  }

  &.ligth {
    background-color: var(--color-ligth);
  }

  &.dark {
    background-color: var(--color-dark);
  }

  &.black {
    background-color: var(--color-black);
  }
`
