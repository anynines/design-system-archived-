import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface ContainerProps {
  className?: string
  fluid?: boolean
  id?: string
  style?: React.CSSProperties
}

// C O M P O N E N T
export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  id,
  style
}) => {
  return (
    <StyledContainer
      id={id}
      className={`container ${className}`}
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
`
