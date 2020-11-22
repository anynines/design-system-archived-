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
    align-items: center;
    position: relative;
    padding-left: 25px;
    text-decoration: none;
    color: var(--color-white);
    transition: var(--transition);

    i {
      position: absolute;
      left: 5px;
      color: var(--color-primary);
      transition: var(--transition);
    }

    span {
      opacity: 0.5;
      font-size: var(--text-lg);
      font-weight: var(--font-weight-md);
      transition: var(--transition);
    }

    &:hover {
      padding-left: 0;

      i {
        left: calc(100% + 5px);
      }

      span {
        opacity: 1;
        margin-left: -5px;
      }
    }
  }
`
StyledCaretLink.displayName = 'StyledCaretLink'
