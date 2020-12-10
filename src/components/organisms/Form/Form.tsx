import React, { Children, cloneElement } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

export interface FormProps {
  // 'react-hook-form' does not provide a useable TS definition for 'setValue' function
  onSubmit?: (data: Record<string, string>, setValue?: any) => void // eslint-disable-line
  children
  className?: string
}

export const Form: React.FC<FormProps> = ({
  children,
  className,
  onSubmit: onSubmitCallback
}) => {
  const {
    register,
    handleSubmit,
    errors,
    watch,
    getValues,
    setValue
  } = useForm()
  const formProps = { register, watch, getValues, errors, setValue }
  const childrenWithProps = Children.map(children, (child) => {
    const isReactComponent = child.type instanceof Function
    const clonedElement = cloneElement(child, {
      ...(isReactComponent ? formProps : {})
    })
    return clonedElement
  })

  const onSubmit = (data: Record<string, string> | undefined): void => {
    if (onSubmitCallback && data !== undefined) onSubmitCallback(data, setValue)
  }

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      className={`form-wrapper ${className}`}
    >
      {childrenWithProps}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 100%;

  .form-footer {
    display: flex;
    justify-content: space-between;

    .btn {
      margin: 0 15px;

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .row {
    margin-bottom: 0;
  }
`
