import React from 'react'
import { fireEvent } from '@testing-library/react'
import 'jest-styled-components'

import { Input } from './Input'
import { renderWithProviders } from '../../../context/__mocks__/mockContext'

describe('Input components', () => {
  let style
  let name
  let type
  let icon
  let label
  let autoComplete
  let autoFocus

  let component
  let props

  beforeEach(() => {
    style = { marginBottom: 0 }
    name = 'input'
    icon = 'shop'
    label = 'Label'
    autoComplete = 'off'
    autoFocus = true
  })

  describe('Text', () => {
    beforeEach(() => {
      type = 'text'
      props = {
        style, name, type, icon, label, autoComplete, autoFocus
      }
      component = renderWithProviders(<Input
        {...props}
      />)
    })

    it('should match snapshot', () => {
      const { asFragment } = component
      expect(asFragment()).toMatchSnapshot()
    })

    it('should print correct label', () => {
      const { container } = component
      const span = container.querySelector('.input-label')

      expect(span.textContent).toBe(label)
    })

    it('should allow letters to be inputted', () => {
      const { container } = component
      const elem = container.querySelector('#input')

      fireEvent.change(elem, { target: { value: 'abc23!@' } })
      expect(elem.value).toBe('abc23!@')
    })

    it('should allow letters to be deleted', () => {
      const { container } = component
      const elem = container.querySelector('#input')

      fireEvent.change(elem, { target: { value: 'abc23!@' } })
      fireEvent.change(elem, { target: { value: 'abc2' } })
      expect(elem.value).toBe('abc2')
    })
  })

  describe('Email', () => {
    beforeEach(() => {
      type = 'email'
      props = {
        style, name, type, icon, label, autoComplete, autoFocus
      }
      component = renderWithProviders(<Input
        {...props}
      />)
    })

    it('should match snapshot', () => {
      const { asFragment } = component
      expect(asFragment()).toMatchSnapshot()
    })

    it('should print correct label', () => {
      const { container } = component
      const span = container.querySelector('.input-label')

      expect(span.textContent).toBe(label)
    })

    it('should contain icon', () => {
      const { container } = component
      const elem = container.querySelector('.input-icon svg')
      expect(elem).toBeTruthy()
    })

    it('should allow letters to be inputted', () => {
      const { container } = component
      const elem = container.querySelector('#input')

      fireEvent.change(elem, { target: { value: 'id@mailservice.com' } })
      expect(elem.value).toBe('id@mailservice.com')
    })

    it('should allow letters to be deleted', () => {
      const { container } = component
      const elem = container.querySelector('#input')

      fireEvent.change(elem, { target: { value: 'id@mailservice.com' } })
      fireEvent.change(elem, { target: { value: 'id@mailser' } })
      expect(elem.value).toBe('id@mailser')
    })
  })

  describe('Number', () => {
    beforeEach(() => {
      type = 'number'
      props = {
        style, name, type, icon, label, autoComplete, autoFocus
      }
      component = renderWithProviders(<Input
        {...props}
      />)
    })

    it('should match snapshot', () => {
      const { asFragment } = component
      expect(asFragment()).toMatchSnapshot()
    })

    it('should print correct label', () => {
      const { container } = component
      const span = container.querySelector('.input-label')

      expect(span.textContent).toBe(label)
    })

    it('should contain icon', () => {
      const { container } = component
      const elem = container.querySelector('.input-icon svg')
      expect(elem).toBeTruthy()
    })

    it('should allow numbers to be inputted', () => {
      const { container } = component
      const elem = container.querySelector('#input')

      fireEvent.change(elem, { target: { value: '1234' } })
      expect(elem.value).toBe('1234')
    })

    it('should not allow letters or symbols to be inputted', () => {
      const { container } = component
      const elem = container.querySelector('#input')

      fireEvent.change(elem, { target: { value: 'abc!@.' } })
      expect(elem.value).toBe('')
    })

    it('should allow letters to be deleted', () => {
      const { container } = component
      const elem = container.querySelector('#input')

      fireEvent.change(elem, { target: { value: '1234' } })
      fireEvent.change(elem, { target: { value: '12' } })
      expect(elem.value).toBe('12')
    })
  })

  describe('Password', () => {
    beforeEach(() => {
      type = 'password'
      name = 'password'
      props = {
        style, name, type, icon, label, autoComplete, autoFocus
      }
      component = renderWithProviders(<Input
        {...props}
      />)
    })

    it('should match snapshot', () => {
      const { asFragment } = component
      expect(asFragment()).toMatchSnapshot()
    })

    it('should print correct label', () => {
      const { container } = component
      const span = container.querySelector('.input-label')

      expect(span.textContent).toBe(label)
    })

    it('should contain icon', () => {
      const { container } = component
      const elem = container.querySelector('.input-icon svg')
      expect(elem).toBeTruthy()
    })

    it('should allow any character to be inputted', () => {
      const { container } = component
      const elem = container.querySelector('#password')

      fireEvent.change(elem, { target: { value: 'abc123!@.' } })
      expect(elem.value).toBe('abc123!@.')
    })

    it('should allow letters to be deleted', () => {
      const { container } = component
      const elem = container.querySelector('#password')

      fireEvent.change(elem, { target: { value: 'abc123!@.' } })
      fireEvent.change(elem, { target: { value: 'abc1' } })
      expect(elem.value).toBe('abc1')
    })

    it('should toggle character visibility on icon click', () => {
      const { container } = component
      const elem = document.querySelector('#password')
      fireEvent.change(elem, { target: { value: 'abc123!@.' } })

      expect(elem.getAttribute('type')).toBe('password')

      let button = container.querySelector('button')
      fireEvent.click(button)

      expect(elem.getAttribute('type')).toBe('text')

      button = container.querySelector('button')
      fireEvent.click(button)

      expect(elem.getAttribute('type')).toBe('password')
    })
  })
})
