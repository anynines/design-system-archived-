import React from 'react'
import { action } from "@storybook/addon-actions"

import { DatePicker, DatePickerProps } from '../DatePicker'


export default {
  title: 'Molecules/DatePicker',
  component: DatePicker,
  argTypes: {
    register: {
      control: { type: 'disabled' }
    },
  },
}

export const Basic = (args: DatePickerProps) => (
  <DatePicker  {...args} onDateChange={(timestamp) => { console.log(timestamp) }} />
)
