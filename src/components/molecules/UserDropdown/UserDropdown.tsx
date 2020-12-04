import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../../atoms/Avatar/Avatar'
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
    <StyledUserDropdown style={style}>
      <button
        type='button'
        className={`
          user-dropdown 
          ${className} 
          ${active ? 'active' : ''}
        `}
        onClick={onClick}
      >
        <Avatar
          rounded
          size='sm'
          avatar={avatarImg}
          userName={name}
        />
        <UserInfo userName={name} userGroup={role} />
      </button>

      {children && (
        <div className={`user-menu ${active ? 'active' : ''}`}>
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
            <hr />
          </div>
          { children }
        </div>
      )}
    </StyledUserDropdown>
  )
}

const StyledUserDropdown = styled.div`
  position: relative;

  .user-dropdown {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    margin-left: 20px;
    border: var(--border);
    background-color: var(--color-dark);
    cursor: pointer;
    padding: 0;
    padding-right: 12px;
    height: 40px;
    text-align: left;
    max-width: 200px;
    border-radius: 50px calc(var(--radius) * 2) calc(var(--radius) * 2) 50px;
    transition: var(--transition);
    outline: none;

    .user-name {
      margin-bottom: 1px;
      font-size: 12px;
    }
    
    .user-group {
      font-size: 10px;
    }

    &:hover {
      background-color: var(--color-primary);
      span {
        color: var(--color-white-fix);
      }
    }

    .avatar-wrapper {
      margin-right: var(--space-lg);
      width: 40px;
      height: 40px;
    }

    .user-info {
      margin-right: 20px;
    }
  }

  .user-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    border: var(--border);
    background-color: var(--color-dark);
    padding: 20px;
    width: 260px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);

    &--header {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
    }

    .avatar-wrapper {
      margin-bottom: var(--space-sm);
      width: 100px;
      height: 100px;

      .level {
        font-size: 14px;
      }
    }

    &--name {
      font-size: 18px;
      font-weight: 900;
    }

    &--role {
      opacity: 0.5;
      font-size: 12px;
      font-weight: 300;
    }

    .toggle-mode {
      position: absolute;
      top: 20px;
      right: 20px;
      border: var(--border);
      background-color: var(--color-black-50);

      &:hover {
        background-color: var(--color-primary);
      }
    }

    hr {
      margin: var(--text-sm) 0 var(--text-md);
    }

    .menu-item .wrapper {
      border: var(--border);
      background-color: var(--color-black-50);

      &:hover {
        background-color: var(--color-primary);
      }
    }

    &.active {
      display: flex;
    }
  }

  
`
