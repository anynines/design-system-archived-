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
}

// C O M P O N E N T
export const Logo: FC<LogoProps> = ({
  className = 'StyledLogoWrapper',
  path = '/',
  vertical = true,
  src: url,
  onClick
}: LogoProps) => {
  return (
    <NavLink
      to={path}
      onClick={(): void => {
        return onClick && onClick()
      }}
      className={vertical ? 'vertical' : ''}
    >
      <StyledLogoWrapper className={`${vertical ? 'vertical' : ''} ${className}`}>
        <img src={url} alt='logo' />
      </StyledLogoWrapper>
    </NavLink>
  )
}

// S T Y L E S
const StyledLogoWrapper = styled.span`
  --logo-height: 1rem;

  img {
    margin-top: calc(var(--space-sm) * 2);
    height: var(--logo-height);
  }

  &.vertical {
    margin-bottom: var(--space-lgr);

    img {
      height: calc(var(--logo-height) * 5);
    }
  }

  @media (min-width: 60em) {
    img {
      margin-top: 0;
      height: calc(var(--logo-height) * 2.5);
    }
  }
`
