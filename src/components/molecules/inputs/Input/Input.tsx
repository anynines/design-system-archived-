import React from 'react'

// C O M P O N E N T S
import { InputLabelProps } from '../../../atoms/InputLabel/InputLabel'
import { TextInput, TextInputProps } from '../Text/TextInput'
import { ColorInput } from '../Color/ColorInput'
import { DateInput, DateInputProps } from '../Date/DateInput'

// I N T E R F A C E S
interface DateInputRestrictedProps extends DateInputProps {
  type: 'date'
  value?: number
}
export type InputProps = DateInputRestrictedProps | TextInputProps & {
  type: InputType
  onChange?: (newValue: string) => void
}
type Input = React.FC<InputProps>
  & { Label: React.FC<InputLabelProps> }
export type InputType = 'text' | 'color' | 'email' | 'number' | 'password' | 'date'

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

      case 'date':
        return (
          <DateInput {...props}>{children}</DateInput>
        )

      default:
        return (
          <TextInput
            {...props}
            pattern={pattern || /^.{2,30}$/}
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
