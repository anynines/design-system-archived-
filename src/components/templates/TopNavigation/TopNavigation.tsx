import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

export type TopNavigationProps = DefaultComponentProps

export const TopNavigation: React.FC<TopNavigationProps> = ({
  children,
  className,
  style
}) => {
  return (
    <StyledTopNavigation
      className={`top-nav ${className}`}
      style={style}
    >
      {children}
    </StyledTopNavigation>
  )
}

const StyledTopNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid var(--color-white-10);
  background: var(--color-black-darker);
  padding: 20px;
  width: 100%;
  height: 80px;
  color: var(--color-white);
  box-shadow: 0 0 6px var(--color-dark-20);

  .wrapper {
    display: flex;
    align-items: center;
  }

  .toggle-layout {
    #toggle-layout-bg {
      fill: var(--black-darker);
    }
  }
`
