import React from 'react'
import styled from 'styled-components'
import { LineSkeleton, LineSkeletonProps } from './Line'

// I N T E R F A C E S
export interface TitleSkeletonProps extends LineSkeletonProps {
  title?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  style?: React.CSSProperties
}

// C O M P O N E N T
export const TitleSkeleton: React.FC<TitleSkeletonProps> = ({
  title = 'h1',
  width,
  className = '',
  style
}) => {
  return React.createElement(
    title,
    {
      style: { ...style, width: '100%', position: 'relative' },
      className: `title-skeleton ${className}`
    },
    <>
      {' '}
      &nbsp;
      <StyledLineSkeleton width={width} type='title' />
    </>
  )
}

// S T Y L E S
const StyledLineSkeleton = styled(LineSkeleton)`
  position: absolute;
  top: 0;
`
