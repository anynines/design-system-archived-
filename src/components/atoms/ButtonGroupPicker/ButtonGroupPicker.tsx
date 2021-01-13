import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface ButtonGroupPicker {
  className?: string
  style?: React.CSSProperties
}

// C O M P O N E N T
export const ButtonGroupPicker: React.FC<ButtonGroupPicker> = ({
  className = '',
  style,
  children
}) => {
  return (
    <StyledButtonGroupPicker
      className={`button-group-picker ${className}`}
      style={style}
    >
      {children}
    </StyledButtonGroupPicker>
  )
}

// S T Y L E S
const StyledButtonGroupPicker = styled.div`
  display: flex;

  > .btn {
    position: relative;
    border-radius: none;

    &:first-child {
      border-top-left-radius: var(--radius);
      border-bottom-left-radius: var(--radius);
    }

    &:last-child {
      border-top-right-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
    }
  }
`
