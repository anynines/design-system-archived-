import React, { FC } from 'react'
import styled from 'styled-components'

// C O M P O N E N T S
export const SRow: FC = ({ children }): JSX.Element => {
  return (
    <StyledRow>
      {children}
    </StyledRow>
  )
}

const StyledRow = styled.tr`
`
