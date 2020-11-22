import React from 'react'
import { action } from '@storybook/addon-actions'

import { Button } from '../../../atoms/Button/Button';
import { Modal, ModalProps } from '../Modal'

export default {
  title: '🌱 Molecules/Modal',
  component: Modal,
  argTypes: {
    show: {
      control: { type: 'boolean' }
    },
    onHide: {
      control: { type: 'disabled' }
    },
  }
}

export const Basic = (args: ModalProps) => (
  <>
    <Modal.Body>To Show The Modal set the show property to true</Modal.Body>
    <Modal {...args} onHide={action('hide')}>
      <Modal.Header>
        Modal
      </Modal.Header>
      <Modal.Body>
        <p>This is the Body of the Modal Component.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={action('hide')}>
          Cancel
        </Button>
        <Button type='primary' onClick={action('button-clicked')}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  </>
)
