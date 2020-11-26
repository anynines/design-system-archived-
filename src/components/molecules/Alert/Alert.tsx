import React from 'react'
import styled from 'styled-components'

import { Icon } from '../../atoms/Icon/Icon'

export type AlertType = 'success' | 'notice' | 'error' | 'warning'

export interface AlertProps {
  className?: string
  description: string
  onClose: () => void
  title: string
  type: AlertType
  style?: React.CSSProperties
}

interface AlertStyledProps {
  type: AlertType
}

export const Alert: React.FC<AlertProps> = ({
  type = 'success',
  className = 'AlertWrapper',
  title,
  description,
  onClose,
  style
}) => {
  if (!title || !description) return null
  return (
    <AlertWrapper
      className={`${className} ${type}`}
      style={style}
    >
      <div className='alert-icon'>
        <Icon icon='info' />
      </div>
      <div className='alert-info'>
        <h4>{title}</h4>
        <p>{description}</p>
        <button onClick={onClose} type='button' className='alert-button'>
          <Icon icon='close' />
        </button>
      </div>
    </AlertWrapper>
  )
}

const AlertWrapper = styled.div<AlertStyledProps>`
  --width: 22rem;

  display: flex;
  flex-direction: row;
  z-index: var(--z-index);
  width: var(--width);
  min-height: 4.5rem;
  font-size: var(--text-lg);
  border-radius: var(--radius);
  box-shadow: 0 0 .5em rgba(0,0,0,0.15);

  &.notice {
    background-color: var(--color-notice);

    .alert-icon {
      background-color: var(--color-notice-dark);
    }
  }

  &.success {
    background-color: var(--color-success);

    .alert-icon {
      background-color: var(--color-success-dark);
    }
  }

  &.warning {
    background-color: var(--color-warning);

    .alert-icon {
      background-color: var(--color-warning-dark);
    }
  }

  &.error {
    background-color: var(--color-error);

    .alert-icon {
      background-color: var(--color-error-dark);
    }
  }

  .alert-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-color);
    padding: var(--space-md);
    color: var(--color-white-fix);
    border-bottom-left-radius: .5em;
    border-top-left-radius: .5em;
    flex: 1;
    max-width: 4.5rem;

    svg {
      width: 1.5em;
      height: 1.5em;
    }
  }

  .alert-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    background-color: var(--bg-color);
    padding: var(--space-md) var(--space-lg);
    border-bottom-right-radius: .5em;
    border-top-right-radius: .5em;
    flex: 3;

    h4,
    p {
      color: var(--color-white-fix);
    }

    h4 {
      margin: var(--space-xs) 0 0;
    }

    P {
      margin: var(--space-md) 0 var(--space-sm);
      line-height: 1.2;
    }
  }

  .alert-button{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: var(--space-sm);
    right: var(--space-sm);
    border: 0;
    background-color: transparent;
    cursor: pointer;
    min-width: 2em;
    min-height: 2em;
    color: var(--color-white-fix);
    outline: none;

    svg {
      width: 1em;
      height: 1em;
    }
  }
`
