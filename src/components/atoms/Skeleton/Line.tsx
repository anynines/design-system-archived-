import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export type LineWidth = 'sm' | 'md' | 'lg'
export interface LineSkeletonProps {
  width?: LineWidth
  className?: string
  style?: React.CSSProperties
}

// C O M P O N E N T
export const LineSkeleton: React.FC<LineSkeletonProps> = ({
  width = 'lg',
  className = '',
  style
}) => {
  return (
    <StyledLineSkeleton style={style} className={`line-skeleton ${className} width-${width}`} />
  )
}

// S T Y L E S
const StyledLineSkeleton = styled.span`
position: relative;
overflow: hidden;
opacity: .25;
background-color: var(--text-color);
height: 100%;
border-radius: var(--radius);

&:before {
  position: absolute;
  top: 0;
  left: -150px;
  opacity: .75;
  background-image: linear-gradient(
    0deg, 
    rgba(230, 230, 230, 0), 
    var(--box-bg-color),
    rgba(230, 230, 230, 0)
  );
  width: 200px;
  height: 50px;
  color: transparent;
  content: 'lorem ipsum';
  transform: rotate(45deg);
  animation: shine 1.5s ease infinite;
  animation-delay: 1s;
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

@keyframes shine {
  to {
    left: 100%;
  }
}
`
