import React from 'react'
import styled from 'styled-components'


// I N T E R F A C E
export interface SwitchProps {
  checked?: boolean
  className?: string
  label?: string
  onChange?: () => void
  style?: React.CSSProperties
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  className,
  onChange,
  style
}) => {
  return (
    <StyledSwitchWrapper
      className={`switch ${className}`}
      style={style}
    >
      <input
        className="switch-checkbox"
        id={`switch-new`}
        checked={checked}
        onChange={(): void => { return (onChange && onChange()) }}
        type="checkbox"
      />
      <label
        className={`switch-label ${checked && 'checked'}`}
        htmlFor={`switch-new`}
      >
        <span className={`switch-button`} />
      </label>
    </StyledSwitchWrapper>
  )
}

// S T Y L E S
const StyledSwitchWrapper = styled.div`
  .switch-checkbox {
  height: 0;
  width: 0;
  visibility: hidden;
}

.switch-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: var(--color-dark);
  border-radius: 100px;
  position: relative;
  transition: background-color .2s;

  &.checked{
    background: var(--color-primary);
  }
}

.switch-label .switch-button {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  transition: 0.2s;
  background: var(--color-white-fix);
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
}

.switch-checkbox:checked + .switch-label .switch-button {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

.switch-label:active .switch-button {
  width: 60px;
}
`

