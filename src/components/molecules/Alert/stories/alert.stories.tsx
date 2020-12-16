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
    },
    stay: {
      control: { type: 'boolean' },
    },
    timerCount: {
      control: { type: 'number' },
    },
    size: {
      name: 'IconSize',
      control: {
        type: 'select',
        options: {
          small: 'sm',
          medium: 'md',
          large: 'lg'
        }
      }
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
    <Alert
      title={'Success'}
      description={'Place your success message here.'}
      type={'success'}
      onClose={action('label clicked')}
      stay={true}
    />
  </Wrapper>
)

export const Notice = () => (
  <Wrapper>
    <Alert
      title={'Notice'}
      description={'Place your notice message here.'}
      type={'notice'}
      onClose={action('label clicked')}
      stay={true}
    />
  </Wrapper>
)

export const Warning = () => (
  <Wrapper>
    <Alert
      title={'Warning'}
      description={'Place your warning message here.'}
      type={'warning'}
      onClose={action('label clicked')}
      stay={true}
    />
  </Wrapper>
)

export const Error = () => (
  <Wrapper>
    <Alert
      title={'Error'}
      description={'Place your error message here.'}
      type={'error'}
      onClose={action('label clicked')}
      stay={true}
    />
  </Wrapper>
)

export const stay = () => (
  <Wrapper direction='column' justify='space-between' height='250px' >
    <Alert
      stay={true}
      title={'Without Timeout'}
      description={'Set Stay to true.'}
      type={'success'}
      onClose={action('label clicked')}
    />
    <Alert
      timerCount={2000}
      title={'With Timeout'}
      description={'Stay is default set to false'}
      type={'error'}
      onClose={action('label clicked')}
    />
  </Wrapper>
)
