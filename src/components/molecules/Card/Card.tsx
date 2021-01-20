import React from 'react'
import styled from 'styled-components'

// H E L P E R S
import { CardBody, CardBodyProps } from './components/CardBody'
import { CardFooter, CardFooterProps } from './components/CardFooter'
import { CardImage, CardImageProps } from './components/CardImage'
import { CardTitle, CardTitleProps } from './components/CardTitle'

// I N T E R F A C E S
type Card = React.FC<CardProps>
  & { Body: React.FC<CardBodyProps> }
  & { Footer: React.FC<CardFooterProps> }
  & { Image: React.FC<CardImageProps> }
  & { Title: React.FC<CardTitleProps> }

export interface CardProps {
  className?: string
  description?: string
  style?: React.CSSProperties
  title?: string
}

export const Card: Card = ({
  children,
  className = '',
  description,
  style,
  title
}) => {
  const titleOutput = <CardTitle><h5>{title && title}</h5></CardTitle>
  const bodyOutput = <CardBody>{description && description}</CardBody>

  return (
    <StyledCard
      className={`card ${className}`}
      style={style}
    >
      {children}
      {title && titleOutput}
      {description && bodyOutput}
    </StyledCard>
  )
}

const StyledCard = styled.div`
  border-radius: var(--radius);
  background-color: var(--color-dark);
  min-width: 12.5rem;
`

Card.Body = CardBody
Card.Footer = CardFooter
Card.Image = CardImage
Card.Title = CardTitle
