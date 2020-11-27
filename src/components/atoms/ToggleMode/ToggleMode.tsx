import React from 'react'
import styled from 'styled-components'

import { Mode } from '../../../designSystemInstance/types/types'

// L I B R A R Y
import { Icon } from '../Icon/Icon'

// I N T E R F A C E S
export interface ToggleModeProps {
  className?: string
  mode: Mode
  setMode?: () => void
  size?: ToggleModeButtonSize
}

export type ToggleModeButtonSize = 'sm' | 'lg'

// C O M P O N E N T
export const ToggleMode: React.FC<ToggleModeProps> = ({
  className = 'StyledToggleMode',
  mode = 'dark',
  setMode,
  size = 'lg'
}) => {
  return (
    <StyledToggleMode
      className={`${size} ${className}`}
      onClick={(): void => { return (setMode && setMode()) }}
      mode={mode}
    >
      <div className='icons'>
        <div className='icon'>
          <Icon icon='light' />
        </div>
        <div className='icon'>
          <Icon icon='moon' />
        </div>
      </div>
    </StyledToggleMode>
  )
}

// I N T E R F A C E
interface StyledToggleModeProps {
  mode: string
}

// S T Y L E S
const StyledToggleMode = styled.div<StyledToggleModeProps>`
  --size: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: var(--color-dark);
  cursor: pointer;
  width: var(--size);
  height: var(--size);
  border-radius: var(--radius);
  transition: var(--transition);

  .icons {
    --pos-top: ${(props): string => { return (props.mode === 'dark' ? '0' : '-40px') }};
    --pos-top--sm: ${(props): string => { return (props.mode === 'dark' ? '0' : '-30px') }};

    position: absolute;
    top: var(--pos-top);
    transition: top 0.3s ease-in-out;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--size);
      height: var(--size);
    }
  } 
  
  svg {
    height: 18px;
    color: var(--color-white);
  }

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white-fix);

    svg{
      color: var(--color-white-fix);
    }
  }

  &.sm {
    width: 30px;
    height: 30px;
    img,
    svg {
      height: 15px;
    }
    .icons {
      top: var(--pos-top--sm);
    }
    .icon {
      width: 30px;
      height: 30px;
    }
  }
  @media (max-width: 60em) {
    background-color: var(--color-black);
  }
`

StyledToggleMode.displayName = 'StyledToggleMode'
