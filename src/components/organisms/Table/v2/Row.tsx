import React from 'react'
import styled from 'styled-components'

import { getChildrenWithNewProps } from '../../../../helpers'

// C O M P O N E N T S
export const Row = ({ children, ...props }): JSX.Element => {
  return (
    <StyledRow>
      {getChildrenWithNewProps(children, props)}
    </StyledRow>
  )
}

const StyledRow = styled.tr`
`
