import React from 'react'
import styled from 'styled-components'

import { getChildrenWithNewProps } from '../../../../helpers'

export const Head = ({ children, ...props }): JSX.Element => {
  return (
    <StyledHead>
      {getChildrenWithNewProps(children, props)}
    </StyledHead>
  )
}

const StyledHead = styled.thead`
  tr {
    &:last-child {
      td:first-child {
        border-top-left-radius: 5px;
      }
      td:last-child {
        border-top-right-radius: 5px;
      }
    } 
  }
`
