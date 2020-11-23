import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface ContainerProps {
  fluid?: boolean
  id?: string
  className?: string
  style?: React.CSSProperties
}

// C O M P O N E N T
export const Container: React.FC<ContainerProps> = ({
  id,
  className,
  style,
  children
}) => {
  return (
    <StyledContainer
      id={id}
      className={className}
      style={style}
    >
      {children}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
`
