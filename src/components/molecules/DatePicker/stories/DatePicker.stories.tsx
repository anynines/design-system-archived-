import React from 'react'
import { action } from '@storybook/addon-actions'

import Wrapper from '../../../_helpers/Wrapper'
import { DatePicker, DatePickerProps } from '../DatePicker'


export default {
  title: '🌱 Molecules/DatePicker',
  component: DatePicker,
  argTypes: {
    register: {
      control: { type: 'disabled' }
    },
  },
}

export const Basic = (args: DatePickerProps) => (
  <Wrapper>
    <DatePicker  {...args} onDateChange={action('Selected date as timestamp:')} />
  </Wrapper>
)

export const GivenTimestampDate = (args: DatePickerProps) => (
  <Wrapper>
    <DatePicker  {...args} date={new Date().getTime() / 1000} onDateChange={action('Selected date as timestamp:')} />
  </Wrapper>
)

export const CustomMonthAmount = (args: DatePickerProps) => (
  <Wrapper>
    <DatePicker  {...args} date={new Date().getTime() / 1000} numberOfMonths={3} onDateChange={action('Selected date as timestamp:')} />
  </Wrapper>
)