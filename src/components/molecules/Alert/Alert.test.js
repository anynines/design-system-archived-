import React from 'react'
import { fireEvent } from '@testing-library/react'
import 'jest-styled-components'

import { Alert } from './Alert'
import { renderWithProviders } from '../../../context/__mocks__/mockContext'

describe('Alert component', () => {
  let component
  let props
  let mockFunction
  let title
  let description
  let type

  beforeEach(() => {
    mockFunction = jest.fn()
    title = 'Test Title'
    description = 'Test Description'
    type = 'success'
    props = {
      title,
      description,
      type,
      onClose: mockFunction
    }

    component = renderWithProviders(<Alert {...props} />)
  })

  describe('snapshot', () => {
    it('should match snapshot', () => {
      const { asFragment } = component
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('rendering', () => {
    it('should not render for invalid props', () => {
      props = {
        ...props,
        ...{
          title: '',
          description: ''
        }
      }
      component = renderWithProviders(<Alert {...props} />)
      const { container } = component
      expect(container.firstChild).toBeNull()
    })
  })

  describe('event', () => {
    it('should invoke event when close icon is clicked', () => {
      const { container } = component
      const elem = container.querySelector('.alert-button')
      fireEvent.click(elem)
      expect(mockFunction).toHaveBeenCalled()
    })
  })

  describe('texts', () => {
    let container

    beforeEach(() => {
      container = component.container
    })

    it('should print correct description', () => {
      const h3 = container.querySelector('h3')
      expect(h3.textContent).toBe(title)
    })

    it('should print correct title', () => {
      const para = container.querySelector('p')
      expect(para.textContent).toBe(description)
    })
  })
})
