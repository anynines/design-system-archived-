import React from 'react'
import styled from 'styled-components'
import { ValidationOptions } from 'react-hook-form'

// D E S I G N   S Y S T E M
import { Icon, IconName } from '../Icon/Icon'

// I N T E R F A C E
export interface SelectProps {
  name: string
  label: string
  values: string[]
  onChange?: (value: string) => void
  defaultValue?: string
  register?: (validationRules: ValidationOptions) => void
  icon?: IconName
  className?: string
}

export const Select: React.FC<SelectProps> = ({
  values,
  name,
  label,
  register,
  onChange,
  icon,
  defaultValue = values[0],
  className = 'StyledSelect'
}) => {
  const [valueState, setValueState] = React.useState(defaultValue)

  const onValueChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newValue = event.target.value

    if (onChange !== undefined) {
      onChange(newValue)
    }

    setValueState(newValue)
  }

  return (
    <StyledSelect>
      <div className={`icon-wrapper ${className}`}>
        {icon && <Icon icon={icon} />}
      </div>
      <label htmlFor={name}>{label}</label>

      {/*
      * There is a type incoherence between register() and ref attribut
      * The trick 'as unknown as undefined' is used to not use @ts-ignore
      */}
      <select
        id={name}
        value={valueState}
        onChange={onValueChange}
        name={name}
        ref={register as unknown as undefined}
      >
        {values.map((value): JSX.Element => {
          return (<option value={value} key={value}>{value}</option>)
        })}
      </select>
    </StyledSelect>
  )
}

// S T Y L E S
const StyledSelect = styled.div`
  --icon-wrapper-size: 2.75rem;
  
  position: relative;
  margin-bottom: var(--space-xl);
  
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: var(--color-dark-50);
    width: var(--icon-wrapper-size);
    height: 100%;
    color: var(--color-white);
    border-radius: 10px 0 0 10px;
    transition: var(--transition);

    svg {
      width: 1rem;
      height: 100%;
    }
  }

  label {
    position: absolute;
    top: .125rem;
    left: 3.5rem;
    z-index: 1;
    opacity: .5;
    color: var(--color-white);
    font-size: var(--text-md);
    transition: var(--transition);
  }

  &.empty {
    input {
      color: rgba(255,255,255,0);
    }

    label {
      top: .875rem;
      font-size: var(--text-lg);
    }
  }

  &:hover, &.focus {
    input {
      background-color: var(--color-dark);
      color: rgba(255,255,255,1);
    }

    .icon-wrapper {
      background-color: var(--color-primary);
    }
  }
  
  select {
    position: relative;
    border: none;
    background-color: var(--color-dark-50);
    padding: var(--space-md) 0 0 calc(var(--icon-wrapper-size) + var(--space-md));
    width: 100%;
    height: var(--icon-wrapper-size);
    color: var(--color-white);
    font-size: var(--text-md);
    appearance: none;
    border-radius: var(--radius);
    outline: none;
    transition: var(--transition);
  }
  
  .error {
    position: absolute;
    bottom: -0.9375rem;
    left: 0;
  }
`
