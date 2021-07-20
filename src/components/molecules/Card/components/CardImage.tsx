import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// A T O M S
import { ComponentIcon, ComponentIconName } from '../../../introduction/ComponentOverview/ComponentIcon'
import { Icon, IconName, IconSize } from '../../../atoms/Icon/Icon'
import { Button } from '../../../atoms/Button/Button'

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
  tag?: string
  contentTypeIconClassName?: string
  contentTypeIcon?: IconName
  tagClassName?: string
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
    type,
    tag,
    contentTypeIcon,
    contentTypeIconClassName,
    tagClassName
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
          >
            {contentTypeIcon && <div className={`content-type-icon ${contentTypeIconClassName}`}><Icon icon={contentTypeIcon} size='sm' /></div>}
            {tag && (
              <Button className={`tag-button ${tagClassName}`} size='xs'>
                {tag}
              </Button>
            )}
          </div>
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
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .content-type-icon {
      position: absolute;
      top: var(--space-sm);
      right: var(--space-sm);
      padding: var(--space-xs);
      border-radius: var(--radius);
      color: var(--color-white-90)
    }

    .tag-button {
      position: absolute;
      bottom: var(--space-lg);
      left: var(--space-lg);
    }
    
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
