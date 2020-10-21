import React, { Children, cloneElement } from 'react'
import { useForm } from 'react-hook-form'

export interface FormProps {
  // 'react-hook-form' does not provide a useable TS definition for 'setValue' function
  onSubmit?: (data: Record<string, string>, setValue?: any) => void  // eslint-disable-line
  children
  className?: string
}

export const Form: React.FC<FormProps> = ({
  className = 'StyledForm',
  onSubmit: onSubmitCallback,
  children
}) => {
  const { register, handleSubmit, errors, watch, getValues, setValue } = useForm()
  const formProps = { register, watch, getValues, errors, setValue }
  const childrenWithProps = Children.map(children, (child) => {
    const isReactComponent = child.type instanceof Function
    const clonedElement = cloneElement(child, { ...isReactComponent ? formProps : {} })
    return clonedElement
  })

  const onSubmit = (data: Record<string, string> | undefined): void => {
    if (onSubmitCallback && data !== undefined) onSubmitCallback(data, setValue)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {childrenWithProps}
    </form>
  )
}
