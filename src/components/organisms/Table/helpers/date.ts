export type Month = 'january'
| 'february'
| 'march'
| 'april'
| 'may'
| 'june'
| 'july'
| 'august'
| 'september'
| 'october'
| 'november'
| 'december'

export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4'

export const MIN_IN_MS = 1000 * 60
export const HOUR_IN_MS = MIN_IN_MS * 60
export const DAY_IN_MS = HOUR_IN_MS * 24
export const MONTHS: Month[] = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
export const QUARTERS: Quarter[] = ['Q1', 'Q2', 'Q3', 'Q4']
export const MONTHS_IN_QUARTERS: { [key in Quarter]: Month[] } = {
  Q1: ['january', 'february', 'march'],
  Q2: ['april', 'may', 'june'],
  Q3: ['july', 'august', 'september'],
  Q4: ['october', 'november', 'december']
}

export const timestamp = (): number => {
  return Date.now()
}

export const getDateFromTimestamp = (
  timestampValue: number,
  dateOptions?: Intl.DateTimeFormatOptions
): string => {
  const date = new Date(timestampValue)

  return new Intl.DateTimeFormat(undefined, dateOptions).format(date).toString()
}

export const daysBetweenTimestamps = (dayOneTimestamp: number, dayTwoTimestamp: number): number => {
  return Math.round(Math.abs((dayOneTimestamp - dayTwoTimestamp) / DAY_IN_MS))
}

export const getDaysInTimestamp = (timestampValue: number): number => {
  return Math.round(timestampValue / DAY_IN_MS)
}

export const getHoursInTimestamp = (timestampValue: number): number => {
  return Math.round((timestampValue / HOUR_IN_MS))
}

export const getMinsInTimestamp = (timestampValue: number): number => {
  return Math.round((timestampValue / MIN_IN_MS))
}

export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}

export const getMonthsQuarter = (month: Month): Quarter => {
  let matchingQuarter: Quarter = 'Q1'

  Object.keys(MONTHS_IN_QUARTERS).forEach((quarter) => {
    const months = MONTHS_IN_QUARTERS[quarter as Quarter]

    if (months.includes(month)) {
      matchingQuarter = quarter as Quarter
    }
  })

  return matchingQuarter
}

export const getMonthId = (month: Month): number => {
  return MONTHS.indexOf(month)
}

export const getShortenedMonth = (month: Month): string => {
  return month.substring(0, 3)
}
