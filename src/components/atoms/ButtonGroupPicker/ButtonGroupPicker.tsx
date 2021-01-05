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

  > .btn {
    position: relative;
    border-radius: 0;
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
