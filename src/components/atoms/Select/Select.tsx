// Disable it to use onClick on divs
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react'
import styled from 'styled-components'
import { RegisterOptions } from 'react-hook-form'

import { DefaultComponentProps } from '@types'

import { onClickOutsideHook } from '../../../helpers/react'

// D E S I G N   S Y S T E M
import { Icon, IconName } from '../Icon/Icon'

// I N T E R F A C E
export interface SelectProps extends DefaultComponentProps {
  defaultValue?: string | number
  icon?: IconName
  label: string
  name: string
  onChange?: (value: string) => void
  register?: (validationRules: RegisterOptions) => void
  setValue?: (key: string, value: string) => void
  values: (string | number)[]
}

export const Select: React.FC<SelectProps> = ({
  className,
  icon,
  label,
  name,
  onChange,
  register,
  style,
  values,
  setValue,
  defaultValue = values[0]
}) => {
  const [valueState, setValueState] = React.useState(defaultValue)
  const [hoveredValueIndex, setHoveredValueIndex] = React.useState<number>(values.indexOf(defaultValue))
  const [isActive, setIsActive] = React.useState(false)
  const selectRef = React.useRef<HTMLDivElement | null>(null)

  const onValueChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newValue = event.target.value

    setValueState(newValue)
  }

  const onCustomSelectOptionClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const newValue = event.currentTarget.dataset.value || ''

    if (!register) {
      setValueState(newValue)
    } else if (setValue) {
      setValue(name, newValue)
    }
  }

  const onCustomSelectClick = (): void => {
    setIsActive(!isActive)
  }

  const onSelectKeyDown = (event: KeyboardEvent): void => {
    switch (event.key) {
      case 'ArrowDown':
        setHoveredValueIndex(hoveredValueIndex < values.length - 1
          ? hoveredValueIndex + 1
          : hoveredValueIndex)
        break

      case 'ArrowUp':
        setHoveredValueIndex(hoveredValueIndex > 0
          ? hoveredValueIndex - 1
          : hoveredValueIndex)
        break

      case 'Enter': case 'Spacebar':
        setValueState(values[hoveredValueIndex])
        setIsActive(false)
        break

      default:
        break
    }
  }

  React.useEffect(() => {
    if (!isActive) {
      setHoveredValueIndex(values.indexOf(valueState))
    }
  }, [isActive, valueState, values])

  React.useEffect((): void => {
    if (onChange !== undefined) {
      onChange(valueState.toString())
    }
  }, [onChange, valueState])

  React.useEffect(() => {
    const cleanOnClickOutsideHook = onClickOutsideHook(selectRef, () => { setIsActive(false) })

    return ((): void => {
      cleanOnClickOutsideHook()
    })
  }, [])

  const props = !register ? { value: valueState, onChange: onValueChange } : {}

  return (
    <StyledSelect
      className={`select-wrapper ${className} 
      ${isActive ? 'is-active' : ''}`}
      style={style}
      ref={selectRef}
      onKeyDown={onSelectKeyDown}
      tabIndex='0'
    >
      <span className='select-label' id={name}>
        {label}
      </span>

      {/*
      * There is a type incoherence between register() and ref attribute
      * The trick 'as unknown as undefined' is used to not use @ts-ignore
      */}

      <div className='selectWrapper'>
        <select
          aria-labelledby={name}
          defaultValue={defaultValue}
          name={name}
          ref={register ? register({ required: true }) as unknown as undefined : undefined}
          {...!register ? { ...props } : {}}
        >
          {values.map((value): JSX.Element => {
            return (<option value={value} key={value}>{value}</option>)
          })}
        </select>

        <div
          className='select-custom'
          onClick={onCustomSelectClick}
        >
          <div className='select-custom__option-container'>
            <div className='select-custom__inner-option-container'>
              {values.map((value, i): JSX.Element => {
                return (
                  <div
                    className={`select-custom__option ${i === hoveredValueIndex ? 'is-hovered' : ''}`}
                    data-value={value}
                    key={value}
                    onClick={onCustomSelectOptionClick}
                    tabIndex={i}
                  >
                    {value}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='icon-wrapper'>
        {icon && <Icon icon={icon} />}
      </div>
    </StyledSelect>
  )
}

// S T Y L E S
const StyledSelect = styled.div`
  --icon-wrapper-size: 2.75rem;
  
  position: relative;
  margin-bottom: var(--space-fixed-xxl);
  border-radius: var(--radius);
  width: 100%;
  
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--color-white-10);
    width: var(--icon-wrapper-size);
    height: 100%;
    color: var(--color-white);
    border-radius: var(--radius) 0 0 var(--radius);
    transition: 
      color 0.3s ease-in-out, 
      background-color 0.3s ease-in-out,
      border-radius 0.3s ease-in-out;

    svg {
      width: 1rem;
      height: 100%;
    }
  }

  .select-label {
    position: absolute;
    top: 0.25rem;
    left: 3.5rem;
    z-index: 1;
    opacity: 0.5;
    color: var(--color-white);
    font-size: var(--text-xxs);
    font-weight: var(--font-weight-bd);
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &.empty {
    input {
      color: rgba(255,255,255,0);
    }

    .select-label {
      top: .875rem;
      font-size: var(--text-lg);
    }
  }

  &:hover,
  &.focus,
  &:active,
  &:focus,
  &.is-active{
    input {
      background-color: var(--color-dark);
      color: rgba(255,255,255,1);
    }

    .icon-wrapper {
      background-color: var(--color-primary);

      svg {
        color: var(--color-white-fix);
      }
    }
  }
  
  select,
  .select-custom {
    width: 100%;
    height: var(--icon-wrapper-size);
    font-size: var(--text-xs);
  }

  .select-custom {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    cursor: pointer;

    &__inner-option-container {
      max-height: 10rem;
      overflow-y: auto;
    }

    &__option-container {
      display: none;
      position: absolute;
      top: var(--icon-wrapper-size);
      left: 0;
      z-index: 2;
      overflow: hidden;
      border: var(--border);
      background-color: var(--color-black);
      width: 100%;
      color: var(--color-white);
      appearance: none;
      border-radius: 0 0 var(--radius) var(--radius);
      outline: none;
      transition: color var(--transition-ease-in-out-300), background-color var(--transition-ease-in-out-300);
    }

    &__option {
      border: none;
      cursor: pointer;
      padding: var(--space-md) var(--space-lg);

      &.is-active {
        background-color: var(--color-primary-dark);
        color: var(--color-white-fix);
      }

      &:hover,
      &.is-hovered {
        background-color: var(--color-primary);
        color: var(--color-white-fix);
      }
    }
  }

  select {
    position: relative;
    border: var(--border);
    background-color: var(--color-black);
    padding: 14px 0 0 calc(var(--icon-wrapper-size) + 12px);
    color: var(--color-white);
    appearance: none;
    border-radius: var(--radius);
    outline: none;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }
  
  .error {
    position: absolute;
    bottom: -0.9375rem;
    left: 0;
  }

  &.is-active {
    transition: none;

    .icon-wrapper {
      border-bottom-left-radius: 0;
    }
    
    select,
    .select-custom {
      border-radius: var(--radius) var(--radius) 0 0;
    }
    
    .select-custom__option-container {
      display: block;
    }
  }

  @media (hover: hover) {
    .select-custom {
      display: block;
    }
    select:focus + .select-custom {
      display: none;
    }
  }
`
