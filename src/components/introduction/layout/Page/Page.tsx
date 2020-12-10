import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface PageProps {
  className?: string
  id?: string
}

// C O M P O N E N T
export const Page: React.FC<PageProps> = ({
  children,
  className,
  id
}) => {
  return (
    <StyledPage id={id} className={`page ${className}`}>
      {children}
    </StyledPage>
  )
}

// S T Y L E S
const StyledPage = styled.div`
  --section-space: 5rem;
  
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
`
StyledPage.displayName = 'StyledPage'
