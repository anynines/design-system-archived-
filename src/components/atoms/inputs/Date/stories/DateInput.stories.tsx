import React from 'react'

import { DateInput, DateInputProps } from '../DateInput'
import Wrapper from '../../../../_helpers/Wrapper'

export default {
  title: '💧 Atoms/Inputs/DateInput',
  component: DateInput,
  argTypes: {
    name: {
      control: { type: 'text' },
      defaultValue: 'Unique name used as ref'
    },
    label: {
      control: { type: 'text'},
      defaultValue: 'Pick a date',
    }
  },
}

export const Basic = (args: DateInputProps) => (
  <Wrapper>
    <DateInput 
      {...args}
    />
  </Wrapper>
)

export const CustomDatePicker = () => (
  <Wrapper>
    <DateInput 
      name='date' 
      label='Date' 
      date={new Date().getTime() / 1000} 
      datePickerOptions={{ numberOfMonths: 2 }}
    />
  </Wrapper>
)
