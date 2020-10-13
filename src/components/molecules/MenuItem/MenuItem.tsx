import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// A T O M S
import { Icon, IconName } from '../../atoms/Icon/Icon'

// I N T E R F A C E
export interface MenuItemProps {
  id?: string
  icon?: IconName
  path?: string
  counter?: boolean
  active?: boolean
  vertical?: boolean
  onClick?: () => void
  children?: JSX.Element
  className?: string
}

// C O M P O N E N T
export const MenuItem: React.FC<MenuItemProps> = ({
  className = 'StyledMenuItem',
  counter = false,
  active = false,
  vertical = false,
  icon,
  path,
  onClick,
  children
}) => {
  return (
    <>
      {path && (
        <StyledMenuItem
          vertical={vertical}
          icon={icon}
          label={children}
          className={`menu-item ${className}`}
          id={icon}
        >
          <NavLink to={`${path}`} className='wrapper' activeClassName='active'>
            {icon && <Icon icon={icon} />}
            {children !== undefined ? (
              <span className='label'>{children}</span>
            ) : <></>}
          </NavLink>
        </StyledMenuItem>
      )}
      {!path && (
        <StyledMenuItem
          onClick={onClick}
          vertical={vertical}
          label={children}
          icon={icon}
          className={`menu-item ${className}`}
          id={icon}
        >
          <div
            className={`wrapper ${active && 'active'} ${counter && 'counter'}`}
          >
            {icon && <Icon icon={icon} />}
            {children !== undefined ? (
              <span className='label'>{children}</span>
            ) : <></>}
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
  --margin: ${(props): string => { return props.vertical ? '0 0 20px 0' : '0 10px' }};
  --margin-bottom: ${(props): string => { return props.vertical ? '0' : '' }};
  --svg-margin-right: ${(props): string => { return props.label ? '8px' : '0' }};
  
  display: var(--display);
  margin: var(--margin);
  list-style-type: none;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
    margin-bottom: var(--margin-bottom);
  }

  .label {
    font-size: var(--text-md);
    font-weight: var(--font-weight-bd);
    transition: var(--transition);
  }

  i {
    margin-right: var(--svg-margin-right);
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
        top: -.45rem;
        right: -.45rem;
        border: 2px solid var(--color-darker);
        background-color: var(--color-primary);
        width: .8rem;
        height: .8rem;
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
`
StyledMenuItem.displayName = 'StyledNavItem'
