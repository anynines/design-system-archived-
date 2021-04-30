import React from 'react'
import styled from 'styled-components'
import { LineSkeleton, LineSkeletonProps } from './Line'

// I N T E R F A C E S
export interface TextSkeletonProps extends LineSkeletonProps {
  lines?: number
}

// C O M P O N E N T
const TextSkeleton: React.FC<TextSkeletonProps> = ({
  lines = 3,
  width,
  className = '',
  style
}) => {
  const renderLines = (): JSX.Element[] => {
    const paragraphs: JSX.Element[] = []

    const getParagraphLine = (key: number): JSX.Element => {
      return (
        <p key={key} style={{ ...style, position: 'relative' }}>
          &nbsp;
          <StyledLineSkeleton width={width} />
        </p>
      )
    }

    for (let i = 0; i < lines - 1; i += 1) {
      paragraphs.push(getParagraphLine(i))
    }

    paragraphs.push(
      lines <= 1
        ? getParagraphLine(lines + 1)
        : (
          <p key={lines + 1} style={{ ...style, position: 'relative' }}>
            &nbsp;
            <StyledLineSkeleton width='sm' />
          </p>
        )
    )

    return paragraphs
  }

  return (
    <StyledTextSkeleton className={`text-skeleton ${className}`}>
      {renderLines()}
    </StyledTextSkeleton>
  )
}

// S T Y L E S
const StyledTextSkeleton = styled.div`
  margin-bottom: 25px;
  p {
    margin-top: 0;
    margin-bottom: 5px;
  }
`

const StyledLineSkeleton = styled(LineSkeleton)`
  position: absolute;
  top: 0;
  margin-bottom: 0;
`

export default TextSkeleton
