import React from 'react'
import styled from 'styled-components'

import { Icon } from '../../atoms/Icon/Icon'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { UserInfo } from '../../molecules/UserInfo/UserInfo'
import { ToggleMode } from '../../atoms/ToggleMode/ToggleMode'
import { Mode } from '../../../designSystemInstance/types/types'

export interface UserNavProps {
  avatar: string
  name: string
  description: string
  mode: Mode
  setMode: (mode: Mode) => void
  logoutUser: () => void
  className?: string
}

export const UserNav: React.FC<UserNavProps> = ({
  avatar,
  name,
  description,
  mode,
  setMode,
  logoutUser,
  className = ''
}) => {
  return (
    <StyledUserNav className={`UserNav ${className}`}>
      <div className='left'>
        <Avatar size='sm' avatar={avatar} />
        <UserInfo userName={name} userGroup={description} />
      </div>
      <div className='right'>
        <ToggleMode
          size='sm'
          mode={mode}
          setMode={(): void => {
            setMode(mode === 'dark' ? 'light' : 'dark')
          }}
        />
        <div className='btn sm' role='link' tabIndex={0} onClick={logoutUser}>
          <Icon icon='logout' />
        </div>
      </div>
    </StyledUserNav>
  )
}

const StyledUserNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-dark-50);
  padding: 10px;
  width: 100%;
  height: 60px;

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;

    .btn, .StyledToggleMode {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      background-color: var(--color-dark);
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: var(--radius);
      transition: var(--transition);
      color: var(--color-white);

      img {
        height: 15px;
        transition: var(--transition);
      }
      
      &:hover {
        background-color: var(--color-primary);
        color: var(--color-white-fix);
      }
    }
  }
`
