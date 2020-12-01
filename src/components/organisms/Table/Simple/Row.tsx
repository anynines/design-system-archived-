import React, { FC } from 'react'
import styled from 'styled-components'

import { getChildrenWithNewProps } from '../../../../helpers'
import { TableChildrenProps } from './Table'

// C O M P O N E N T S
export const Row: FC<TableChildrenProps> = ({ children, ...props }): JSX.Element => {
  return (
    <StyledRow>
      {getChildrenWithNewProps(children, props)}
    </StyledRow>
  )
}

const StyledRow = styled.tr`
`
