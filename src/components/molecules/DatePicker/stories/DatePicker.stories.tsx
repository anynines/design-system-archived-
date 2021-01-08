import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { DatePicker, DatePickerProps } from '../DatePicker'


export default {
  title: '🌱 Molecules/DatePicker',
  component: DatePicker,
  argTypes: {
  },
}

export const Basic = (args: DatePickerProps) => {
  return (
    <Wrapper>
      <DatePicker
        {...args}
      />
    </Wrapper>
  )
}

export const WithDefaultDayValue = () => {
  const defaultValue = {
    year: 2015,
    month: 10,
    day: 21,
  }
  return (
    <Wrapper>
      <DatePicker
        defaultDayValue={defaultValue}
      />
    </Wrapper>
  )
}
