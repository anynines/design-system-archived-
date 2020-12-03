import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { ToggleMode } from '../../atoms/ToggleMode/ToggleMode'
import { UserInfo } from '../UserInfo/UserInfo'

export interface UserDropdownProps {
  avatarImg: string
  className?: string
  level?: number
  name: string
  role: string
  style?: React.CSSProperties
}

export const UserDropdown: React.FC<UserDropdownProps> = ({
  avatarImg,
  children,
  className,
  level,
  name,
  role,
  style
}) => {
  const [active, setActive] = React.useState(false)
  const onClick = (): void => {
    setActive(!active)
  }
  return (
    <StyledUserDropdown
      className={`
        user-dropdown 
        ${className} 
        ${children && active && 'active'}
      `}
      style={style}
      onClick={(): void => { return (onClick()) }}
    >
      <Avatar
        rounded
        size='sm'
        avatar={avatarImg}
        userName={name}
      />
      <UserInfo userName={name} userGroup={role} />
      {children && (
        <div className='user-menu'>
          <div className='user-menu--header'>
            <Avatar
              rounded
              size='md'
              avatar={avatarImg}
              level={level}
              userName={name}
            />
            <span className='user-menu--name'>{name}</span>
            <span className='user-menu--role'>{role}</span>
            <ToggleMode mode='dark' />
            <hr />
          </div>
          { children }
        </div>
      )}
    </StyledUserDropdown>
  )
}

const StyledUserDropdown = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  background-color: var(--color-dark);
  max-width: 200px;
  cursor: pointer;
  padding-right: 12px;
  height: 40px;
  border-radius: 50px calc(var(--radius) * 2) calc(var(--radius) * 2) 50px;
  transition: var(--transition);
  position: relative;

  span {
    transition: var(--transition);
  }

  .avatar-wrapper {
    height: 40px;
    width: 40px;
    margin-right: var(--space-lg);
  }

  .user-info {
    margin-right: 20px;
  }

  .user-menu {
    position: absolute;
    display: none;
    top: 60px;
    right: 0;
    background-color: var(--color-dark);
    border-radius: var(--radius);
    padding: 20px;
    width: 260px;
    box-shadow: var(--shadow);
    border: var(--border);
    flex-direction: column;

    &--header {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .avatar-wrapper {
      height: 100px;
      width: 100px;
      margin-bottom: var(--space-sm);

      .level {
        font-size: 14px;
      }
    }

    &--name {
      font-size: 18px;
      font-weight: 900;
    }

    &--role {
      font-size: 12px;
      font-weight: 300;
      opacity: 0.5;
    }

    .toggle-mode {
      position: absolute;
      top: 0;
      right: 0;
      border: var(--border);
    }

    hr {
      margin: var(--text-sm) 0 var(--text-md);
    }

    .menu-item .wrapper {
      background-color: var(--color-black);

      &:hover {
        background-color: var(--color-primary);
      }
    }
  }


  &.active .user-menu {
    display: flex;
  }

  &.active,
  &:hover {
    background-color: var(--color-primary);
    span {
      color: var(--color-white-fix);
    }
  }
`
