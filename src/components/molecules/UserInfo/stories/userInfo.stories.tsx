import React from 'react'

import { UserInfo, UserInfoProps } from '../UserInfo'
import { UserInfoWrapper } from './UserInfoWrapper'

export default {
  title: 'Molecules/UserInfo',
  component: UserInfo,
  argTypes: {
    userName: {
      control: { type: 'text' },
    },
    userGroup: {
      control: { type: 'text' },
    }
  }
}

export const Basic = (args: UserInfoProps) => (
  <UserInfoWrapper>
    <UserInfo {...args} />
  </UserInfoWrapper>
)

export const Small = () => (
  <UserInfoWrapper>
    <UserInfo userName={'TestUser'} userGroup={'TestGroup'} />
  </UserInfoWrapper>
)

export const Medium = () => (
  <UserInfoWrapper>
    <UserInfo userName={'TestUser'} userGroup={'TestGroup'} size='md' />
  </UserInfoWrapper>
)
