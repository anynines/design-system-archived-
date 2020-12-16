import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { AuthLayout, AuthLayoutProps } from '../AuthLayout'
import { Input } from '../../../../atoms/Input/Input'
import { Button } from '../../../../atoms/Button/Button'
import { CaretLink } from '../../../../atoms/CaretLink/CaretLink'

export default {
  title: '📄 Templates/Layouts/Auth',
  component: AuthLayout,
  argTypes: {
    bgImage: {
      type: {
        control: {
          type: 'text'
        }
      }
    },
    authLayout: {
      type: {
        control: {
          type: 'select',
          options: ['', 'center-full-bg', 'full-page-left', 'full-page-right']
        }
      }
    }
  }
}

export const Basic = (args: AuthLayoutProps) => (
  <MemoryRouter>
    <AuthLayout {...args}>
      <h2 style={{ marginBottom: 30 }}>Headline</h2>
      <Input
        type='email'
        label='Email'
        icon='send'
        name='email' />
      <Input
        type='password'
        label='Password'
        icon='lock'
        name='password' />
      <Button style={{ marginBottom: 30 }} width='block'>Login</Button>
      <CaretLink
        path='/forgot-password'
        text='Forgot your password?'
      />
    </AuthLayout>
  </MemoryRouter>
)
