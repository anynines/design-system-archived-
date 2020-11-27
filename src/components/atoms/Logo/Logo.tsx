import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// I N T E R F A C E S
export interface LogoProps {
  className?: string
  onClick?: () => void
  path?: string
  src: string
  style?: React.CSSProperties
  vertical?: boolean
}

// C O M P O N E N T
export const Logo: FC<LogoProps> = ({
  className = 'StyledLogoWrapper',
  onClick,
  path = '/',
  src: url,
  style,
  vertical = true
}: LogoProps) => {
  return (
    <NavLink
      to={path}
      onClick={(): void => {
        return onClick && onClick()
      }}
      className={vertical ? 'vertical' : ''}
      style={style}
    >
      <StyledLogoWrapper className={`Logo ${vertical ? 'vertical' : ''} ${className}`}>
        <img src={url} alt='logo' />
      </StyledLogoWrapper>
    </NavLink>
  )
}

// S T Y L E S
const StyledLogoWrapper = styled.span`
  --logo-height: 2rem;

  img {
    margin-top: calc(var(--space-sm) * 2);
    height: var(--logo-height);
  }

  &.vertical {
    margin-bottom: var(--space-lgr);

    img {
      height: calc(var(--logo-height) * 2);
    }
  }
`
