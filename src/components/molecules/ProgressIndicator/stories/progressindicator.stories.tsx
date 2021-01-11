import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { ProgressIndicator } from '../ProgressIndicator'

export default {
  title: '🌱 Molecules/ProgressIndicator',
  component: ProgressIndicator,
}

export const Basic = (args) => {
  const steps = [{ "name": "step_1", "title": "Step 1" }, { "name": "step_2", "title": "Step 2" }, { "name": "step_3", "title": "Step 3" }, { "name": "step_4", "title": "Step 4" }]
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0)

  return (
    <ProgressIndicator
      {...args}
      steps={steps}
      currentStepIndex={currentStepIndex}
      setCurrentStepIndex={setCurrentStepIndex}
      style={{ marginTop: 50 }}
    >
      <Wrapper>
        This is step {currentStepIndex}.
      </Wrapper>
    </ProgressIndicator>
  )
}
