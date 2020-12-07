import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { TabBar, TabBarProps } from '../tabBar'

export default {
  title: '💧 Atoms/TabBar',
  component: TabBar,
  argTypes: {
  }
}

const example_tabs = [
  { title: 'Tab 1', index: 1 },
  { title: 'Tab 2', index: 2 },
  { title: 'Tab 3', index: 3 }
]

export const Basic = (args: TabBarProps) => (
  <Wrapper>
    <TabBar
      {...args}
      tabs={example_tabs}
    />
  </Wrapper>
)
