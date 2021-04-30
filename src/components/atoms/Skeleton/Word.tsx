import React from 'react'
import styled from 'styled-components'
import { LineSkeleton, LineSkeletonProps } from './Line'

// I N T E R F A C E S
export type WordSkeletonProps = LineSkeletonProps

// C O M P O N E N T
const WordSkeleton: React.FC<WordSkeletonProps> = ({
  className = '',
  style
}) => {
  return (
    <span
      style={{ ...style, position: 'relative' }}
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
`

export default WordSkeleton
