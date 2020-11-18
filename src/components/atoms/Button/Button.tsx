import React from 'react'
import styled, { ThemeContext } from 'styled-components'

// I N T E R F A C E
export interface ButtonProps {
  style?: React.CSSProperties
  className?: string
  type?: ButtonType
  size?: ButtonSize
  width?: ButtonWidth
  onClick?: () => void
}

// T Y P E S
// @Note They will only be extracted in the props table if the param is optional...
export type ButtonType = 'primary' | 'dark' | 'darker' | 'default' | 'submit'
export type ButtonSize = 'sm' | 'default'
export type ButtonWidth = 'block' | 'inline'

// C O M P O N E N T
export const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'default',
  width = 'inline',
  className,
  onClick,
  children,
  style
}) => {
  const { colors } = React.useContext(ThemeContext)

  let btnColor
  let btnBgColor
  switch (type) {
    case 'primary':
      btnColor = colors.whiteFix
      btnBgColor = colors.primary
      break

    case 'submit':
      btnColor = colors.whiteFix
      btnBgColor = colors.primary
      break

    case 'dark':
      btnColor = colors.white
      btnBgColor = colors.dark
      break

    case 'darker':
      btnColor = colors.white
      btnBgColor = colors.darker
      break

    case 'default':
      btnColor = colors.white
      btnBgColor = colors.dark
      break

    default:
      btnColor = colors.dark
      btnBgColor = colors.white
      break
  }

  return (
    <StyledButton
      style={style}
      className={`btn ${className}`}
      type={type === 'submit' ? 'submit' : 'button'}
      size={size}
      width={width}
      btnColor={btnColor}
      btnBgColor={btnBgColor}
      onClick={(): void => { return (onClick && onClick()) }}
    >
      {children}
    </StyledButton>
  )
}

// I N T E R F A C E
interface StyledButtonProps {
  btnColor: string
  btnBgColor: string
  size: string
  width: string
}

// S T Y L E S
const StyledButton = styled.button<StyledButtonProps>`
  --btn-width: ${(props): string => { return props.width === 'inline' ? 'auto' : '100%' }};
  --btn-color: ${(props): string => { return props.btnColor }};
  --btn-bg-color: ${(props): string => { return props.btnBgColor }};
  --btn-font-size: ${(props): string => { return props.size === 'sm' ? 'var(--text-md)' : 'var(--text-lg)' }};

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: var(--btn-bg-color);
  cursor: pointer;
  padding: var(--space-lg) var(--space-lgr);
  width: var(--btn-width);
  color: var(--btn-color);
  font-family: var(--font-family);
  font-size: var(--btn-font-size);
  border-radius: var(--radius);
  outline: none;
  transition: var(--transition);
  color: var(--btn-color);
  font-weight: var(--font-weight-bd);

  &:hover {
    background-color: var(--color-primary-lightened);
    color: var(--color-white-fix);
  }
`
StyledButton.displayName = 'StyledButton'
