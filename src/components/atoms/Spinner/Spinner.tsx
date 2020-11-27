import React from 'react'
import styled from 'styled-components'

import SpinnerIcon from './assets/spinner'

// I N T E R F A C E S
export interface SpinnerProps {
  className?: string
  color?: string
  hidden?: boolean
  size?: SpinnerSize
  style?: React.CSSProperties
}
interface StyledSpinnerProps extends SpinnerProps {
  sizeInPx: number
}
export type SpinnerSize = 'sm' | 'md' | 'lg'

// C O M P O N E N T
export const Spinner: React.FC<SpinnerProps> = ({
  className = 'StyledSpinner',
  color = 'var(--color-primary)',
  hidden = false,
  size = 'md',
  style
}) => {
  const getSpinnerSize = (): number => {
    switch (size) {
      case 'lg':
        return 60

      case 'md':
        return 45

      case 'sm':
        return 30

      default:
        return 65
    }
  }

  return (
    <StyledSpinner
      sizeInPx={getSpinnerSize()}
      hidden={hidden}
      color={color}
      className={className}
      style={style}
    >
      <SpinnerIcon />
    </StyledSpinner>
  )
}

// S T Y L E S
const StyledSpinner = styled.span<StyledSpinnerProps>`
  --display: ${(props): string => { return props.hidden ? 'none' : 'flex' }};
  --visibility: ${(props): string => { return props.hidden ? 'hidden' : 'visible' }};
  --size: ${(props): string => { return `${props.sizeInPx}px` }};
  --color: ${(props): string => { return `${props.color}` }};

  display:  var(--display);
  justify-content: center;
  align-items: center;
  overflow: hidden;
  visibility: var(--visibility);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;

  .spinner {
    animation: rotator 1.4s linear infinite;
    height: 100%;
  }

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  .path {
    --animation: ${(props): string => { return props.color !== undefined ? ', 5.6s ease-in-out infinite' : ', colors 5.6s ease-in-out infinite' }};
    
    stroke: var(--color);
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash 1.4s ease-in-out infinite var(--animation);
  }

  @keyframes colors {
    0% {
      stroke: var(--color-primary);
    }
    25% {
      stroke: var(--color-notice);
    }
    50% {
      stroke: var(--color-warning);
    }
    75% {
      stroke: var(--color-success);
    }
    100% {
      stroke: var(--color-primary);
    }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 187;
    }
    50% {
      stroke-dashoffset: 46.75;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  }
`
