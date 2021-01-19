import React from 'react'
import styled from 'styled-components'

// A T O M S
import { Icon, IconName, IconSize } from '../../../atoms/Icon/Icon'
import { ComponentIcon, ComponentIconName } from '../../../introduction/ComponentOverview/ComponentIcon'

// I N T E R F A C E
export interface CardImageProps {
  className?: string
  componentIcon?: ComponentIconName
  icon?: IconName
  iconSize?: IconSize
  imageUrl?: string
  imageMargin?: boolean
  linkUrl?: string
  style?: React.CSSProperties
}

export const CardImage: React.FC<CardImageProps> = ({
  className = '',
  componentIcon,
  icon,
  iconSize,
  imageMargin = false,
  imageUrl,
  linkUrl,
  style
}) => {
  return (
    <StyledCardImage
      className={`card-image-wrapper ${className}`}
      style={style}
    >
      <a href={linkUrl} className="card-link-container">
        {
          imageUrl && !icon && !componentIcon && (
            <div
              className={`card-image ${imageMargin && 'card-image--margin'}`}
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          )
        }
        {
          icon && !imageUrl && !componentIcon && (
            <div className='card-icon'>
              <Icon icon={icon} size={iconSize} />
            </div>
          )
        }
        {
          componentIcon && !imageUrl && !icon && (
            <div className='card-icon'>
              <ComponentIcon icon={icon} />
            </div>
          )
        }
      </a>
    </StyledCardImage>
  )
}

const StyledCardImage = styled.div`
  .card-image {
    border-radius: var(--radius) var(--radius) 0 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    &--margin {
      margin: var(--space-md) var(--space-md) 0 var(--space-md);
      border-radius: var(--radius);
    }
  }

  .card-icon,
  .card-image {
    width: 100%;
  }

  .card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--space-md);
    color: var(--color-light);
  }

  .card-link-container {
    display: flex;
    min-height: 11.25rem;
  }
`
