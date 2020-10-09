import React from 'react'
import styled, { ThemeContext } from 'styled-components'

// I N T E R F A C E
export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  className?: string
  onClick?: () => void
}

// T Y P E S
// @Note They will only be extracted in the props table if the param is optional...
export type ButtonType = 'primary' | 'dark' | 'darker' | 'default' | 'submit'
export type ButtonSize = 'sm' | 'default'

// C O M P O N E N T
export const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'default',
  className = '',
  onClick,
  children
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
      className={`btn ${className}`}
      size={size}
      type={type === 'submit' ? 'submit' : 'button'}
      btnColor={btnColor}
      btnBgColor={btnBgColor}
      onClick={(): void => { return (onClick && onClick()) }}
    >
      <span>{children}</span>
    </StyledButton>
  )
}

// I N T E R F A C E
interface StyledButtonProps {
  btnColor: string
  btnBgColor: string
  size: string
}

// S T Y L E S
const StyledButton = styled.button<StyledButtonProps>`
  --btn-width: ${(props): string => { return props.size === 'sm' ? 'auto' : '100%' }};
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

  span {
    color: var(--btn-color);
    font-weight: var(--font-weight-bd);
  }
`
StyledButton.displayName = 'StyledButton'
