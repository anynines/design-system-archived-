import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// A T O M S
import { Icon, IconName } from '../../atoms/Icon/Icon'

// I N T E R F A C E
export interface MenuItemProps {
  active?: boolean
  bgColor?: string
  children?: JSX.Element
  className?: string
  counter?: boolean
  icon?: IconName
  id?: string
  onClick?: () => void
  path?: string
  style?: React.CSSProperties
  vertical?: boolean
}

// C O M P O N E N T
export const MenuItem: React.FC<MenuItemProps> = ({
  active = false,
  bgColor,
  children,
  className,
  counter = false,
  icon,
  onClick,
  path,
  style,
  vertical = false
}) => {
  return (
    <>
      {path && (
        <StyledMenuItem
          vertical={vertical}
          icon={icon}
          label={children}
          className={`menu-item ${bgColor} ${className}`}
          id={icon}
          style={style}
        >
          <NavLink
            exact
            to={`${path}`}
            className='wrapper'
            activeClassName='active'
          >
            {icon && <Icon icon={icon} />}
            {children !== undefined ? (
              <span className='label'>{children}</span>
            ) : (
              <></>
            )}
          </NavLink>
        </StyledMenuItem>
      )}
      {!path && (
        <StyledMenuItem
          onClick={onClick}
          vertical={vertical}
          label={children}
          icon={icon}
          className={`menu-item ${bgColor} ${className}`}
          id={icon}
          style={style}
        >
          <div
            className={`wrapper ${active && 'active'} ${counter && 'counter'}`}
          >
            {icon && <Icon icon={icon} />}
            {children !== undefined ? (
              <span className='label'>{children}</span>
            ) : (
              <></>
            )}
          </div>
        </StyledMenuItem>
      )}
    </>
  )
}

// I N T E R F A C E
interface StyledMenuItemProps {
  vertical: boolean
}

// S T Y L E S
const StyledMenuItem = styled.li<StyledMenuItemProps>`
  --display: ${(props): string => { return props.vertical ? 'inline-block' : 'block' }};
  --margin: ${(props): string => { return props.vertical ? '0 0 var(--space-lg) 0' : '0 var(--space-sm)' }};
  --margin-bottom: ${(props): string => { return props.vertical ? '0' : '' }};
  --svg-margin-right: ${(props): string => { return props.label ? '8px' : '0' }};

  display: var(--display);
  position: relative;
  margin: var(--margin);
  list-style-type: none;

  a {
    text-decoration: none;
  }

  .label {
    font-size: var(--text-md);
    font-weight: var(--font-weight-bd);
    transition: var(--transition);
  }

  i {
    margin-right: var(--svg-margin-right);
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
    margin-bottom: var(--margin-bottom);
  }

  .wrapper {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: var(--color-dark);
    cursor: pointer;
    padding: 0 1em;
    width: inherit;
    min-width: 2.5rem;
    height: 2.5rem;
    color: var(--color-white);
    border-radius: var(--radius);
    transition: var(--transition);

    &.counter {
      &::after {
        position: absolute;
        top: -0.45rem;
        right: -0.45rem;
        border: 2px solid var(--color-black);
        background-color: var(--color-primary);
        width: 0.8rem;
        height: 0.8rem;
        content: '';
        border-radius: 100%;
      }
    }

    &.active,
    &:hover {
      background-color: var(--color-primary);
      color: var(--color-white-fix);
      .label {
        color: var(--color-white-fix);
      }
    }
  }

  &.black {
    .wrapper {
      background-color: var(--color-black);
      &:hover {
        background-color: var(--color-primary);
      }
    }
  }

  &.primary {
    .wrapper {
      background-color: var(--color-primary);
      &:hover {
        background-color: var(--color-primary-light);
      }
    }
  }
`
StyledMenuItem.displayName = 'StyledNavItem'
