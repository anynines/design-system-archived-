import { DefaultComponentProps } from '@types'

// I N T E R F A C E
export interface ProgressIndicatorProps extends DefaultComponentProps {
  currentStepIndex: number
  setCurrentStepIndex: (stepIndex: number) => void
  steps: Step[]
}

export interface Step {
  name: string
  title?: string
}

export interface ProgressIndicatorStepProps extends DefaultComponentProps {
  currentStepIndex: number
  index: number
  title?: string
}
