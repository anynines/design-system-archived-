import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { UserInfo } from '../UserInfo/UserInfo'

export interface UserDropdownProps {
  name: string
  role: string
  avatarImg: string
}

export const UserDropdown: React.FC<UserDropdownProps> = ({
  name,
  role,
  avatarImg
}) => {
  return (
    <StyledUserDropdown>
      <Avatar
        rounded
        size='sm'
        avatar={avatarImg}
      />
      <UserInfo userName={name} userGroup={role} />
    </StyledUserDropdown>
  )
}

const StyledUserDropdown = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  margin-left: 20px;
  background-color: var(--color-dark);
  max-width: 200px;
  cursor: pointer;
  padding-right: 12px;
  height: 40px;
  border-radius: 
    50px
    var(--radius)
    var(--radius)
    50px;
  transition: var(--transition);

  span {
    transition: var(--transition);
  }

  .user-info {
    margin-right: 20px;
  }

  &.active,
  &:hover {
    background-color: var(--color-primary);
    span {
      opacity: 1;
      color: var(--color-white-fix);
    }
  }
`
