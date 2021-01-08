import React from 'react'
import styled from 'styled-components'

// A T O M S
import { Icon } from '../../atoms/Icon/Icon'
import { Button } from '../../atoms/Button/Button'
import { ButtonGroup } from '../../atoms/Button/ButtonGroup'

// I N T E R F A C E
export interface ProgressIndicatorProps {
  className?: string
  currentStepIndex: number
  setCurrentStepIndex: (stepIndex: number) => void
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
  children,
  currentStepIndex = 0,
  setCurrentStepIndex,
  steps,
  style
}) => {
  const handleNextClick = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
    }
  }

  const handleBackClick = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1)
    }
  }

  const isNextDisabled = () => {
    if (currentStepIndex < steps.length - 1 && currentStepIndex >= 0) {
      return false;
    }
    return true;
  }

  const isBackDisabled = () => {
    if (currentStepIndex > 0 && currentStepIndex < steps.length) {
      return false;
    }
    return true;
  }

  const stepStateClassNames = (index): string => {
    let classNames = ""

    if (index === currentStepIndex) {
      classNames += "current-step"
    }

    if (currentStepIndex > index) {
      classNames += "visited-step"
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
              // TODO: add step items to it's own component
              <li
                key={step.name}
                className={stepStateClassNames(index)}
              >
                <div className="progress-indicator__step">
                  <div className="progress-indicator__step__inner">
                    {currentStepIndex > index ? <Icon icon="remove" size="xs" /> : ""}
                  </div>
                </div>
                <span>{step.title}</span>
              </li>
            )
          })}
        </ol>
        <div className="progress-indicator__bar"></div>

      </StyledProgressIndicator>

      {children}

      <ButtonGroup
        alignment="center"
        style={{ marginTop: 60 }}
      >
        <Button
          onClick={() => handleBackClick()}
          type={isBackDisabled() ? "disabled" : "primary"}
        >
          Back
        </Button>
        <Button
          onClick={() => handleNextClick()}
          type={isNextDisabled() ? "disabled" : "primary"}
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
  padding: 0 var(--space-fixed-lg);
  margin-bottom: var(--space-fixed-xxxl);

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

    &.current-step,
    &.visited-step {
      .progress-indicator__step {
        background-color: var(--color-primary);
      }
    }

    &.visited-step {
      .progress-indicator__step__inner {
        background-color: transparent;
      }
    }
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
      width: calc(100% - 50px);
      top: 50%;
      left: 50%;
      height: 1px;
      transform: translate(-50%, 50%);
      background-color: var(--color-white-50);
    }

    &__step {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem;
      height: 1.25rem;
      background-color: var(--color-dark-60);
      border-radius: 100%;

      &__inner {
        display: flex;
        align-items: center;
        background-color: var(--color-white);
        border-radius: 100%;
        width: 50%;
        height: 50%;
      }
    }
  }
`

StyledProgressIndicator.displayName = 'StyledProgressIndicator'
