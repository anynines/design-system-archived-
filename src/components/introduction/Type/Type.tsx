import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface ColorProps {
  color?: string
  colorLabel?: string
  textColor?: string
}

// C O M P O N E N T
export const Color: React.FC<ColorProps> = ({
  color = 'var(--color-black)',
  colorLabel = 'Some black',
  textColor = 'var(--color-white)'
}) => {
  return (
    <StyledColor style={{
      backgroundColor: color,
      color: textColor
    }}
    >
      <span>{colorLabel}</span>
    </StyledColor>
  )
}

const StyledColor = styled.div`
  height: 100px;
  width: 100px;
  background-color: var(--primary);
  border-radius: var(--radius);
  border: var(--border);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  border-radius: 0;
  
  span {
    font-size: 12px;
    transition: var(--transition);
  }

  &:first-child {
    border-radius: var(--radius) 0 0 var(--radius);
  }
  
  &:last-child {
    border-radius: 0 var(--radius) var(--radius) 0;
  }
`
