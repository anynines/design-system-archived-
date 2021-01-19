import React from 'react'
import styled from 'styled-components'

// C O M P O N E N T  O V E R V I E W
import AvatarIcon from './assets/avatarIcon'
import ButtonIcon from './assets/buttonIcon'
import ButtonGroupPickerIcon from './assets/buttonGroupPickerIcon'
import CaretLinkIcon from './assets/caretLinkIcon'
import CheckboxIcon from './assets/checkboxIcon'
import CodeIcon from './assets/codeIcon'
import ColorPickerIcon from './assets/colorPickerIcon'
import InputIcon from './assets/inputIcon'
import LabelIcon from './assets/labelIcon'
import SelectIcon from './assets/selectIcon'
import SpinnerIcon from './assets/spinnerIcon'
import SwitchIcon from './assets/switchIcon'
import ToggleModeIcon from './assets/toggleModeIcon'

// I N T E R F A C E S
export interface ComponentIconProps {
  className?: string
  icon?: ComponentIconName
  size?: ComponentIconSize
  style?: React.CSSProperties
}

// T Y P E S
export type ComponentIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ComponentIconName = 'avatarComponent'
  | 'buttonComponent'
  | 'buttonGroupPickerComponent'
  | 'caretLinkComponent'
  | 'checkboxComponent'
  | 'codeComponent'
  | 'colorPickerComponent'
  | 'inputComponent'
  | 'labelComponent'
  | 'selectComponent'
  | 'spinnerComponent'
  | 'switchComponent'
  | 'toggleModeComponent'

const ICONS: { [key in ComponentIconName]: JSX.Element } = {
  avatarComponent: <AvatarIcon />,
  buttonComponent: <ButtonIcon />,
  buttonGroupPickerComponent: <ButtonGroupPickerIcon />,
  caretLinkComponent: <CaretLinkIcon />,
  checkboxComponent: <CheckboxIcon />,
  codeComponent: <CodeIcon />,
  colorPickerComponent: <ColorPickerIcon />,
  inputComponent: <InputIcon />,
  labelComponent: <LabelIcon />,
  selectComponent: <SelectIcon />,
  spinnerComponent: <SpinnerIcon />,
  switchComponent: <SwitchIcon />,
  toggleModeComponent: <ToggleModeIcon />
}

// C O M P O N E N T
export const ComponentIcon: React.FC<ComponentIconProps> = ({
  className,
  icon = '',
  size = 'xl',
  style
}) => {
  return (
    <StyledComponentIcon className={`icon ${className} ${size}`} style={style}>
      {ICONS[icon]}
    </StyledComponentIcon>
  )
}

// S T Y L E S
const StyledComponentIcon = styled.i`
  --icon-size: 1rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: var(--icon-size);
  height: var(--icon-size);
  
  svg {
    width: 100%;
    height: 100%;
    max-width: var(--icon-size);
    max-height: var(--icon-size);
  }

  &.xs {
    width: calc(var(--icon-size) * .8);
    height: calc(var(--icon-size) * .8);

    svg {
      max-width: calc(var(--icon-size) * .8);
      max-height: calc(var(--icon-size) * .8);
    }
  }

  &.md {
    width: calc(var(--icon-size) * 2);
    height: calc(var(--icon-size) * 2);

    svg {
      max-width: calc(var(--icon-size) * 2);
      max-height: calc(var(--icon-size) * 2);
    }
  }

  &.lg {
    width: calc(var(--icon-size) * 4);
    height: calc(var(--icon-size) * 4);

    svg {
      max-width: calc(var(--icon-size) * 4);
      max-height: calc(var(--icon-size) * 4);
    }
  }

  &.xl {
    width: calc(var(--icon-size) * 8);
    height: calc(var(--icon-size) * 8);

    svg {
      max-width: calc(var(--icon-size) * 8);
      max-height: calc(var(--icon-size) * 8);
    }
  }
`
