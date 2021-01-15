import React from 'react'
import styled from 'styled-components'

// H E L P E R S
import { CardBody, CardBodyProps } from './helpers/CardBody'
import { CardFooter, CardFooterProps } from './helpers/CardFooter'
import { CardImage, CardImageProps } from './helpers/CardImage'
import { CardTitle, CardTitleProps } from './helpers/CardTitle'
import { IconName, IconSize } from '../../atoms/Icon/Icon'

// I N T E R F A C E
type Card = React.FC<CardProps>
  & { Body: React.FC<CardBodyProps> }
  & { Footer: React.FC<CardFooterProps> }
  & { Image: React.FC<CardImageProps> }
  & { Title: React.FC<CardTitleProps> }

export interface CardProps {
  className?: string
  description?: string
  icon?: IconName
  iconSize?: IconSize
  imageUrl?: string
  imageMargin?: boolean
  linkUrl?: string
  style?: React.CSSProperties
  title?: string
}

export const Card: Card = ({
  children,
  className = '',
  description,
  icon,
  iconSize,
  imageUrl,
  imageMargin = false,
  linkUrl,
  style,
  title
}) => {
  const imageOutput = (
    <CardImage
      icon={icon}
      iconSize={iconSize}
      imageMargin={imageMargin}
      imageUrl={imageUrl}
      linkUrl={linkUrl}
    />
  )
  const titleOutput = <CardTitle><h5>{title && title}</h5></CardTitle>
  const bodyOutput = <CardBody>{description && description}</CardBody>

  return (
    <StyledCard
      className={`card ${className}`}
      linkUrl={linkUrl}
      imageUrl={imageUrl}
      style={style}
    >
      {(imageUrl || icon) && imageOutput}
      {title && titleOutput}
      {description && bodyOutput}
      {children}
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
