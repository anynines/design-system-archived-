import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface CardSkeletonProps {
  className?: string
  style?: React.CSSProperties
}

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
background-color: var(--text-color);
width: 100%;
height: 200px;
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
  height: 500px;
  color: transparent;
  content: 'lorem ipsum';
  transform: rotate(45deg);
  animation: shine 1.5s ease infinite;
}

@keyframes shine {
  to {
    left: 100%;
  }
}
`
