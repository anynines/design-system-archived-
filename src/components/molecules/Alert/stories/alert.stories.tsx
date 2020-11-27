import React from 'react'
import Wrapper from '../../../_helpers/Wrapper'
import { action } from '@storybook/addon-actions'

import { Alert, AlertProps } from '../Alert'

export default {
  title: '🌱 Molecules/Alert',
  component: Alert,
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'Notice'
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'Place your message here.'
    },
    type: {
      control: {
        type: 'select',
        options: {
          success: 'success',
          notice: 'notice',
          error: 'error',
          warning: 'warning'
        }
      },
      defaultValue: 'notice'
    },
    onClose: {
      control: { type: 'disabled' },
    }
  }
}

export const Basic = (args: AlertProps) => (
  <Wrapper>
    <Alert {...args} />
  </Wrapper>
)

export const Success = () => (
  <Wrapper>
    <Alert title={'Success'} description={'Place your success message here.'} type={'success'} onClose={action('label clicked')} />
  </Wrapper>
)

export const Notice = () => (
  <Wrapper>
    <Alert title={'Notice'} description={'Place your notice message here.'} type={'notice'} onClose={action('label clicked')} />
  </Wrapper>
)

export const Warning = () => (
  <Wrapper>
    <Alert title={'Warning'} description={'Place your warning message here.'} type={'warning'} onClose={action('label clicked')} />
  </Wrapper>
)

export const Error = () => (
  <Wrapper>
    <Alert title={'Error'} description={'Place your error message here.'} type={'error'} onClose={action('label clicked')} />
  </Wrapper>
)
