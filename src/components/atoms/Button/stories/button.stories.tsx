import React from 'react'
import { action } from '@storybook/addon-actions'

import Wrapper from '../../../_helpers/Wrapper'
import { Button, ButtonProps } from '../Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['dark', 'darker', 'primary', 'submit']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg']
      }
    },
    width: {
      control: {
        type: 'select',
        options: ['inline', 'block']
      }
    },
    onClick: {
      control: { type: 'disabled' }
    },
  }
}

export const Basic = (args: ButtonProps) => (
  <Wrapper>
    <Button
      {...args}
      onClick={action('button-click')}
    >
      Button default
    </Button>
  </Wrapper>
)

export const Types = () => (
  <Wrapper justify='space-around'> 
    <Button>
      Button Primary
    </Button>
    <Button type='dark'>
      Button Dark
    </Button>
    <Button type='black'>
      Button Black
    </Button>
  </Wrapper>
)

export const Sizes = () => (
  <Wrapper justify='space-around'>
    <Button size='lg'>
      Button Large
    </Button> 
    <Button size='md'>
      Button Medium
    </Button>
    <Button size='sm'>
      Button Small
    </Button>
    <Button size='xs'>
      Button Extra Small
    </Button>
  </Wrapper>
)

export const Block = () => (
  <Wrapper>
    <Button width='block'>
      Button Block filling all the space
    </Button>
  </Wrapper>
)

export const Submit = () => (
  <Wrapper>
    <Button
      type='submit'
      onClick={action('button-click - Use this one for forms since the button will be from type submit and get the styles from a primary button.')}
    >
      Button Submit for Forms
    </Button>
  </Wrapper>
)

export const OnClick = () => (
  <Wrapper>
    <Button
      type='dark'
      onClick={action('button-click - I can do something in case you want)')}
    >
      Button onClick for any Callback
    </Button>
  </Wrapper>
)
