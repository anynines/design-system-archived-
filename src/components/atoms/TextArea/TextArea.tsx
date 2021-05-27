import React from 'react'
import { RegisterOptions } from 'react-hook-form'
import styled from 'styled-components'

export interface TextAreaProps {
  name: string
  placeholder: string
  register?: (validationRules: RegisterOptions) => void
  setValue?: any // eslint-disable-line
  watch?: any //eslint-disable-line
  style?: React.CSSProperties
}

export const TextArea: React.FC<TextAreaProps> = ({ name = '', placeholder = '', register, style = {} }) => {
  return (
    <StyledTextArea
      ref={register ? register({ required: true }) as unknown as undefined : undefined}
      name={name}
      placeholder={placeholder}
      style={style}
    />
  )
}

const StyledTextArea = styled.textarea`
  border: var(--border);
  background-color: var(--element-bg-color);
  padding: var(--space-fixed-md) var(--space-fixed-md) 0 var(--space-fixed-md);
  width: 100%;
  height: 5rem;
  color: var(--text-color);
  font-family: var(--font-family);
  font-size: var(--text-xs);
  resize: none;
  border-radius: var(--radius);
  outline: none;
`
