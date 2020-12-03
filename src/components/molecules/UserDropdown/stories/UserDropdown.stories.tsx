import React from 'react'

import { action } from '@storybook/addon-actions'
import Wrapper from '../../../_helpers/Wrapper'
import { UserDropdown, UserDropdownProps } from '../UserDropdown'
import { Menu } from '../../../organisms/Menu/Menu'
import { MenuItem } from '../../MenuItem/MenuItem'

const avatarUrl = 'https://images.pexels.com/photos/936559/pexels-photo-936559.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'

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
      defaultValue: avatarUrl
    }
  }
}

export const Basic = (args: UserDropdownProps) => (
  <Wrapper bgColor='black'>
    <UserDropdown {...args} />
  </Wrapper>
)

export const WithDropdown = () => (
  <Wrapper bgColor='black'>
    <UserDropdown
      name='Johanna Doe'
      role='Contributor'
      level={42}
      avatarImg={avatarUrl}
    >
      <Menu vertical>
        <MenuItem icon={'menu'} vertical onClick={action('label clicked')}>
          <>Icon and Label</>
        </MenuItem>
      </Menu>
    </UserDropdown>
  </Wrapper>
)
