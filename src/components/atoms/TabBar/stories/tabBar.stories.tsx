import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { TabBar, TabBarProps } from '../TabBar'

export default {
  title: '💧 Atoms/TabBar',
  component: TabBar,
  argTypes: {
    tabs: {
      control: { type: 'disabled' },
    },
    type: {
      control: {
        type: 'select',
        options: [
          'border',
          'primary',
        ],
      },
      defaultValue: 'primary'
    },
    vertical: {
      control: { type: 'boolean' },
    }
  }
}

const example_tabs = [
  { title: 'Tab 1' },
  { title: 'Tab 2' },
  { title: 'Tab 3' }
]

export const Basic = (args: TabBarProps) => (
  <Wrapper>
    <TabBar
      {...args}
      tabs={example_tabs}
    />
  </Wrapper>
)
