import React from 'react'
import styled from 'styled-components'

// L I B R A R Y
import { Icon } from '../Icon/Icon'

// I N T E R F A C E
export interface BackButtonProps {
  className?: string
  onClick: () => void
}

export const BackButton: React.FC<BackButtonProps> = ({
  className = 'StyledBackButton',
  onClick
}) => {
  return (
    <StyledBackButton className={`back-btn ${className}`} onClick={(): void => { return (onClick && onClick()) }}>
      <Icon icon='caretDown' />
      <span>Back</span>
    </StyledBackButton>
  )
}

// S T Y L E S
const StyledBackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--space-sm);
  background-color: var(--color-dark-50);
  padding: 0 var(--space-lg);
  width: 100%;
  min-height: 4rem;
  color: var(--color-white);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bd);
  border-radius: var(--radius);

  span {
    font-size: var(--text-md);
  }
  
  svg {
    margin-right: var(--space-xs);
    transform: rotate(90deg);
  }
`
