import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { Avatar, AvatarProps } from '../Avatar'

export default {
  title: '💧 Atoms/Avatar',
  component: Avatar,
  argTypes: {
    avatar: {
      control: { type: 'text' },
      description: 'Url for the avatar',
      defaultValue: ''
    },
    size: {
      control: {
        type: 'select',
        required: false,
        options: {
          small: 'sm',
          medium: 'md',
          large: 'lg'
        }
      },
    },
    rounded: {
      control: { type: 'boolean' }
    },
    level: {
      control: { type: 'number' },
      defaultValue: 42
    },
    userName: {
      control: { type: 'text' },
      description: 'User Name as a fallback if no avatar is chosen',
      defaultValue: 'Johanna Doe'
    }
  }
}
const sampleUserName = 'Test User with some Subnames'
const sampleAvatarUrl = 'https://images.pexels.com/photos/936559/pexels-photo-936559.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'

export const Basic = (args: AvatarProps) => (
  <Wrapper>
    <Avatar {...args} />
  </Wrapper>
)

export const Sizes = () => (
  <Wrapper justify='space-around'>
    <Avatar size={'lg'} avatar={sampleAvatarUrl} />
    <Avatar size={'md'} avatar={sampleAvatarUrl} />
    <Avatar size={'sm'} avatar={sampleAvatarUrl} />
  </Wrapper>
)

export const Level = () => (
  <Wrapper justify='space-around'>
    <Avatar size={'md'} avatar={sampleAvatarUrl} level={46} />
    <Avatar size={'md'} avatar={sampleAvatarUrl} level={46} rounded={true} />
  </Wrapper>
)

export const Rounded = () => (
  <Wrapper>
    <Avatar size={'md'} avatar={sampleAvatarUrl} rounded={true} />
  </Wrapper>
)

export const WithoutAvatar = () => (
  <Wrapper>
    <Avatar size={'md'} userName={sampleUserName} level={46} rounded={true} />
  </Wrapper>
)
