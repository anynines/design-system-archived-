import React from 'react'
import styled from 'styled-components'

import { getChildrenWithNewProps } from '../../../../helpers'

// C O M P O N E N T S

export const Head = ({ children, ...props }): JSX.Element => {
  return (
    <StyledHead>
      {getChildrenWithNewProps(children, props)}
    </StyledHead>
  )
}

const StyledHead = styled.thead`
`
