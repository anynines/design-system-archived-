import React from 'react'
import { action } from '@storybook/addon-actions'

import { Alert, AlertProps } from '../Alert'

export default {
  title: 'Molecules/Alert',
  component: Alert,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    type: {
      control: {
        type: 'options',
        options: {
          success: "success",
          error: "error",
          warning: "warning"
        }
      }
    },
    onClose: {
      control: { type: 'disabled' },
    }
  }
}

export const Basic = (args: AlertProps) => (
  <div style={{ height: '140px' }}>
    <Alert {...args} />
  </div>
)

export const Success = () => (
  <div style={{ height: '140px' }}>
    <Alert title={'Success'} description={'Example description which will be very long to read'} type={'success'} onClose={action('label clicked')} />
  </div>
)

export const Warning = () => (
  <div style={{ height: '140px' }}>
    <Alert title={'Warning'} description={'Example description'} type={'warning'} onClose={action('label clicked')} />
  </div>
)

export const Error = () => (
  <div style={{ height: '140px' }}>
    <Alert title={'Error'} description={'Example description'} type={'error'} onClose={action('label clicked')} />
  </div>
)
