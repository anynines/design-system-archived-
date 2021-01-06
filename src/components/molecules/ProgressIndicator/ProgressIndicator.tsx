import React from 'react'
import styled from 'styled-components'

// A T O M S
import { Icon, IconName } from '../../atoms/Icon/Icon'

// I N T E R F A C E
export interface ProgressIndicatorProps {
  className?: string
  steps: Step[]
  style?: React.CSSProperties
}

export interface Step {
  name: string
  title?: string
}

// C O M P O N E N T
export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  className,
  steps,
  style
}) => {
  return (
    <StyledProgressIndicator
      style={style}
      className={`progress-indicator ${className}`}
    >
      <ol>
        {steps.map((step, index) => {
          return (
            <li
              key={step.name}
            >
              <div className="progress-indicator__step">
                <div className="progress-indicator__step__inner"></div>
              </div>
              <span>{step.title}</span>
            </li>
          )
        })}
      </ol>
      <div className="progress-indicator__bar"></div>
    </StyledProgressIndicator>
  )
}

// S T Y L E S
const StyledProgressIndicator = styled.div`
  position: relative;
  width: 100%;

  ol {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    padding: 0;
  }

  li {
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    position: absolute;
    top: 100%;
    margin-top: var(--space-xs);
    min-width: 6.25rem;
    text-align: center;
  }

  .progress-indicator {
    &__bar {
      display: block;
      position: absolute;
      width: 100%;
      top: 50%;
      height: 1px;
      transform: translateY(-50%);
      background-color: var(--color-white-50);
    }

    &__step {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem;
      height: 1.25rem;
      background-color: var(--color-primary);
      border-radius: 100%;

      &__inner {
        background-color: var(--color-white);
        border-radius: 100%;
        width: 50%;
        height: 50%;
      }

      &--active {
        background-color: var(--color-primary);
      }
    }
  }
`

StyledProgressIndicator.displayName = 'StyledProgressIndicator'
