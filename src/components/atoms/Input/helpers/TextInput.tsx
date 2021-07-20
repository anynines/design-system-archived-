import React from 'react'
import styled from 'styled-components'
import { OnSubmit, FieldError, NestDataObject, ValidationOptions } from 'react-hook-form'

import { DefaultComponentProps } from '@types'

// C O M P O N E N T S
import { Icon, IconName } from '../../Icon/Icon'
import { InputLabel, InputLabelProps } from './InputLabel'
import { InputIcon, InputIconProps } from './InputIcon'
import { InputType, InputIconColor } from '../Input'

// I N T E R F A C E S
export interface TextInputProps extends DefaultComponentProps {
  autoComplete?: 'on' | 'off'
  autoFocus?: boolean
  color?: string
  disabled?: boolean
  errorMessage?: string
  errors?: NestDataObject<Record<string, string>, FieldError>
  getValues?: any // eslint-disable-line
  handleSubmit?: (callback: OnSubmit<any>) => (e?: React.BaseSyntheticEvent) => Promise<void> // eslint-disable-line
  icon?: IconName
  label: string
  name: string
  onChange?: (newValue: string) => void
  onFocusChange?: (isFocus: boolean) => void
  pattern?: RegExp
  register?: (validationRules: ValidationOptions) => void
  setValue?: any // eslint-disable-line
  type?: InputType
  value?: string
  watch?: any //eslint-disable-line
  iconColor?: InputIconColor
}
type TextInput = React.FC<TextInputProps>
  & { Prepend: React.FC<InputIconProps> }
  & { Label: React.FC<InputLabelProps> }

// C O M P O N E N T
export const TextInput: TextInput = ({
  autoComplete = 'on',
  autoFocus = false,
  children,
  className,
  disabled = false,
  errorMessage,
  errors = {},
  icon,
  label,
  name,
  onChange,
  onFocusChange,
  pattern = /.*/,
  register,
  setValue,
  style,
  type,
  value = '',
  watch,
  iconColor = 'light'
}) => {
  const [isFocus, setIsFocus] = React.useState(autoFocus)
  const [passwordShown, setPasswordShown] = React.useState(false)
  const [localValue, setLocalValue] = React.useState<string>(value || '')

  const getValueFromHookForm = (): string => {
    if (register) return watch(name) || ''
    return ''
  }

  const formValue = getValueFromHookForm()

  const togglePasswordVisiblity = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault()
    setPasswordShown(!passwordShown)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value

    if (!register) setLocalValue(newValue)
    if (onChange !== undefined) onChange(newValue)
  }

  const renderIconAsPrepend = (): JSX.Element => {
    if (icon !== undefined) {
      return (
        <InputIcon>
          <Icon icon={icon} />
        </InputIcon>
      )
    }

    return <></>
  }

  const isValueEmpty = (): boolean => {
    if (!register && localValue && localValue.length > 0) return false
    if (register && formValue && formValue.length > 0) return false
    return true
  }

  React.useEffect(() => {
    if (onFocusChange !== undefined) {
      onFocusChange(isFocus)
    }
  }, [isFocus, onFocusChange])

  React.useEffect(() => {
    if (register) setValue(name, value)
    else setLocalValue(value)
  }, [register, setValue, name, value])

  // eslint-disable-next-line consistent-return
  React.useEffect((): (() => void) | void => {
    const button = document.querySelector('.show-password')
    const input: HTMLInputElement = document.getElementById(name) as HTMLInputElement

    if (button) {
      const focusInput = (): void => {
        if (input) input.focus()
      }
      button.addEventListener('click', focusInput)
      return (): void => {
        button.removeEventListener('click', focusInput)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderErrorMessage = (): JSX.Element | null => {
    if (errors[name] !== undefined) {
      return (
        <span className='error'>
          {errorMessage || `Please provide a valid ${label.toLowerCase()}`}
        </span>
      )
    }

    return null
  }

  return (
    <StyledInput
      className={`text-input ${isFocus ? 'focus' : ''} ${isValueEmpty() ? 'empty' : ''} ${errors && errors[name] !== undefined ? 'error' : ''}`}
      withPrepend={(children !== undefined && children !== null) || icon !== undefined}
      style={style}
      id={`${name}Wrapper`}
      autoFocus={isFocus}
    >
      {renderIconAsPrepend()}
      {children}
      <StyledInputField>
        {/* There is a type incoherence between 'register()' and 'ref' attribute */}
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <input
          autoFocus={isFocus}
          autoComplete={autoComplete}
          disabled={disabled}
          name={name}
          type={type === 'password' ? passwordShown ? 'text' : 'password' : type}
          id={name}
          ref={register ? register({ required: true, pattern }) as unknown as undefined : undefined}
          onFocus={(): void => { setIsFocus(true) }}
          onBlur={(): void => { setIsFocus(false) }}
          className={`input--${type} ${className}`}
          {...!register ? { onChange: handleChange, value: localValue } : {}}
        />
        {name === 'password' && (
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
              togglePasswordVisiblity(e)
            }}
            className={`show-password ${passwordShown && 'active'} ${iconColor}`}
            type='button'
          >
            <Icon icon='eye' />
          </button>
        )}
      </StyledInputField>
      {renderErrorMessage()}
    </StyledInput>
  )
}

interface StyledInputProps {
  withPrepend: boolean
  autoFocus: boolean
}

const StyledInputField = styled.div`
  position: relative;
  width: 100%;
`

// S T Y L E S
const StyledInput = styled.div<StyledInputProps>`
  --border-radius: ${(props): string => { return (props.withPrepend ? '0 var(--radius) var(--radius) 0' : 'var(--radius)') }};

  display: flex;
  position: relative;
  margin-bottom: var(--space-xxl);
  border: var(--border);
  background-color: var(--element-bg-color);
  width: 100%;
  min-width: 240px;
  font-size: 1em;
  border-radius: var(--radius);
  transition: all 200ms ease-in-out;
  outline: none;

  .input-label {
    position: absolute;
    top: .3rem;
    left: 0.8rem;
    z-index: 1;
    opacity: 0.5;
    color: var(--text-color);
    font-size: var(--text-xxs);
    font-weight: var(--font-weight-bd);
    transform: scale(1);
    transform-origin: left;
    transition: all 200ms ease-in-out;
  }

  input {
    position: relative;
    border: none;
    background: transparent;
    padding: var(--space-fixed-md) var(--space-fixed-md) 0 var(--space-fixed-md);
    width: 100%;
    height: 2.75rem;
    border-radius: var(--border-radius);
    color: var(--text-color);
    outline: none;
    transition: top 200ms ease-in-out;

    &:disabled {
      cursor: not-allowed;
    }
  }

  .error {
    position: absolute;
    right: 0;
    bottom: -1.5rem;
    padding: 0.125rem 0.25rem;
    text-align: right;
    color: var(--color-error);
    font-size: var(--text-xs);
  }

  &.empty {
    label {
      transform: scale(1.2);
      top: 1rem;
      left: 1rem;
    }
  }

  .show-password {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    border: none;
    background: transparent;
    cursor: pointer;
    width: 2.75rem;
    height: 2.75rem;
    outline: none;

    &:before {
      position: absolute;
      background-color: var(--color-white-50);
      width: 2px;
      height: 18px;
      content: '';
      border-radius: calc(var(--radius) / 2);
      transform: rotate(45deg);
      transition: var(--transition);
    }

    svg {
      color: var(--color-white-50);
      transition: var(--transition);
    }

    &:hover {
      svg {
        color: var(--color-white);
      }
      &:before {
        background-color: var(--color-white);
      }
    }

    &.dark {
      svg {
        color: var(--color-black-50);
      }
      &:before {
        background-color: var(--color-black-50);
      }
    }

    &.dark:hover {
      svg {
        color: var(--color-black);
      }
      &:before {
        background-color: var(--color-black);
      }
    }

    &.active {
      &:before {
        background-color: transparent;
      }
    }
    &.dark.active {
      &:before {
        background-color: inherit;
      }
    }
  }

  &:hover,
  &.focus,
  &:focus-within {
    .input-icon {
      background-color: var(--color-primary);
      color: var(--color-white-fix);
    }
  }

  &:focus-within {
    border-color: var(--color-primary);

    label {
      transform: scale(1);
      top: .3rem;
      left: 0.8rem;
    }
  }
`

TextInput.Prepend = InputIcon
TextInput.Label = InputLabel
