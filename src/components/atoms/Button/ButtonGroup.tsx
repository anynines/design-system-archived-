import React from 'react'
import styled from 'styled-components'

import { WrapperAlignment } from '../../_helpers/Wrapper'

export interface ButtonGroupProps {
  alignment?: WrapperAlignment
  className?: string
  style?: React.CSSProperties
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  alignment,
  className,
  children,
  style
}) => {
  return (
    <StyledButtonGroup
      className={`button-group ${className} ${alignment}`}
      style={style}
    >
      {children}
    </StyledButtonGroup>
  )
}

const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &.center {
    justify-content: center;
  }

  .btn {
    margin: var(--space-md) 0;
    
    &:first-child {
      margin-left: 0;
    }
    
    &:last-child {
      margin-right: 0;
    }
  }

  @media (min-width: 40em) {
    flex-direction: row;

    .btn {
      margin: 0 var(--space-md);
    }
  }
`
