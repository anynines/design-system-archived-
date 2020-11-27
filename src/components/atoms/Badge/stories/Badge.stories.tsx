import React from 'react'

import { Badge } from '../Badge'

export default {
  title: 'Atoms/Badge',
  component: BackButton,
  argTypes: {
    value: {
      control: { type: 'string' },
    }
  }
}

export const Basic = (args) => (
  <Badge>Basic</Badge>
);
