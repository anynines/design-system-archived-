import React from 'react'
import styled from 'styled-components'

// C O M P O N E N T S
import { TextInput, TextInputProps } from '../Text/TextInput'
import { DatePicker, DatePickerProps } from '../../DatePicker/DatePicker'
import { Icon } from '../../../atoms/Icon/Icon'
import { onClickOutsideHook } from '../../../../helpers/react'

// I N T E R F A C E S
export interface DateInputProps extends Omit<TextInputProps, 'value' | 'pattern'> {
  date?: number
  pattern?: RegExp
  onDateChange?: (date: number) => void
  datePickerOptions?: Omit<DatePickerProps, 'date' | 'onDateChange' | 'focused' | 'onFocusChange' | 'initialVisibleMonth'> & {
    focused?: boolean
    onFocusChange?: (arg: { focused: boolean }) => void
    initialVisibleMonth?: (() => moment.Moment) | null
  }
}

// match dd/mm/yyyy format
const DATE_REGEX = /^(?:(?:(?:(?:0[1-9]|1[0-9]|2[0-8])[/](?:0[1-9]|1[012]))|(?:(?:29|30|31)[/](?:0[13578]|1[02]))|(?:(?:29|30)[/](?:0[4,6,9]|11)))[/](?:19|[2-9][0-9])\d\d)|(?:29[/]02[/](?:19|[2-9][0-9])(?:00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96))$/

// C O M P O N E N T
export const DateInput: React.FC<DateInputProps> = (props) => {
  const {
    date,
    pattern = DATE_REGEX,
    onDateChange,
    className = '',
    datePickerOptions,
    children
  } = props

  const timestampToDDMMYYY = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleString().split(',')[0]
  }

  const [inputValue, setInputValue] = React.useState(date ? timestampToDDMMYYY(date) : '')
  const [selectedDate, setSelectedDate] = React.useState(date)
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false)
  const dateInputRef = React.useRef<HTMLDivElement | null>(null)

  const DDMMYYYToTimestamp = (ddmmyyyyDate: string): number => {
    const dateParts = ddmmyyyyDate.split('/')

    // month is 0-based, that's why we need dataParts[1] - 1
    return new Date(+dateParts[2], Number(dateParts[1]) - 1, +dateParts[0]).getTime() / 1000
  }

  const renderDatePicker = (): JSX.Element => {
    if (isDatePickerOpen) {
      return (
        <StyledDatePicker
          {...datePickerOptions}
          date={selectedDate}
          onDateChange={(updatedDate): void => {
            setSelectedDate(updatedDate)
            setInputValue(timestampToDDMMYYY(updatedDate))
          }}
        />
      )
    }

    return <></>
  }

  React.useEffect(() => {
    const inputValueIsDate = DATE_REGEX.exec(inputValue) !== null

    if (inputValueIsDate) {
      setSelectedDate(DDMMYYYToTimestamp(inputValue))
    }
  }, [inputValue])

  React.useEffect(() => {
    if (onDateChange !== undefined) {
      if (selectedDate) {
        onDateChange(selectedDate)
      }
    }
  }, [onDateChange, selectedDate])
  React.useEffect(() => {
    const cleanOnClickOutsideHook = onClickOutsideHook(dateInputRef, () => { setIsDatePickerOpen(false) })

    return ((): void => {
      cleanOnClickOutsideHook()
    })
  }, [])
  return (
    <StyledDateInput className={`DateInput ${className}`} ref={dateInputRef}>
      <TextInput
        {...props}
        errorMessage='Please provide a date following the DD/MM/YYYY format'
        pattern={pattern}
        value={inputValue}
        onChange={setInputValue}
        autoComplete='off'
      >
        <TextInput.Prepend
          onClick={(): void => { setIsDatePickerOpen(!isDatePickerOpen) }}
          clickable
        >
          <Icon icon='calendar' />
        </TextInput.Prepend>
        {renderDatePicker()}
        {children}
      </TextInput>
    </StyledDateInput>
  )
}

// S T Y L E S
const StyledDateInput = styled.div`
  display: flex;
  background: none;
  width: 100%;

  & > div {
    width: 100%;
  }
`
const StyledDatePicker = styled(DatePicker)`
  position: absolute;
  top: 100%;
  z-index: 2;
`
