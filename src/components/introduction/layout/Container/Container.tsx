import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface ContainerProps {
  className?: string
  containerSize?: containerSizeType
  id?: string
  style?: React.CSSProperties
}

export type containerSizeType = 'sm' | 'md' | 'lg'

// C O M P O N E N T
export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  containerSize = 'md',
  id,
  style
}) => {
  return (
    <StyledContainer
      id={id}
      className={`container ${containerSize} ${className}`}
      style={style}
    >
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: var(--content-max-width);
  
  &.sm {
    max-width: 900px;
  }

  &.lg {
    max-width: 100%;
  }
`
