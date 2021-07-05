import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E S
export type CardSkeletonProps = DefaultComponentProps

// C O M P O N E N T
export const CardSkeleton: React.FC<CardSkeletonProps> = ({
  className = '',
  style
}) => {
  return (
    <StyledCardSkeleton style={style} className={`line-skeleton ${className}`} />
  )
}

// S T Y L E S
const StyledCardSkeleton = styled.div`
  position: relative;
  overflow: hidden;
  opacity: .25;
  margin-bottom: 20px;
  background: linear-gradient(to right, var(--color-white) 8%, var(--color-white-70) 18%, var(--color-white) 33%);
  background-size: 1200px 104px;
  width: 100%;
  height: 200px;
  border-radius: var(--radius);
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: placeHolderShimmer;

  @keyframes placeHolderShimmer {
    0%{ background-position: -600px 0; }
    100%{ background-position: 600px 0; }
  }
`
