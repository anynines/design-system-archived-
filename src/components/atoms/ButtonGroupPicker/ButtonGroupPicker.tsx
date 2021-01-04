import React from 'react'
import styled from 'styled-components'

// C O M P O N E N T
export const ButtonGroupPicker: React.FC = (props) => {
  const { children } = props
  return (
    <StyledButtonGroupPicker className='button-group-picker'>
      {children}
    </StyledButtonGroupPicker>
  )
}

// S T Y L E S
const StyledButtonGroupPicker = styled.div`
  display: flex;
  border-radius: var(--radius);
  overflow: hidden;

  .btn {
    position: relative;
    border-radius: 0;

    &:not(:last-child)::after {
      position: absolute;
      right: 0;
      z-index: 1;
      background-color: var(--color-darker);
      width: 4px;
      height: 80%;
      border-radius: var(--radius);
      transform: translateX(50%);
      content: "";
    }
  }
`
