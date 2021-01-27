import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// A T O M S
import { ComponentIcon, ComponentIconName } from '../../../introduction/ComponentOverview/ComponentIcon'
import { Icon, IconName, IconSize } from '../../../atoms/Icon/Icon'

// T Y P E S
export type CardHeaderType = 'icon' | 'image' | 'component'

// I N T E R F A C E
export interface CardImageProps extends DefaultComponentProps {
  componentIcon?: ComponentIconName
  icon?: IconName
  iconSize?: IconSize
  imageUrl?: string
  imageMargin?: boolean
  linkUrl?: string
  type?: CardHeaderType
}

export const CardImage: React.FC<CardImageProps> = (props) => {
  const {
    className = '',
    componentIcon,
    icon,
    iconSize,
    imageMargin = false,
    imageUrl,
    linkUrl,
    style,
    type
  } = props

  const renderInput = (): JSX.Element => {
    switch (type) {
      case 'icon':
        return (
          <div className='card-icon'>
            <Icon icon={icon} size={iconSize} />
          </div>
        )
      case 'image':
        return (
          <div
            className={`card-image ${imageMargin && 'card-image--margin'}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        )
      case 'component':
        return (
          <div className='card-icon'>
            <ComponentIcon icon={componentIcon} />
          </div>
        )
      default:
        return (
          <></>
        )
    }
  }

  return (
    <StyledCardImage
      className={`card-image-wrapper ${className}`}
      style={style}
    >
      <a href={linkUrl} className='card-link-container'>
        {renderInput()}
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
