import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface ModuleHeaderProps {
  className?: string
}

// C O M P O N E N T
export const ModuleHeader: React.FC<ModuleHeaderProps> = ({
  className = 'StyledModuleHeader',
  children
}) => {
  return (
    <StyledModuleHeader className={className}>
      {children}
    </StyledModuleHeader>
  )
}

// S T Y L E S
const StyledModuleHeader = styled.div`
  --header-height: 3rem;

  display: flex;
  align-items: center;
  margin-top: calc(var(--space-md) * -1);
  margin-right: calc(var(--space-md) * -1);
  margin-bottom: var(--space-md);
  margin-left: calc(var(--space-md) * -1);
  border: var(--radius) var(--radius) 0 0;
  background-color: var(--color-primary);
  padding: 0 var(--space-md);
  height: var(--header-height);
  color: var(--color-white-fix);

  i {
    margin-right: var(--space-sm);
  }

  span {
    color: var(--color-white-fix);
    font-size: var(--text-md);
    font-weight: var(--font-weight-bd);
  }
  
  @media (min-width: 60em){
    border-radius: var(--radius) var(--radius) 0 0;
  }
`
StyledModuleHeader.displayName = 'StyledModuleHeader'
