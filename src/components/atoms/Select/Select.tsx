/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-restricted-syntax */

import React from 'react'
import styled from 'styled-components'
import { ValidationOptions } from 'react-hook-form'

import { onClickOutsideHook } from '../../../helpers/react'

// D E S I G N   S Y S T E M
import { Icon, IconName } from '../Icon/Icon'

// I N T E R F A C E
export interface SelectProps {
  className?: string
  defaultValue?: string
  icon?: IconName
  label: string
  name: string
  onChange?: (value: string) => void
  register?: (validationRules: ValidationOptions) => void
  style?: React.CSSProperties
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
  defaultValue = values[0]
}) => {
  const [valueState, setValueState] = React.useState(defaultValue)
  const [isActive, setIsActive] = React.useState(false)

  const selectRef = React.useRef<HTMLDivElement | null>(null)
  let optionHoveredIndex = -1

  const setOptionHover = (): void => {
    const options = document.getElementsByClassName('select-custom__option')
    for (const o of options) {
      o.classList.remove('is-hovered')
    }
    if (optionHoveredIndex >= 0) {
      options[optionHoveredIndex].classList.add('is-hovered')
    }
  }

  const updateOptionElement = (element: Element): void => {
    const options = document.getElementsByClassName('select-custom__option')

    // @TODO set correct hover start position when using keyboard, it seems to reset, could be development only

    for (const o of options) {
      o.classList.remove('is-active')
    }
    element.classList.remove('is-hovered')
    element.classList.add('is-active')

    // set the next hover start index
    optionHoveredIndex = Array.prototype.slice.call(options).indexOf(element)
    setOptionHover()
  }

  const onValueChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newValue = event.target.value

    setValueState(newValue)

    // update the custom select selected option to be synchronized
    for (const option of document.getElementsByClassName('select-custom__option')) {
      if (option.getAttribute('data-value') === newValue) {
        updateOptionElement(option)
      }
    }
  }

  const onCustomSelectOptionClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const newValue = event.currentTarget.dataset.value || ''

    setValueState(newValue)
    updateOptionElement(event.currentTarget)
  }

  const onCustomSelectClick = (): void => {
    setIsActive(!isActive)
  }

  const keyboardNavigation = React.useCallback((event: KeyboardEvent): void => {
    if (isActive) {
      event.preventDefault()
      if (event.key === 'ArrowDown' && optionHoveredIndex < values.length - 1) {
        optionHoveredIndex += 1
        setOptionHover()
      }
      if (event.key === 'ArrowUp' && optionHoveredIndex > 0) {
        optionHoveredIndex -= 1
        setOptionHover()
      }
      if (event.key === ' ' || event.key === 'Enter' || event.key === 'Spacebar') {
        const option = document.getElementsByClassName('select-custom__option')[optionHoveredIndex]
        if (typeof option !== 'undefined') {
          const newValue = option.getAttribute('data-value') || ''
          setValueState(newValue)
          updateOptionElement(option)
          closeCustomSelectOptions()
        }
      }
      if (event.key === 'Escape') {
        closeCustomSelectOptions()
      }
    }
  }, [])

  const closeCustomSelectOptions = React.useCallback((): void => {
    setIsActive(false)
    document.removeEventListener('keydown', keyboardNavigation, false)
  }, [keyboardNavigation])

  React.useEffect((): void => {
    if (onChange !== undefined) {
      onChange(valueState.toString())
    }
  }, [onChange, valueState])

  React.useEffect((): void => {
    if (isActive) {
      document.addEventListener('keydown', keyboardNavigation, false)
    }
  })

  React.useEffect(() => {
    const cleanOnClickOutsideHook = onClickOutsideHook(selectRef, closeCustomSelectOptions)

    return ((): void => {
      cleanOnClickOutsideHook()
    })
  }, [closeCustomSelectOptions])

  return (
    <StyledSelect
      className={`select-wrapper ${className} 
      ${isActive ? 'is-active' : ''}`}
      style={style}
      ref={selectRef}
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
          // id={name}
          aria-labelledby={name}
          value={valueState}
          onChange={onValueChange}
          name={name}
          ref={register as unknown as undefined}
        >
          {values.map((value): JSX.Element => {
            return (<option value={value} key={value}>{value}</option>)
          })}
        </select>

        <div
          className='select-custom'
          aria-hidden={!isActive}
          onClick={onCustomSelectClick}
        >
          <div className='select-custom__option-container'>
            <div className='select-custom__inner-option-container'>
              {values.map((value): JSX.Element => {
                return (
                  <div
                    className='select-custom__option'
                    data-value={value}
                    key={value}
                    onClick={onCustomSelectOptionClick}
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
