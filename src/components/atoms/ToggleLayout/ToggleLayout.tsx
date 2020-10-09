import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// L I B R A R Y
import { Icon } from '../Icon/Icon'

// I N T E R F A C E
export interface ToggleLayoutProps {
  path: string
  className?: string
}

// C O M P O N E N T
export const ToggleLayout: React.FC<ToggleLayoutProps> = ({
  className = 'StyledToggleLayout',
  path
}) => {
  return (
    <StyledToggleLayout className={className}>
      <NavLink to={path} className='toggle-mode'>
        <Icon icon='turnAround' />
      </NavLink>
    </StyledToggleLayout>
  )
}

const StyledToggleLayout = styled.div`
  .toggle-mode {
    position: fixed;
    top: -5px;
    left: 0;
    z-index: 101;
    opacity: 0.5;
    cursor: pointer;
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-white);
    transition: var(--transition);
    
    i {
      width: 100%;
    }

    &:hover {
      opacity: 1;
    }
  }
`
StyledToggleLayout.displayName = 'StyledToggleLayout'
