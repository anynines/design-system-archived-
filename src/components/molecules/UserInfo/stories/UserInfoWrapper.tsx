import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface UserInfoWrapperProps {
  children?: JSX.Element
}
// C O M P O N E N T
export const UserInfoWrapper: React.FC<UserInfoWrapperProps> = ({ children }) => {
  return (
    <StyledUserWrapper>
      {children}
    </StyledUserWrapper>
  )
}

// S T L Y E S
const StyledUserWrapper = styled.div`
  background-color: var(--color-black);
  padding: var(--space-lg);
  border-radius: var(--radius);
`
StyledUserWrapper.displayName = 'StyledUserWrapper'
