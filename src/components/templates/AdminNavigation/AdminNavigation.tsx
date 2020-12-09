import React from 'react'
import styled from 'styled-components'

export interface AdminNavigationProps {
  className?: string
  style?: React.CSSProperties
}

export const AdminNavigation: React.FC<AdminNavigationProps> = ({
  className,
  style,
  children
}) => {
  return (
    <StyledAdminNavigation
      style={style}
      className={`admin-navigation ${className}`}
    >
      {children}
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
  background-color: var(--color-black-darker);
  padding: var(--space-lg);
  padding-top: 30px;
  width: 260px;
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
    border-top: var(--border);
    background-color: transparent;
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
