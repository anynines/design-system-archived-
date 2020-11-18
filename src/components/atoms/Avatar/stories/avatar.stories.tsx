import React from 'react'

import { Avatar, AvatarProps } from '../Avatar'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    avatar: {
      control: { type: 'text' }
    },
    size: {
      control: {
        type: 'options',
        required: false,
        options: {
          small: 'sm',
          medium: 'md',
          large: 'lg'
        }
      },
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Peter Weinmann'
    },
    level: {
      control: { type: 'number' }
    }
  }
}
const sampleUserName = 'Test User with some Subnames'
const sampleAvatarUrl = 'https://images.pexels.com/photos/936559/pexels-photo-936559.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'

export const Basic = (args: AvatarProps) => (
  <Avatar {...args} />
)

export const Small = () => (
  <Avatar size={'sm'} avatar={sampleAvatarUrl} />
)

export const Medium = () => (
  <Avatar size={'md'} avatar={sampleAvatarUrl} />
)

export const Large = () => (
  <Avatar size={'lg'} avatar={sampleAvatarUrl} />
)

export const Level = () => (
  <Avatar size={'md'} avatar={sampleAvatarUrl} level={46} />
)

export const Rounded = () => (
  <Avatar size={'md'} avatar={sampleAvatarUrl} rounded={true} />
)

export const LevelRounded = () => (
  <Avatar size={'md'} avatar={sampleAvatarUrl} level={46} rounded={true} />
)

export const WithoutAvatar = () => (
  <Avatar size={'md'} userName={sampleUserName} level={46} rounded={true} />
)

export const AvatarWithChildren = () => (
  <Avatar size={'md'} rounded>
    <img src={sampleAvatarUrl} />
  </Avatar>
)
