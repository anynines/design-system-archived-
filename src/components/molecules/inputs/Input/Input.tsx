import React from 'react'

// C O M P O N E N T S
import { IconName } from '../../../atoms/Icon/Icon'
import { LabelProps } from '../../../atoms/Label/Label'
import { TextInput, TextInputProps } from '../Text/TextInput'
import { ColorInput } from '../Color/ColorInput'

// I N T E R F A C E S
export interface InputProps extends Omit<TextInputProps, 'pattern'> {
  type: InputType
  name: string
  label: string
  icon?: IconName
  onChange?: (newValue: string) => void
  value?: string
}
type Input = React.FC<InputProps>
  & { Label: React.FC<LabelProps> }
export type InputType = 'text' | 'color' | 'email' | 'password'

// C O M P O N E N T
export const Input: Input = (props) => {
  const {
    name,
    value,
    label,
    type,
    register,
    handleSubmit,
    errors,
    watch,
    getValues,
    setValue,
    children
  } = props

  const renderInput = (): JSX.Element => {
    switch (type) {
      case 'color':
        return (
          <ColorInput
            watch={watch}
            handleSubmit={handleSubmit}
            getValues={getValues}
            setValue={setValue}
            errors={errors}
            name={name}
            color={value || '#000000'}
            label={label}
            pattern={/^#(?:[0-9a-f]{3}){1,2}$/i}
            register={register}
          >
            {children}
          </ColorInput>
        )

      case 'email':
        return (
          <TextInput
            {...props}
            pattern={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
          >
            {children}
          </TextInput>
        )

      default:
        return (
          <TextInput
            {...props}
            pattern={/^.{2,30}$/}
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
