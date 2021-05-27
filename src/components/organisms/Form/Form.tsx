import React, { cloneElement } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

export interface FormProps {
  // 'react-hook-form' does not provide a useable TS definition for 'setValue' function
  onSubmit?: (data: Record<string, string>, setValue?: any) => void // eslint-disable-line
  className?: string
}

const recursiveMap = (
  children: React.ReactNode,
  executerFunction: (child: React.ReactNode) => React.ReactNode
): React.ReactNode => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, executerFunction)
      })
    }

    return executerFunction(child)
  })
}

export const Form: React.FC<FormProps> = ({
  children,
  className,
  onSubmit: onSubmitCallback
}) => {
  const {
    register,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue
  } = useForm()
  const { errors } = formState
  const formProps = { register, watch, getValues, errors, setValue }

  const onSubmit = (data: Record<string, string> | undefined): void => {
    if (onSubmitCallback && data !== undefined) onSubmitCallback(data, setValue)
  }

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      className={`form-wrapper ${className}`}
    >
      {recursiveMap(children, (child) => {
        const isComponent = typeof child !== 'string'
          && typeof child !== 'boolean'
          && typeof child !== 'number'
          && child !== undefined
          && child !== null
          && Object.keys(child).length > 0
          // ignore last check because TypeScript don't get that `child`
          // can't be equal to `{}` thanks to previous test
          // @ts-ignore
          && child.type instanceof Function

        if (isComponent) {
          // TypeScript don't link the `isComponent` boolean to the fact
          // that `child` can't be of type undefined or null or ...
          // @ts-ignore
          return cloneElement(child, { ...child.props, ...formProps })
        }

        return child
      })}
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
