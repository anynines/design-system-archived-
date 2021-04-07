import React from 'react'
import styled from 'styled-components'

// C O M P O N E N T S
import { TextInput, TextInputProps } from './TextInput'
import { DatePicker } from '../../../molecules/DatePicker/DatePicker'
import { Day, RenderInputProps } from 'react-modern-calendar-datepicker'
import { Icon } from '../../Icon/Icon'

// I N T E R F A C E S
export interface DateInputProps extends Omit<TextInputProps, 'value' | 'pattern'> {
  className?: string
  date?: Day
  pattern?: RegExp
  renderInput?: React.FC<RenderInputProps>
  onDateChange?: (date: Day) => Day
}

// match dd/mm/yyyy format
const DATE_REGEX = /^(?:(?:(?:(?:0[1-9]|1[0-9]|2[0-8])[/](?:0[1-9]|1[012]))|(?:(?:29|30|31)[/](?:0[13578]|1[02]))|(?:(?:29|30)[/](?:0[4,6,9]|11)))[/](?:19|[2-9][0-9])\d\d)|(?:29[/]02[/](?:19|[2-9][0-9])(?:00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96))$/

// C O M P O N E N T
export const DateInput: React.FC<DateInputProps> = (props) => {
  const {
    children,
    className,
    date,
    getValues,
    name,
    onDateChange,
    pattern = DATE_REGEX,
    register
  } = props
  // const [inputValue, setInputValue] = React.useState(date ? date : '')
  // const formInputValue = register ? getValues()[name] : ''
  const dateInputRef = React.useRef<HTMLDivElement | null>(null)
  // console.log(register)


  const [selectedDate, setSelectedDate] = React.useState(date)

  React.useEffect(() => {
    if (onDateChange !== undefined) {
      onDateChange(selectedDate as Day)
    }
  }, [onDateChange, selectedDate])


  // const getDateValue = (): Day | undefined => {
  //   if (register) {
  //     return formInputValue
  //   }
  //   return selectedDate
  // }

  const renderInputField = () => (
    <TextInput
      {...props}
      register={register}
      errorMessage='Please provide a date following the DD/MM/YYYY format'
      pattern={pattern}
      // value={selectedDate}
      // onChange={(newDate: Day): void => { setSelectedDate(newDate) }}
      autoComplete='off'
    >
      <TextInput.Prepend>
        <Icon icon='calendar' />
      </TextInput.Prepend>
    </TextInput>
  )

  return (
    <StyledDateInput className={`date-input ${className}`} ref={dateInputRef}>
      <DatePicker
        selectedDay={selectedDate as Day}
        setSelectedDay={(updatedDate: Day): void => {
          setSelectedDate(updatedDate)
        }}
      // renderInput={renderInputField}
      />
      {children}
    </StyledDateInput>
  )
}

// S T Y L E S
const StyledDateInput = styled.div`
`
