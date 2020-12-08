import React from 'react'

import { UserInfo, UserInfoProps } from '../UserInfo'
import { UserInfoWrapper } from './UserInfoWrapper'
import Wrapper from '../../../_helpers/Wrapper'

export default {
  title: '🌱 Molecules/UserInfo',
  component: UserInfo,
  argTypes: {
    userName: {
      control: { type: 'text' },
      defaultValue: 'Johanna Doe'
    },
    userGroup: {
      control: { type: 'text' },
      defaultValue: 'Admin'
    }
  }
}

export const Basic = (args: UserInfoProps) => (
  <Wrapper>
    <UserInfoWrapper>
      <UserInfo {...args} />
    </UserInfoWrapper>    
  </Wrapper>
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
