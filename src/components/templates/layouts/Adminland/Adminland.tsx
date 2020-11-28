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
  padding: 30px;
  padding-left: 320px;
`
