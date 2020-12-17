import React from 'react'
import styled from 'styled-components'

// T Y P E S

export interface BadgeProps {
  value: string | number
  className?: string
}

// C O M P O N E N T S

export const Badge: React.FC<BadgeProps> = (props) => {
  const { value, className = null } = props
  return (
    <StyledBadge className={className}>{value}</StyledBadge>
  )
}

const StyledBadge = styled.span`
  background-color: var(--color-notice);
  padding: var(--space-sm) var(--space-lg);
  color: var(--color-light);
  font-size: var(--text-md);
  font-weight: var(--font-weight-bd);
  border-radius: var(--radius);
`
