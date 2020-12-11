import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface AvatarProps {
  avatar?: string
  className?: string
  level?: number
  rounded?: boolean
  size?: string
  userName?: string
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
  avatar,
  children,
  className,
  level,
  rounded = false,
  size = 'sm',
  userName = ''
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
        avatar-wrapper
        ${size} 
        ${rounded && 'rounded'} 
        ${level && 'level'} 
        ${!avatar && 'initials'} 
        ${className}
      `}
      style={{
        backgroundImage: `${avatar && `url(${avatar})`}`
      }}
      avatar={avatar}
    >
      {renderAvatarContent()}

      {level ? <div className='level'>{level}</div> : null}
    </StyledAvatar>
  )
}

// S T Y L E S
const StyledAvatar = styled.div`
  --size: 3rem;
  --initials-font-size: 2.4em;
  --level-position: -0.3em;
  --level-size: 2em;
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: var(--space-md);
  border-radius: var(--radius);
  border: var(--border);
  background-color: var(--color-dark);
  background-position: center center;
  background-size: cover;
  width: calc(var(--size) * 0.75);
  height: calc(var(--size) * 0.75);
  font-size: var(--text-xxxs);

  &:hover {
    box-shadow: var(--shadow);
  }

  &.rounded {
    border-radius: 100%;

    &:not(.level) {
      overflow: hidden;
    }
  }

  &.md {
    width: var(--size);
    height: var(--size);
    font-size: var(--text-xxs);
  }

  &.lg {
    width: calc(var(--size) * 2);
    height: calc(var(--size) * 2);
    font-size: var(--text-md);
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
