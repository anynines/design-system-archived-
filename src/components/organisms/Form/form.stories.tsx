import React from 'react'

import { Form } from './Form'
import { Input } from '../../atoms/Input/Input'
import { TextArea } from '../../atoms/TextArea/TextArea'
import { Button } from '../../atoms/Button/Button'
import { ButtonGroup } from '../../atoms/Button/ButtonGroup'
import { Select } from '../../atoms/Select/Select'
import Wrapper from '../../_helpers/Wrapper'
import { Checkbox } from '../../atoms/Checkbox/Checkbox'
import { Switch } from '../../atoms/Switch/Switch'

export default {
  title: '🌳 Organisms/Form',
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

export const Basic = () => (
  <Wrapper bgColor='black-darker'>
    <Form onSubmit={(data: Record<string, string> | undefined, setValue: (key: string, value: string) => void): void => {
      if (data) {
        // console.log(data)
        setValue('firstName', '')
        setValue('lastName', '')
        setValue('select', 'option2')
      }
    }}>
      <Input name='firstName' type='text' label='First Name' autoComplete='off' value='Dummy' />
      <Input name='lastName' type='text' label='Last Name' autoComplete='off' />
      <Input name='userEmail' type='email' label='Email' autoComplete='off' />
      <Input name='Text' type='text' label='I match 4 digits numbers' pattern={/^[0-9]{4}$/} errorMessage='Please enter a 4 digits number' />
      <Input type='color' name='lightColor' label='Light Color' value='#999999' />
      <Input
        value={'default password'}
        name='password'
        label='Password'
        type='password'
        icon='lock'
        autoComplete='off'
        autoFocus
        iconColor='dark'
      />
      <Select name='select' label='Select your option' values={['option1', 'option2', 'option3']} icon='bestseller' defaultValue='option2' />
      <Checkbox name='userTermsCheckbox' label='Please agree to our terms of use' required />
      <Switch name='switch' label='Switchable Option' />
      <TextArea placeholder='Sample placeholder' name='textArea' />
      <ButtonGroup>
        <Button type='black' width='block'>Cancel</Button>
        <Button type='submit' width='block'>Submit</Button>
      </ButtonGroup>
    </Form>
  </Wrapper>
)
