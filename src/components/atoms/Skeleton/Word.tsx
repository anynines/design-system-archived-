import React from 'react'
import styled from 'styled-components'
import { LineSkeleton, LineSkeletonProps } from './Line'

// I N T E R F A C E S
export type WordSkeletonProps = LineSkeletonProps

// C O M P O N E N T
export const WordSkeleton: React.FC<WordSkeletonProps> = ({
  className = '',
  style
}) => {
  return (
    <span
      style={{
        ...style,
        display: 'block',
        position: 'relative',
        marginBottom: '5px'
      }}
      className={className}
    >
      {' '}
      &nbsp;
      <StyledLineSkeleton />
    </span>
  )
}

// S T Y L E S
const StyledLineSkeleton = styled(LineSkeleton)`
  position: absolute;
  top: 0;
  min-width: 12px;
`
