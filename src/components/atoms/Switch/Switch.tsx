import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface SwitchProps {
  border?: boolean
  checked?: boolean
  className?: string
  label?: string
  onChange?: () => void
  style?: React.CSSProperties
  type?: SwitchType
}

// T Y P E S
export type SwitchType = 'slim' | 'bold'

export const Switch: React.FC<SwitchProps> = ({
  border = false,
  checked,
  className,
  onChange,
  style,
  type = 'slim'
}) => {
  return (
    <StyledSwitchWrapper
      className={`switch ${className}`}
      style={style}
    >
      <input
        className='switch-checkbox'
        id={`switch-new`}
        checked={checked}
        onChange={(): void => { return (onChange && onChange()) }}
        type='checkbox'
      />
      <label
        className={`switch-label ${checked && 'checked'} ${type} ${border && 'border'}`}
        htmlFor={`switch-new`}
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
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 2.4rem;
    background: var(--color-light-50);
    border-radius: 3rem;
    position: relative;
    transition: background-color .5s;

    &.bold {
      height: 1.2rem;
    }

    &.slim {
      height: 1rem;
    }

    &.border {
      background: none;
      border: 1px solid var(--color-light-50);
    }

    &.checked{
      background: var(--color-primary);
    }
  }

  .switch-label .switch-button {
    content: '';
    position: absolute;
    border-radius: 1rem;
    transition: 0.2s;
    background: var(--color-white-fix);
    box-shadow: 0 0 .4rem 0 var(--color-light-70);
    top: 50%;
    transform: translateY(-50%);

    &.bold {
      left: .2rem;
      width: .8rem;
      height: .8rem;
    }

    &.slim {
      left: -.2rem;
      height: 1.2rem;
      width: 1.2rem;
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

