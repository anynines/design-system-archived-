import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface ComponentOverviewProps {
  className?: string
  style?: React.CSSProperties
}

// C O M P O N E N T
export const ComponentOverview: React.FC<ComponentOverviewProps> = ({
  children,
  className = '',
  style
}) => {
  return (
    <StyledComponent
      className={`${className}`}
      style={style}
    >
      {children}
    </StyledComponent>
  )
}

// S T Y L E S
const StyledComponent = styled.div`

`
