import React from 'react'

import { UserNav, UserNavProps } from '../UserNav'

export default {
  title: '🌳 Organisms/UserNav',
  component: UserNav,
  argTypes: {
    register: {
      control: { type: 'disabled' }
    }
  }
}

export const Basic = (args: UserNavProps) => {
  return (
    <div style={{ padding: '50px', maxWidth: '400px' }}>
      <UserNav
        avatar='https://www.anynines.com/assets/team/profiles/2x/fischer-dd47fbfc116c0069ffd414d3784f5895044aaef3e2411414c5f0fc637624f030.jpg'
        setMode={(mode): void => { console.log(`Mode set to: ${mode}`) }}
        mode='dark'
        name='Morgan Kelin'
        description='CEO'
        logoutUser={(): void => { console.log('logout user') }}
      />
    </div>
  )
}
