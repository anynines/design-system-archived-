export const MIN_IN_MS = 1000 * 60
export const HOUR_IN_MS = MIN_IN_MS * 60
export const DAY_IN_MS = HOUR_IN_MS * 24

export const timestamp = (): number => {
  return Date.now()
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
