import React from 'react'
import styled from 'styled-components'

// M O L E C U L E S
import { MenuItem, MenuItemProps } from '../MenuItem/MenuItem'

// I N T E R F A C E S
export interface MenuItemObject extends MenuItemProps {
  id: string
}

export interface MenuProps {
  className?: string
  items?: MenuItemObject[]
  onClick?: (itemId: string) => void
  selectedItem?: string | null
  vertical?: boolean
}

// C O M P O N E N T
export const Menu: React.FC<MenuProps> = ({
  children,
  className,
  items,
  onClick,
  selectedItem,
  vertical = false
}) => {
  const menuOutput = items && items.map((item) => {
    if (onClick) {
      return (
        <MenuItem
          active={selectedItem === item.id}
          counter={item.counter}
          icon={item.icon}
          id={item.icon}
          key={item.id}
          onClick={(): void => { onClick(item.id) }}
          vertical={item.vertical}
        >
          {item.children}
        </MenuItem>
      )
    }

    return (
      <MenuItem
        active={selectedItem === item.id}
        counter={item.counter}
        icon={item.icon}
        id={item.icon}
        key={item.icon}
        path={item.path}
        vertical={item.vertical}
      >
        {item.children}
      </MenuItem>
    )
  })
  return (
    <StyledMenu
      className={`menu-item-wrapper ${className}`}
      vertical={vertical}
    >
      {menuOutput}
      {children}
    </StyledMenu>
  )
}

// I N T E R F A C E
interface StyledMenuProps {
  vertical: boolean
}

// S T Y L E S
const StyledMenu = styled.ul<StyledMenuProps>`
  --flex-direction: ${(props): string => { return (props.vertical ? 'column' : 'row') }};
  --margin-left: ${(props): string => { return (props.vertical ? '0' : 'var(--space-fixed-xxl)') }};
  --width: ${(props): string => { return (props.vertical ? '100%' : 'auto') }};

  display: flex;
  flex-direction: var(--flex-direction);
  align-items: stretch;
  width: var(--width);
  
  @media (min-width: 60em) {
    margin-left: var(--margin-left);
  }
`
StyledMenu.displayName = 'StyledMenu'
