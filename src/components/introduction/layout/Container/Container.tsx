import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E S
export interface ContainerProps extends DefaultComponentProps {
  containerSize?: containerSizeType
  style?: React.CSSProperties
  id?: string
}

export type containerSizeType = 'xs' | 'sm' | 'md' | 'lg'

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
  
  &.xs {
    max-width: 600px;
  }

  &.sm {
    max-width: 900px;
  }

  &.lg {
    max-width: 100%;
  }
`
