import React from 'react'
import styled from 'styled-components'

import { Moment } from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DayPickerSingleDateController, DayPickerSingleDateControllerShape } from 'react-dates'

// I N T E R F A C E S
export type DatePickerProps = Omit<DayPickerSingleDateControllerShape, 'onDateChange' | 'renderMonthText'> & {
  onDateChange: (dateAsTimestamp: number) => void
  className?: string
}

export const DatePicker: React.FC<DatePickerProps> = ({
  onDateChange: onDateChangeProps,
  numberOfMonths = 1,
  className = '',
  ...rest
}) => {
  const onDateChange = (date: Moment | null): void => {
    if (date !== null) {
      onDateChangeProps(date.unix())
    }
  }

  return (
    <StyledDatePicker
      className={`DatePicker ${className}`}
    >

      <DayPickerSingleDateController
        {...rest}
        numberOfMonths={numberOfMonths}
        onDateChange={onDateChange}
      />
    </StyledDatePicker>
  )
}

// S T Y L E S
const StyledDatePicker = styled.div`
  .DayPicker, 
  .DayPicker_transitionContainer, 
  .DayPickerNavigation_button {
    border-radius: var(--radius);
  }

  .DayPickerKeyboardShortcuts_show {
    display: none!important;
  }
`
