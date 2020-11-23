import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface ModuleContentProps {
  className?: string
}

// C O M P O N E N T
export const ModuleContent: React.FC<ModuleContentProps> = ({
  className = 'StyledModuleContent',
  children
}) => {
  return <StyledModuleContent className={className}>{children}</StyledModuleContent>
}

// S T Y L E S
const StyledModuleContent = styled.div`
  color: var(--color-white-fix);
  padding: 0 var(--space-md);
`
StyledModuleContent.displayName = 'StyledModuleContent'
