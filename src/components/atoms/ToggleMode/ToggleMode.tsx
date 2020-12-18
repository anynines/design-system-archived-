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
  style?: React.CSSProperties
}

export type ToggleModeButtonSize = 'sm' | 'lg'

// C O M P O N E N T
export const ToggleMode: React.FC<ToggleModeProps> = ({
  className,
  mode = 'dark',
  setMode,
  size = 'lg',
  style
}) => {
  return (
    <StyledToggleMode
      className={`toggle-mode ${size} ${className}`}
      onClick={(): void => { return (setMode && setMode()) }}
      mode={mode}
      style={style}
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
    --pos-top: ${(props): string => { return (props.mode === 'dark' ? '-2.5rem' : '-2.5rem') }};
    --pos-top--sm: ${(props): string => { return (props.mode === 'dark' ? '0' : '-1.875rem') }};

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
    height: 1.125rem;
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
    width: 1.875rem;
    height: 1.875rem;

    img,
    svg {
      height: .9375rem;
    }

    .icons {
      top: var(--pos-top--sm);
    }

    .icon {
      width: 1.875rem;
      height: 1.875rem;
    }
  }
  
  @media (max-width: 60em) {
    background-color: var(--color-black);
  }
`

StyledToggleMode.displayName = 'StyledToggleMode'
