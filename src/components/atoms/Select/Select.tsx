/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-restricted-syntax */

import React from 'react'
import styled from 'styled-components'
import { ValidationOptions } from 'react-hook-form'

// D E S I G N   S Y S T E M
import { Icon, IconName } from '../Icon/Icon'

// I N T E R F A C E
export interface SelectProps {
  name: string
  label: string
  values: (string | number)[]
  icon?: IconName
  defaultValue?: string
  onChange?: (value: string) => void
  register?: (validationRules: ValidationOptions) => void
  className?: string
  style?: React.CSSProperties
}

export const Select: React.FC<SelectProps> = ({
  values,
  name,
  label,
  register,
  onChange,
  icon,
  defaultValue = values[0],
  className,
  style
}) => {
  const [valueState, setValueState] = React.useState(defaultValue)
  const [isActive, setIsActive] = React.useState(false)
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

  const keyboardNavigation = (event: KeyboardEvent): void => {
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
  }

  const clickedOutside = (event: MouseEvent): void => {
    const el = event.target
    const domNode = document.getElementsByClassName('StyledSelect')[0]
    /*
     * NOTE: we have to check the type of el before doing the contains, otherwise
     * typescript will break
     */
    if (!(domNode && el instanceof Node && domNode.contains(el))) {
      closeCustomSelectOptions()
    }
  }

  const closeCustomSelectOptions = (): void => {
    setIsActive(false)
    document.removeEventListener('click', clickedOutside, false)
    document.removeEventListener('keydown', keyboardNavigation, false)
  }

  React.useEffect((): void => {
    if (onChange !== undefined) {
      onChange(valueState.toString())
    }
  }, [onChange, valueState])

  React.useEffect((): void => {
    if (isActive) {
      document.addEventListener('click', clickedOutside, false)
      document.addEventListener('keydown', keyboardNavigation, false)
    }
  })

  return (
    <StyledSelect
      className={`${className} 
      ${isActive ? 'is-active' : ''}`}
      style={style}
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
  margin-bottom: var(--space-xl);
  border-radius: var(--radius);
  
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
    font-size: 10px;
    font-weight: 800;
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

  &:hover, &.focus, &:active, &:focus, &.is-active{
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
    font-size: var(--text-md);
  }

  .select-custom {
    background-color: transparent;
    cursor: pointer;
  }

  select {
    background-color: var(--color-dark);
    border: var(--border);
    position: relative;
    border: none;
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

  .select-custom {
    display: none;
    position: absolute;
    top: 0;
    left: 0;

    &__inner-option-container {
      max-height: 160px;
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
      background-color: var(--color-dark);
      padding-bottom: calc(var(--radius) / 2);
      width: 100%;
      color: var(--color-white);
      appearance: none;
      border-radius: 0 0 var(--radius) var(--radius);
      outline: none;
      transition: color var(--transition-ease-in-out-300), background-color var(--transition-ease-in-out-300);
    }

    &__option {
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
  @media (hover: hover) {
    .select-custom {
      display: block;
    }
    select:focus + .select-custom {
      display: none;
    }
  }
`
