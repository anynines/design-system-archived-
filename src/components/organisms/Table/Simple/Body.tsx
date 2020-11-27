import React, { FC } from 'react'
import styled from 'styled-components'

import { getChildrenWithNewProps } from '../../../../helpers'

export const Body: FC = ({ children, ...props }) => {
  return (
    <StyledBody>
      {getChildrenWithNewProps(children, props)}
    </StyledBody>
  )
}

const StyledBody = styled.tbody`
  &:last-child{
    tr {
      &:last-child {
        td:first-child {
          border-bottom-left-radius: var(--radius);
        }
        td:last-child {
          border-bottom-right-radius: var(--radius);
        }
      } 
    }
  }
`
