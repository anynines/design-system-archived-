import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface CheckboxProps {
  className?: string
  label: string
  id: string
  onClick?: () => void
  style?: React.CSSProperties
  value: boolean
}

// C O M P O N E N T
export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  onClick,
  id = 'checkbox-id',
  label,
  value = false,
  style
}) => {
  return (
    <StyledCheckbox
      style={style}
      className={`checkbox ${className}`}
      value={value}
    >
      <input type='checkbox' id={id} checked={value} />
      <label htmlFor={id} onClick={(): void => { return (onClick && onClick()) }}>
        {label}
      </label>
    </StyledCheckbox>
  )
}

// S T Y L E S
const StyledCheckbox = styled.div`
  --size: 1.875rem;

  input[type] {
    display: none;

    &:checked + label {
      &::before {
        border-color: var(--color-white-30);
      }

      &::after {
        margin: .375rem;
        border-radius: calc(var(--radius) / 4);
        background-color: var(--color-primary);
        width: 1.25rem;
        height: 1.25rem;
        opacity: 1;
      }
    }
  }

  label {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: calc(var(--size) + var(--space-fixed-md));
    font-size: var(--text-md);
    cursor: pointer;

    &:hover {
      &::before {
        border-color: var(--color-white-20);
      }
    }

    &::before,
    &::after {
      display: flex;
      position: absolute;
      left: 0;
      transition-property: opacity, border;
      transition-duration: .25s;
      transition-timing-function: ease-in-out;
      content: '';
    }

    &::before {
      border: var(--border);
      background: var(--color-black);
      border-radius: calc(var(--radius) / 2);
      width: var(--size);
      height: var(--size);
    }

    &::after {
      opacity: 0;
    }
  }
`

StyledCheckbox.displayName = 'StyledCheckbox'
