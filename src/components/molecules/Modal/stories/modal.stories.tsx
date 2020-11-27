import React from 'react'
import { action } from '@storybook/addon-actions'
import Wrapper from '../../../_helpers/Wrapper'
import { Button } from '../../../atoms/Button/Button';
import { Modal, ModalProps } from '../Modal'

export default {
  title: '🌱 Molecules/Modal',
  component: Modal,
  argTypes: {
    show: {
      control: { type: 'disabled' }
    },
    onHide: {
      control: { type: 'disabled' }
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'Modal'
    },
    description: {
      control: { type: 'text' },
      defaultValue: 'This is a simple modal.'
    },
    confirmationText: {
      control: { type: 'text' },
      defaultValue: 'Close Modal'
    }
  }
}

export const Basic = (args: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  return (
    <Wrapper>
      <Button onClick={(): void => { setIsModalOpen(true) }}>Open Modal</Button>
      <Modal
        {...args}
        show={isModalOpen}
        onConfirm={(): void => { setIsModalOpen(false) }}
        onHide={(): void => { setIsModalOpen(false) }}
      />
    </Wrapper>
  )
}

export const customModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  return (
    <Wrapper>
      <Button onClick={(): void => { setIsModalOpen(true) }}>Open Custom Modal</Button>
      <Modal
        show={isModalOpen}
        onHide={(): void => { setIsModalOpen(false) }}
      >
        <Modal.Header>
          Custom Modal
        </Modal.Header>
        <Modal.Body>
          <p>Your custom modal content.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(): void => { setIsModalOpen(false) }}>
            Cancel
          </Button>
          <Button type='primary' onClick={action('button-clicked')}>
            Custom Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  )
}

