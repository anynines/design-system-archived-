import React from 'react'

import { DateInput, DateInputProps } from '../DateInput'

export default {
  title: 'Molecules/Inputs/DateInput',
  component: DateInput
}

export const Basic = (args: DateInputProps) => (
  <DateInput name='date' label='Date' {...args} />
)


export const CustomDatePicker = (args: DateInputProps) => (
  <DateInput name='date' label='Date' date={new Date().getTime() / 1000} datePickerOptions={{ numberOfMonths: 2 }} {...args} />
)
