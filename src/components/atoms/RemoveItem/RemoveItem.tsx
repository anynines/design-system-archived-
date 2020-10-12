import React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon/Icon'

// I N T E R F A C E S
export interface RemoveItemProps {
  className?: string
  size?: string
  onClick?: () => void
}

// C O M P O N E N T
export const RemoveItem: React.FC<RemoveItemProps> = ({
  className = 'StyledRemoveItem',
  size = 'sm',
  onClick
}) => {
  return (
    <>
      <StyledRemoveItem className={`${size && size} ${className}`} onClick={(): void => { return (onClick && onClick()) }}>
        <Icon icon='remove' />
      </StyledRemoveItem>
    </>
  )
}

// I N T E R F A C E
interface StyledRemoveItemProps {
  size: number
}

const StyledRemoveItem = styled.button<StyledRemoveItemProps>`
  --size: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 2px solid var(--color-darker);
  border-radius: 50%;
  background-color: var(--color-dark);
  cursor: pointer;
  padding: 0;
  width: calc(var(--size) / 2);
  height: calc(var(--size) / 2);
  transition: var(--transition);
  
  &.md{
    width: var(--size);
    height: var(--size);
  }
  
  &.lg{
    width: calc(var(--size) * 2);
    height: calc(var(--size) * 2);
  }
  
  svg {
    position: absolute;
    height: 50%;
    color: var(--color-white);
  }
  
  &:hover {
    background-color: var(--color-primary);
  }
`
