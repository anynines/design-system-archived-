import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface TabBarProps {
  className?: string
  style?: React.CSSProperties
  type?: TabBarType
  vertical?: boolean
}

// T Y P E
export type TabBarType = '' | ''

// C O M P O N E N T
export const TabBar: React.FC<TabBarProps> = ({
  children,
  className,
  style,
  type,
  vertical
}) => {
  return (
    <StyledTabBar
      style={style}
      className={`tab-bar ${vertical && 'vertical'} ${type} ${className}`}
    >
      {children}
    </StyledTabBar>
  )
}

// S T Y L E S
const StyledTabBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &.vertical {
    flex-direction: column;
    
    button {
      border-radius: 0;

      &:first-child {
        border-radius: var(--radius) var(--radius) 0 0;
      }

      &:last-child {
        border-radius: 0 0 var(--radius) var(--radius);
      }
    }
  }

  button {
    border-radius: 0;

    &:first-child {
      border-radius: var(--radius) 0 0 var(--radius);
    }

    &:last-child {
      border-radius: 0 var(--radius) var(--radius) 0;
    }
  }

`
StyledTabBar.displayName = 'StyledTabBar'
