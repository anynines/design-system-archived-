import React from 'react'
import styled from 'styled-components'

// C O M P O N E N T  O V E R V I E W
import AlertIcon from './assets/alertIcon'
import AvatarIcon from './assets/avatarIcon'
import ButtonIcon from './assets/buttonIcon'
import ButtonGroupPickerIcon from './assets/buttonGroupPickerIcon'
import CardIcon from './assets/cardIcon'
import CaretLinkIcon from './assets/caretLinkIcon'
import CheckboxIcon from './assets/checkboxIcon'
import CheckboxGroupIcon from './assets/checkboxGroupIcon'
import CodeIcon from './assets/codeIcon'
import ColorPickerIcon from './assets/colorPickerIcon'
import DatePickerIcon from './assets/datePickerIcon'
import InputIcon from './assets/inputIcon'
import LabelIcon from './assets/labelIcon'
import LogoIcon from './assets/logoIcon'
import ModalIcon from './assets/modalIcon'
import ModuleIcon from './assets/moduleIcon'
import MenuIcon from './assets/menuIcon'
import MenuItemIcon from './assets/menuItemIcon'
import NotificationIcon from './assets/notificationIcon'
import ProgressIndicatorIcon from './assets/progressIndicatorIcon'
import SelectIcon from './assets/selectIcon'
import SpecialCategoriesIcon from './assets/specialCategoriesIcon'
import SpinnerIcon from './assets/spinnerIcon'
import SwitchIcon from './assets/switchIcon'
import ToggleModeIcon from './assets/toggleModeIcon'
import TooltipIcon from './assets/tooltipIcon'
import UserInfoIcon from './assets/userInfoIcon'
import UserInfoDropdownIcon from './assets/userInfoDropdownIcon'

// I N T E R F A C E S
export interface ComponentIconProps {
  className?: string
  icon?: ComponentIconName
  style?: React.CSSProperties
}

// T Y P E S
export type ComponentIconName = 'avatarComponent'
  | 'alertComponent'
  | 'cardComponent'
  | 'buttonComponent'
  | 'buttonGroupPickerComponent'
  | 'caretLinkComponent'
  | 'checkboxComponent'
  | 'checkboxGroupComponent'
  | 'codeComponent'
  | 'colorPickerComponent'
  | 'datePickerComponent'
  | 'inputComponent'
  | 'labelComponent'
  | 'logoComponent'
  | 'modalComponent'
  | 'moduleComponent'
  | 'menuComponent'
  | 'menuItemComponent'
  | 'notificationComponent'
  | 'progressIndicatorComponent'
  | 'selectComponent'
  | 'specialCategoriesComponent'
  | 'spinnerComponent'
  | 'switchComponent'
  | 'toggleModeComponent'
  | 'tooltipComponent'
  | 'userInfoComponent'
  | 'userInfoDropdownComponent'

const ICONS: { [key in ComponentIconName]: JSX.Element } = {
  alertComponent: <AlertIcon />,
  avatarComponent: <AvatarIcon />,
  buttonComponent: <ButtonIcon />,
  buttonGroupPickerComponent: <ButtonGroupPickerIcon />,
  cardComponent: <CardIcon />,
  caretLinkComponent: <CaretLinkIcon />,
  checkboxComponent: <CheckboxIcon />,
  checkboxGroupComponent: <CheckboxGroupIcon />,
  codeComponent: <CodeIcon />,
  colorPickerComponent: <ColorPickerIcon />,
  datePickerComponent: <DatePickerIcon />,
  inputComponent: <InputIcon />,
  labelComponent: <LabelIcon />,
  logoComponent: <LogoIcon />,
  modalComponent: <ModalIcon />,
  moduleComponent: <ModuleIcon />,
  menuComponent: <MenuIcon />,
  menuItemComponent: <MenuItemIcon />,
  notificationComponent: <NotificationIcon />,
  progressIndicatorComponent: <ProgressIndicatorIcon />,
  selectComponent: <SelectIcon />,
  specialCategoriesComponent: <SpecialCategoriesIcon />,
  spinnerComponent: <SpinnerIcon />,
  switchComponent: <SwitchIcon />,
  toggleModeComponent: <ToggleModeIcon />,
  tooltipComponent: <TooltipIcon />,
  userInfoComponent: <UserInfoIcon />,
  userInfoDropdownComponent: <UserInfoDropdownIcon />
}

// C O M P O N E N T
export const ComponentIcon: React.FC<ComponentIconProps> = ({
  className,
  icon = '',
  style
}) => {
  return (
    <StyledComponentIcon className={`component-icon ${className}`} style={style}>
      {ICONS[icon]}
    </StyledComponentIcon>
  )
}

// S T Y L E S
const StyledComponentIcon = styled.i`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
  svg {
    width: 100%;
    height: 100%;
    max-width: 80%;
    max-height: 10rem;
  }
`
