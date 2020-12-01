import React from 'react'
import styled from 'styled-components'

import { IconName } from '../../atoms/Icon/Icon'
import { Logo } from '../../atoms/Logo/Logo'
import { Menu } from '../Menu/Menu'
import { UserNav, UserNavProps } from '../UserNav/UserNav'
import { Mode } from '../../../designSystemInstance/types/types'

export interface AdminNavigationProps {
  activeLink: string
  className?: string
  links?: AdminNavigationLink[]
  logoSrc: string
  logoutUser: () => void
  mode: Mode
  onLinkClick: (link: string) => void
  setMode: (mode: Mode) => void
  style?: React.CSSProperties
  userInfo: Omit<UserNavProps, 'mode' | 'setMode' | 'logoutUser' | 'className'>
}

export interface AdminNavigationLink {
  children: JSX.Element
  icon?: IconName
  id: string
  path?: string
}

export const AdminNavigation: React.FC<AdminNavigationProps> = ({
  activeLink,
  className,
  links,
  logoSrc,
  logoutUser,
  mode,
  onLinkClick,
  setMode,
  style,
  userInfo,
  children
}) => {
  return (
    <StyledAdminNavigation
      style={style}
      className={`admin-navigation ${className}`}
    >
      <Logo
        src={logoSrc}
        vertical
      />

      {children}

      <Menu
        items={links}
        onClick={onLinkClick}
        selectedItem={activeLink}
        vertical
      />

      <UserNav
        avatar={userInfo.avatar}
        name={userInfo.name}
        description={userInfo.description}
        mode={mode}
        setMode={setMode}
        logoutUser={logoutUser}
      />
    </StyledAdminNavigation>
  )
}

const StyledAdminNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 20px;
  left: 20px;
  overflow: hidden;
  background-color: var(--color-dark);
  padding: var(--space-lg);
  padding-top: 30px;
  width: 280px;
  height: calc(100vh - 40px);
  color: var(--color-white);
  border-radius: var(--radius);

  .menu-item {
    .wrapper:not(.active):not(:hover) {
      background-color: var(--color-black);
    }
  }

  .user-nav {
    position: absolute;
    bottom: 0;
    background-color: var(--color-black-50);
  }

  .logo-wrapper {
    margin-bottom: 30px;
    img {
      margin-top: 0;
    }
  }

  li {
    margin: 0;
    margin-bottom: var(--space-lg);

    &:last-child {
      margin-bottom: 0;
    }
  }
`
