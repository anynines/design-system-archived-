import React from 'react'
import styled from 'styled-components'

import { Button } from '../Button/Button'

// I N T E R F A C E
export interface TabBarProps {
  className?: string
  style?: React.CSSProperties
  tabs: {
    title: string
  }[]
  vertical?: boolean
}

// T Y P E
export type TabBarType = '' | ''

// C O M P O N E N T
export const TabBar: React.FC<TabBarProps> = ({
  className,
  style,
  tabs,
  vertical
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <StyledTabBar
      tabs={tabs}
      style={style}
      className={`tab-bar ${vertical && 'vertical'} ${className}`}
    >
      {tabs.map((tab, index): JSX.Element => {
        const isActive = activeIndex === index ? 'active' : '';

        return (
          <Button
            className={`tab ${isActive}`}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </Button>
        )
      })}
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

    &.active {
      background: var(--color-primary-light);
      box-shadow: 0 0 .4rem 0 var(--color-light-70);
    }

    &:first-child {
      border-radius: var(--radius) 0 0 var(--radius);
    }

    &:last-child {
      border-radius: 0 var(--radius) var(--radius) 0;
    }
  }

`
StyledTabBar.displayName = 'StyledTabBar'
