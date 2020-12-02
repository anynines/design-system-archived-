import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import 'jest-styled-components'

import { ToggleMode } from './ToggleMode'

describe('<ToggleMode />', () => {
  let component
  const setModeSpy = jest.fn()
  beforeEach(() => {
    component = render(<ToggleMode setMode={setModeSpy} />)
  })

  describe('snapshot', () => {
    it('should match default snapshot', () => {
      const { asFragment } = component
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it('should match non default snapshot', () => {
    const { asFragment } = render(<ToggleMode mode='light' size='sm' setMode={setModeSpy} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should setMode on click', () => {
    const { container } = component
    fireEvent.click(container.querySelector('.toggle-mode'))

    expect(setModeSpy).toHaveBeenCalled()
  })
})
