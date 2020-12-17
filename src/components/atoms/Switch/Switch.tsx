import React from 'react'
import styled from 'styled-components'
import { FieldError, NestDataObject, ValidationOptions } from 'react-hook-form'

// I N T E R F A C E
export interface SwitchProps {
  border?: boolean
  checked?: boolean
  className?: string
  errors?: NestDataObject<Record<string, string>, FieldError>
  name: string
  onChange?: (value: boolean) => void
  register?: (validationRules: ValidationOptions) => void
  required?: boolean
  setValue?: any // eslint-disable-line
  style?: React.CSSProperties
  type?: SwitchType
  watch?: any // eslint-disable-line
}

// T Y P E S
export type SwitchType = 'slim' | 'bold'

export const Switch: React.FC<SwitchProps> = ({
  border = false,
  checked = false,
  className,
  errors = {},
  name,
  onChange,
  register,
  required = false,
  setValue,
  style,
  type = 'slim',
  watch
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

  return (
    <StyledSwitchWrapper
      className={`switch ${className} ${errors && errors[name] !== undefined ? 'error' : ''}`}
      style={style}
    >
      <input
        type='checkbox'
        checked={valueState}
        ref={register ? register({ required }) as unknown as undefined : undefined}
        id={name}
        name={name}
        className='switch-checkbox'
      />
      <label
        className={`switch-label ${valueState && 'checked'} ${type} ${border && 'border'}`}
        onClick={(): void => { return setValueState(!valueState) }}
        htmlFor={name}
      >
        <span className={`switch-button ${type}`} />
      </label>
    </StyledSwitchWrapper>
  )
}

// S T Y L E S
const StyledSwitchWrapper = styled.div`
  margin-right: 1rem;

  .switch-checkbox {
    display: none;
    visibility: hidden;
    width: 0;
    height: 0;
  }

  .switch-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: var(--color-light-50);
    cursor: pointer;
    width: 2.4rem;
    border-radius: 3rem;
    transition: background-color .5s;

    &.bold {
      height: 1.2rem;
    }

    &.slim {
      height: 1rem;
    }

    &.border {
      border: 1px solid var(--color-light-50);
      background: none;
    }

    &.checked{
      background: var(--color-primary);
    }

    &.error {
      label {
        &::before {
          border-color: var(--color-error);
        }
      }
    }
  }

  .switch-label .switch-button {
    position: absolute;
    top: 50%;
    background: var(--color-white-fix);
    content: '';
    border-radius: 1rem;
    transition: 0.2s;
    box-shadow: 0 0 .4rem 0 var(--color-light-70);
    transform: translateY(-50%);

    &.bold {
      left: .2rem;
      width: .8rem;
      height: .8rem;
    }

    &.slim {
      left: -.2rem;
      width: 1.2rem;
      height: 1.2rem;
    }

  }

  .switch-checkbox:checked + .switch-label {
    border: none;
  }
  .switch-checkbox:checked + .switch-label .switch-button {
    transform: translate(-100%, -50%);

    &.bold {
      left: calc(100% - .2rem);
    }

    &.slim {
      left: calc(100% + .2rem);
    }
  }

`
