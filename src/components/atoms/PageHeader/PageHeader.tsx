import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface PageHeaderProps {
  className?: string
}

// C O M P O N E N T
export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { className, children } = props

  return <StyledPageHeader className={className}>{children}</StyledPageHeader>
}

// S T Y L E S
const StyledPageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: var(--color-dark-50);
  padding: 20px;
  border-radius: var(--radius);

  h1 {
    margin-bottom: 0;
    font-size: var(--text-xl);
  }
`
