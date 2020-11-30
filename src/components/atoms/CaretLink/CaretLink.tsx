import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// C O M P O N E N T S
import { Icon } from '../Icon/Icon'

// I N T E R F A C E S
export interface CaretLinkProps {
  className?: string
  path: string
  style?: React.CSSProperties
  text: string
}

// C O M P O N E N T
export const CaretLink: React.FC<CaretLinkProps> = ({
  children,
  className,
  path,
  style,
  text
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
  display: inline-block;
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
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 12px;
      font-weight: var(--font-weight-bd);
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
