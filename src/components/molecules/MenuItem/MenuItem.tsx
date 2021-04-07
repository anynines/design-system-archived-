import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// A T O M S
import { Icon, IconName } from '../../atoms/Icon/Icon'

// I N T E R F A C E
export interface MenuItemProps extends DefaultComponentProps {
  active?: boolean
  bgColor?: string
  exact?: boolean
  children?: JSX.Element
  counter?: number | string
  icon?: IconName
  id?: string
  onClick?: () => void
  path?: string
  vertical?: boolean
}

// C O M P O N E N T
export const MenuItem: React.FC<MenuItemProps> = ({
  active = false,
  bgColor,
  exact = false,
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
            exact={exact}
            to={`${path}`}
            className={`wrapper ${active && 'active'}`}
            activeClassName='active'
          >
            {icon && <Icon icon={icon} />}
            {children !== undefined ? (
              <span className='label'>{children}</span>
            ) : (<></>)}
            {counter && <span className='counter'>{counter}</span>}
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
          <div className={`wrapper ${active && 'active'}`}>
            {icon && <Icon icon={icon} />}
            {children !== undefined
              ? <span className='label'>{children}</span>
              : <></>}
            {counter && <span className='counter'>{counter}</span>}
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
  --margin: ${(props): string => { return props.vertical ? '0 0 var(--space-md) 0' : '0 var(--space-xs)' }};
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
    font-size: var(--text-xs);
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

    .counter {
      position: absolute;
      top: 7px;
      right: 8px;
      border: var(--border);
      background-color: var(--color-primary-light);
      padding: 4px 8px;
      min-width: 25px;
      text-align: center;
      color: var(--color-white);
      font-size: 10px;
      font-weight: 900;
      border-radius: 20px;
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
