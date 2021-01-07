import React from 'react'
import styled from 'styled-components'

import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import DayPicker, { Day } from 'react-modern-calendar-datepicker'

import caretLeft from '../../atoms/Icon/assets/caretLeft'

// I N T E R F A C E S
export type DatePickerProps = {
  className?: string
  date: Day
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
}) => {
  const defaultValue = {
    year: 2019,
    month: 10,
    day: 5,
  }

  const [selectedDay, setSelectedDay] = React.useState(defaultValue)

  const renderCustomInput = ({ ref }) => (
    <input />
  )

  return (
    <StyledDatePicker
      className={`date-picker ${className}`}
      arrow={caretLeft}
    >
      <DayPicker
        value={selectedDay}
        onChange={(date: Day) => setSelectedDay(date)}
        // renderInput={renderCustomInput}
        shouldHighlightWeekends
      />
    </StyledDatePicker>
  )
}

// S T Y L E S
const StyledDatePicker = styled.div`
  .Calendar {
    color: var(--color-white);
    background-color: var(--color-dark);
    border-radius:  var(--radius);

    // General Color
    &__day,
    &__monthText,
    &__monthSelectorItemText,
    &__yearText,
    &__yearSelectorText {
      color: var(--color-white) !important;
      
      &:hover{
        background-color: var(--color-light-20) !important;
        color: var(--color-black);
      }
    }

    // Header Arrows
    &__monthArrow {
      background-image: url(${(props): string => { return props.arrow }});
    }

    // Week Days
    &__weekDay{
      color: var(--color-white-50) !important;
    }

    // Day Selector
    &__day {
      &.-selected {
        background: var(--color-primary);
      }

      &.-weekend {
        color: var(--color-primary-light) !important;

        &.-selected {
          color: var(--color-white) !important;
        }
      }
    }

    // Month Selector
    &__monthSelector {
      background-color: var(--color-dark);
    }

    &__monthSelectorItem {
      &.-active {
        .Calendar__monthSelectorItemText{
          background-color: var(--color-primary);
        }
      }
    }

    // Year Selector
    &__yearSelector {
      background-color: var(--color-dark);
    }

    &__yearSelectorWrapper {
      &:after{
        background-image: linear-gradient(var(--color-dark) ,var(--color-dark) 20%,rgba(245,245,245,0));
      }

      &:before{
        background-image: linear-gradient(to top,var(--color-dark) ,var(--color-dark) 20%,rgba(245,245,245,0));
      }
    }

    &__yearSelectorItem {
      &.-active {
        .Calendar__yearSelectorText {
          background-color: var(--color-primary);
        }
      }
    }
  }

  .DatePicker__calendarArrow{
    border-color: transparent transparent var(--color-dark);
    color: var(--color-dark);
  }
`
