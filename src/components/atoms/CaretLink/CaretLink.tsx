import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// C O M P O N E N T S
import { Icon } from '../Icon/Icon'

// I N T E R F A C E S
export interface CaretLinkProps {
  text: string
  path: string
  className?: string
  style?: React.CSSProperties
}

// C O M P O N E N T
export const CaretLink: React.FC<CaretLinkProps> = ({
  text,
  path,
  className,
  children,
  style
}) => {
  return (
    <StyledCaretLink
      className={className}
      style={style}
    >
      <NavLink to={path}>
        <Icon icon='caretRight' />
        <span>{children || text}</span>
      </NavLink>
    </StyledCaretLink>
  )
}

// S T Y L E S
const StyledCaretLink = styled.div`
  a {
    display: flex;
    position: relative;
    align-items: center;
    transition: var(--transition);
    text-decoration: none;
    color: var(--color-white);
    padding-left: 25px;

    i {
      position: absolute;
      transition: var(--transition);
      left: 5px;
      color: var(--color-primary);
    }

    span {
      transition: var(--transition);
      font-size: var(--text-lg);
      font-weight: var(--font-weight-md);
      opacity: 0.5;
    }

    &:hover {
      padding-left: 0;

      i {
        left: calc(100% + 5px);
      }

      span {
        margin-left: -5px;
        opacity: 1;
      }
    }
  }
`
StyledCaretLink.displayName = 'StyledCaretLink'
