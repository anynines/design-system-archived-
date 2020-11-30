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
const StyledLogoWrapper = styled.div`
  --logo-height: 40px;
  height: var(--logo-height);

  img {
    height: var(--logo-height);
  }

  &.vertical {
    margin-bottom: var(--space-lgr);

    img {
      height: calc(var(--logo-height) * 2);
    }
  }
`
