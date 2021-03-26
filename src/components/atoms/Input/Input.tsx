import React from 'react'

// C O M P O N E N T S
import { InputLabelProps } from './helpers/InputLabel'
import { TextInput, TextInputProps } from './helpers/TextInput'
import { ColorInput } from './helpers/ColorInput'
import { DateInput, DateInputProps } from './helpers/DateInput'

// I N T E R F A C E S
interface DateInputRestrictedProps extends DateInputProps {
  type: 'date'
  value?: number
}

export type InputType = 'text' | 'color' | 'email' | 'number' | 'password' | 'date'

export type InputIconColor = 'dark' | 'light'

export type InputProps = DateInputRestrictedProps | TextInputProps & {
  type: InputType
  onChange?: (newValue: string) => void
  iconColor?: InputIconColor
}
type Input = React.FC<InputProps>
  & { Label: React.FC<InputLabelProps> }

// C O M P O N E N T
export const Input: Input = (props) => {
  const {
    children,
    errors,
    getValues,
    handleSubmit,
    name,
    label,
    pattern,
    register,
    setValue,
    watch
  } = props
  const renderInput = (): JSX.Element => {
    switch (props.type) {
      case 'color':
        return (
          <ColorInput
            watch={watch}
            handleSubmit={handleSubmit}
            getValues={getValues}
            setValue={setValue}
            errors={errors}
            name={name}
            color={props.value || '#000000'}
            label={label}
            pattern={pattern || /^#(?:[0-9a-f]{3}){1,2}$/i}
            register={register}
          >
            {children}
          </ColorInput>
        )

      case 'email':
        return (
          <TextInput
            {...props}
            pattern={pattern || /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
          >
            {children}
          </TextInput>
        )

      case 'number':
        return (
          <TextInput
            {...props}
            pattern={pattern || /^[0-9]{2,30}$/}
          >
            {children}
          </TextInput>
        )

      case 'password':
        return (
          <TextInput
            {...props}
            pattern={pattern || /^.{8,30}$/}
          >
            {children}
          </TextInput>
        )

      case 'date':
        return (
          <DateInput {...props}>{children}</DateInput>
        )

      default:
        return (
          <TextInput
            {...props}
            pattern={pattern || /^.{2,100}$/}
          >
            {children}
          </TextInput>
        )
    }
  }

  return (
    <>
      {renderInput()}
    </>
  )
}

Input.Label = TextInput.Label
