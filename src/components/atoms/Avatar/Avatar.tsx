import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface AvatarProps {
  avatar?: string
  userName?: string
  size?: string
  rounded?: boolean
  level?: number
  className?: string
  style?: React.CSSProperties
}

export const getInitials = (userName: string): string => {
  const names = userName.split(' ')
  let initials = names[0].substring(0, 1).toUpperCase()

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase()
  }

  return initials
}

// C O M P O N E N T
export const Avatar: React.FC<AvatarProps> = ({
  userName = 'John Doe',
  size = 'sm',
  rounded = false,
  level,
  avatar,
  className,
  style,
  children
}) => {
  const renderAvatarContent = (): React.ReactNode => {
    if (children) {
      return children
    }

    return (
      <div data-testid='initials' className='initials'>
        {!avatar && getInitials(userName)}
      </div>
    )
  }

  return (
    <StyledAvatar
      className={`
        ${size} 
        ${rounded && 'rounded'} 
        ${level && 'level'} 
        ${!avatar && 'initials'} 
        ${className}
      `}
      style={avatar && { backgroundImage: `url(${avatar})` }}
      avatar={avatar}
    >
      {renderAvatarContent()}

      {level ? <div className='level'>{level}</div> : null}
    </StyledAvatar>
  )
}

// S T Y L E S
const StyledAvatar = styled.div`
  --size: 5rem;
  --font-size: .8em;
  --initials-font-size: 2.4em;
  --level-position: .2em;
  --level-size: 2em;
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: var(--space-lgr);
  border-radius: var(--radius);
  background-color: var(--color-dark);
  background-position: center center;
  background-size: cover;
  width: calc(var(--size) / 2);
  height: calc(var(--size) / 2);
  font-size: var(--text-sm);

  &.rounded {
    border-radius: 100%;

    &:not(.level) {
      overflow: hidden;
    }
  }

  &.md {
    width: var(--size);
    height:var(--size);
    font-size: var(--text-lg);
  }

  &.lg {
    width: calc(var(--size) * 2);
    height: calc(var(--size) * 2);
    font-size: var(--text-xl);
  }

  &.level {
    position: relative;

    .level {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: var(--level-position);
      left: var(--level-position);
      background-color: var(--color-primary);
      width: var(--level-size);
      height: var(--level-size);
      color: var(--color-white-fix);
      font-size: var(--font-size);
      font-weight: var(--font-weight-bd);
      border-radius: 100%;
    }
  }

  &.initials {
    .initials {
      color: var(--color-white-fix);
      font-size: var(--initials-font-size);
      font-weight: var(--font-weight-bd);
    }
  }

  & > *:not(.initials):not(.level) {
    width: 100%;
    height: 100%;
  }
`
StyledAvatar.displayName = 'StyledAvatar'
