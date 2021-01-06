import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { ProgressIndicator, ProgressIndicatorProps } from '../ProgressIndicator'

export default {
  title: '🌱 Molecules/ProgressIndicator',
  component: ProgressIndicator,
}

export const Basic = (args: ProgressIndicatorProps) => {
  const steps = [{ "name": "step_1", "title": "Step 1" }, { "name": "step_2", "title": "Step 2" }, { "name": "step_3", "title": "Step 3" }, { "name": "step_4", "title": "Step 4" }]

  return (
    <Wrapper>
      <ProgressIndicator
        {...args}
        steps={steps}
      >

      </ProgressIndicator>
    </Wrapper>
  )
}
