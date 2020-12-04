import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { TabBar, TabBarProps } from '../tabBar'
import { Button } from '../../Button/Button'

export default {
  title: '💧 Atoms/TabBar',
  component: TabBar,
  argTypes: {
  }
}

export const Basic = (args: TabBarProps) => (
  <Wrapper>
    <TabBar
      {...args}
    >
      <Button>
        Tab 1
      </Button>
      <Button>
        Tab 2
      </Button>
      <Button>
        Tab 3
      </Button>
    </TabBar>
  </Wrapper>
)
