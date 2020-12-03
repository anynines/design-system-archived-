import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { UserInfo } from '../UserInfo/UserInfo'

export interface UserDropdownProps {
  avatarImg: string
  className?: string
  name: string
  onClick?: () => void
  role: string
  style?: React.CSSProperties
}

export const UserDropdown: React.FC<UserDropdownProps> = ({
  avatarImg,
  className,
  name,
  onClick,
  role,
  style
}) => {
  return (
    <StyledUserDropdown
      className={`user-dropdown ${className}`}
      onClick={(): void => { return (onClick && onClick()) }}
      style={style}
    >
      <Avatar
        rounded
        size='sm'
        avatar={avatarImg}
        userName={name}
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
