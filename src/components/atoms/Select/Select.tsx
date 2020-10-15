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
  const [isActive, setIsActive] = React.useState(false)

  const onValueChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newValue = event.target.value

    if (onChange !== undefined) {
      onChange(newValue)
    }

    setValueState(newValue)
    // @todo update custom value add class is-active 
  }

  const updateOptionElement = (element: Element) => {
    const options = document.getElementsByClassName("select-custom__option")
    
    // @TODO set correct hover start position when using keyboard, it seems to reset, could be development only

    for(let o of options){
      o.classList.remove("is-active")
    }
    element.classList.remove("is-hovered")
    element.classList.add("is-active")
  
    // set the next hover start index
    optionHoveredIndex = Array.prototype.slice.call(options).indexOf(element)
    setOptionHover()
  }

  const onCustomSelectOptionClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const newValue = event.currentTarget.dataset.value || ""

    setValueState(newValue)
    updateOptionElement(event.currentTarget)
  }

  const onCustomSelectClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    setIsActive(!isActive)
  }

  const clickedOutside = (event: MouseEvent) => {
    const el = event.target;
    const domNode = document.getElementsByClassName("StyledSelect")[0];
    /*
     * NOTE: we have to check the type of el before doing the contains, otherwise
     * typescript will break
     */
    if (!(domNode && el instanceof Node && domNode.contains(el))) {
      closeCustomSelectOptions()
    }
  }

  const closeCustomSelectOptions = () => {
    setIsActive(false)
    // @todo move to every required position
    document.removeEventListener('click', clickedOutside, false)
    document.removeEventListener('keydown', keyboardNavigation, false)
  }
  
  let optionHoveredIndex = -1

  // const [OptionHoveredIndex, setOptionHoveredIndex] = React.useState(-1)

  const keyboardNavigation = (event: KeyboardEvent) => {
    

    if(isActive){
      event.preventDefault()
      if(event.key == "ArrowDown" && optionHoveredIndex < values.length - 1 ){
        optionHoveredIndex += 1
        setOptionHover()
      }
      if(event.key == "ArrowUp" && optionHoveredIndex > 0 ){
        optionHoveredIndex -= 1
        setOptionHover()
      }

      if(event.key == " " || event.key == "Enter" || event.key == "Spacebar"){
        
        const option = document.getElementsByClassName("select-custom__option")[optionHoveredIndex]
        if(typeof option != "undefined"){
          const newValue = option.getAttribute("data-value") || ""
          setValueState(newValue)
          updateOptionElement(option)
          closeCustomSelectOptions()
        }
      }

      if(event.key == "Escape"){
        closeCustomSelectOptions()
      }
    }
  }

  const setOptionHover = () => {
    const options = document.getElementsByClassName("select-custom__option")
    for(let o of options){
      o.classList.remove("is-hovered")
    }
    if(optionHoveredIndex >= 0){
      options[optionHoveredIndex].classList.add("is-hovered")
    }
  }

  React.useEffect( () => {
    if(isActive){
      document.addEventListener('click', clickedOutside, false)
      document.addEventListener('keydown', keyboardNavigation, false)
    }
  })

  return (
    <StyledSelect className={`${className} ${isActive ? "is-active" : ""}`} >
      <div className={`icon-wrapper`}>
        {icon && <Icon icon={icon} />}
      </div>
      <span className={"select-label"} id={name} >{label}</span>

      {/*
      * There is a type incoherence between register() and ref attribut
      * The trick 'as unknown as undefined' is used to not use @ts-ignore
      */}
      <div className={"selectWrapper"} >
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

        <div className={"select-custom"} aria-hidden={!isActive} onClick={onCustomSelectClick} >
          <div className={"select-custom__option-container"} >
            {values.map((value): JSX.Element => {
                return (<div className={"select-custom__option"} data-value={value} key={value} onClick={onCustomSelectOptionClick}>{value}</div>)
              })}
          </div>
        </div>
      </div>
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
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

    svg {
      width: 1rem;
      height: 100%;
    }
  }

  .select-label {
    position: absolute;
    top: .125rem;
    left: 3.5rem;
    z-index: 1;
    opacity: .5;
    color: var(--color-white);
    font-size: var(--text-md);
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
    }
  }
  
  select,
  .select-custom {
    position: relative;
    border: none;
    cursor: pointer;
    background-color: var(--color-dark-50);
    padding: var(--space-md) 0 0 calc(var(--icon-wrapper-size) + var(--space-md));
    width: 100%;
    height: var(--icon-wrapper-size);
    color: var(--color-white);
    font-size: var(--text-md);
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
    .select-custom {
      border-radius: var(--radius) var(--radius) 0 0
    }
    
    .select-custom__option-container {
      display: block;
    }
  }

  .select-custom {
    display: none;
    left: 0;
    position: absolute;
    top: 0;


    &__option-container {
      appearance: none;
      background-color: var(--color-dark-50);
      border-color: var(--color-primary);
      border-radius: 0 0 var(--radius) var(--radius);
      border-style: solid;
      border-width: 1px;
      color: var(--color-white);
      display: none;
      left: 0;
      outline: none;
      position: absolute;
      top: var(--icon-wrapper-size);
      transition: color var(--transition-ease-in-out-300), background-color var(--transition-ease-in-out-300);
      width: 100%;
      z-index: 1;
    }

    &__option {
      cursor: pointer;
      padding: var(--space-md) var(--space-lg);

      &:hover,
      &.is-hovered {
        background-color: var(--color-light-50);
        color: var(--color-black);
      }
      &.is-active {
        background-color: var(--color-primary);
      }

      &:last-of-type {
        border-radius: 0 0 var(--radius) var(--radius);
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
