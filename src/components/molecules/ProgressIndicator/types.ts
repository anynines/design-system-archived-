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

export interface ProgressIndicatorStepProps {
  className?: string
  currentStepIndex: number
  index: number
  title?: string
  style?: React.CSSProperties
}