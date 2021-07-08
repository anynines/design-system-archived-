import React from 'react'
import styled from 'styled-components'

import { UserInfo } from '../../molecules/UserInfo/UserInfo'
import { Avatar } from '../../atoms/Avatar/Avatar'

export interface CardAuthorProps {
  username: string
  userGroup: string
  avatarUrl: string
  className?: string
}

const CardAuthor: React.FC<CardAuthorProps> = ({
  username, userGroup, avatarUrl, className
}) => {
  return (
    <StyledCardAuthor className={className}>
      <Avatar size='md' avatar={avatarUrl} rounded />
      <UserInfo userName={username} userGroup={userGroup} />
    </StyledCardAuthor>
  )
}

const StyledCardAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var(--space-sm) var(--space-md);

  &.no-padding {
    padding: 0;
  }

  .user-info {
    margin-left: calc(var(--space-xs) * -1);
    
    .user-group {
      text-align: left;
    }
  }
`

export { CardAuthor }
