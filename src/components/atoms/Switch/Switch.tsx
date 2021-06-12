import React, { useRef } from 'react'
import styled from 'styled-components'
import { FieldError, DeepMap, RegisterOptions } from 'react-hook-form'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E
export interface SwitchProps extends DefaultComponentProps {
  border?: boolean
  checked?: boolean
  errors?: DeepMap<Record<string, string>, FieldError>
  label?: string
  labelPosition?: LabelPositionType
  name: string
  onChange?: (value: boolean) => void
  register?: (validationRules: RegisterOptions) => void
  required?: boolean
  setValue?: any // eslint-disable-line
  type?: SwitchType
  watch?: any // eslint-disable-line
}

// T Y P E S
export type SwitchType = 'slim' | 'bold'
export type LabelPositionType = 'top' | 'right' | 'bottom' | 'left'

export const Switch: React.FC<SwitchProps> = ({
  border = false,
  checked = false,
  className,
  errors = {},
  label,
  labelPosition = 'right',
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

  const inputRef = useRef(null)
  const { ref, ...rest } = register ? register(name, { required }) : {}

  React.useEffect(() => {
    if (register) setValue(name, valueState)
    else if (onChange) onChange(valueState)
  }, [register, setValue, name, valueState, onChange])

  return (
    <StyledSwitchWrapper
      className={`switch ${className} text-${labelPosition} ${errors && errors[name] !== undefined ? 'error' : ''}`}
      style={style}
    >
      <input
        type='checkbox'
        checked={valueState}
        ref={(e: React.ChangeEvent<HTMLInputElement>): void => {
          if (ref) {
            ref(e)
            inputRef.current = e
          }
        }}
        id={name}
        name={name}
        className='switch-checkbox'
        {...!register ? {} : { ...rest }}
      />
      <label
        className={`switch-background ${valueState && 'checked'} ${type} ${border && 'border'}`}
        onClick={(): void => { return setValueState(!valueState) }}
        htmlFor={name}
      >
        <span className={`switch-button ${type}`} />
      </label>
      {label && <span className='switch-label'>{label}</span>}
    </StyledSwitchWrapper>
  )
}

// S T Y L E S
const StyledSwitchWrapper = styled.div`
  --label-margin: var(--space-fixed-sm);

  display: flex;
  flex-direction: row;
  margin-bottom: var(--space-fixed-xxl);

  &.text-top {
    flex-direction: column-reverse;
    justify-content: center;

    .switch-label {
      margin-bottom: calc(var(--label-margin) * .6);
    }
  }

  &.text-right {
    align-items: center;

    .switch-label {
      margin-left: var(--label-margin);
    }
  }

  &.text-bottom {
    flex-direction: column;
    justify-content: center;

    .switch-label {
      margin-top: calc(var(--label-margin) * .6);
    }
  }

  &.text-left {
    flex-direction: row-reverse;
    align-items: center;

    .switch-label {
      margin-right: var(--label-margin);
    }
  }

  .switch-checkbox {
    display: none;
    visibility: hidden;
    width: 0;
    height: 0;
  }

  .switch-background {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border: 1px solid transparent;
    border-radius: 3rem;
    background: var(--color-light-30);
    cursor: pointer;
    width: 2.4rem;
    transition: background-color .5s;

    &.bold {
      height: 1.25rem;
    }

    &.slim {
      height: 1rem;
    }

    &.border {
      border-color: var(--color-light-50);
      background: none;
    }

    &.checked{
      background: var(--color-primary);
    }

    &.error {
      border-color: var(--color-error);
    }
  }

  .switch-label {
    color: var(--color-white);
    font-size: var(--text-sm);
  }

  .switch-background .switch-button {
    position: absolute;
    top: 50%;
    background: var(--color-white-fix);
    content: '';
    border-radius: 1rem;
    transition: .2s;
    box-shadow: 0 0 .4rem 0 rgba(0,0,0, .5);
    transform: translateY(-50%);

    &.bold {
      left: .2rem;
      width: .8rem;
      height: .8rem;
    }

    &.slim {
      left: -.2rem;
      width: 1.25rem;
      height: 1.25rem;
    }

  }

  .switch-checkbox:checked + .switch-background {
    border: none;
  }
  .switch-checkbox:checked + .switch-background .switch-button {
    transform: translate(-100%, -50%);

    &.bold {
      left: calc(100% - .2rem);
    }

    &.slim {
      left: calc(100% + .2rem);
    }
  }

`
