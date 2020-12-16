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
  padding-left: 280px;
  
  .page {
    margin-top: 0;
    padding: 20px;
  }

  .section {
    margin-bottom: 20px;
    background-color: var(--color-black-darker);
    padding: 30px;
    border-radius: var(--radius);

    &:last-child {
      margin-bottom: 0;
    }
  }
`
