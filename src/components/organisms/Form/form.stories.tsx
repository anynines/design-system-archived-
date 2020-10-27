import React from 'react'

import { Form } from './Form'
import { Input } from "../../molecules/inputs/Input/Input"
import { Button } from "../../atoms/Button/Button"
import { Select } from "../../atoms/Select/Select"

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
      console.log(data)
      setValue('firstName', '')
      setValue('lastName', '')
    }
  }}>
    <Input name="firstName" type='text' label='First Name' autoComplete='off' value='Dummy' />
    <Input name="lastName" type='text' label='Last Name' autoComplete='off' />
    <Input name="userEmail" type='email' label='Email' autoComplete='off' />
    <Input name='Text' type='text' label="I match 4 digits numbers" pattern={/^[0-9]{4}$/} errorMessage='Please enter a 4 digits number' />
    <Input type='color' name='lightColor' label='Light Color' value="#999999" />
    <Input type='date' name='date' label='Enter a date' />
    <Select name='select' label='Select your option' values={['option1', 'option2', 'option3']} icon='bestseller' />
    <Button type="submit">Submit</Button>
  </Form>
)
