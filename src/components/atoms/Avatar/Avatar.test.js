import React from 'react'
import 'jest-styled-components'

import { Avatar, getInitials } from './Avatar'
import { renderWithProviders } from '../../../context/__mocks__/mockContext'

describe('Avatar component', () => {
  let size; let rounded; let sampleAvatarUrl; let sampleUserName; let level; let
    component

  beforeEach(() => {
    size = 'md'
    rounded = true
    sampleUserName = 'Test User with some Subnames'
    sampleAvatarUrl = 'https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    level = 46
  })

  describe('snapshots', () => {
    it('should match snapshot with image', () => {
      component = renderWithProviders(<Avatar size={size} avatar={sampleAvatarUrl} level={level} rounded={rounded} />)
      const { asFragment } = component
      expect(asFragment()).toMatchSnapshot()
    })

    it('should match snapshot with username', () => {
      component = renderWithProviders(<Avatar size={size} userName={sampleUserName} level={level} rounded={rounded} />)
      const { asFragment } = component
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('helpers', () => {
    it('should generate correct initials', () => {
      const expectedVal = 'TS'
      const receivedVal = getInitials(sampleUserName)

      expect(receivedVal).toBe(expectedVal)
    })
  })

  describe('texts', () => {
    it('should print correct label', () => {
      component = renderWithProviders(<Avatar size={size} avatar={sampleAvatarUrl} level={level} />)
      const { container } = component
      const lvl = container.querySelector('.level')
      expect(Number(lvl.textContent)).toBe(level)
    })

    it('should print correct initial', () => {
      component = renderWithProviders(<Avatar size={size} userName={sampleUserName} level={level} rounded={rounded} />)
      const { getByTestId } = component
      const init = getByTestId('initials')
      expect(init.textContent).toBe('TS')
    })
  })
})
