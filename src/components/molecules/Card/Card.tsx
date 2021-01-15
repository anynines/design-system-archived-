import React from 'react'
import styled from 'styled-components'

// A T O M S
import { Icon, IconName, IconSize } from '../../atoms/Icon/Icon'

export interface CardProps {
  className?: string
  footer?: React.ReactNode
  icon?: IconName
  iconSize?: IconSize
  imageUrl?: string
  imageMargin?: boolean
  linkContainerMinHeight?: string
  linkUrl?: string
  style?: React.CSSProperties
  title?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  footer,
  icon,
  iconSize,
  imageUrl,
  imageMargin = false,
  linkContainerMinHeight = '11.25rem',
  linkUrl,
  style,
  title
}) => {
  return (
    <StyledCard
      className={`card ${className}`}
      linkContainerMinHeight={linkContainerMinHeight}
      linkUrl={linkUrl}
      imageUrl={imageUrl}
      footer={footer}
      style={style}
    >
      <a href={linkUrl}>
        {imageUrl && !icon
          && (
            <div
              className={`card-image ${imageMargin && 'card-image--margin'}`}
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          )}
        {icon && !imageUrl
          && (
            <div className='card-icon'>
              <Icon icon={icon} size={iconSize} />
            </div>
          )}
      </a>
      <div className='card-content'>
        {title && <h5 className='card-title'>{title}</h5>}
        {children}
      </div>
      {footer
        && (
          <div className='card-footer'>
            {footer}
          </div>
        )}
    </StyledCard>
  )
}

const StyledCard = styled.div`
  --link-container-min-height: ${(props): string => { return props.linkContainerMinHeight }};

  border-radius: var(--radius);
  background-color: var(--color-dark);
  min-width: 12.5rem;

  .card-image,
  .card-icon {
    min-height: var(--link-container-min-height);
  }

  .card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--space-md);
    color: var(--color-light);
  }

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

  .card-content {
    padding: var(--space-md);
    color: var(--color-light-50);
  }

  .card-title {
    max-width: 240px;
    color: var(--color-light);

    h5 {
      margin-top: 0;
    }
  }

  .card-footer {
    padding: 10px var(--space-md) var(--space-md);
  }
`
