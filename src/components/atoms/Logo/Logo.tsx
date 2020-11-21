import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// I N T E R F A C E S
export interface LogoProps {
  src: string
  path?: string
  vertical?: boolean
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

// C O M P O N E N T
export const Logo: FC<LogoProps> = ({
  className = 'StyledLogoWrapper',
  path = '/',
  vertical = true,
  src: url,
  onClick,
  style
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
