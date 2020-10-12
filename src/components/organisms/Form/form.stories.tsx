import React from 'react'

import { Form } from './Form'
import { Input } from "../../molecules/inputs/Input/Input"
import { Button } from "../../atoms/Button/Button"

export default {
  title: 'Organisms/Form',
  component: Form,
  argTypes: {
    className: {
      control: { type: 'text' },
    },
    onSubmit: {
      control: { type: 'function' },
    }
  }
}

const onSubmit = (data: Record<string, string> | undefined, setValue: any): void => { // eslint-disable-line
  if (data) {
    setValue('firstName', '')
    setValue('lastName', '')
  }
}

export const Basic = () => (
  /* 'setValue' function's TS definition could not be resolved */
  <Form onSubmit={(data: Record<string, string> | undefined, setValue: any): void => { // eslint-disable-line
    if (data) {
      setValue('firstName', '')
      setValue('lastName', '')
    }
  }}>
    <Input name="firstName" type='text' label='First Name' autoComplete='off' value='Dummy' />
    <Input name="lastName" type='text' label='Last Name' autoComplete='off' />
    <Input name="userEmail" type='email' label='Email' autoComplete='off' />
    <Input type='color' name='lightColor' label='Light Color' value="#999999" />
    <Button type="submit">Submit</Button>
  </Form>
)
