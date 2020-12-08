import React from 'react'
import styled from 'styled-components'

// C O M P O N E N T S
import { Icon } from '../../Icon/Icon'
import { TextInput, TextInputProps } from './TextInput'
import { ColorPicker } from '../../ColorPicker/ColorPicker'

// I N T E R F A C E S
export interface ColorInputProps extends Omit<TextInputProps, 'value' | 'pattern'> {
  color: string
  onColorChange?: (color: string) => void
  pattern?: RegExp
}

// C O M P O N E N T
export const ColorInput: React.FC<ColorInputProps> = (props) => {
  const {
    children,
    color,
    name,
    onColorChange,
    pattern = /^#(?:[0-9a-f]{3}){1,2}$/i
  } = props

  const [selectedColor, setSelectedColor] = React.useState(color)
  const [isColorPickerOpen, setIsColorPickerOpen] = React.useState(false)

  const renderColorPicker = (): JSX.Element => {
    if (isColorPickerOpen) {
      return (
        <StyledColorPicker
          color={selectedColor}
          onChangeComplete={(newColor): void => {
            setSelectedColor(newColor.hex.toUpperCase())
          }}
        />
      )
    }

    return <></>
  }

  const handleClickOutside = React.useCallback((event: MouseEvent): void => {
    // TextInput will have this id using the `name` props
    const elmt = document.querySelector(`#${name}Wrapper`)

    if (!elmt?.contains(event.target as Node)) {
      setIsColorPickerOpen(false)
    }
  }, [name])

  // 💩 Use of vanillaJs here and in handleClickOutside()
  // No other way for now to achieve the trick of closing
  // the color picker when you click outside of the entire
  // input (real input + prepend + color picker)
  React.useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)

    // Returned function will be called on component unmount
    return (): void => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  React.useEffect(() => {
    if (onColorChange !== undefined) {
      onColorChange(selectedColor)
    }
  }, [onColorChange, selectedColor])

  return (
    <TextInput
      {...props}
      errorMessage='Please provide a color following the HEX format'
      pattern={pattern}
      value={selectedColor}
      onChange={(newColor: string): void => { setSelectedColor(newColor) }}
      autoComplete='off'
    >
      <TextInput.Prepend
        onClick={(): void => { setIsColorPickerOpen(!isColorPickerOpen) }}
        clickable
      >
        <StyledIconPipette>
          <Icon icon='pipette' />
        </StyledIconPipette>
        <StyledColorVisual color={pattern.exec(selectedColor) ? selectedColor : color} />
      </TextInput.Prepend>
      {renderColorPicker()}
      {children}
    </TextInput>
  )
}

interface StyledColorVisualProps {
  color: string
}

// S T Y L E S
const StyledColorVisual = styled.div<StyledColorVisualProps>`
  --bg-color: ${(props): string => { return props.color }};
  
  background-color: var(--bg-color);
  width: 1em;
  height: 1em;
  border-radius: 4px;
`

const StyledIconPipette = styled.div`
  position: absolute;
  top: .375rem;
  left: 1.3125rem;
  width: .9375rem;
  height: .9375rem;
`

const StyledColorPicker = styled(ColorPicker)`
  border-radius: var(--radius);
  position: absolute;
  top: 100%;
  z-index: 2;

  input {
    background-color: none !important;
  }
`
