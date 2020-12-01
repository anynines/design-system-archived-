import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { UserDropdown, UserDropdownProps } from '../UserDropdown'

export default {
  title: '🌱 Molecules/UserDropdown',
  component: UserDropdown,
  argTypes: {
    name: {
      control: { type: 'text' },
      defaultValue: 'Johanna Doe'
    },
    role: {
      control: { type: 'text' },
      defaultValue: 'Admin'
    },
    avatarImg: {
      control: { type: 'text' },
      defaultValue: 'https://images.pexels.com/photos/936559/pexels-photo-936559.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    }
  }
}

export const Basic = (args: UserDropdownProps) => (
  <Wrapper bgColor='black'>
    <UserDropdown {...args} />
  </Wrapper>
)
