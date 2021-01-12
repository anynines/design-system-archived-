import React from 'react'
import styled from 'styled-components'

// A T O M S
import { Icon } from '../../atoms/Icon/Icon'

// T Y P E S
import { ProgressIndicatorStepProps } from './types'

// C O M P O N E N T
export const ProgressIndicatorStep: React.FC<ProgressIndicatorStepProps> = (props) => {
  const { className, index, title, currentStepIndex, style } = props
  return (
    <StyledProgressIndicatorStep
      className={`progress-indicator__step ${className}`}
      style={style}
      title={title}
    >
      <div className='progress-indicator__step__inner'>
        {currentStepIndex > index ? <Icon icon='check' size='xs' /> : ''}
      </div>
      <span>{title}</span>
    </StyledProgressIndicatorStep>
  )
}

// S T Y L E S
const StyledProgressIndicatorStep = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--color-dark-60);
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;

  &.current-step,
  &.visited-step {
    background-color: var(--color-primary);
  }

  .progress-indicator__step {
    &__inner {
      display: flex;
      align-items: center;
      background-color: var(--color-white);
      border-radius: 100%;
      width: 50%;
      height: 50%;
    }
  }

  &.visited-step {
    .progress-indicator__step__inner {
      background-color: transparent;
    }
  }

  span {
    position: absolute;
    top: 100%;
    margin-top: var(--space-xs);
    min-width: 6.25rem;
    text-align: center;
  }
`

StyledProgressIndicatorStep.displayName = 'StyledProgressIndicatorStep'
