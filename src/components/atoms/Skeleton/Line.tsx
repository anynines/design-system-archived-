import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E S
export type LineWidth = 'sm' | 'md' | 'lg'
export type LineType = 'text' | 'title'
export interface LineSkeletonProps extends DefaultComponentProps {
  width?: LineWidth
  type?: LineType
}

// C O M P O N E N T
export const LineSkeleton: React.FC<LineSkeletonProps> = ({
  width = 'lg',
  className = '',
  style,
  type = 'text'
}) => {
  return (
    <StyledLineSkeleton style={style} className={`line-skeleton ${className} width-${width} type-${type}`} />
  )
}

// S T Y L E S
const StyledLineSkeleton = styled.span`
  display: flex;
  position: relative;
  overflow: hidden;
  opacity: .25;
  background: linear-gradient(to right, var(--color-white) 8%, var(--color-white-70) 18%, var(--color-white) 33%);
  background-size: 1200px 104px;
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

  &.type {
    &-text {
      min-height: var(--body-line-height);
    }

    &-title {
      min-height: var(--heading-line-height);
    }
  }

  &.width {
    &-lg {
      width: 100%;
    }

    &-md {
      width: 50%;
    }

    &-sm {
      width: 25%;
    }
  }
`
