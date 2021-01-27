import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E S
export interface CheckboxGroupProps extends DefaultComponentProps {
  orientation?: CheckboxGroupType
}

// T Y P E S
export type CheckboxGroupType = 'vertical' | 'horizontal'

// C O M P O N E N T
export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  className,
  orientation = 'vertical',
  style
}) => {
  return (
    <StyledCheckboxGroup
      style={style}
      className={`checkbox-group ${className} ${orientation}`}
      orientation={orientation}
    >
      {children}
    </StyledCheckboxGroup>
  )
}

// S T Y L E S
const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--space-fixed-md) 0;

  .checkbox {
    &:last-child {
      margin-bottom: 0;
    }
  }

  &.horizontal {
    flex-direction: row;

    .checkbox {
      margin: 0 var(--space-fixed-sm);
    }
  }
`
