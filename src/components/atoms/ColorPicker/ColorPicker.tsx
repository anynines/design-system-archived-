import React from 'react'
import styled from 'styled-components'
import { ChromePicker, ChromePickerProps } from 'react-color'


interface ColorPickerProps extends ChromePickerProps {
  style?: React.CSSProperties
}

// C O M P O N E N T
export const ColorPicker: React.FC<ColorPickerProps> = ({
  style,
  ...props
}) => {
  return (
    <StyledColorPicker style={style}>
      <ChromePicker {...props} disableAlpha />
      <div className='caret' />
    </StyledColorPicker>
  )
}

const StyledColorPicker = styled.div`
  position: absolute;
  top: 3.75rem;
  left: 0;

  .caret {
    position: absolute;
    top: -0.4375rem;
    left: .875rem;
    z-index: 11;
    background-color: var(--color-white-fix);
    width: .875rem;
    height: .875rem;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 4px 8px;
    transform: rotate(45deg);
  }
  .chrome-picker {
    z-index: 12;
    overflow: hidden !important;
    background-color: var(--color-dark) !important;
    border-radius: var(--radius) !important;

    input {
      background-color: var(--color-black) !important;
      padding-top: 0 !important;
      color: var(--color-white) !important;
      box-shadow: none !important;
    }
    
    svg {
      filter: invert(1) !important;
    }
  }
`
