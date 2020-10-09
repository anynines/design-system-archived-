import React from 'react'
import styled from 'styled-components'

import { Icon } from '../../atoms/Icon/Icon'

export type AlertType = 'success' | 'error' | 'warning'

export interface AlertProps {
  title: string
  description: string
  onClose: () => void
  type: AlertType
  className?: string
}

interface AlertStyledProps {
  type: AlertType
}

export const Alert: React.FC<AlertProps> = ({
  type = 'success',
  className = 'AlertWrapper',
  title,
  description,
  onClose
}) => {
  if (!title || !description) return null
  return (
    <AlertWrapper type={type} className={className}>
      <div className='alert-icon'>
        <Icon icon='info' />
      </div>
      <div className='alert-info'>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onClose} type='button' className='alert-button'>
          <Icon icon='close' />
        </button>
      </div>
    </AlertWrapper>
  )
}

const AlertWrapper = styled.div<AlertStyledProps>`
  --position: 2rem;
  --width: 22rem;
  --z-index: 90;
  --bg-color: ${(props): string => { return props.theme.colors[props.type] }};

  display: flex;
  flex-direction: row;
  position: fixed;
  top: var(--position);
  right: var(--position);
  z-index: var(--z-index);
  width: var(--width);
  min-height: 4.5rem;
  font-size: var(--text-lg);
  border-radius: var(--radius);
  box-shadow: 0 0 .5em rgba(0,0,0,0.15);

  .alert-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-color);
    padding: var(--space-md);
    color: var(--color-white-fix);
    border-bottom-left-radius: .5em;
    border-top-left-radius: .5em;
    filter: brightness(90%);
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
    color: var(--color-white-fix);
    border-bottom-right-radius: .5em;
    border-top-right-radius: .5em;
    flex: 3;

    h3 {
      margin: var(--space-sm) 0 0;
      color: var(--color-white-fix);
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
