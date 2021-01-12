import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E S
export interface AnimationProps {
  className?: string
  style?: React.CSSProperties
  type: AnimationName
}

// T Y P E S
export type AnimationName =
  'bounce'
  | 'bounceIn'
  | 'bounceInDown'
  | 'bounceInLeft'
  | 'bounceInRight'
  | 'bounceInUp'
  | 'fadeIn'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'fadeInUp'
  | 'rotateIn'
  | 'rotateInDownLeft'
  | 'rotateInDownRight'
  | 'rotateInUpLeft'
  | 'rotateInUpRight'
  | 'zoomIn'
  | 'zoomInDown'
  | 'zoomInLeft'
  | 'zoomInRight'
  | 'zoomInUp'

// C O M P O N E N T
export const Animation: React.FC<AnimationProps> = ({
  children,
  className = '',
  style,
  type
}) => {
  const [active, setActive] = React.useState(false)

  const toggleAnimation = (): void => {
    setActive(!active)
  }

  return (
    <StyledAnimation
      className={`animation animate__animated ${active ? `animate__${type}` : ''} ${className}`}
      style={style}
      onClick={() => toggleAnimation()}
    >
      {children}
    </StyledAnimation>
  )
}

// S T Y L E S
const StyledAnimation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 .5rem;
  width: 6.875rem;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`
