import React from 'react'
import styled from 'styled-components'
import { OnSubmit, FieldError, NestDataObject, ValidationOptions } from 'react-hook-form'

// C O M P O N E N T S
import { Icon, IconName } from '../../../atoms/Icon/Icon'
import { InputLabel, InputLabelProps } from '../../../atoms/InputLabel/InputLabel'
import { TextInputPrepend, TextInputPrependProps } from '../../../atoms/prepend/TextInputPrepend/TextInputPrepend'

// I N T E R F A C E S
export interface TextInputProps {
  name: string
  register?: (validationRules: ValidationOptions) => void
  value?: string
  label: string
  pattern?: RegExp
  icon?: IconName
  color?: string
  errors?: NestDataObject<Record<string, string>, FieldError>
  errorMessage?: string
  onChange?: (newValue: string) => void
  onFocusChange?: (isFocus: boolean) => void
  autoComplete?: 'on' | 'off'
  autoFocus?: boolean
  className?: string
  /* TS definitions for 'getValue' and 'setValues' functions could not be resolved from 'react-hook-forms' */
  getValues?: any // eslint-disable-line
  setValue?: any // eslint-disable-line
  watch?: any //eslint-disable-line
  handleSubmit?: (callback: OnSubmit<any>) => (e?: React.BaseSyntheticEvent) => Promise<void> // eslint-disable-line
}
type TextInput = React.FC<TextInputProps>
  & { Prepend: React.FC<TextInputPrependProps> }
  & { Label: React.FC<InputLabelProps> }

// C O M P O N E N T
export const TextInput: TextInput = ({
  name,
  register,
  watch,
  value = '',
  label,
  errors = {},
  pattern = /.*/,
  icon,
  errorMessage,
  onChange,
  onFocusChange,
  autoComplete = 'on',
  autoFocus = false,
  children,
  className = 'StyledInput',
  setValue
}) => {
  const [isFocus, setIsFocus] = React.useState(autoFocus)
  const [localValue, setLocalValue] = React.useState<string>(value || '')

  const getValueFromHookForm = (): string => {
    if (register) return watch(name) || ''
    return ''
  }

  const formValue = getValueFromHookForm()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value

    if (!register) setLocalValue(newValue)
    if (onChange !== undefined) onChange(newValue)
  }

  const renderIconAsPrepend = (): JSX.Element => {
    if (icon !== undefined) {
      return (
        <TextInputPrepend>
          <Icon icon={icon} />
        </TextInputPrepend>
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
      className={`${isFocus ? 'focus' : ''} ${isValueEmpty() ? 'empty' : ''} ${errors && errors[name] !== undefined ? 'error' : ''}`}
      withPrepend={(children !== undefined && children !== null) || icon !== undefined}
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
          id={name}
          ref={register ? register({ required: true, pattern }) as unknown as undefined : undefined}
          onFocus={(): void => { setIsFocus(true) }}
          onBlur={(): void => { setIsFocus(false) }}
          className={className}
          {...!register ? { onChange: handleChange, value: localValue } : {}}
        />
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
  margin-bottom: var(--space-md);
  background-color: var(--color-dark-50);
  font-size: 1em;
  border-radius: var(--radius);

  &.error {
    margin-bottom: var(--space-lgr);
  }
  
  .input-label {
    left: 1em;
  }
  
  input {
    position: relative;
    border: 0;
    background: transparent;
    padding: var(--space-fixed-md) var(--space-fixed-md) 0 var(--space-fixed-md);
    width: 100%;
    height: 2.75rem;
    color: var(--color-white);
    outline: none;
    transition: var(--transition);
  }
  
  label {
    color: var(--color-white);
  }

  &.empty {
    label {
      top: .875rem;
    }
  }

  &:hover,
  &.focus {
    input {
      background-color: var(--color-dark);
      border-radius: var(--border-radius);
    }

    .input-prepend {
      background-color: var(--color-primary);
    }

    label {
      top: .1875rem;
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

TextInput.Prepend = TextInputPrepend
TextInput.Label = InputLabel
