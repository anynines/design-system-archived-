import React from 'react'
import styled from 'styled-components'
import { OnSubmit, FieldError, NestDataObject, ValidationOptions } from 'react-hook-form'

// C O M P O N E N T S
import { Icon, IconName } from '../../Icon/Icon'
import { InputLabel, InputLabelProps } from './InputLabel'
import { InputIcon, InputIconProps } from './InputIcon'
import { InputType } from '../Input'

// I N T E R F A C E S
export interface TextInputProps {
  autoComplete?: 'on' | 'off'
  autoFocus?: boolean
  color?: string
  className?: string
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
  style?: React.CSSProperties
  type?: InputType
  value?: string
  watch?: any //eslint-disable-line
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
  watch
}) => {
  const [isFocus, setIsFocus] = React.useState(autoFocus)
  const [passwordShown, setPasswordShown] = React.useState(false)
  const [localValue, setLocalValue] = React.useState<string>(value || '')

  const getValueFromHookForm = (): string => {
    if (register) return watch(name) || ''
    return ''
  }

  const formValue = getValueFromHookForm()

  const togglePasswordVisiblity = (): void => {
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
            onClick={(): void => { togglePasswordVisiblity() }}
            className={`show-password ${passwordShown && 'active'}`}
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
  margin-bottom: var(--space-xl);
  border: var(--border);
  background-color: var(--color-black);
  width: 100%;
  min-width: 240px;
  font-size: 1em;
  border-radius: var(--radius);
  transition: all 200ms ease-in-out;

  &.error {
    margin-bottom: var(--space-lgr);
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
    width: 44px;
    height: 44px;
    outline: none;

    &:before {
      position: absolute;
      background-color: var(--color-white-50);
      width: 2px;
      height: 18px;
      content: '';
      border-radius: 5px;
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

    &.active {
      &:before{
        background-color: transparent;
      }
    }
  }
  
  .input-label {
    position: absolute;
    top: .1875rem;
    left: 12px;
    z-index: 1;
    opacity: 0.5;
    color: var(--color-white);
    font-size: 10px;
    font-weight: 800;
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
    color: var(--color-white);
    outline: none;
    transition: top 200ms ease-in-out;
  }

  &.empty {
    label {
      transform: scale(1.2);
      top: 1rem;
      left: 16px;
    }
  }

  &:hover,
  &.focus {
    border: 1px solid var(--color-primary);

    .input-prepend {
      background-color: var(--color-primary);
    }

    label {
      transform: scale(1);
      top: .1875rem;
      left: 12px;
    }
  }
  
  .error {
    position: absolute;
    right: 0px;
    bottom: -22px;
    padding: 2px 4px;
    text-align: right;
    color: rgb(234,29,37);
    font-size: var(--text-md);
    border-radius: 3px;
  }
`

TextInput.Prepend = InputIcon
TextInput.Label = InputLabel
