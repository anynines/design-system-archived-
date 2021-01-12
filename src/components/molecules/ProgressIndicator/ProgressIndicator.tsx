import React from 'react'
import styled from 'styled-components'

// A T O M S
import { Button } from '../../atoms/Button/Button'
import { ButtonGroup } from '../../atoms/Button/ButtonGroup'
import { ProgressIndicatorStep } from './ProgressIndicatorStep'

// T Y P E S
import { ProgressIndicatorProps } from './types'

// C O M P O N E N T
export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  className,
  children,
  currentStepIndex = 0,
  setCurrentStepIndex,
  steps,
  style
}) => {
  const handleNextClick = (): void => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
    }
  }

  const handleBackClick = (): void => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1)
    }
  }

  const isNextDisabled = (): boolean => {
    if (currentStepIndex < steps.length - 1 && currentStepIndex >= 0) {
      return false
    }
    return true
  }

  const isBackDisabled = (): boolean => {
    if (currentStepIndex > 0 && currentStepIndex < steps.length) {
      return false
    }
    return true
  }

  const stepStateClassNames = (index): string => {
    let classNames = ''

    if (index === currentStepIndex) {
      classNames += 'current-step'
    }

    if (currentStepIndex > index) {
      classNames += 'visited-step'
    }

    return classNames
  }

  return (
    <>
      <StyledProgressIndicator
        style={style}
        className={`progress-indicator ${className}`}
        currentStepName={steps[currentStepIndex]}
      >
        <ol>
          {steps.map((step, index) => {
            return (
              <ProgressIndicatorStep
                key={step.name}
                index={index}
                className={stepStateClassNames(index)}
                title={step.title}
                currentStepIndex={currentStepIndex}
              />
            )
          })}
        </ol>
        <div className='progress-indicator__bar' />
      </StyledProgressIndicator>

      {children}

      <ButtonGroup
        alignment='center'
        style={{ marginTop: 50 }}
      >
        <Button
          onClick={(): void => { handleBackClick() }}
          type={isBackDisabled() ? 'disabled' : 'primary'}
        >
          Back
        </Button>
        <Button
          onClick={(): void => { handleNextClick() }}
          type={isNextDisabled() ? 'disabled' : 'primary'}
        >
          Next
        </Button>
      </ButtonGroup>
    </>
  )
}

// S T Y L E S
const StyledProgressIndicator = styled.div`
  position: relative;
  margin-bottom: var(--space-fixed-xxxl);
  padding: 0 var(--space-fixed-lg);

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 0;
  }

  .progress-indicator {
    &__bar {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      background-color: var(--color-white-50);
      width: calc(100% - 50px);
      height: 1px;
    }
  }
`

StyledProgressIndicator.displayName = 'StyledProgressIndicator'
