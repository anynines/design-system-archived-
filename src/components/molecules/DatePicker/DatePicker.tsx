import React from 'react'
import styled from 'styled-components'

import moment, { Moment } from 'moment'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme'

import { DayPickerSingleDateController, DayPickerSingleDateControllerShape } from 'react-dates'

// I N T E R F A C E S
export type DatePickerProps = Omit<DayPickerSingleDateControllerShape, 'onDateChange' | 'renderMonthText' | 'date'> & {
  className?: string
  date?: number
  onDateChange: (dateAsTimestamp: number) => void
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  date,
  focused = true,
  numberOfMonths = 1,
  onDateChange: onDateChangeProps,
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

  ThemedStyleSheet.registerTheme({
    reactDates: {
      ...DefaultTheme.reactDates,
      color: {
        ...DefaultTheme.reactDates.color,
        background: '#000',
      },
    },
  })

  return (
    <StyledDatePicker
      className={`date-picker ${className}`}
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
      border: 1px double var(--color-black);
      background: var(--color-dark-50);
    }
  }

  .CalendarDay__selected, 
  .CalendarDay__selected:active, 
  .CalendarDay__selected:hover {
    border: 1px double var(--color-primary);
    background: var(--color-primary);
    color: var(--color-white);
  }

  .DayPickerKeyboardShortcuts_show {
    display: none!important;
  }
`
