import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

export type UserlandProps = DefaultComponentProps

export const Userland: React.FC<UserlandProps> = ({
  children,
  className,
  style
}) => {
  return (
    <StyledUserland
      className={`userland-layout ${className}`}
      style={style}
    >
      {children}
    </StyledUserland>
  )
}

const StyledUserland = styled.div`
  --pos-top: 80px;

  position: relative;
  top: var(--pos-top);
  overflow: hidden;
  width: 100%;
  min-height: calc(100vh - var(--pos-top));
  color: var(--color-white);
`
