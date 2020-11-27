import React from 'react'

import { Badge } from '../Badge'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    value: {
      control: { type: 'string | number | boolean' }
    },
    className: {
      control: { type: 'string' }
    }
  }
}

export const Basic = (args) => (
  <>
    <Badge value='Basic' />
    <Badge value={1} className='basic' />
    <Badge value={false} className='basic' />
  </>
);
