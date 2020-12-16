import React from 'react'
import styled from 'styled-components'
import { FieldError, NestDataObject, ValidationOptions } from 'react-hook-form'

// I N T E R F A C E
export interface CheckboxProps {
  checked?: boolean
  className?: string
  label: string
  errors?: NestDataObject<Record<string, string>, FieldError>
  errorMessage?: string
  name: string
  onChange?: (value: boolean) => void
  register?: (validationRules: ValidationOptions) => void
  style?: React.CSSProperties
  setValue?: any
  required?: boolean
  watch?: any
}

// C O M P O N E N T
export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  className,
  label,
  name,
  onChange,
  errors = {},
  errorMessage,
  watch,
  setValue,
  register,
  required = false,
  style
}) => {

  const getDefaultValue = (): boolean => {
    if (register) return watch(name) || false
    return checked
  }

  const [valueState, setValueState] = React.useState(getDefaultValue())

  React.useEffect(() => {
    if (register) setValue(name, valueState)
    else if (onChange) onChange(valueState)
  }, [register, setValue, name, valueState, onChange])

  const renderErrorMessage = (): JSX.Element | null => {
    if (errors[name] !== undefined) {
      return (
        <span className='error'>
          {errorMessage || `${name.toLowerCase()} must be checked`}
        </span>
      )
    }

    return null
  }

  return (
    <StyledCheckbox
      style={style}
      className={`checkbox ${className}`}
    >
      <input
        type='checkbox'
        checked={valueState}
        ref={register ? register({ required }) as unknown as undefined : undefined}
        id={name}
        name={name}
        onChange={(): void => { return setValueState(!valueState) }}
      />
      <label htmlFor={name}>
        {label}
      </label>
      {renderErrorMessage()}
    </StyledCheckbox>
  )
}

// S T Y L E S
const StyledCheckbox = styled.div`
  --size: 1.5rem;

  input[type] {
    display: none;

    &:checked + label {
      &::before {
        border-color: var(--color-white-30);
      }

      &::after {
        margin: .3125rem;
        border-radius: calc(var(--radius) / 4);
        background-color: var(--color-primary);
        width: 1rem;
        height: 1rem;
        opacity: 1;
      }
    }
  }

  label {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: calc(var(--size) + var(--space-fixed-md));
    font-size: var(--text-md);
    cursor: pointer;

    &:hover {
      &::before {
        border-color: var(--color-white-20);
      }
    }

    &::before,
    &::after {
      display: flex;
      position: absolute;
      left: 0;
      transition-property: opacity, border;
      transition-duration: .25s;
      transition-timing-function: ease-in-out;
      content: '';
    }

    &::before {
      border: var(--border);
      background: var(--color-black);
      border-radius: calc(var(--radius) / 2);
      width: var(--size);
      height: var(--size);
    }

    &::after {
      opacity: 0;
    }
  }
`

StyledCheckbox.displayName = 'StyledCheckbox'
