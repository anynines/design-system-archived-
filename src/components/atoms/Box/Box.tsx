import React from 'react'
import styled from 'styled-components'

export const Box: React.FC = ({ children }) => {
  return <StyledBox>{children}</StyledBox>
}

const StyledBox = styled.div`
  background-color: var(--color-dark-50);
  border-radius: var(--radius);
  padding: 30px;
`
