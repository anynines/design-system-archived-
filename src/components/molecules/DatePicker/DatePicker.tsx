import React from 'react'
import styled from 'styled-components'

import moment, { Moment } from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DayPickerSingleDateController, DayPickerSingleDateControllerShape } from 'react-dates'

// I N T E R F A C E S
export type DatePickerProps = Omit<DayPickerSingleDateControllerShape, 'onDateChange' | 'renderMonthText' | 'date'> & {
  onDateChange: (dateAsTimestamp: number) => void
  date?: number
  className?: string
}

export const DatePicker: React.FC<DatePickerProps> = ({
  onDateChange: onDateChangeProps,
  date,
  numberOfMonths = 1,
  className = '',
  focused = true,
  ...rest
}) => {
  const onDateChange = (updatedDate: Moment | null): void => {
    if (updatedDate !== null) {
      onDateChangeProps(updatedDate.unix())
    }
  }

  const getDate = (): Moment | null => {
    if (date) {
      return moment.unix(date)
    }

    return null
  }

  return (
    <StyledDatePicker
      className={`DatePicker ${className}`}
    >

      <DayPickerSingleDateController
        {...rest}
        focused={focused}
        numberOfMonths={numberOfMonths}
        onDateChange={onDateChange}
        date={getDate()}
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

  .CalendarDay__default {
    border: 1px solid var(--color-dark-50);

    &:hover {
      background: var(--color-darker-50);
      border: 1px double var(--color-darker);
    }
  }

  .CalendarDay__selected, 
  .CalendarDay__selected:active, 
  .CalendarDay__selected:hover {
    background: var(--color-primary);
    border: 1px double var(--color-primary);
    color: var(--color-white);
  }

  .DayPickerKeyboardShortcuts_show {
    display: none!important;
  }
`
