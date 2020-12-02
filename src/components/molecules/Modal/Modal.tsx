import React from 'react'
import styled from 'styled-components'

// L I B R A R Y
import { Icon } from '../../atoms/Icon/Icon'
import { Button } from '../../atoms/Button/Button'
import ReactDOM from 'react-dom'
import { ModalHeader, ModalHeaderProps } from '../../atoms/modal/ModalHeader/ModalHeader'
import { ModalBody, ModalBodyProps } from '../../atoms/modal/ModalBody/ModalBody'
import { ModalFooter, ModalFooterProps } from '../../atoms/modal/ModalFooter/ModalFooter'
import { onClickOutsideHook } from '../../../helpers/react'

// I N T E R F A C E S
type Modal = React.FC<ModalProps>
  & { Header: React.FC<ModalHeaderProps> }
  & { Body: React.FC<ModalBodyProps> }
  & { Footer: React.FC<ModalFooterProps> }

export interface ModalProps {
  className?: string
  confirmationText?: string
  description?: string
  onConfirm?: () => void
  onHide: () => void
  show: boolean
  style?: React.CSSProperties
  title?: string
}

// C O M P O N E N T
export const Modal: Modal = ({
  children,
  className,
  confirmationText = 'Confirm',
  description,
  onConfirm,
  onHide,
  show,
  style,
  title
}) => {
  const modalPopupRef = React.useRef<HTMLDivElement | null>(null)

  onClickOutsideHook(modalPopupRef, onHide)

  React.useEffect(() => {
    const stopPropagation = (e: MouseEvent): void => {
      e.stopPropagation()
    }

    const { current } = modalPopupRef

    if (current !== null) {
      current.addEventListener('mousedown', stopPropagation)
    }

    return (): void => {
      if (current !== null) {
        current.removeEventListener('mousedown', stopPropagation)
      }
    }
  }, [show])

  const titleOutput = <ModalHeader>{title && title}</ModalHeader>
  const descriptionOutput = <ModalBody>{description && description}</ModalBody>
  const confirmOutput = (
    <ModalFooter>
      <Button onClick={(): void => {
        if (onConfirm) {
          onConfirm()
        }
      }}
      >
        {confirmationText}
      </Button>
    </ModalFooter>
  )

  if (show) {
    return ReactDOM.createPortal(
      <StyledModal
        className={`modal-wrapper ${className}`}
        style={style}
      >
        <div className='modal-popup' ref={modalPopupRef}>
          <button
            type='button'
            onClick={(): void => {
              return onHide && onHide()
            }}
            className='close'
          >
            <Icon icon='close' />
          </button>
          {title && titleOutput}
          {description && descriptionOutput}
          {children}
          {onConfirm && <ModalFooter>{confirmOutput}</ModalFooter>}
        </div>
      </StyledModal>,
      document.querySelector('body') as Element
    )
  }

  return <></>
}

const StyledModal = styled.div`
  --overlay-bg-color: rgba(0,0,0,0.75);
  --modal-box-padding: 2.5em;
  --modal-box-min-width: 25rem;
  --modal-box-max-width: 90vw;
  --modal-box-max-width--md: 60vw;
  --modal-box-max-width--lg: 44rem;
  --modal-close-btn-size: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: var(--overlay-bg-color);
  backdrop-filter: blur(4px);
  width: 100%;
  height: 100%;

  .modal-popup {
    position: relative;
    background: var(--color-black);
    padding: var(--modal-box-padding);
    max-width: var(--modal-box-max-width);
    text-align: center;
    border-radius: var(--radius);
    
    @media (min-width: 60em) {
      min-width: var(--modal-box-min-width);
      max-width: var(--modal-box-max-width--md);
    }
    
    @media (min-width: 85em) {
      max-width: var(--modal-box-max-width--lg);
    }

    .close {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      border: none;
      border-radius: 0 var(--radius) 0 var(--radius);
      transition: var(--transition);
      background: var(--color-dark);
      cursor: pointer;
      width: var(--modal-close-btn-size);
      height: var(--modal-close-btn-size);
      color: var(--color-white);

      &:hover {
        background-color: var(--color-dark-50);
      }
    }
  }

  .modal-header {
    h2 {
      margin: 0;
    }
  }

  .modal-body {
    font-weight: var(--font-weight-lt);
  }

  .modal-footer {
    flex-direction: column;
    margin-top: var(--space-xl);

    button {
      margin: var(--space-sm) 0;
    }

    @media (min-width: 40em) {
      flex-direction: row;

      button {
        margin: 0 var(--space-sm);
      }
    }
  }
`

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
