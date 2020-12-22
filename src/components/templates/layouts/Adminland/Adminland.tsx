import React from 'react'
import styled from 'styled-components'

export interface AdminlandProps {
  style?: React.CSSProperties
  className?: 'string'
}

export const Adminland: React.FC<AdminlandProps> = ({
  children,
  className,
  style
}) => {
  return (
    <StyledAdminland
      className={`adminland-layout ${className}`}
      style={style}
    >
      {children}
    </StyledAdminland>
  )
}

const StyledAdminland = styled.div`
  padding-left: 17.5rem;
  
  .page {
    margin-top: 0;
    padding: var(--space-lg);
  }

  .section {
    margin-bottom: var(--space-fixed-lg);
    background-color: var(--color-black-darker);
    padding: var(--space-xxl);
    border-radius: var(--radius);

    &:last-child {
      margin-bottom: 0;
    }
  }
`
