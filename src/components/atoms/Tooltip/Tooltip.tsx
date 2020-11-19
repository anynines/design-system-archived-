import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface TooltipProps {
  text?: string
  position?: string
  style?: React.CSSProperties
  className?: string
}

// C O M P O N E N T
export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    text,
    position = 'bottom',
    children,
    style,
    className
  } = props

  return (
    <StyledTooltip
      style={style}
      className={`tooltip ${className} ${position}`}
    >
      <div className='tooltip-inner'>
        {text || children}
      </div>
    </StyledTooltip>
  )
}

// S T Y L E S
const StyledTooltip = styled.div`
  display: none;
  position: absolute;
  color: var(--color-white);

  .tooltip-inner, &:before, &:after {
    background-color: var(--color-black);
  }

  .tooltip-inner {
    position: relative;
    z-index: 999;
    padding: 8px;
    font-family: var(--font-family);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    border: var(--border);
    white-space: nowrap;
    font-size: 12px;
    max-width: 220px;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    top: -3px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-radius: 3px;
  }

  &:before {
    z-index: 998;
    box-shadow: var(--shadow);
    border: var(--border);
  }

  &:after {
    z-index: 1000;
  }

  &.bottom {
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
  }
`
