import React from 'react'
import styled from 'styled-components'

import { IconName } from '../../atoms/Icon/Icon'
import { Logo } from '../../atoms/Logo/Logo'
import { Menu } from '../Menu/Menu'
import { UserNav, UserNavProps } from '../UserNav/UserNav'
import { Mode } from '../../../designSystemInstance/types/types'

export interface AdminNavigationProps {
  logoSrc: string
  links: AdminNavigationLink[]
  onLinkClick: (link: string) => void
  activeLink: string
  userInfo: Omit<UserNavProps, 'mode' | 'setMode' | 'logoutUser' | 'className'>
  mode: Mode
  setMode: (mode: Mode) => void
  logoutUser: () => void
  className?: string
  style?: React.CSSProperties
}

export interface AdminNavigationLink {
  id: string
  children: JSX.Element
  icon?: IconName
}

export const AdminNavigation: React.FC<AdminNavigationProps> = ({
  logoSrc,
  links,
  onLinkClick,
  activeLink,
  userInfo,
  mode,
  setMode,
  logoutUser,
  className,
  style
}) => {
  return (
    <StyledAdminNavigation style={style} className={className}>
      <Logo
        src={logoSrc}
        vertical
      />

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
  position: relative;
  overflow: hidden;
  background-color: var(--color-dark);
  padding: var(--space-md);
  padding-top: 30px;
  width: 100%;
  height: 100%;
  color: var(--color-white);
  border-radius: var(--radius);

  .StyledMenuItem {
    .wrapper:not(.active):not(:hover) {
      background-color: var(--color-black);
    }
  }

  .UserNav {
    position: absolute;
    bottom: 0;
    background-color: var(--color-darker-50);
  }

  .Logo {
    img {
      margin-top: 0;
    }
  }

  ul {
    padding-top: 30px;
  }

  li {
    margin: 0;
    margin-bottom: var(--space-md);

    &:last-child {
      margin-bottom: 0;
    }
  }
`
