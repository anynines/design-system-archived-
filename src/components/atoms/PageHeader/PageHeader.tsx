import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E S
export type PageHeaderProps = DefaultComponentProps

// C O M P O N E N T
export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { className, children, style } = props

  return <StyledPageHeader className={className} style={style}>{children}</StyledPageHeader>
}

// S T Y L E S
const StyledPageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-fixed-lg);
  background-color: var(--color-black-darker);
  padding: var(--space-lg) var(--space-xxl);
  border-radius: var(--radius);
  height: 5rem;

  h1 {
    margin-bottom: 0;
    font-size: var(--text-xxl);
  }

  .page-header-toolbar {
    display: flex;
  }
`
