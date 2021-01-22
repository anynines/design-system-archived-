import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface ButtonNakedProps {
  onClick?: () => void
}

const ButtonNaked: React.FC<ButtonNakedProps> = (props) => {
  const { onClick, children } = props

  return (
    <StyledButtonNaked onClick={onClick}>
      {children}
    </StyledButtonNaked>
  )
}

const StyledButtonNaked = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-left: 12px;
  border: none;
  background-color: var(--color-black);
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  color: var(--color-white); 
  outline: none;
  border-radius: calc(var(--radius) * 0.5);
  transition: var(--transition);
  
  svg {
    width: 12px;
    height: 12px;
  }

  &:hover {
    background-color: var(--color-primary);
  }
`

export default ButtonNaked
