import React, { FC } from 'react'
import styled from 'styled-components'

import { getChildrenWithNewProps } from '../../../../helpers'
import { TableChildrenProps } from './Table'

export const Foot: FC<TableChildrenProps> = ({ children, ...props }) => {
  return (
    <StyledFoot>
      {getChildrenWithNewProps(children, props)}
    </StyledFoot>
  )
}

const StyledFoot = styled.tfoot`
  &:last-child{
    tr {
      &:last-child {
        td:first-child {
          border-bottom-left-radius: 5px;
        }
        td:last-child {
          border-bottom-right-radius: 5px;
        }
      } 
    }
  }
`
