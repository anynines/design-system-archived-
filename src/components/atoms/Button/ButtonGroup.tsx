import React from 'react'
import styled from 'styled-components'

export interface ButtonGroupProps {
  className?: string
  style?: React.CSSProperties
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  children,
  style
}) => {
  return (
    <StyledButtonGroup
      className={`button-group ${className}`}
      style={style}
    >
      {children}
    </StyledButtonGroup>
  )
}

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .btn {
    margin: 0 15px;
    
    &:first-child {
      margin-left: 0;
    }
    
    &:last-child {
      margin-right: 0;
    }
  }
`
