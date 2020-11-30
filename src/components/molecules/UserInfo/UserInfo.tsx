import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export type sizeType = 'sm' | 'md'
export interface UserInfoProps {
  className?: string
  size?: sizeType
  userName: string
  userGroup: string
}

// C O M P O N E N T
export const UserInfo: React.FC<UserInfoProps> = ({
  className,
  size,
  userName,
  userGroup
}) => {
  return (
    <StyledUserInfo size={size} className={`user-info ${className}`}>
      <span className='user-name'>{userName}</span>
      <span className='user-group'>{userGroup}</span>
    </StyledUserInfo>
  )
}

export interface StyledUserInfoProps {
  size?: string
}

// S T L Y E S
const StyledUserInfo = styled.div<StyledUserInfoProps>`
  --font-size: ${(props): string => { return props.size === 'md' ? 'var(--text-lg)' : 'var(--text-md)' }};

  display: flex;
  flex-direction: column;
  color: var(--color-white);
  font-size: var(--font-size);

  .user-name {
    line-height: 1.2;
    font-size: 1em;
    font-weight: var(--font-weight-bd);
  }
  
  .user-group {
    opacity: 0.5;
    font-size: .85em;
  }
`
StyledUserInfo.displayName = 'StyledUserInfo'
