import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface TooltipProps {
  className?: string
  position?: string
  style?: React.CSSProperties
  text?: string
}

// C O M P O N E N T
export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    children,
    className,
    position = 'bottom',
    style,
    text
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
    background-color: black;
  }

  .tooltip-inner {
    position: relative;
    z-index: 999;
    border: var(--border);
    padding: 8px;
    white-space: nowrap;
    font-family: var(--font-family);
    font-size: 12px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    max-width: 220px;
  }

  &:before, &:after {
    position: absolute;
    top: -3px;
    left: 50%;
    width: 10px;
    height: 10px;
    content: '';
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
