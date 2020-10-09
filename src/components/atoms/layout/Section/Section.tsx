import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface SectionProps {
  id?: string
  className?: string
}

// C O M P O N E N T
export const Section: React.FC<SectionProps> = ({
  id,
  className = 'StyledSection',
  children
}) => {
  return (
    <StyledSection id={id} className={className}>
      <div className='container'>{children}</div>
    </StyledSection>
  )
}

// S T Y L E S
const StyledSection = styled.div`
  padding: var(--space-lgr) var(--space-md);
  min-height: 100vh;

  .container {
    margin: 0 auto;
    width: var(--content-max-width);
  }
  
  @media (min-width: 60em) {
    padding: var(--space-xxl) 0;
  }
`
StyledSection.displayName = 'StyledSection'
