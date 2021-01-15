import React from 'react'

import Wrapper from '../../../_helpers/Wrapper'
import { DatePicker, DatePickerProps } from '../DatePicker'
import { Day, utils } from 'react-modern-calendar-datepicker'


export default {
  title: '🌱 Molecules/DatePicker',
  component: DatePicker,
  argTypes: {
  },
}

export const Basic = (args: DatePickerProps) => {
  const defaultDayValue = utils('en').getToday()
  const [selectedDay, setSelectedDay] = React.useState(defaultDayValue)

  return (
    <Wrapper>
      <DatePicker
        {...args}
        selectedDay={selectedDay}
        setSelectedDay={(date: Day) => setSelectedDay && setSelectedDay(date)}
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

  const [selectedDay, setSelectedDay] = React.useState(defaultValue)
  return (
    <Wrapper>
      <DatePicker
        selectedDay={selectedDay}
        setSelectedDay={(date: Day) => setSelectedDay && setSelectedDay(date)}
      />
    </Wrapper>
  )
}
