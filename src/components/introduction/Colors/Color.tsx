import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface ColorProps {
  color: string
}

// C O M P O N E N T
export const Color: React.FC<ColorProps> = ({
  color = '#000000'
}) => {
  return (
    <StyledColor style={{ backgroundColor: color }}>
      Lorem ipsum
    </StyledColor>
  )
}

const StyledColor = styled.div`
  height: 100px;
  width: 100px;
  background-color: var(--primary);
  border-radius: var(--radius);
  border: var(--border);
`
